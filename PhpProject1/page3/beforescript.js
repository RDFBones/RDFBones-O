    var classStructure;
    var saveList;
    var boneSaveList;
    var saveListCount;
    var SVGContainer;
    var skeletonSVG;
    var currentBone;
    var classLevel = 1;
    var directoryDivs =[];
    var k;
    
    
    function newBonePage(){
        
        skeletonSVG = document.getElementById('skeletonSVG');
        SVGContainer = document.getElementById('SVGContainer');
        classStructure = document.getElementById('classStructure');
        saveList = document.getElementById('listToSave');
        currentBone = document.getElementById('currentBone');
        boneSaveList = [];
        saveListCount = 0;
        loadBoneSVG(0);
    }
    
    var div = [];
    var loadedSVG = [];
    
    
    function loadBoneSVG(num){
       
        if(num >= 0){
    
            var test=new XMLHttpRequest();
            test.open("POST","/phpSesame/SVG.php?SVGName="+boneNames[num],true);
            test.setRequestHeader("Content-type","application/x-www-form-urlencoded");
            test.onreadystatechange=function()
            {
                if (test.readyState === 4 && test.status === 200)
                {
                    //loadedSVG = test.responseText;
                    skeletonSVG.innerHTML = test.responseText;
                    createClicks(num);  
                }
            };
            test.send("");
        } else {
            alert('This bone has no subclass!');
        }
    }
    
    function createClicks(num){
        
        $.each(boneTree[num], function(index, value){
           
            if(index === 0){
                
            } else {
                var pathID = boneNames[value];
                $('#'+pathID).mouseover(function(){
                    setCurrentBoneDiv(pathID);
                });

                $('#'+pathID).mouseout(function(){        
                    setCurrentBoneDiv('');
                });
                var val = value;
                if(boneTree[value].length>1){ //The bone has subbones
                
                    $('#'+pathID).singleAndDouble(val,pathID);
                } else { //The bone does not have subclasses
                    
                    $('#'+pathID).singleAndDouble(-1,pathID);
                }
            }
        });
    }
    
    function setCurrentBoneDiv(param){
        currentBone.innerHTML = param;
    }
    
    function createBoneObject(svgData,id){
       
       div[id] = document.createElement('div');
       div[id].innerHTML = svgData;
       div[id].setAttribute('id', id);
       return div[id];     
    }
    
    function createTempDiv(content, id){
        
        var div = document.createElement('div');
        div.setAttribute('style', 'visibility: hidden');
        div.setAttribute('id', id);
        div.innerHTML = content;
        return div;
    }
    
    function getPerjel(){
        
        var perJel = document.createElement('div');
        perJel.innerHTML ='/';
        perJel.setAttribute('class', 'verticalMiddle floatLeft boneText');
        return perJel;
    }
    
    function addToDirectoryList(id){
        
        if(id >=0){
          
            classLevel++;
            directoryDivs[classLevel]=document.createElement('div');   
            directoryDivs[classLevel].setAttribute('class', 'verticalMiddle');
            var dir=document.createElement('div');   
            dir.setAttribute('class','floatLeft boneText hoverUnderline verticalMiddle');
            var a = classLevel;
            var b = id;
            dir.addEventListener('click',function(){

                goToLevel(a, b);      //It is only for the directory list responsible
            });

            dir.innerHTML = boneNames[id];
            directoryDivs[classLevel].appendChild(getPerjel());
            directoryDivs[classLevel].appendChild(dir);
            classStructure.appendChild(directoryDivs[classLevel]);
        }
    }
    
    function createDiv(vary, num){
        var a = num;
        var dir=document.createElement('div');   
        dir.setAttribute('class','floatLeft boneText hoverUnderline verticalMiddle');
        dir.addEventListener('click',function(){
            goToLevel(vary, num); 
        });      
        dir.innerHTML = vary;
        
        var directoryDivs=document.createElement('div');   
        directoryDivs.setAttribute('class', 'verticalMiddle');
        
        directoryDivs.appendChild(getPerjel());
        directoryDivs.appendChild(dir);
        
        return directoryDivs;
    }
    
    function goToLevel(toClassLevel, id){
        
        console.log(classLevel + 'classLevel  ' + toClassLevel + 'toClassLEvel');
        if(toClassLevel<classLevel){
            
           for(var i=classLevel; i>toClassLevel ; i--){
                classStructure.removeChild(directoryDivs[i]);
           }
           classLevel = toClassLevel;
           loadBoneSVG(id);
        }
    }
    
    $.fn.singleAndDouble = function(id, pathID) {
        
        // This means it'll take a minimum of 200ms to take the single
        // click action. If it's too short the single and double actions
        // will be called.
        // The default time between clicks on windows is 500ms (http://en.wikipedia.org/wiki/Double-click)
        // Adjust accordingly. 
        var timeOut = 200;
        var timeoutID = 0;
        var ignoreSingleClicks = false;
        
        var singleClickCalled = false;
   
        var singleClickFunc = function(event) {
          
          singleClickCalled = true;
          
          addToSaveList(pathID);

          setTimeout(function() {
            singleClickCalled = false;
          }, 300);
        };
        
        var doubleClickFunc = function(param) {
        
        if (singleClickCalled) {
          // This is actually an error state
          // it should never happen. The timeout would need
          // to be adjusted because it may be too close
        } else {
            addToDirectoryList(param);
            loadBoneSVG(param);
        }
            singleClickCalled = false;
        };
        
        this.on('click', function(event) {
          if (!ignoreSingleClicks) {
            // The double click generates two single click events
            // and then a double click event so we always clear
            // the last timeoutID
            clearTimeout(timeoutID);
            timeoutID = setTimeout(function() {
              singleClickFunc(event);
            }, timeOut);
          }
        });

        this.on('dblclick', function(event) {

            clearTimeout(timeoutID);
            ignoreSingleClicks = true;

            setTimeout(function() {
              ignoreSingleClicks = false;
            }, timeOut);

            doubleClickFunc(id);
        });
    };
    
    function addToSaveList(boneName){
        
        saveList.appendChild(createBoneSaveField(boneName,saveListCount));
    };
   
    function createBoneSaveField(name, id){
        
        boneSaveList[id] = new Object();
        boneSaveList[id].name = name;
        boneSaveList[id].id = id;
        boneSaveList[id].valid = true;
        
        boneSaveList[id].mainDiv = document.createElement('div');
        boneSaveList[id].mainDiv.setAttribute('class','borderC');
        boneSaveList[id].mainDiv.setAttribute('style','margin: 5px; border-radius: 5px; padding: 5px; height: 20px');
        
        var aux1 = document.createElement('div');
        aux1.setAttribute('class', 'verticalMiddle')
        aux1.setAttribute('style', 'float:left;')
        aux1.innerHTML=name;
        
        var img = document.createElement('img');
        img.setAttribute('src', 'img/delete2.png');
        img.setAttribute('class', 'cursorClass');
        img.setAttribute('style', 'float:right; margin-right: 5px; widht: 20px; height:20px');
        img.addEventListener('click',function(){
            
            boneSaveList[id].valid = false;
            saveList.removeChild(boneSaveList[id].mainDiv);
        });
        
        boneSaveList[id].counter = document.createElement('input');
        boneSaveList[id].counter.setAttribute('style', 'float:right; margin-right: 10px; width: 30px;');
        boneSaveList[id].counter.setAttribute('type','number');
        boneSaveList[id].counter.setAttribute('value',1);
        boneSaveList[id].counter.setAttribute('min',1);
       
        boneSaveList[id].mainDiv.appendChild(aux1);
        boneSaveList[id].mainDiv.appendChild(img);
        boneSaveList[id].mainDiv.appendChild(boneSaveList[id].counter);
        saveListCount++;
        return boneSaveList[id].mainDiv;
    }
    
    function saveBones(){
        
        //Protocol:
        //  bonename@nuber++SPLIT++bone
        var msg='';
        for(var i=0, k=saveListCount; i<k; i++){
            if(boneSaveList[i].valid){
               msg +=boneSaveList[i].name+'@'+boneSaveList[i].counter.value+'++SKIP++';
               saveList.removeChild(boneSaveList[i].mainDiv);
            }
        }
        saveListCount = 0;
    }
    
    var msg='ffdfdfdfd+SPLIT+path4946@@@subSVG';
    
    function loadSVG1(param){
      
        var msg = param.split('+SPLIT+');
        //Load the SVG file
        // document.getElementById('drawing1').innerHTML = msg[0];
        var pathID, subSVG;
        var ids = msg[1].split("+IDS+");
        for(var i=0, k=ids.length; i<k; i++){

            var aux=ids[i].split('@@@');
            pathID = aux[0];
            subSVG = aux[1];
            $('#'+pathID).singleAndDouble(pathID, subSVG);
            $('#'+pathID).mouseover(function(){
                currentBone.innerHTML='Cranium';
            });
            $('#'+pathID).mouseout(function(){
                currentBone.innerHTML='';
            });
        }
    }

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

/*
    t.setAttribute('id','atbaszas');
    t.setAttribute('class', 'boneText');
    t.innerHTML = 'Cranium';*/
    // SVGContainer = document.getElementById('SVGContainer').appendChild(t);
    
    //  var tricky = $('#atbaszas');
    // tricky.hide();
    /*
    function back(){
        
        tricky.fadeOut('fast', function(){
            $('#skeletonSVG').fadeIn('fast');
        });
    }
    */