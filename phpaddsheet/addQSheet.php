<?php

$defaultNbQuestions = 3; //Default number of questionfields displayed.
$answerAmount = 4;

$db = openCon($className);
if (!$db->set_charset("utf8")) {
    printf("Erreur lors du chargement du jeu de caractères utf8 : %s\n", $db->error);
    exit();
}
//If you want to modify a previous questionSheet
//check if ou asked for it
$queryResult = false;
$qSheetIDurl = "";
if(isset($_GET['qSheet']) && isset($_GET['theme']))
{
    //var_dump($_GET['qSheet']);
    //var_dump($_GET['theme']);
    $themeID=$_GET['theme'];
    $qSheetID=$_GET['qSheet'];
    $query = "SELECT * FROM theme$themeID"."qSheet$qSheetID";
    $queryResult = $db->query($query);
    if(!$line = mysqli_fetch_row($queryResult))
        die("<p>Failed to load your question sheet</p>");
    $i = $line[0];
    $txt = $line[1];
    $img = $line[2];
    $qSheetName = $txt;
    $qSheetIDurl = "/?qSheet=$qSheetID";
}

if(isset($_GET['added']))
{
    ?>
    <p class="message">Questionnaire <span class="b"></span><?php echo $_GET['added'] ?></span> ajouté. Tu peux en ajouter plus!</p>
    <?php
}
?>
    <form method="POST" action="backend/addQSheet2.php<?php echo $qSheetIDurl; ?>">
        <div>
            <label>Titre du questionnaire
                <input  type="text"
                        name="qSheet_title"
                        placeholder = "coucou"
                        <?php if($queryResult) echo "value='$qSheetName'" ?>
                        required />
            </label>
          <label>Thème </label>
        <select id="themeSelect" name="theme" >
<?php
$themeQuery = "SELECT ID, themeName FROM themes";
if($queryResult) //Only select the right theme if a qSheet is being modified
    $themeQuery .= " WHERE ID='$themeID'";
$result = $db->query($themeQuery);
if(!$result)
    die("failed to connect to the database");
while ($line = mysqli_fetch_row($result))
    echo "<option value='$line[0]'>$line[1]</option>";
$result->close();
if(!$queryResult)
    echo "<option value='newTheme'>Nouveau Theme</option>";
?>
        </select>
    </div>
    <div id='hidden' class="hidden">
      <!--will never display if a question sheet is loaded -->
      <label> Titre du nouveau thème
          <input type="text" name="newThemeTitle" placeholder="tu veux voir ma bite?" />
      </label>
    </div>
    <div>
        <?php
        $questionNumber = 1;
        $enonce = "";
        if($queryResult)
        {
            $line = mysqli_fetch_row($queryResult);
            $enonce = $line[1]; //TODO : add img support
        }
        while($questionNumber<=$defaultNbQuestions || $enonce!="")
        {
            $enonce = QuestionSlot($questionNumber, $answerAmount, $enonce, $queryResult);
            $questionNumber++;
        }

$db->close();
        ?>
    </div>
    <p class="text-center">
      <input type="submit" value="valider" class="btn btn-green"/>
      <a onclick="addQuestion(this, <?php echo $answerAmount;?>)" class="btn btn-green">ajouter une question</a>
    </p>
  </form>
<script src="js/animQSheetOptions.js" type="text/javascript"></script>
