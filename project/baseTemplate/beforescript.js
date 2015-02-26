var firstname;
var lastname;


window.pageLoad = function pageLoad(param)
{
    ajaxCallParam(param ,pageLoadCall, pageLoadResponse);
}

var pageLoadCall=function pageLoadAjaxCall(parameter, functions){
   
   var address;
   
   switch(parameter)
   {
      case 1:   address='page1.php';
                break;
       
      case 2:   address='page2.php';
                break;
         
      case 3:   address='page3.php';
                break;
                
      default:   break;
    }
        
    params='dsjkds';
    XHR_request('/phpSesame/'+address, true, params, functions);
}


var pageLoadResponse=function pageLoadAjaxResponse(response){
    
    document.getElementById('middle_content').innerHTML=response;
    atPageLoad();
    document.getElementById('welcome').style.visibility='hidden'; 
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
        
        document.getElementById('firstname').innerHTML=split[4];
        document.getElementById('lastname').innerHTML=split[2];
        document.getElementById('usid').innerHTML=split[0].substring(28,29);
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
         
        responseFunction(response);
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
