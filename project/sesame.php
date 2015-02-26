<?php

require_once "phpSesame.php";
error_reporting(E_ALL);

    function update($file){
        
        $sesame = array('url' => 'http://localhost:8080/openrdf-sesame', 'repository' => '1');
        $store = new phpSesame($sesame['url'], $sesame['repository']);   
        $inputFormat = phpSesame::TURTLE;     
        $store->overwrite($file, 'null', $inputFormat);
    }
    
    function upload($append)
    {
       
        $sesame = array('url' => 'http://localhost:8080/openrdf-sesame', 'repository' => '1');
        $store = new phpSesame($sesame['url'], $sesame['repository']);   
        //$rep = $sesame['repository'];

        //$resultFormat = phpSesame::SPARQL_XML; // The expected return type, will return a phpSesame_SparqlResobject (Optional)
        //$lang = "sparql"; // Can also choose SeRQL (Optional)
        //$infer = true; // Can also choose to explicitly disallow inference. (Optional)
    
        $context = "http://www.cambridgesemantics.com/poirot"; // Optional - defaults to entire repository though.
        $inputFormat = phpSesame::TURTLE; // Optional - defaults to RDFXML

        $store->append($append, $context, $inputFormat);
    }
    
/*
if($result->hasRows()) {
        foreach($result->getRows() as $row) {
            
            
            if(strpos($row['o'],'http://www.cambridgesemantics.com/')!==FALSE)	
            {
                echo str_ireplace('http://www.cambridgesemantics.com/','',$row['o']);
            } else  {

                echo str_ireplace('file://export(2).ttl/www.test.org/classes/','',$row['o']);
            }
            
            echo '?';
            
            /*s
            if(strpos($row['i'],'http://www.cambridgesemantics.com/')!==FALSE)	
            {
            echo str_ireplace('http://www.cambridgesemantics.com/','',$row['i']);
            } else  {

                echo str_ireplace('file://export(2).ttl/www.test.org/classes/','',$row['i']);
            }*/
          //  echo $row['i'];
         //   echo '!';
            
      // }
//} 
       /*echo "<ul class='left'>
               <li><input type='checkbox' name='vehicle' value='Bike'>I have a bike</li>
               <li><input type='checkbox' name='vehicle' value='Bike'>I have a bike</li>
               <li><input type='checkbox' name='vehicle' value='Bike'>I have a bike</li>
          </ul>";
       */
    
//} 





//echo "End<br>";*/

