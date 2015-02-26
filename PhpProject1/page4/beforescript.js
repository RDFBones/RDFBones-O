var bonedivs=new Array();
var colldivs=new Array();

var collectionOrderList=new Array();
var uploaderOrderList=new Array();
var dateOrderList=new Array();
var nameOrderList=new Array();

var validCollectionDivs=new Array();
var actualOrder;

//This is the basis of ordering
var loadedName = new Array();
var loadedFirstName = new Array();
var loadedLastName = new Array();
var loadedDate = new Array();

var areaFilterList = new Array();
var functionFilterList = new Array();

var classes = ['Root','Skull', 'Vertebral_Column', 'Arm', 'Leg', 'Chest', 'Cranial_Bone', 'Facial_Bone', 'Crevical_Vertebrae', 'Thoracic_Vertebrae', 'Lumbar_Vertebrae', 'Sacral_Vertebrae', 'Coccygeal_Vertebrae', 'Upper_Extremity', 'Hand','Hip_Bone', 'Knee_Cap', 'Tibia', 'Fibula', 'Foot'];
var parent = [-1, 0, 0,  0,  0, 0, 1, 1, 2, 2, 2, 2, 2, 3, 3, 4, 4, 4, 4, 4];

var haschild = [1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
var open = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

var names = new Array();
var list = new Array();
var ulist = new Array();
var box = new Array();
var sendList= new Array();
var searchList= new Array();

var collection=new Array();
var numberOfCollections;

var left;
var down;

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
var noResult;
var noResultDiv;
var showAll;
var collCont;

function bonePageLoad(collection){
    
    collectionID=collection;
    
    var bonePageLoadCall=function bonePageLoadAjaxCall(functions){
       //Page of the Bones
       var address='page2.php';
       params='dsjkds';
       XHR_request('/phpSesame/'+address, true, params, functions);
    };

    var bonePageLoadResponse=function bonePageLoadAjaxResponse(response){
        document.getElementById('middle_content').innerHTML=response;
        atBonePageLoad(collectionID);
    };
    
    ajaxCall(bonePageLoadCall, bonePageLoadResponse);
}

function atPageLoad(){
  
    actualOrder=1;
    showAll=false;
    noResult=false;
    //The filter box initialisation. I have to add the elements with js, since the appear only by clicking
    loadFilterBar();
    //Queries the collections from tha database and adds the elements into the collectioContainer Div
    getCollection();
    getCollectionOrder();
}

function loadFilterBar(){
 
    collCont=document.getElementById("collectionContainer");
    filter=document.getElementById('filterBar');
    filt=document.getElementById('filt'); 
    head=document.getElementById('headerContainer');
    
    left=document.createElement('img');
    down=document.createElement('img');
    left.setAttribute('src', 'img/arrowleft.png');
    down.setAttribute('src', 'img/arrowdown.png');
    left.setAttribute('onclick', 'openFilter()');
    down.setAttribute('onclick', 'closeFilter()');
    left.setAttribute('style', 'width: 16px; height:16; float:left; margin: 5px');
    down.setAttribute('style', 'width: 16px; height:16; float:left; margin: 5px');
    filter.insertBefore(left, filt);
    
    /*The boxes in the filter field*/
    showChecked=document.createElement('div');
    showChecked.setAttribute('style', 'overflow: auto; margin: 10px;  width: 200px;height: 100px;border: 1px solid #A6A6A6; border-radius: 3px;background: #F6F6F6;');
    showChecked.setAttribute('class', 'floatLeft');
    showChecked.setAttribute('id', 'showChecked');
    treeDiv=document.createElement('div');
    treeDiv.setAttribute('style', 'overflow: auto; margin: 10px; width: 350px; height: 100; border: 1px solid #A6A6A6; border-radius:3px; background: #F6F6F6;');
    treeDiv.setAttribute('class', 'floatLeft'); 
    
    initTree();
    
    noResultDiv=document.createElement('div');
    noResultDiv.setAttribute('style','margin: 25px; text-align: center');
    noResultDiv.innerHTML='Unfortunately there are no such collection';
}


function getCollection(){
    
    var getCollectionCall=function getCollectionAjaxCall(functions){
    
    params='username=dsds';
    XHR_request('/phpSesame/query.php?instruction=listCollections', true, params, functions);    
    };

    var getCollectionResponse=function getCollectionAjaxResponse(response){ 
    
    console.log(response);
    collection=response.split('?');
    //Fills the collectionContainer div
    loadCollections(collection);
        
    };
    
    ajaxCall(getCollectionCall,getCollectionResponse);
   
}

function getCollectionOrder(){
    
    var getCollectionOrderCall=function getCollectionOrderAjaxCall(functions){
    
        params='username=dsds';
        XHR_request('/phpSesame/query.php?instruction=listCollectionsOrder', true, params, functions);    
    };

    var getCollectionOrderResponse=function getCollectionOrderAjaxResponse(response){ 
    
        var data=response.split('?');
        for(var i=0; i<4; i++){
            for(var k=0; k<numberOfCollections; k++)
            {
               switch(i){

                    case 0: dateOrderList[k]=data[k*4+2];
                            //lert(dateOrderList[k]);
                            break;
                            
                    case 1: collectionOrderList[k]=data[numberOfCollections*4+k*2];
                            //alert(collectionOrderList[k]);
                            break;

                    case 2: uploaderOrderList[k]=data[numberOfCollections*6+k*4+2];
                            //alert(uploaderOrderList[k]);// uploaderOrderList[k]);
                            break;


                    case 3: nameOrderList[k]=data[numberOfCollections*10+k*4];
                            //alert('name'+nameOrderList[k]);
                            break;
               }     
            }
        }  
    };
    ajaxCall(getCollectionOrderCall,getCollectionOrderResponse); 
}

function loadCollections(dataSet){
   
    numberOfCollections=(dataSet.length-1)/10;
    for(var n=0; n<numberOfCollections; n++)
    {  
        var cont=document.getElementById('collectionContainer');
        colldivs[n]=document.createElement('div');
        colldivs[n].setAttribute('class', 'collectionDiv widthCollection');
        
        var a=numberOfCollections-n;
        colldivs[n].setAttribute('onclick', 'bonePageLoad('+a+')');
        //cont.appendChild(colldivs[n]);
        var floatDiv=new Array();
        
        for(var i=0; i<3; i++)
        {
            floatDiv[i]=document.createElement('div');
            switch(i){

                case 0: floatDiv[i].innerHTML=dataSet[n*10+8];
                        floatDiv[i].setAttribute('class', 'floatLeft name verticalMiddle');
                        colldivs[n].appendChild(floatDiv[i]);
                        break;

                case 1: floatDiv[i].innerHTML=dataSet[n*10+4]+' '+dataSet[n*10];
                        floatDiv[i].setAttribute('class', 'floatLeft uploader verticalMiddle');
                        var a = floatDiv[i];
                        break;
                
                case 2: floatDiv[i].innerHTML=dataSet[n*10+6].substr(0,10);
                        floatDiv[i].setAttribute('class', 'floatRight created verticalMiddle');
                        
                        colldivs[n].appendChild(floatDiv[i]);
                        colldivs[n].appendChild(a);
                        break;
                        
                default: break; 
           }
        }        
    }
    showAllCollections();
}

function orderCollections(orderNo){ //Gombokról fog meghívódni
    
    actualOrder=orderNo;
    refreshCollections();
}
  
var getBonesCall=function getBonesAjaxCall(functions){
    
    params='id='+id;
    XHR_request('/phpSesame/query.php?instruction=getBones', true, params, functions);
}

var getBonesResponse=function getBonesAjaxResponse(){
    
   var split=response.spilt['?'];
   listBones(split);
}

function insertNewCollection(collectionName){
    
    var cont=document.getElementById('collectionContainer');
    n=numberOfCollections;
    colldivs[n]=document.createElement('div');
    colldivs[n].setAttribute('class', 'collectionDiv');
    colldivs[n].setAttribute('onclick', 'bonePageLoad('+n+')');
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

function showInputColl(){
  
    document.getElementById('inp').style.visibility='visible';
    document.getElementById('ok').style.visibility='visible';
    document.getElementById('newColName').style.visibility='visible';
    document.getElementById('newCollectionContainer').removeChild(document.getElementById('add'));
}

function hideInputColl(){
    
    document.getElementById('inp').style.visibility='hidden';
    document.getElementById('ok').style.visibility='hidden';
    document.getElementById('newColName').style.visibility='hidden';
    //document.getElementById('newCollectionContainer').appendChild(document.getElementById('add'));
}

function openFilter(){
    
    filt.setAttribute('style', 'border-bottom : 1px solid; padding-bottom: 5px;');
    filter.insertBefore(down, filt);
    filter.removeChild(left);

    filter.appendChild(showChecked);
    
    filter.setAttribute('style', 'border: 1px solid black; border-radius: 10px; height: 150px;');
    filter.appendChild(treeDiv);
    treeDiv.appendChild(ulist[0]);  
}

function closeFilter(){

    filt.setAttribute('style', 'border-bottom : none;');
    
    filter.insertBefore(left, filt);
    filter.removeChild(down);
    
    filter.removeChild(showChecked);
    filter.removeChild(treeDiv);   
    filter.setAttribute('style', 'border: 1px solid black; border-radius: 10px;');
}

function newCollection(){
    
   insertNewCollection(document.getElementById('inp').value);
   usid=document.getElementById('usid').innerHTML;
   collName=document.getElementById('inp').value;
   hideInputColl();
   ajaxCall(newCollectionCall, newCollectionResponse);
} 

var newCollectionCall= function newCollectionAjaxCall(functions){
    
    params='userID='+usid+'&collectionName='+collName;
    XHR_request('/phpSesame/query.php?instruction=newCollection', true, params, functions); 
};

var newCollectionResponse= function newCollectionAjaxResponse(response){

};

function initTree()
{
    var start=0; 
    for(var i=-1; i<classes.length; i++){

        var children=returnChild(i);
        ulist[i]=document.createElement('ul');
        if(i>0){
           // ulist[i].setAttribute('id', 'level');
        }
        
        for(var k=start; k<children.length+start; k++){
            
            var div = document.createElement('div');
            div.setAttribute('style', 'float:left');
            names[k]=document.createElement('div');
            // names[k].setAttribute('style','float:left');
            names[k].innerHTML=children[k-start];

            box[k]=document.createElement('input');
            box[k].type='checkbox';
            box[k].name='myInput';
            box[k].setAttribute('style', 'float:left');
            box[k].setAttribute("onclick", "onChangeCheckBox(this,"+k+")");
            box[k].setAttribute('id', k);

            list[k]=document.createElement('li');
            list[k].setAttribute('style','list-style-type: none;');
            list[k].appendChild(initIMG(k));
            
            div.appendChild(box[k]);
            //list[k].appendChild(box[k]);
            list[k].appendChild(div);
            list[k].appendChild(names[k]);
            
            ulist[i].appendChild(list[k]); 
        };
        start=start+children.length;
    };
}

function onChangeCheckBox(checkbox, param) {
     
    if (checkbox.checked) {
        
        removeAllChildFromSendList(param);
        sendList[sendList.length]=param;  
        addToSearchList(param);
        select(param);      //Select végigmegy az összes nyittot gyereken
    } else {
        
        if(isInSendList(param)){
            
            removeFromSendList(param);
            removeFromSearchList(param);
        } else {   //Nincs a  listán a node amit most deselecteltünk, igy a faterja rajta van, és egyik tesója se.
          
          addSiblingsToSendList(param);
            //Tovább nézi hogy az szülő rajta van e listán
          notInList(parent[param]);
        }
        deselect(param);
    }
    if(sendList.length){
        filterFunction();
    } else {
        showAll=true;
        showAllCollections();
    }
    
}

function showAllCollections(){
    
    removeAllChild(collCont);
    
    for(var i=0; i<colldivs.length; i++)
    {
        collCont.appendChild(colldivs[i]);
    }  
    
    while(validCollectionDivs.length > 0) {
         validCollectionDivs.pop();
    }
    
    for(var i=0; i<numberOfCollections; i++)
    {
        validCollectionDivs[i]=i;
    }
}

function removeAllChild(element){
    
    while(element.firstChild)
    {
        element.removeChild(element.firstChild);
    }
}

function filterFunction(){
    
    var filterCollectionsCall=function filterCollectionsAjaxCall(functions){
        
        params='num='+sendList.length;
        for(var i=0; i<sendList.length; i++)
        {
            params+='&area'+i+'='+classes[sendList[i]];
        };
       
        XHR_request('/phpSesame/query.php?instruction=filterCollection', true, params, functions);     
    };
    
    var filterCollectionsResponse=function filterCollectionsAjaxResponse(response){
       
       // alert(response); 
       refreshValidCollectionDivsArray(response);
       refreshCollections();
    };
    
    ajaxCall(filterCollectionsCall, filterCollectionsResponse);
}

function refreshCollections(){        
    
    while(collCont.firstChild)
    {
        collCont.removeChild(collCont.firstChild);
    }
  
    if(noResult){
        
        document.getElementById("collectionContainer").appendChild(noResultDiv);
        
    } else {
        
        if(actualOrder<4){

            for(var i=0; i<numberOfCollections; i++)
            {
                k=0;
                switch(actualOrder){

                    case 1: 

                        while(dateOrderList[k]!==nameOrderList[i]){
                            k++; 
                        }
                        break;

                    case 2: 
                        while(dateOrderList[k]!==uploaderOrderList[i]){
                            k++; 
                        }
                        break;

                    case 3: k=i; break;  
                }
                if(isValidCollectionDiv(k)){
                   
                    document.getElementById("collectionContainer").appendChild(colldivs[k]);
                }   
            }
        } else {

            for(var i=7; i>=0; i--)
            {
                k=0;
               switch(actualOrder){

                    case 4: 
                        while(dateOrderList[k]!==nameOrderList[i]){
                            k++; 
                        }
                        break;

                    case 5: 
                        while(dateOrderList[k]!==uploaderOrderList[i]){
                            k++; 
                        }
                        break;  

                    case 6: k=i;    
                }
                if(isValidCollectionDiv(k)){
                document.getElementById("collectionContainer").appendChild(colldivs[k]);
                } 
            }
        }
    }
}

function isValidCollectionDiv(k){
    
    for(var i=0; i<validCollectionDivs.length; i++){
     
       if(k===validCollectionDivs[i]){
           return true;
       }  
    }
    return false;
}

function refreshValidCollectionDivsArray(response){
    
    //Clear the validCollectionsArray
    if(response==='!'){
       noResult=true;
    } else {
        validCollectionDivs.length=0;
        data=response.split('?');
        var k;

        for(var i=0; i<(data.length-1)/2; i++)
        {   
            k=0;
            while(dateOrderList[k]!==data[i*2]){
                k++;
            };
            validCollectionDivs[i]=k;
            
        }
        noResult=false;
    }
}    


function notInList(node){
    
    if(isInSendList(node))
        {
         removeFromSendList(node);
         removeFromSearchList(node);
        } else { //A szülő ki van jelölve így,  
            
            addSiblingsToSendList(node);
            notInList(parent[node]);
        }
    document.getElementById(node).checked=false; 
}

function select(node){
    
    var children=new Array();
    children=returnChildNodes(node);
    for(var i=0; i<children.length; i++)
    {
        if(open[children[i]]===1)
        {
            document.getElementById(children[i]).checked=true;
            select(children[i]);
        }
    }
}

function deselect(node){
    
    var children=new Array();
    children=returnChildNodes(node);
    for(var i=0; i<children.length; i++)
    {
        if(open[children[i]]===1)
        {
            document.getElementById(children[i]).checked=false;
            deselect(children[i]);
        }
    }
}

function isInSendList(node){
   
    for(var i=0; i<sendList.length; i++)
    {
      if(node === sendList[i])
      {   
        return true;
      } 
    }
    return false;
}

function removeAllChildFromSendList(node){
    
    var k=sendList.length-1;
    
    for(var i=k; i>=0; i--)
    {
      if(checkParent(node, sendList[i]))
      {
        removeFromSearchList(sendList[i]);
        rearrangeSendList(i);
        //showSendList();
      }
    }
}

function removeFromSendList(node){
    
    for( var i=0; i<sendList.length; i++)
    {
      if(node === sendList[i])
      {
        var shift=i;
        break;
      }
    }
    rearrangeSendList(shift);
    //removeFromSearchList(node);
}

function rearrangeSendList(shift){
    for (var k=shift; k<sendList.length-1; k++)
    {
        sendList[k]=sendList[k+1];
    }
    sendList.length--;
}

function checkParent(parent, child){
    
    var par=getAllParents(child);
    for(var i=0; i<par.length; i++)
    {
        if(parent===par[i])
        {
            return true;
        }
    }
    return false;
}

function getAllParents(node){
    
    var parents=new Array();
    parents[0]=parent[node];
    var i=0;
    while(parents[i]!==-1){
     i++;
     parents[i]=parent[parents[i-1]];
    }
    return parents;
}

function addSiblingsToSendList(node){
    
    var children=new Array();
    children=returnChildNodes(parent[node]);
  
    for(var i=0; i<children.length; i++)
    {
        if(children[i]!==node)
            {
               sendList[sendList.length]=children[i];
               addToSearchList(children[i]);
            }
    }   
}

function addToSearchList(n){
    
    var myDiv=document.createElement('div');
    myDiv.innerHTML=classes[n];
    myDiv.setAttribute('style', 'border: 2px solid gray; padding: 2px; padding-left: 10px; background: #A6A6A6; margin:3px; width: 120px; border-radius: 2px; font-size: 13px;');
    document.getElementById('showChecked').appendChild(myDiv);
    searchList[n]=myDiv;
}   //document.getElementById('showChecked').appendChild(searchList[n]);

function removeFromSearchList(n){
    
    document.getElementById('showChecked').removeChild(searchList[n]);    
}

function selectOpenChildren(node){
    var children=new Array();
    children=getAllChildren(node);
    
    for(var i=0; i<children.length; i++){
       
        document.getElementById(children[i]+1).checked=true;   
    }
}

function deselectAllChildren(node){
    var children=new Array();
    children=getAllChildren(node);
    
    for(var i=0; i<children.length; i++){
        
        document.getElementById(children[i]+1).checked=false;   
    }
}

function getAllChildren(node){
        
    var children=new Array();
    var buffer=new Array();
    
        children=returnChildNodes(node);
        
        for(var i=0; i<children.length; i++){
            //Itt a buffer megkapja a gyerekei az első gyereknek
            buffer=returnChildNodes(children[i]+1);
            // alert('parent  '+ children[i]+' buffer '+ buffer.length);
            var start=children.length;
            var end=children.length+buffer.length;
            //alert('start  '+ start+' end '+ end);
            for(var k=start; k<end; k++){
                children[k]=buffer[k-start];
            }
            buffer.length=0;
        }
     return children;
}

function initIMG(param){
    
    var img=document.createElement('img');
    
    if(haschild[param] ){
    img.setAttribute("src", "img/arrowleft.png");
    img.setAttribute("onclick", "openList(this,"+param+")");
    } else {
    img.setAttribute("src", "img/arrowdown.png");    
    }
    img.setAttribute('width', '16');
    img.setAttribute('height', '16'); 
    img.setAttribute('align', 'left'); 
    
    return img;
}
  
function setOpen(node, param){
     var children=new Array();
     children=returnChildNodes(node);
     for(var i=0; i<children.length; i++)
        {
            open[children[i]]=param;
        } 
 }
 
function setClose(node){
    
    var children=new Array();
    children=returnChildNodes(node);
    for(var i=0; i<children.length; i++)
       {
           open[children[i]]=0;
       }
 }
 
function openList(img, node){
     
    list[node].appendChild(ulist[node]); 
    setOpen(node,1);
    img.setAttribute("src", "img/arrowdown.png");
    img.setAttribute('onclick', "closeList(this," + node +")");
    if(box[node].checked){
      
        select(node);
    
    } else {
        //deselect(node);
    }
 }
 
function closeList(img, node){
     
    list[node].removeChild(ulist[node]); 
    img.setAttribute("src", "img/arrowleft.png");
    img.setAttribute('onclick', "openList(this," + node +")");
    setOpen(node,0);
 }
  /*
function createMyList(node){
     
    children=returnChild(node);
    for(var i=0; i<children.length; i++)
    {
        names[i]=document.createTextNode(children[i]);
        list[i]=document.createElement('li');
        list[i].appendChild(names[i]);
        document.getElementById('root').appendChild(list[i]);
    }
}
 */
function returnChild(node){
     
     var array = new Array();
     var n = 0;
     for(var i=0; i<parent.length; i++)
     {
         if(node === parent[i]){
             array[n]=classes[i];
             n++;
         } else {
            if(n!== 0){
             break;
            }
         }   
     }
     return array;
 }
 
function returnChildNodes(node){
     
     var array = new Array();
     var n = 0;
     for(var i=0; i<parent.length; i++)
     {
        if(node === parent[i]){
            
            array[n]=i;
            n++;
        } else {
           if(n!== 0){
            break;
           }
        }   
     }
     return array;
 }

function returnOpenNodes(node){
         
     var array = new Array();
     var n = 0;
     for(var i=0; i<parent.length; i++)
     {
         if(node === parent[i] && open[node] === 1){
             array[n]=i;
             n++;
         } else {
            if(n!== 0){
             break;
            }
         }   
     }
     return array;
 } 


/*
  
  function showSendList(){
        
    var buf=" ";
    for(var i=0; i<sendList.length; i++)
    {
        buf=buf+sendList[i]+" ";
    }
    document.getElementById('list').innerHTML=buf; 
}
function deleteTest(){
    
    
    var deleteTestResponse=function deleteTestAjaxResponse(response){

      alert(response);  
    };
    
    var deleteTestCall=function deleteTestAjaxCall(functions){
        params='kfddk';
        XHR_request('/phpSesame/query.php?instruction=update', true, params,functions);
    }
    
    ajaxCall(deleteTestCall, deleteTestResponse);
}


function collectionPageLoad(idget){
    
    id=idget;
    ajaxCall(getCollectionDataCall(), getCollectionDataResponse);
}

var getCollectionDataCall=function getCollectionDataAjaxCall(functions){
    
    params='id='+id;
    alert(params);  
    XHR_request('/phpSesame/query.php?instruction=getCollectionData', true, params, functions);
}

var getCollectionDataResponse=function getCollectionDataAjaxResponse(response){
    
   var split=response.spilt['?'];
   document.getElementById('nameCollection').innerHTML=split[0];
   document.getElementById('uploader').innerHTML=split[2]; 
   document.getElementById('Date').innerHTML=split[4];
   //A második körben pedig lekéri az Bone-okat
   ajaxCall(getBoneCall, getBoneResponse)
}
*/