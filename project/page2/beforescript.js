var bonetypes;
var bonedivs=new Array();
var boneTypeDivs=new Array();
var boneTypes=["BoneType1","BoneType2","BoneType3","BoneType4"];

var collID;
var add;
var numberOfBones;


function atBonePageLoad(collectionID){
  
    collID=collectionID;
    add=document.getElementById('add');
    bonetypes=document.createElement('div');
    bonetypes.setAttribute('style', 'overflow: auto; position: relative;left: 50px;top: 10px; width: 200px;height: 100px;border: 1px solid #A6A6A6; border-radius: 3px;background: #F6F6F6;');
    bonetypes.setAttribute('id', 'bonetypes');
    getCollectionData();
}

function orderBones(basis, order){ //Gombokról fog meghívódni
    
   this.basis=basis;
   this.order=order;
   ajaxCall(orderBoneCall, orderBoneResponse);
}

var orderBoneCall = function orderBoneAjaxCall(functions){
      
    params='basis='+basis+'&order='+order;
    //alert(params);
    XHR_request('/phpSesame/query.php?instruction=orderCollection', true, params, functions);
};

var orderBoneResponse= function orderBoneResponse(response){
    
    //alert(response);
    //Ez ha minden igaz visszaadja a 
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

function getCollectionData(){
    
    
    
    var getCollectionDataCall=function getCollectionDataAjaxCall(functions){
    
    params='id='+collID;
    XHR_request('/phpSesame/query.php?instruction=getCollectionName', true, params, functions);
    }
    
    var getCollectionDataResponse=function getCollectionDataAjaxResponse(response){
   
        var split=response.split('?');
        document.getElementById('collName').innerHTML=split[0];
        ajaxCall(getBoneCall, getBoneResponse);
    }
    
    ajaxCall(getCollectionDataCall,getCollectionDataResponse);
}

var getBoneCall=function getBonesAjaxCall(functions){
    
    params='id='+collID;
    XHR_request('/phpSesame/query.php?instruction=getBones', true, params, functions);
}

var getBoneResponse=function getBonesAjaxResponse(response){
    
    var split=response.split('?');
    listBones(split);
}


function showInputBone(){
  
    document.getElementById('boneTypesDiv').appendChild(bonetypes);
    
    for(var i=0; i<4; i++){
        boneTypeDivs[i]=document.createElement('div');
        boneTypeDivs[i].innerHTML=boneTypes[i];
        boneTypeDivs[i].setAttribute('onclick', 'newBone('+i+', '+collID+')');
        bonetypes.appendChild(boneTypeDivs[i]);
    }
    
    document.getElementById('newBoneContainer').removeChild(add);
}



function newBone(btype, coll){
    
    
    var newBoneCall=function newBoneAjaxCall(functions){
        
        params='btype='+boneTypes[btype]+'&coll='+coll;
        XHR_request('/phpSesame/query.php?instruction=newBone', true, params, functions);
    };

    var newBoneResponse=function newBoneAjaxResponse(response){
        var cont=document.getElementById('boneContainer');
        for(var n=0; n<numberOfBones; n++)
        {    
            cont.removeChild(bonedivs[n]);
        }
        ajaxCall(getBoneCall, getBoneResponse);
    };
   
    document.getElementById('boneTypesDiv').removeChild(bonetypes);
    document.getElementById('newBoneContainer').appendChild(add);
   
    ajaxCall(newBoneCall, newBoneResponse);
    
}

function listBones(dataSet){
   
    numberOfBones=(dataSet.length-1)/6;
    for(var n=0; n<numberOfBones; n++)
    {    
        var cont=document.getElementById('boneContainer');
        bonedivs[n]=document.createElement('div');
        bonedivs[n].setAttribute('class', 'boneDiv');
        //bonedivs[n].setAttribute('onclick', 'collectionPageLoad('+n+')');
        cont.appendChild(bonedivs[n]);
        var floatDiv=new Array();
         
        for(var i=0; i<3; i++)
        {
            floatDiv[i]=document.createElement('div');
            
            switch(i){

                case 0: floatDiv[i].innerHTML=dataSet[n*6+4];
                        floatDiv[i].setAttribute('style', 'float:left; font-size: 18px; width: 220px;');
                        break;

                case 1: floatDiv[i].innerHTML=dataSet[n*6+0]
                        floatDiv[i].setAttribute('style', 'float: left; margin: auto; font-size: 18px; width: 250px;'); 
                        break;
                
                case 2: floatDiv[i].innerHTML=dataSet[n*6+2];
                        floatDiv[i].setAttribute('style', 'float:left; font-size: 18px; width: 220px;');
                        break;
                        
                default: break; 
           }
           
           bonedivs[n].appendChild(floatDiv[i]);
        }
    }
}

var getBonesCall=function getBonesAjaxCall(id,functions){
    
    params='id='+id;
    XHR_request('/phpSesame/query.php?instruction=getBones', true, params, functions);
}

var getBonesResponse=function getBonesAjaxResponse(){
    
   var split=response.spilt['?'];
   loadBones(split);
}




/*
var filterCollectionCall= function filterCollectionAjaxCall(functions){
      
    params='num='+searchList.length;
    for(var i=0; i<searchList.length; i++)
    {
            params+='&area'+i+'='+searchList[i];
    };
    alert(params);
    XHR_request('/phpSesame/query.php?instruction=filterCollection', true, params, functions);
};


var filterCollectionResponse= function filterCollectionAjaxResponse(response){
    
    alert(response);
    //Ez ha minden igaz visszaadja azokat amelyeket ki kell szedni.
/*    var split = response.split('?');
    
    for(var i=0; i<colldivs.length; i++)
    {
        document.getElementByID("collectionContainer").removeChild(colldivs[i]);
    }
    //Ez azért split.length, mert ha szűrtünk akkor nem az összeset rendezi sorba;
    for(var i=0; i<split.length; i++)
    {
        document.getElementByID("collectionContainer").appendChild(colldivs[split[i]]);
    }
 
 function insertNewBone(collectionName){
    
    var cont=document.getElementById('collectionContainer');
    n=numberOfCollections;
    colldivs[n]=document.createElement('div');
    colldivs[n].setAttribute('class', 'collectionDiv');
    colldivs[n].setAttribute('onclick', 'pageLoad('+n+')');
    cont.appendChild(colldivs[n]);
    var floatDiv=new Array();

    for(var i=0; i<3; i++)
    {
        floatDiv[i]=document.createElement('div');

        switch(i){

            case 0: floatDiv[i].innerHTML=collectionName;
                    floatDiv[i].setAttribute('style', 'float:left; font-size: 18px; width: 220px;');
                    break;

            case 1: floatDiv[i].innerHTML=document.getElementById('firstname').innerHTML+' '+document.getElementById('lastname').innerHTML;
                    floatDiv[i].setAttribute('style', 'float: left; margin: auto; font-size: 18px; width: 250px;'); 
                    break;

            case 2: floatDiv[i].innerHTML='just now';
                    floatDiv[i].setAttribute('style', 'float:left; font-size: 18px; width: 220px;');
                    break;

            default: break; 
       }

       colldivs[n].appendChild(floatDiv[i]);
    }
}
 **/

    
