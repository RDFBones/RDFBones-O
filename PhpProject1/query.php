<?php

require "phpSesame.php";


$prefixes=" prefix rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#> 
            prefix rdfs: <http://www.w3.org/2000/01/rdf-schema#> 
            prefix xsd: <http://www.w3.org/2001/XMLSchema#> 
            prefix owl: <http://www.w3.org/2002/07/owl#> 
            prefix sesame: <http://www.openrdf.org/schema/sesame#> 
            prefix class: <http://www.example.org/class/>
            prefix user: <http://www.example.org/user/>
            prefix bone: <http://www.example.org/bone/>
            prefix collectionliterals: <http://www.example.org/collectionliterals/>
            prefix userliterals: <http://www.example.org/userliterals/>
            prefix collection: <http://www.example.org/collection/>
            prefix predicates: <http://www.example.org/predicates/>";
 
$prefixesApp = "
            @prefix rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#> .
            @prefix rdfs: <http://www.w3.org/2000/01/rdf-schema#> .
            @prefix xsd: <http://www.w3.org/2001/XMLSchema#> .
            @prefix owl: <http://www.w3.org/2002/07/owl#> .
            @prefix sesame: <http://www.openrdf.org/schema/sesame#> .
            @prefix class: <http://www.example.org/class/>.
            @prefix collection: <http://www.example.org/collection/>.
            @prefix bone: <http://www.example.org/bone/>.
            @prefix user: <http://www.example.org/user/>. 
            @prefix predicates: <http://www.example.org/predicates/>.
            @prefix collectionliterals: <http://www.example.org/collectionliterals/>.
            @prefix userliterals: <http://www.example.org/userliterals/>.";




    switch ($_GET['instruction'])
    {
        case 'newCollection': 

            $query = "  select (COUNT(?collection) as ?num)
                         where{
                        ?collection rdf:type class:Collection.
                    }
                    ";

            $collectionName=$_POST['collectionName'];
            $userID=$_POST['userID'];
            $date='20'.date(y).'-'.date(m).'-'.date(d).'T'.date(H).':'.date(m).':'.date(s).'Z';
            
            $next=queryReturn($prefixes.$query);          
            $next=substr($next, 0,1)+1;
            
            $toUpload="collection:".$next." rdf:type class:Collection.
                       collection:".$next." collectionliterals:name '".$collectionName."'.
                       collection:".$next." collectionliterals:upload '".$date."'.
                       collection:".$next." predicates:uploadedBy user:".$userID.".";
             
            upload($prefixesApp.$toUpload);
      
            break; 
        
        case 'newBone':
            
            $query = "  select (COUNT(?bone) as ?num)
                         where{
                        ?bone rdf:type ?bonetype.
                        ?bonetype rdfs:subClassOf+ class:BoneClasses.
                    }";
            $next=queryReturn($prefixes.$query);   
            $next=$next+1;
        
            
            $id=$_POST['coll'];
            $bonetype=$_POST['btype'];
            
            $toUpload="bone:".$next." predicates:belongsToCollection collection:".$id.".
                       bone:".$next." rdf:type class:".$bonetype.".";
            
            //echo $toUpload;
            upload($prefixesApp.$toUpload);
            break;
            
        case 'getBones':
            
            $id=$_POST['id'];
            
            $query="select ?boneType
                    where{
                        ?bone rdf:type ?boneType.
                        ?bone predicates:belongsToCollection collection:".$id.".
                    }";
            //echo $prefixes.$query;
            
            queryCall($prefixes.$query, 'http://www.example.org/class/');
            break;
         
       
        case 'getCollectionName': 
            
            $id=$_POST['id'];
            $query = "  select ?name  
                        where {
                            collection:".$id." collectionliterals:name ?name
                        }";
           
            queryCall($prefixes.$query);
            break;
           
        case 'listCollections': 

            $query = "
                       select ?collection ?name ?upload ?firstname ?lastname
                        where{
                            ?collection rdf:type class:Collection.
                            ?collection collectionliterals:name ?name.
                            ?collection collectionliterals:upload ?upload.
                            ?collection predicates:uploadedBy ?person.
                            ?person userliterals:firstname ?firstname.
                            ?person userliterals:lastname ?lastname.
                        } ORDER BY DESC (?upload)";
       
            queryCall($prefixes.$query, 'http://www.example.org/collection/');    
            break;

        case 'listCollectionsOrder': 

            $query = "
                    select  ?collection ?name ?upload ?lastname 
                        where{{
                            ?collection rdf:type class:Collection.
                        } UNION
                             {
                            ?collection rdf:type class:Collection.
                            ?collection collectionliterals:name ?name.
                        } UNION {
                            ?collection rdf:type class:Collection.
                            ?collection collectionliterals:upload ?upload.
                        } UNION {
                            ?collection predicates:uploadedBy ?person.
                            ?person userliterals:lastname ?lastname.
                        }
                     } ORDER BY ?name DESC(?upload) ?lastname";
           
            queryCall($prefixes.$query, 'http://www.example.org/collection/');    
            break;
        
        case 'getChildren': 

            //$class=$_POST['class'];
            $query = "select  ?subclass
                      where {
                       ?subclass rdf:type rdfs:Class.
                       ?subclass rdfs:subClassOf class:BoneAreas.
                        } ";
            query($prefixes.$query); 

            break;

        case 'checkLogin': 

            $username=$_POST['username'];
            $psw=$_POST['psw'];
            //?user rdf:type class:User.
            $query = "select  ?firstname ?lastname ?user
                      where { 
                       ?user userliterals:username '".$username."'.
                       ?user userliterals:password '".$psw."'.
                       ?user userliterals:firstname ?firstname.
                       ?user userliterals:lastname ?lastname.
                        }";
            
            queryCall($prefixes.$query);
            break;

        case 'orderCollection':
           
            $base=$_POST['base'];
            
            switch($base)
                {
                    case 'name':  
                        
                        $secondline="?collection collectionliterals:name ?name";
                        $basis="?name";
                      
                        break;

                    case 'date':  
                        
                        $secondline="?collection collectionliterals:upload ?date "; 
                        $basis="?date";
                        break;

                    case 'uploader': 
                        
                        $secondline="?collection predicates:uploadedBy ?person.  ?person userliterals:lastname ?lastname.";	
                        $basis="?lastname"; 
                        break;
                 };
                 
            $order=$_POST['order'];
         
            $query="select ?collection
                        where {
                                ?collection rdf:type class:Collection.".$secondline."
                        } ORDER BY ".$order."(".$basis.")";
            
            queryCall($prefixes.$query, 'http://www.example.org/collection/');
            break;
        
        case 'filterCollection':  
            
            $query="select DISTINCT ?collection
                    where {
                    ?collection rdf:type class:Collection. ";
                    
            $num=$_POST['num'];
                    
            for($i=0; $i<$num; $i++){

               $area=$_POST['area'.$i]; 
               $query.="?bone".$i." predicates:belongsToCollection ?collection.
                        ?bone".$i." rdf:type ?class".$i.".
                        ?class".$i." rdfs:subClassOf+ class:".$area.'.'; 
            };

            $query.="}";
            
            queryCall($prefixes.$query, 'http://www.example.org/collection/');
            
            break;

        case 'uploadTest':

            $toUpload="user:1 userliterals:username 'david'.";
            $context = "http://www.cambridgesemantics.com/poirot"; // Optional - defaults to entire repository though.
            $inputFormat = phpSesame::TURTLE; // Optional - defaults to RDFXML

            $store->append($append, $context, $inputFormat);
            upload($prefixesApp.$toUpload);
            break;  

            default : break;
        
        case 'update' :  

            $query = "  PREFIX rdfs:<http://www.w3.org/2000/01/rdf-schema#>
                        PREFIX owl:<http://www.w3.org/2002/07/owl#>
                        PREFIX xsd:<http://www.w3.org/2001/XMLSchema#>
                        PREFIX class:<http://www.example.org/class/>
                        PREFIX rdf:<http://www.w3.org/1999/02/22-rdf-syntax-ns#>
                        PREFIX sesame:<http://www.openrdf.org/schema/sesame#>
                        PREFIX predicates:<http://www.example.org/predicates/>
                        PREFIX collectionliterals:<http://www.example.org/collectionliterals/>
                        PREFIX bone:<http://www.example.org/bone/>
                        PREFIX collection:<http://www.example.org/collection/>
                        PREFIX userliterals:<http://www.example.org/userliterals/>
                        PREFIX user:<http://www.example.org/user/>

                         user:1 userliterals:username 'david'";
                    /*    INSERT { user:1 userliterals:username 'david1'}
                        
        /*WHERE
                          { user:1 userliterals:username 'david'}";
                          
          /*  $query = "  PREFIX userliterals:<http://www.example.org/userliterals/>
                        PREFIX user:<http://www.example.org/user/>

                         user:1 userliterals:username 'david'";
         
            
            $query="@prefix rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#> .
                    @prefix rdfs: <http://www.w3.org/2000/01/rdf-schema#> .
                    @prefix xsd: <http://www.w3.org/2001/XMLSchema#> .
                    @prefix owl: <http://www.w3.org/2002/07/owl#> .
                    @prefix sesame: <http://www.openrdf.org/schema/sesame#> .
                    @prefix class: <http://www.example.org/class/>.
                    @prefix collection: <http://www.example.org/collection/>.
                    @prefix bone: <http://www.example.org/bone/>.
                    @prefix user: <http://www.example.org/user/>. 
                    @prefix predicates: <http://www.example.org/predicates/>.
                    @prefix collectionliterals: <http://www.example.org/collectionliterals/>.
                    @prefix userliterals: <http://www.example.org/userliterals/>.
                     
                    class:Function1 rdfs:subClassOf class:BoneFunctions";
            
          */
            $sesame = array('url' => 'http://localhost:8080/openrdf-sesame', 'repository' => '1');
            $store = new phpSesame($sesame['url'], $sesame['repository']);   
            //$inputFormat = phpSesame::TURTLE;
            //$query="user";
            
            $store->overwrite($query);

            break;
        
    case 'classHierarchy' :  
        
        $base=$_POST['base'];
        $query="select ?class ?subclass
                where {
                    ?class rdfs:subClassOf+ class:".$base.".
                    OPTIONAL{?subclass rdfs:subClassOf ?class. }       
                }";      
        
        queryCall($prefixes.$query, 'http://www.example.org/class/', 2);

        break;

    case 'loadBonesXML' : 
     
        
        $id=$_POST['id'];
        $id=$_POST['collection'];
        
        $query="select ?boneType
                  where{
                      ?bone rdf:type ?boneType.
                      ?bone predicates:belongsToCollection collection:".$id.".
                  }";
        
        
    responseQueryXML($prefixes.$query, 'http://www.example.org/class/');
    break;   

    default: break;
}
    function responseQueryXML($query, $predicate=null, $columns=null){
        
        $sesame = array('url' => 'http://localhost:8080/openrdf-sesame', 'repository' => '1');
        $store = new phpSesame($sesame['url'], $sesame['repository']);   
        //$rep = $sesame['repository'];
        $resultFormat = phpSesame::SPARQL_XML;  // The expected return type, will return a phpSesame_SparqlResobject (Optional)
        $lang = "sparql";                       // Can also choose SeRQL (Optional)
        $infer = true;                         // Can also choose to explicitly disallow inference. (Optional)
        $result = $store->query($query, $resultFormat, $lang, $infer);
        if($result->hasRows()) {
            
            foreach($row as $answ)
            {
                if($predicate){
                   $answ=str_replace($predicate,'',$answ);                 
                }  
                echo $answ.'?';
            }
        }
    };

    function queryCall($query, $predicate=null, $columns=null)
    {
        $sesame = array('url' => 'http://localhost:8080/openrdf-sesame', 'repository' => '1');
        $store = new phpSesame($sesame['url'], $sesame['repository']);   
        //$rep = $sesame['repository'];
        $resultFormat = phpSesame::SPARQL_XML;  // The expected return type, will return a phpSesame_SparqlResobject (Optional)
        $lang = "sparql";                       // Can also choose SeRQL (Optional)
        $infer = true;                         // Can also choose to explicitly disallow inference. (Optional)
        $result = $store->query($query, $resultFormat, $lang, $infer);
        if($result->hasRows()) {

            foreach($result->getRows() as $row) {
              
                if($columns){
                    for($i=0; $i<2*$columns-count($row); $i++)
                    {
                        echo 'noData?';
                    }
                    foreach($row as $answ)
                    {
                        if($predicate){

                           $answ=str_replace($predicate,'',$answ);                 
                        }  
                        echo $answ.'?';
                    }
                } else {
                    foreach($row as $answ)
                    {
                        if($predicate){

                           $answ=str_replace($predicate,'',$answ);                 
                        }  
                        echo $answ.'?';
                    }
                }     
            }
            return true;
        } else {
            
            echo '!';
            return false;
        }
    }

    function queryReturn($query)
    {

        $sesame = array('url' => 'http://localhost:8080/openrdf-sesame', 'repository' => '1');
        $store = new phpSesame($sesame['url'], $sesame['repository']);   
        //$rep = $sesame['repository'];

        $resultFormat = phpSesame::SPARQL_XML;  // The expected return type, will return a phpSesame_SparqlResobject (Optional)
        $lang = "sparql";                       // Can also choose SeRQL (Optional)
        $infer = true;                         // Can also choose to explicitly disallow inference. (Optional)
        
        $result = $store->query($query, $resultFormat, $lang, $infer);
        
        if($result->hasRows()) {

                 foreach($result->getRows() as $row) {
        
                    foreach($row as $answ)
                    {
                        return $answ;
                    } 
                }
             return true;
        } else {

            return 10;
        }
    }
    
    function upload($append)
    {
       
        $sesame = array('url' => 'http://localhost:8080/openrdf-sesame', 'repository' => '1');
        $store = new phpSesame($sesame['url'], $sesame['repository']);   
      
        $inputFormat = phpSesame::TURTLE; // Optional - defaults to RDFXML

        $store->append($append, 'null' , $inputFormat);
    }
    
    
    
    /*
    case 'update' :  

            $query = "  PREFIX rdfs:<http://www.w3.org/2000/01/rdf-schema#>
                        PREFIX owl:<http://www.w3.org/2002/07/owl#>
                        PREFIX xsd:<http://www.w3.org/2001/XMLSchema#>
                        PREFIX class:<http://www.example.org/class/>
                        PREFIX rdf:<http://www.w3.org/1999/02/22-rdf-syntax-ns#>
                        PREFIX sesame:<http://www.openrdf.org/schema/sesame#>
                        PREFIX predicates:<http://www.example.org/predicates/>
                        PREFIX collectionliterals:<http://www.example.org/collectionliterals/>
                        PREFIX bone:<http://www.example.org/bone/>
                        PREFIX collection:<http://www.example.org/collection/>
                        PREFIX userliterals:<http://www.example.org/userliterals/>
                        PREFIX user:<http://www.example.org/user/>

                        DELETE { user:1 userliterals:username 'david1'}
                        INSERT { user:1 userliterals:username 'david'}
                        WHERE
                          { user:1 userliterals:username 'david1'}";

            $query = "  PREFIX userliterals:<http://www.example.org/userliterals/>
                        PREFIX user:<http://www.example.org/user/>

                         user:1 userliterals:username 'david1'   ";
           
            $query="class:Function1 rdfs:subClassOf class:BoneFunctions";
            $store->overwrite($query, 'null', $inputFormat);

            break;
            
            
            */