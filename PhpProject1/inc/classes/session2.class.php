<?php


class session2{
	
    public $SID;
    public $logged_in;
    
    function __construct() {
        $SID=Cookie::get('SID');
        if($SID==null){
            $SID=rand(1000000,9999999);
            Cookie::set('SID', $SID);
        }
        $this->SID=$SID;
    }    	
    
    public function create()
    {
        $time=time();
        $SID=$this->SID;
        
        $SQL="
        INSERT INTO session(id, userid, not_logged_in_last_refresh, created, is_logged_in, logged_in_last_refresh)
            VALUES('$SID', '0','$time','$time', '0', '0')	
        ";
        mysql_query($SQL);
    }
    
    public function update()
    {
        $time=time();
        $SID=$this->SID;
        
        $SQL="UPDATE session SET not_logged_in_last_refresh='$time' WHERE id='$SID'";
        mysql_query($SQL);
    }
    
    public function delete()
    {
        $SID=$this->SID;
        
        $SQL="
            DELETE FROM session 
            WHERE id='$SID'
        ";
        mysql_query($SQL);
    }

    public function check(){
        
        $time=time();
        $SID=$this->SID;
        
        $SQL="
        SELECT * 
        FROM session
        WHERE id='$SID';        
        ";    
        
        $result=mysql_query($SQL);
        $data=  mysql_fetch_row($result);
        
        if($data){
            $session_data['is_loggedin'] = $data[4] == 1 ? true : false;
            //Még nem telt e le az időkorlát
            if($session_data['is_loggedin'])$session_data['loggedIn_is_inTime'] = $data[5] + 600 > $time ? true : false;
            $session_data['is_inTime'] = $data[2] + 2592000 > $time ? true : false;
            $session_data['userID']=$data[1];
        }
        return $session_data;
    }
    
  
    public function logIn($user){
        
        $time=time();
        $SID=$this->SID;
        
        $SQL="
        UPDATE session
        SET is_logged_in='1', logged_in_last_refresh='$time', userid='$user'
        WHERE id='$SID'
         ";
        
        mysql_query($SQL); 
        $this->logged_in=true;
    }
    
    
    public function loggedInUpdate(){
        
        $time=time();
        $SID=$this->SID;
        
        $SQL="
        UPDATE session
        SET logged_in_last_refresh='$time'
        WHERE id='$SID'
         ";
        
        mysql_query($SQL); 
        
        $this->update();
    }
    
    public function logOut(){
        
        $time=time();
        $SID=$this->SID;
        
        $SQL="
        UPDATE session
        SET is_logged_in='0', logged_in_last_refresh='$time'
        WHERE id='$SID'
         ";
        
        mysql_query($SQL);
        $this->logged_in=false; 
    }
}
 
?>