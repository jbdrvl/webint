<?php
function openCon($databaseName) {
    $dbInfo = getDBInfo($databaseName);
    $hostname = $dbInfo[0];
    $username = $dbInfo[1];
    $password = $dbInfo[2];
    $port = $dbInfo[3];
    $db = $dbInfo[4];
    $connect = mysqli_connect($hostname, $username, $password, $db);
    if (mysqli_connect_errno()) {
        die('<p>La connexion au serveur MySQL a échoué: '.mysqli_connect_error().'</p>');
    } /*else {
        echo '<p>Connexion au serveur MySQL établie avec succès.</p >';
    }*/


  // echo "<br>Success: A proper connection to MySQL was made! The my_db database is great." . PHP_EOL;
  // echo "<br>Host information: " . mysqli_get_host_info($link) . PHP_EOL;

  return $connect;
}

//buggy, la flemme de corriger car obsolète/inutilisé
function getClassNameFromUser($username, $db) 
{
    //Be sure to connect to $db before this function is called
    $result = $db->query( 'SELECT classID FROM students WHERE username='.$username );
    if(!$success) { 
            return "unknown username"; // attention c'est une faille exploitable
    }
    $rows = $result->fetchAll(); //though there really only should be one row...
    $classID = null;
    foreach($rows as $row) {
        $classID     = $row['classID'];
    }
    
    $className = getClassName($classID);
    return $className;
}

function addStudent($db, $username, $psw_h, $classID, $email, $isAdmin)
{
    //password comes hashed and salted
    $tableName = "students";
    if($isAdmin)
        $tableName = "admins";
    $success = $db->query( 
        "INSERT INTO $tableName ( username, password, classID, email, token)".
        " VALUES ( '$username', '$psw_h', '$classID', '$email', '' )" ); 
    /*$request->bind_param("ssds", $username, $psw_h, $classID, $email);
    $success = $request->execute();
    $request->close();*/
    if(!$success) { 
            die("failed to register new user");
    }
    return true ;
}

?>
