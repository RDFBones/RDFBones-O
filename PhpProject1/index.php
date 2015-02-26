<?php

require "testSesame.php";


if($_GET['param'] == 'y')
{
    $param['file']=$_POST['page'];
    initialize($param);
    
} else {
    init_base();
}
