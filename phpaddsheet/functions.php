<?php

function validate_request($keys,$arr){
    if (count($keys)!=count($arr)){
        return false;
    }
    foreach($keys as $k){
        if (!key_exists($k,$arr)){
            return false;
        }
    }
    return true;
}
function validate_connexion(){
    if (!validate_request(["connexion_token","connexion_token_h"])){
        return false;
    }
    return $_SESSION["connexion_token_h"]==hashAndSalt($_SESSION["connexion_token"]);
}

function json_open($path){
    return json_decode(file_get_contents($path));
}
function json_save($obj,$path){
    $f=fopen($path,"w");
    fwrite($f,json_encode($obj,JSON_PRETTY_PRINT));
    fclose($f);
}
function json_add($obj,$path){
    $oo=json_open($path);
    $oo[]=$obj;
    json_save($oo,$path);
}
function json_format($path){
    json_save(json_open($path),$path);
}

function postResponse($url,$post){
    $c=curl_init();
    curl_setopt_array($c,[
        CURLOPT_RETURNTRANSFER => true,
        CURLOPT_URL => $url,
        CURLOPT_POST => true,
        CURLOPT_POSTFIELDS => $post,
        CURLOPT_SSL_VERIFYPEER => false
    ]);
    $res=curl_exec($c);
    curl_close($c);
    return $res;
}
function getResponse($url,$get){
    $i=0;
    foreach ($get as $key=>$val){
        if ($i==0){$url.="?";} else {$url.="&";} $i++;
        $url.=rawurlencode($key)."=".rawurlencode($val);
    }
    $c=curl_init();
    curl_setopt_array($c,[
        CURLOPT_RETURNTRANSFER => true,
        CURLOPT_URL => $url
    ]);
    $res=curl_exec($c);
    curl_close($c);
    return $res;
}

function hashAndSalt($string) {
    return hash("sha512","telerompakitech".$string);
}

function rand_string($len){
    $chars="azertyuiopqsdfghjklmwxcvbnAZERTYUIOPQSDFGHJKLMWXCVBN0123456789";
    $res="";
    for ($i=0; $i<$len; $i++){
        $res.=$chars[rand(0,61)];
    }
    return $res;
}

function getClassName($classID){
    $aa=(array)json_open("../backend/classeIDs.json");
    foreach($aa as $value)
    {
        if($value->ID == $classID)
            return $value->classe;
    }
    die("unknown classID, check on classIDs.json");
}
function getClassID($className){
    $aa=(array)json_open("backend/classeIDs.json");
    foreach($aa as $value)
    {
        if($value->classe == $className)
            return $value->ID;
    }
    var_dump($aa); //debug
    die("unknown className, check on classIDs.json");
}

function getDBInfo($dbName){
    $aa=(array)json_open("http://www.leqcmieux.fr/backend/classeIDs.json");
    foreach($aa as $value)
    {
        if($value->name == $dbName)
        {
            $hostname = $value->hostname;
            $username = $value->username;
            $password = $value->password;
            $port     = $value->port;
            $db       = $value->db;
            return [$hostname,$username,$password,$port,$db];
        }
    }
    var_dump($dbName); //debug
    echo "<br>";
    var_dump($aa); //debug
    echo "<br>";
    die("<p>getDBInfo : unknown classname, check on classIDs.json</p>");
}
//For the creation of question sheets
function answerSlot($questionNumber,$answerNumber, $content, $checked="", $placeholder="")
{
    $class = "";
    if($checked =="checked")
        $class = "class ='selected'";
    return
        "<label $class>réponse $answerNumber".
            "<input onchange='selectAnswer(this);' type='checkbox' name='answer$answerNumber"."question$questionNumber"."box' $checked/>".
            "<textarea type='text-area' name='answer$answerNumber"."question$questionNumber' placeholder=$placeholder>$content</textarea>".
        "</label>";
}
//Créer un questionnaire : lancer la requete du questionnaire et donner le resultat de la requete à cette fonction.
//Boucle tant que l'id de la ligne n'est pas un multiple de 10 (on retombe sur un énoncé)
function QuestionSlot($questionNumber, $answerAmount, $enonce="", $queryResult=false)
{
    if(!$queryResult) //On veut juste faire un énoncé de question vide
    {
        echo
    "   <div class='question'>".
    "      <div class='enonce'>".
    "        <label>Énoncé</label> ".
    "        <a onclick='addAnswers(this, $questionNumber);' class='btn-small btn-green float-right'>ajouter une réponse</a>".
    "      </div>".
    "      <div><textarea class='enonceField' ".
    "                     type='text-area' ".
    "                     name='enonce$questionNumber'>$enonce</textarea></div>".
    "      <div class='answers'>";
        for($i=1; $i<=$answerAmount; $i++)
        {
            echo answerSlot($questionNumber,$i,"");
        }
        echo
        "</div>".
    "  </div>";
    }
    else
    {
        echo
    "   <div class='question'>".
    "      <div class='enonce'>".
    "        <label>Énoncé</label> ".
    "        <a onclick='addAnswers(this, $questionNumber);' class='btn-small btn-green float-right'>ajouter une réponse</a>".
    "      </div>".
    "      <div><textarea class='enonceField' ".
    "                     type='text-area' ".
    "                     name='enonce$questionNumber'>$enonce</textarea></div>".
    "      <div class='answers'>";
        while($line = mysqli_fetch_row($queryResult))
        {
            //var_dump($line);
            if($line[0]%10 != 0)
            {
                $answerNumber=$line[0]%10;
                $checked = "";
                if($line[3]=="1") $checked = "checked";
                echo answerSlot($questionNumber,$answerNumber,$line[1], $checked);
            }
            else {
              echo
              "</div>".
          "  </div>";
                return $line[1]; //return l'enonce de la question suivante
            }
        }

          echo
          "</div>".
        "  </div>";
        return ""; // Quand il n'y a plus d'énoncés
    }
    return "";
}

?>
