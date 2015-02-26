var classes = ["Root","Area1", "Area2", "Area11", "Area12", "Area21", "Area22", "Area111", "Area112", "Area211", "Area212"];
var parent = [-1, 0, 0,  1, 1, 2, 2, 3, 3, 5, 5];
var haschild = [1, 1, 1, 1, 0, 1, 0, 0, 0, 0, 0];
var open = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

var names = new Array();
var list = new Array();
var ulist = new Array();
var box = new Array();
var sendList= new Array();
var searchList= new Array();

function test(){
    
    returnChildNodes(1);
}

function showSendList(){
        
    var buf=" ";
    for(var i=0; i<sendList.length; i++)
    {
        buf=buf+sendList[i]+" ";
    }
    document.getElementById('list').innerHTML=buf;
  
}

var start=0;   
for(var i=-1; i<classes.length; i++){
 
    var children=returnChild(i);
    ulist[i]=document.createElement('ul');
    
    for(var k=start; k<children.length+start; k++){
        
    //names[k]=document.createTextNode(children[k-start]);
    names[k]=document.createElement('div');
    names[k].setAttribute('style','color: red; margin: 3px');
    names[k].innerHTML=children[k-start];

    box[k]=document.createElement('input');
    box[k].type='checkbox';
    box[k].name='myInput';
    box[k].setAttribute('style', 'float:left');
    box[k].setAttribute("onclick", "onChangeCheckBox(this,"+k+")");
    box[k].setAttribute('id', k);

    box[k].value=children[k-start];

    list[k]=document.createElement('li');
    list[k].setAttribute('style','list-style-type: none');
    list[k].appendChild(initIMG(k));
    //names[k].appendChild(initIMG(k));
    list[k].appendChild(box[k]);
    list[k].appendChild(names[k]);
    ulist[i].appendChild(list[k]); 
    };
    start=start+children.length;
};


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
    
    showSendList();
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
        alert(children[i]);
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
    //alert(k);
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
         //   alert('true');
            return true;
        }
    }
    //alert('false');
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
   //alert(children.length);
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
    myDiv.setAttribute('style', 'border: 2px solid gray; padding: 2px; padding-left: 10px; background: #A6A6A6; margin:3px; width: 100px; border-radius: 2px; font-size: 13px;');
    document.getElementById('showChecked').appendChild(myDiv);
    searchList[n]=myDiv;
}   document.getElementById('showChecked').appendChild(searchList[n]);

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
    //alert(children.length); 
    for(var i=0; i<children.length; i++){
        //alert(children[i]);
        document.getElementById(children[i]+1).checked=false;   
    }
}

function getAllChildren(node){
        
    var children=new Array();
    var buffer=new Array();
    
        children=returnChildNodes(node);
        //alert(children.length); 
        
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
 
function showRoot(){
   
     document.getElementById('lists').appendChild(ulist[0]);  
     //setOpen(0);
 }
 
function setOpen(node, param){
     var children=new Array();
     children=returnChildNodes(node);
     for(var i=0; i<children.length; i++)
        {
            alert(children[i]);
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
       // if(isInSendList){
        select(node);
       // } 
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
            alert(i);
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

