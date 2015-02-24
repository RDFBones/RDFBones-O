var firstname;
var lastname;

var loadXMLcounter =0;
var nexNodeNr = 1;
var boneNames = [];
var boneTree = [];
var parent = [];
var haschild = [];
var open = [];
var nextNodeNr = 1;
var tempArray = [];
var pathID;
    
loadSVGTree();


window.pageLoad = function pageLoad(param)
{
    ajaxCallParam(param ,pageLoadCall, pageLoadResponse);
};

var cnt =0;

var pageLoadCall=function pageLoadAjaxCall(parameter, functions){
   
   var address;
   switch(parameter)
   {
      case 1:   address='page1.php';
                break;
       
      case 2:   address='page2.php';
                break;
         
      case 3:   address='page3.php';
                cnt = 0;
                break;
            
      default:  break;
    }
        
    params='dsjkds';
    XHR_request('/phpSesame/'+address, true, params, functions);
}

var pageLoadResponse=function pageLoadAjaxResponse(parameter, response){
    
    document.getElementById('middle_content').innerHTML=response;
    document.getElementById('welcome').style.visibility='hidden';
    
    switch(parameter){
        
        case 1: 
                atPageLoad();
            break;
            
        case 2: alert('2');
            break;
            
        case 3: newBonePage();
        
        default : break;    
    }
}


function logout(){
   
    header("Location: phpSesame/index.php");
}

function login(){
    
    ajaxCall(loginCall,loginResponse);
}

var loginCall=function loginAjaxCall(functions){
    
    var username=document.getElementById('usr').value;
    var psw=document.getElementById('psw').value;
   
    params='username='+username+'&psw='+psw;
    XHR_request('/phpSesame/query.php?instruction=checkLogin', true, params, functions);    
}

var loginResponse=function loginAjaxResponse(response){
    
    var hack=response.substring(0,1);
    if(hack==='!' && response.length===1){
        alert('Nem megfelelő felhasználónév és jelszó!');
    } else {
        var split=response.split('?');
        
        //document.getElementById('firstname').innerHTML=split[4];
        //document.getElementById('lastname').innerHTML=split[2];
        //document.getElementById('usid').innerHTML=split[0].substring(28,29);
        document.getElementById('login').style.visibility='hidden';
        document.getElementById('logged_in').style.visibility='visible';
        document.getElementById('menu').style.visibility='visible';
        document.getElementById('welcome').style.visibility='visible'; 
    }
};

function setNames(lname, fname){
    firstname=fname;
    lastname=lname;
}

function ajaxCall(callFunction,responseFunction){
     
    var functions = new Array();
   
    functions['loadstart'] = function(){
        
    };
    
    functions['progress'] = function(){
        
    };
    
    functions['load'] = function(evt,response){
         
        responseFunction(response);
    };
    
    functions['abort'] = function(){
        alert('A műveletet megszakítottad');
    };
    
    functions['error'] = function(){
        alert('Hiba történt');
    };
    
    callFunction(functions);
 }

function ajaxCallParam(param, callFunction,responseFunction){
     
    var functions = new Array();
   
    functions['loadstart'] = function(){
        
    };
    
    functions['progress'] = function(){
        
    };
    
    functions['load'] = function(evt,response){
         
        responseFunction(param, response);
    };
    
    functions['abort'] = function(){
        alert('A műveletet megszakítottad');
    };
    
    functions['error'] = function(){
        alert('Hiba történt');
    };
    
    callFunction(param, functions);
 };
  
window.showCollections=function showCollections(param)
{
    var table=document.getElementById('table');
    
    var row=new Array();
    var column=new Array();
    var numberOfElements=2;
    
    for(var i=0; i<param.length-1 ; i++)
    {
        if(i % numberOfElements ===0)
        {
            row[i/numberOfElements]=table.insertRow(table.rows.length);
               
            for(var j=0; j<numberOfElements; j++)
            {
                column[i+j]=row[i/numberOfElements].insertCell(j); 
                if(param[i+j]==='nodate' && j===1)
                {
                column[i+j].innerHTML='';
                } else{
                column[i+j].innerHTML=param[i+j];
                };
            }
        } 
    }
};

function loadSVGTree(){
        
    aj_test=new XMLHttpRequest();
    aj_test.open("POST","/phpSesame/XMLTest.php",true);
    aj_test.setRequestHeader("Content-type","application/x-www-form-urlencoded");
    aj_test.onreadystatechange=function()
    {
        if (aj_test.readyState === 4 && aj_test.status === 200)
        {
            XMLDocumentObject=aj_test.responseXML; 
            console.log(aj_test.responseText);
            var tag = XMLDocumentObject.documentElement.tagName;

            tempArray.push(tag);
            boneNames.push(tag);
            boneTree[0] = [];
            boneTree[0].push(-1);
            while(tempArray.length>0){

                loadXMLTree(loadXMLcounter,XMLDocumentObject);
                //By n we know which node is 
                loadXMLcounter++;
            }
        };    
    };
    aj_test.send("");
}
    
function loadXMLTree(parentID, XMLObject){

    var a = XMLObject.getElementsByTagName(tempArray.pop())[0].childNodes;
    $.each(a, function(index, value){

        if(value.nodeName !== '#text'){

            tempArray.unshift(value.nodeName);
            //Load all child id-s into boneTree
            boneTree[parentID].push(nextNodeNr);

            boneTree[nextNodeNr] = [];
            //The parent node is stored at first place
            boneTree[nextNodeNr][0] = parentID;

            boneNames[nextNodeNr] = value.nodeName;
            nextNodeNr++;
        }
    });
}


/*
function loadXMLTree(parentID, XMLObject){
    
    var a = XMLObject.getElementsByTagName(tempArray.pop())[0].childNodes;
    
    $.each(a, function(index, value){
        
        if(value.nodeName !== '#text'){
           
            tempArray.unshift(value.nodeName);
            //Load all child id-s into boneTree
            boneTree[parentID].push(nextNodeNr);

            boneTree[nextNodeNr] = [];
            //The parent node is stored at first place
            boneTree[nextNodeNr][0] = parentID;

            boneNames[nextNodeNr] = value.nodeName;
            nextNodeNr++;
        }
    });
}


function loadSVGfromPHP(){
    
    aj_test=new XMLHttpRequest();
    aj_test.open("POST","/phpSesame/XMLTest.php",true);
    aj_test.setRequestHeader("Content-type","application/x-www-form-urlencoded");
    aj_test.onreadystatechange=function()
    {
        if (aj_test.readyState === 4 && aj_test.status === 200)
        {
            XMLReturn=aj_test.responseXML; 
            console.log(aj_test.responseText);
            document.getElementById('middle_content').innerHTML =aj_test.responseText;
            var a = XMLReturn.getElementsByTagName("note")[0].childNodes;
        }
    };
}
                            
function AddNewUser(){
    
    aj_test=new XMLHttpRequest();
    aj_test.open("POST","/phpSesame/XMLTest.php",true);
    aj_test.setRequestHeader("Content-type","application/x-www-form-urlencoded");
    aj_test.onreadystatechange=function()
    {
        if (aj_test.readyState === 4 && aj_test.status === 200)
        {
            XMLDocumentObject=aj_test.responseXML; 
            console.log(aj_test.responseText);
            var tag = XMLDocumentObject.documentElement.tagName;
            
            tempArray.push(tag);
            boneNames.push(tag);
            boneTree[0] = [];
            boneTree[0].push(-1);
            while(tempArray.length>0){
                
                loadXMLTree(loadXMLcounter,XMLDocumentObject);
                //By n we know which node is 
                loadXMLcounter++;
            }
            console.log(boneNames);
            console.log(boneTree);
        };
        
    };
    aj_test.send("");
}                            
                            
*/