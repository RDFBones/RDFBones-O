var bonetypes;
var bonedivs=new Array();
var boneTypeDivs=new Array();
var boneTypes=["BoneType1","BoneType2","BoneType3","BoneType4"];

var collID;
var add;
var numberOfBones;
var cont;

var subClassDiv;
var subNr;
var classNr;

var mainBoneClasses = ["head" , "arm"];

function showInputBone(){
    
}

function loadSubClass(boneClass){
    
    var toLoad = new Array();
    switch(boneClass){
        
        case 1: toLoad=skulTypes;
                break;
        case 2: toLoad=armTypes;
                break;
        case 3: toLoad=legTypes;
                break;
        case 4: toLoad=columnTypes;
                break;           
        case 5: toLoad=chestTypes;
                break;
    }
    
    classNr=boneClass;
    subNr=0;
    removeAllChild(subClassDiv);
    for(var i=0; i<toLoad.length; i++){
        
        var div=document.createElement('div');
        div.innerHTML = toLoad[i];
        if(i===0){
            div.setAttribute('style','border: 1px solid; margin: 3px; ');
        } else {
            div.setAttribute('style','margin: 3px;');
        }   
        div.setAttribute('onclick','selectBone(this,'+i+')');
        subClassDiv.appendChild(div);
    }  
}
                
function selectBone(divObject, num){
    
    subClassDiv.childNodes[subNr].setAttribute('style', 'border: none; margin: 3px;');   
    subNr=num;
    divObject.setAttribute('style', 'border: 1px solid; margin: 3px;');
}

function atBonePageLoad(collectionID){
  
    subNr=0;
    classNr=0;
    collID=collectionID;
    add=document.getElementById('add');
    bonetypes=document.createElement('div');
    cont=document.getElementById('boneContainer');
    subClassDiv = document.getElementById('subClassDiv');
    bonetypes.setAttribute('style', 'overflow: auto; position: relative;left: 50px;top: 10px; width: 200px;height: 100px;border: 1px solid #A6A6A6; border-radius: 3px;background: #F6F6F6;');
    bonetypes.setAttribute('id', 'bonetypes');
    getCollectionData();
}


function getCollectionData(){
        
    var getCollectionDataCall=function getCollectionDataAjaxCall(functions){
    
        params='id='+collID;
        XHR_request('/phpSesame/query.php?instruction=getCollectionName', true, params, functions);
    }
    
    var getCollectionDataResponse=function getCollectionDataAjaxResponse(response){
   
        var split=response.split('?');
        document.getElementById('collectionName').innerHTML=split[0];
        loadBones();
    }
    
    ajaxCall(getCollectionDataCall,getCollectionDataResponse);
}


function loadBones(){
    
    $.each(mainBoneClasses, function(index, value){
        
        var div = document.createElement('div');
        div.setAttribute('class', 'boneItem');
        div.innerHTML = 'kutyaÚr';
        document.getElementById(value).appendChild(div);   
        
    });
    
}



function newBone(){
    
    /*
    var newBoneCall=function newBoneAjaxCall(param,functions){
        
        var a=param.split('?');
        params='btype='+a[0]+'&coll='+a[1];
        XHR_request('/phpSesame/query.php?instruction=newBone', true, params, functions);
    };

    var newBoneResponse=function newBoneAjaxResponse(response){
     
    }
    
    var newBoneD=document.createElement('div');
    newBoneD.setAttribute('class', 'boneDiv');
    newBoneD.innerHTML=toLoad[subNr];
    cont.appendChild(newBoneD);
    ajaxCallParam(toLoad[subNr]+'?'+collID,newBoneCall, newBoneResponse);
    */
}

function listBones(dataSet){
   
    numberOfBones=(dataSet.length-1)/2;
    for(var n=0; n<numberOfBones; n++)
    {    
        bonedivs[n]=document.createElement('div');
        bonedivs[n].setAttribute('class', 'boneDiv horizontalMiddle');
        bonedivs[n].innerHTML=dataSet[n*2];
        cont.appendChild(bonedivs[n]);
    }
};

var getBoneCall=function getBonesAjaxCall(functions){
    
    params='id='+collID;
    XHR_request('/phpSesame/query.php?instruction=getBones', true, params, functions);
};

var getBoneResponse=function getBonesAjaxResponse(response){
    
    var split=response.split('?');
    listBones(split);
};


/*
function orderBones(basis, order){ //Gombokról fog meghívódni
    
   this.basis=basis;
   this.order=order;
   ajaxCall(orderBoneCall, orderBoneResponse);
}

var orderBoneCall = function orderBoneAjaxCall(functions){
      
    params='basis='+basis+'&order='+order;
    XHR_request('/phpSesame/query.php?instruction=orderCollection', true, params, functions);
};

var orderBoneResponse= function orderBoneResponse(response){
    
    var split = response.split('?');
    for(var i=0; i<colldivs.length; i++)
    {
        document.getElementByID("boneContainer").removeChild(colldivs[i]);
    }
    //Ez azért split.length, mert ha szűrtünk akkor nem az összeset rendezi sorba;
    for(var i=0; i<split.length; i++)
    {
        document.getElementByID("boneContainer").appendChild(colldivs[split[i]]);
    }
}
*/