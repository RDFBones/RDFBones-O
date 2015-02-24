
//var classes = ["Root","Area1", "Area2", "Area11", "Area12", "Area21", "Area22", "Area111", "Area112", "Area211", "Area212"];
//var parent = [-1, 0, 0,  1, 1, 2, 2, 3, 3, 5, 5];
//var haschild = [1, 1, 1, 1, 0, 1, 0, 0, 0, 0, 0];
//var open = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

var classes = new Array();
var parent = new Array();
var haschild = new Array();
var open = new Array();

var queue=new Array();


function loadClassHierarcy(param){
    
    var loadClassCall=function loadClassAjaxCall(parameter){
        
        alert(parameter);
        params='base=BoneArea';
        XHR_request('phpSesame/query.php?instruction=classHierarchy', true, params, functions);
    };
    
    var loadClassResponse=function loadCallAjaxResponse(response){
        
        var split=response.split('?');
        for(var i=0; i<split.length; i++){
            
            classes[classes.length]=split[i];           
        };
    };        

    ajaxCall(param, loadClassCall,loadClassResponse);   
    
}
 

function ajaxCall(param, callFunction,responseFunction){
     
    /*var functions = new Array();
   
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
    };*/
    
    callFunction(param);
 }