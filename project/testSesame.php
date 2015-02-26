<?php

header("Content-Type: text/html; charset=UTF-8");
//error_reporting(0);
//ini_set('display_errors','on');
//error_reporting(E_ALL);

//echo 'Current PHP version: ' . phpversion();

function initialize($default_data)
{
  
    $template_data=load_templates($default_data['file']);
       
    $full_output="  <style>
                        $template_data[css]
                    </style>
                    <script type='text/javascript' src='/phpSesame/ajax.js'></script>
                    <script>
                       $template_data[beforescript]
                    </script>
                    
                        $template_data[html]";
                 
    echo $full_output;
}
     

function init_base()
{
    $template_data = load_base_template();
   
    $logged_in='true';
    $code="\$template_data['base_html']=\"$template_data[base_html]\";"; 
    eval($code);
  
    $full_output="<html>
                    <head> 
                       
                    </head> 
                    <style>
                        $template_data[base_css]
                    </style>
                    <script type='text/javascript' src='/phpSesame/ajax.js'></script>
                    <script type='text/javascript' src='/phpSesame/page1/beforescript.js'></script>
                    <script type='text/javascript' src='/phpSesame/page2/beforescript.js'></script>
                    <script type='text/javascript' src='/phpSesame/page3/beforescript.js'></script>
                    <script>
                       $template_data[base_beforescript]
                    </script>
                    <body>
                        $template_data[base_html]
                    </body>
                  </html>";
  
    echo $full_output;
}

//       <script type='text/javascript' src='/phpSesame/page1/beforescript.js'></script>
//       <script type='text/javascript' src='/phpSesame/page2/beforescript.js'></script>
    

function load_base_template(){
    
    $html = 'structure.html';
    $css = 'style.css';
    $beforeScript = 'beforescript.js';
    
    //Base Template Element
    $file='/var/www/phpSesame/baseTemplate/'.$html;
    $handle=fopen($file, 'r');
    $data['base_html']= fread($handle, filesize($file));
    fclose($handle);
    
    $file='/var/www/phpSesame/baseTemplate/'.$beforeScript;
    $handle=fopen($file, 'r');
    $data['base_beforescript']= fread($handle, filesize($file));
    fclose($handle);
    
    $file='/var/www/phpSesame/baseTemplate/'.$css;
    $handle=fopen($file, 'r');
    $data['base_css']= fread($handle, filesize($file));
    fclose($handle);
    
    return $data;
}

function load_templates($page)
{
    //$html_file = '/var/www/phpSesame/page1/structure.html';
    $html = 'structure.html';
    $css = 'style.css';
    $beforeScript = 'beforescript.js';
    //$afterScript_file = 'after_script.js';
    
    //Page Specific Elements
    $file='/var/www/phpSesame/page'.$page.'/'.$html;
    $handle=fopen($file, 'r');
    $data['html']= fread($handle, filesize($file));
    fclose($handle);
    
    $file='/var/www/phpSesame/page'.$page.'/'.$beforeScript;
    $handle=fopen($file, 'r');
    $data['beforescript']= fread($handle, filesize($file));
    fclose($handle);
    
    $file='/var/www/phpSesame/page'.$page.'/'.$css;
    $handle=fopen($file, 'r');
    $data['css']= fread($handle, filesize($file));
    fclose($handle);
    
    return $data;
}
 
 
 