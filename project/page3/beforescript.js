/*
var classes = ["Root","Area1", "Area2", "Area11", "Area12", "Area21", "Area22", "Area111", "Area112", "Area211", "Area212"];
var parent = [-1, 0, 0,  1, 1, 2, 2, 3, 3, 5, 5];
var haschild = [1, 1, 1, 1, 0, 1, 0, 0, 0, 0, 0];
var open = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

var classes = new Array();
var parent = new Array();
var parents = new Array();
var haschild = new Array();
var open = new Array();
var children=new Array();

var open = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

var names = new Array();
var list = new Array();
var ulist = new Array();
var box = new Array();
var sendList= new Array();
var searchList= new Array();

//Ebbe tevődnek bele a collectionadatok
var collection=new Array();
var numberOfCollections;

var left=document.createElement('img');
var down=document.createElement('img');
left.setAttribute('src', 'img/arrowleft.png');
down.setAttribute('src', 'img/arrowdown.png');
left.setAttribute('onclick', 'openFilter()');
down.setAttribute('onclick', 'closeFilter()');
left.setAttribute('style', 'width: 16px; height:16; float:left;');
down.setAttribute('style', 'width: 16px; height:16; float:left;');

var head;
var filter;
var showChecked;
var treeDiv;
var firstname;
var lastname;
var order;
var basis;
var id;

var collectionID;

function init(){
    
    //filter=document.getElementById('filterBar');
    //head=document.getElementById('headerContainer');
    showChecked=document.createElement('div');
    showChecked.setAttribute('style', 'overflow: auto; position: relative;left: 50px;top: 10px; width: 200px;height: 100px;border: 1px solid #A6A6A6; border-radius: 3px;background: #F6F6F6;');
    showChecked.setAttribute('id', 'showChecked');
    treeDiv=document.createElement('div');
    treeDiv.setAttribute('style', 'overflow: auto; position: relative;left: 350px;top: -90px; width: 300px;height: 100; border: 1px solid #A6A6A6; border-radius: 3px;background: #F6F6F6;');
    treeDiv.setAttribute('id', 'list');
    
    initTree();
}


function loadClassHierarcy(param){
    
    var loadClassCall=function loadClassAjaxCall(parameter, functions){
       
        params='base='+parameter;
        XHR_request('/phpSesame/query.php?instruction=classHierarchy', true, params, functions);
    };
    
    
    var loadClassResponse=function loadCallAjaxResponse(response){
        
        
        var split=response.split('?');
       
        for(var i=0; i<(split.length-1)/4; i++){
         
                parent[i]=split[i*4+2];
               
                    var div=document.createElement('div');
                    div.innerHTML=parent[i];
                    document.getElementById('fg1').appendChild(div);
               
                children[i]=split[i*4];

                    var div=document.createElement('div');
                    div.innerHTML=children[i];
                    document.getElementById('fg2').appendChild(div);
        }
        
        
        var k=0;
        var noData=0;
        classes[0]='BoneAreas';
        parent[-1]='fjdfjfdkj';
        var i=0;
        var Father=0;
        //for(var i=0; i<; i++){
        for(var i=0; i<(split.length-1)/4; i++){
           
           while(children[i+noData]==='noData')
           {
               noData++; 
           }
          
           ToFind=children[i+noData];
           alert(ToFind +'toFind');
           while(ToFind!==parent[k]){
                
               //classes[k+i+1]=parent[i+k];
               if(parent[k]!==parent[k-1] || k===0){
 
                classes[classes.length]=parent[k];
                    var div=document.createElement('div');
                    div.innerHTML=parent[k];
                    document.getElementById('fg1').appendChild(div);
                //parents[k+i+1]=i+noData;
                  parents[parents.length]=Father;
                    var div=document.createElement('div');
                    div.innerHTML=Father;
                    document.getElementById('fg2').appendChild(div);
                } 
                alert(parent[k]+'parent k'+ k);
                k++;
                
            }  
            if(parent[i+noData]!==parent[i+noData-1]){
               
                Father++;
           }
        }     
    };         
    
    ajaxCallParam(param, loadClassCall,loadClassResponse);   
    
}
 
*/