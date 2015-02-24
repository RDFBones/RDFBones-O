<?php
    
    ini_set('display_errors','on');
    error_reporting(E_ALL);
    
    //phpinfo();
    $user = 'root';
    $server = 'localhost';
    $password = 'EPwfMySQL!';
    $database = 'Collections';
        
    $conn = mysql_connect($server, $user, $password);

     if($conn)
     {
         $dbcon = mysql_select_db($database);
         if($dbcon)
         {
             echo 'Works';    
             mysql_set_charset('utf8');
         } else {
             echo 'Nem tudtam belépni';
             exit;
         }
     } else {
         echo 'Nem tudtam csatlakozni';
         exit;
     }
     
     /*
     $sql='select * from test';
     $result=mysql_query($sql);
     $row = mysql_fetch_row($result);
     echo $row[1];
     
     
     
     $cmd = $_POST['command'];
     $topicID = $_POST['topicID'];
     $type = $_POST['type'];
     $text = $_POST['topicID'];

      */
     
    $cmd = $_POST['cmd'];
    $topicID = $_POST['topicID'];
     
    $cmd = 'getRecords';
    $topicID = 1;
     
    switch($cmd){
         
        case 'newRecord' : 
            $SQL = "INSER INTO records(topicID,text, type)
                    VALUES (".$topicID.",'".$text."',".$type.");";

            mysql_query($SQL);
            break;
     
        case 'getRecords' : 
             
            $SQL = "select recordID,text, type
                    from records 
                    where topicID = ".$topicID."
                    order by recordID ASC";

            $result = mysql_query($SQL);

            sendbackEntries($result);
            break;
        
        case 'saveMode': 
            $recordID = $_POST['recordID'];
            $text = $_POST['text'];
            $SQL = "UPDATE records SET text=".$text." 
                    WHERE topicID=".$topicID." and recordID=".$recordID;
        
            mysql_query($SQL);
            break;
        
        default: break;
    }
     
    function sendbackEntries($data){
       
        while($row = mysql_fetch_array($data, MYSQLI_ASSOC)){

            if($row["type"] == 1){
                echo "**[TEXT]**";
            } else {
               echo "**[SVG]**";
            }
            echo $row['text'];
            echo "::[END]::";
        }         
    }
     
     
     
     
    
    
     
     
     