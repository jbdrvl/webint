<?php
session_start();
include "../functions.php";
include "databaseFunctions.php";

$message = "";
//var_dump($_POST);
$qSheetName = addslashes($_POST['qSheet_title']);
$themeID = $_POST['theme'];
if(isset($_GET['qSheet']))
{
    $qSheetID = intval($_GET['qSheet']);
    $modifying = true;
}
$class = $_SESSION['class'];
$db = openCon($class);
//var_dump($themeID);
if (!$db->set_charset("utf8")) {
    printf("Erreur lors du chargement du jeu de caractères utf8 : %s\n", $db->error);
    exit();
}
if($themeID == "newTheme")
{
    $themeName = addslashes($_POST['newThemeTitle']);
    $newThemeQuery = "INSERT INTO themes (ID, themeName) VALUES (NULL, '$themeName')";
    $result = $db->query($newThemeQuery);
    $themeIDQuery = "SELECT COUNT(*) FROM themes";
    $result = $db->query($themeIDQuery);
    $themeID = intval(mysqli_fetch_row($result)[0])+1;
    $result->close();
}


if(!$modifying)
{
    $qSheetIDQuery = "SELECT COUNT(*) FROM qsheets";
    $qSheetID = intval(mysqli_fetch_row($db->query($qSheetIDQuery))[0])+1;
}
$qSheetRef = "theme$themeID"."qSheet$qSheetID";
    $query = "CREATE TABLE $qSheetRef ( ID INT UNSIGNED NOT NULL , ".
                                        "txt TEXT CHARACTER SET utf8  NOT NULL , ".
                                        "img TEXT CHARACTER SET utf8  NOT NULL , ".
                                        "just BOOLEAN NOT NULL , ".
                                        "PRIMARY KEY (ID)) ".
                                        "ENGINE = InnoDB; ";



$queryInsert = "INSERT INTO $qSheetRef (ID, txt, img, just) ".
                "VALUES ('0','$qSheetName','','0')";
//var_dump($queryInsert);
$queryQSheetsEntry = "INSERT INTO qsheets (ID,themeID,qSheetName) ".
                "VALUES ('$qSheetID','$themeID','$qSheetName')";

$result = $db->query($query);
//var_dump($qSheetRef);
$modifying = false;
if(!$result)
{
    $modifying = true;
    $eraseQuery = "TRUNCATE $qSheetRef";
    $db->query($eraseQuery);
}
//$result->close();
$result = $db->query($queryInsert);
if(!$result)
    die("failed to register the name of the questionsheet");
//$result->close();
if(!$modifying) {
    $result = $db->query($queryQSheetsEntry);
    if(!$result)
        die("failed to register the questionsheet into the questionsheet registry.");
}



$query = "INSERT INTO $qSheetRef (ID, txt, img, just) VALUES ";
for($i=1; isset($_POST["enonce$i"]); $i++){
    if($i>1)
        $query .= ',';
    $questionID = $i*10;
    $enonce = addslashes($_POST["enonce$i"]);
    $imgPath = '';
    $query .= "('$questionID', '$enonce', '$imgPath', '0')"; // TODO add images
    for($j=1; isset($_POST["answer$j"."question$i"]) && $j<10; $j++)
    {
        $query .= ',';
        $answerID = $i*10+$j;
        $answer = addslashes($_POST["answer$j"."question$i"]);
        $just = 0;
        if(isset($_POST["answer$j"."question$i"."box"])
           && $_POST["answer$j"."question$i"."box"] == 'on')
            $just =1;
        $query .= "('$answerID', '$answer', '', '$just')";
    }
}
$result = $db->query($query);
if(!$result)
{
    var_dump($query);
    echo("<p> query : $query </p>");
    die("failed to register the questions and answers.");
}

//$result->close();

$db->close();
header("Location: /?options=addQSheet&added=$qSheetName"); //TODO add confirmation message
?>
