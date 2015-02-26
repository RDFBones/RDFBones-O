<?php


class Cookie{
    
    public static function get($name){
        return $_COOKIE[$name];
    }
    
    public static function set($name, $data, $expiryDate=null){
    
        if($expiryDate) setcookie ($name, $data, $expiryDate);
        else setcookie ($name, $data);
    }
    
    public static function del($name){
        setcookie($name, '', -3600, '/');
    }
}

