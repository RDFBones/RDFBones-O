var draw;// = SVG('drawing').size(500,500);
var rect;//=draw.rect(500,500).fill('white');
var max=30;

function createGraph(id){
    
    draw = SVG('rdfEdit').size(1000,600);//.stroke({ width: 2 }); 
    rect = draw.rect(1000, 600).fill('white').stroke({ width: 2 }); 

    rect.click(function(){

    deselectAllNodes();
    disableObjectBut();
    disablePredBut();
});

}

function createSVG(entryNum){
    
    rect.attr({height:max+35});
    var svgExport = draw.exportSvg({ whitespace: true });;
    
    var a=SVG('svg'+entryNum).size(500,max+35);
    console.log(a.absorb(svgExport));
    
}



var mouseDown, moved;
var cursorX, cursorY, moveX, moveY;
var flag=false;
var shiftPressed=false;
var selectedPredicate=null;
var colorVar=0;
var selectedNodes = new Array();
var nodeTable = new Array();
var predicateTable = new Array();
var predicateLookUp = new Array();
//This is for the placement of the new predicate
var place = new Object();    
var group, auxNum, aux;


//Create the initial Node
/*
 * 
nodeTable.push(createNode('Name', 100,180));
nodeTable.push(createNode('Name', 220,100));
nodeTable.push(createNode('Name', 330,60));
createPredicate('rdf:type', nodeTable[0], nodeTable[1]);
createPredicate('rdf:type', nodeTable[2], nodeTable[1]);
*/


function createPredicate(name, startNode, endNode){

    aux=predicateTable.length;
    predicateTable[aux] = new Object();
    predicateTable[aux].predicateObject = createArrow(name, startNode, endNode);
    predicateTable[aux].fromNode = startNode;
    predicateTable[aux].toNode = endNode;

    predicateLookUp[getNodeNumber(startNode)].push(aux);
    predicateLookUp[getNodeNumber(endNode)].push(aux);
}

function createArrow(name, node1, node2){

    group=draw.group();
    start=getNodeData(node1);
    end=getNodeData(node2);

    var alfa=Math.atan((start.y-end.y)/(end.x-start.x));
    var alfa1=Math.atan(((start.y-end.y)/(end.x-start.x))*(start.a/start.b));
    var alfa2=Math.atan(((start.y-end.y)/(end.x-start.x))*(end.a/end.b));
    var newLine=new Object();

    var x,y; 
    var text;
    x=10;
    y=10;
    var a;

    if(start.x <= end.x){

        start.x=start.x+(start.a)*Math.cos(alfa1);
        start.y=start.y-(start.b)*Math.sin(alfa1);

        end.x=end.x-((end.a)*Math.cos(alfa2));
        end.y=end.y+((end.b)*Math.sin(alfa2));

        newLine.x=end.x-10*Math.cos(alfa);
        newLine.y=end.y+10*Math.sin(alfa);
        a=-1;

    } else {

        start.x=start.x-(start.a)*Math.cos(alfa1);
        start.y=start.y+(start.b)*Math.sin(alfa1);

        end.x=end.x+((end.a)*Math.cos(alfa2));
        end.y=end.y-((end.b)*Math.sin(alfa2));

        newLine.x=end.x+10*Math.cos(alfa);
        newLine.y=end.y-10*Math.sin(alfa); 

        a=1; 
    }

    var length = Math.sqrt(Math.pow((start.y-end.y),2)+Math.pow((start.x-end.x),2))/2;
    text=draw.text(name).font({size:12}).center(start.x-a*length*Math.cos(alfa)+x*Math.cos(alfa+1.5707),start.y+length*Math.sin(a*alfa)+y*Math.sin(alfa-1.5707)).rotate(-alfa*180/Math.PI);

    var arr1=draw.line(newLine.x, newLine.y, end.x, end.y).stroke({ width: 2 }); 
    var arr2=draw.line(newLine.x, newLine.y, end.x, end.y).stroke({ width: 2 }); 
    arr1.rotate(15, end.x, end.y); 
    arr2.rotate(-15, end.x, end.y);  
    var line = draw.line(start.x, start.y, end.x, end.y).stroke({ width: 2 });

    group.data('name',name);
    line.addTo(group);
    arr1.addTo(group);
    arr2.addTo(group);
    text.addTo(group);

    group.click(function(){

        if(selectedPredicate === this){
            deselectPredicate(this);
        } else {
            if(selectedPredicate){
                deselectPredicate(selectedPredicate);
            }
            selectPredicate(this);
        }             
    });

    group.dblclick(function(){

       var predName = prompt('Name of the Predicate', this.get(3).text());
       if(predName !== null){

           var num = getPredicateNumber(this);
           predicateTable[num].predicateObject=createArrow(predName, predicateTable[num].fromNode, predicateTable[num].toNode);
           this.remove();
        }
    });

    return group;
}    

function createNode(name,x,y){

    if(y>max){
        max=y;
    }
    
    width=name.length*9+25;
    height=30;

    var ellipse=draw.ellipse(width,height).fill('green');//.stroke({ width: 1 });
    var text = draw.text(name).center(width/2,height/2);
    var ellipse2=draw.ellipse(width,height).attr({'fill-opacity':0.2});

    group = draw.group();
    ellipse.addTo(group);
    text.addTo(group);
    ellipse2.addTo(group);
    group.move(x,y);

    group.data('x',x);
    group.data('y',y);
    group.data('width',width);
    group.data('height',height);
    group.data('selected',false);

    predicateLookUp[nodeTable.length] = new Array();

    group.mousedown(function(){

        moveX=cursorX-this.x();
        moveY=cursorY-this.y();
        flag=true;
        clickedNode=this;
        select(clickedNode);
        setTimeout(function(){click()},300);     
    });

    group.dblclick(function(){

        var newName = prompt('Give the name of the node', 'Name');
        if(newName !== null){

            deselectAllNodes();

            var neW=newName.length*9+25;
            var newNode=createNode(newName, this.data('x')-((neW-this.data('width'))/2), this.data('y'));
            changeNodeObjects(this, newNode);
            newSelection(newNode);
            this.remove();
            moveNode(0,0);
        }    
    });

    return group;    
}


function changeColors(){

    var color;
    switch(colorVar){

        case 0: color='#CC3333'; break;
        case 1: color='#66CCFF'; break;
        case 2: color='#FF9966'; break;
        case 3: color='#FFFFFF'; break;
        case 4: color='#A0A0A0'; 
                colorVar = -1;
                break;
    }

    $.each(selectedNodes, function(index, value){

        value.get(0).attr({fill: color});
    });
    colorVar++;
}

function selectPredicate(pred){

    pred.get(0).attr({stroke: 'red'});
    pred.get(1).attr({stroke: 'red'});    
    pred.get(2).attr({stroke: 'red'});
    pred.get(3).fill({ color: 'red'});
    selectedPredicate=pred;
}

function deselectPredicate(pred){

    pred.get(0).attr({stroke: 'black'});
    pred.get(1).attr({stroke: 'black'});    
    pred.get(2).attr({stroke: 'black'});
    pred.get(3).fill({ color: 'black'});
    selectedPredicate=pred;
}


function switchPredicate(){

    var num = getPredicateNumber(selectedPredicate);
    predicateTable[num].predicateObject=createArrow(predicateTable[num].predicateObject.data('name'), predicateTable[num].toNode, predicateTable[num].fromNode);
    aux=predicateTable[num].toNode;
    predicateTable[num].toNode=predicateTable[num].fromNode;
    predicateTable[num].fromNode=aux;
    selectedPredicate.remove();
    selectedPredicate = null;       
}


function moveNode(moveX, moveY){


    if(shiftPressed){
        
        
         $.each(selectedNodes, function(index, value){

        var node=value;
        var movingNode;
        var nodeNumber=getNodeNumber(node);
        var movingPredicates = new Array();

        $.each(predicateLookUp[nodeNumber], function(index, value){

           movingPredicates[index] = new Object();
           movingPredicates[index].predicate=predicateTable[value].predicateObject; 

           movingPredicates[index].number=value;
           //Bool and dataset of the static node
           if(predicateTable[value].toNode===node){
               movingPredicates[index].pointTo=true;
               movingPredicates[index].staticNode=predicateTable[value].fromNode;
           } else {
              movingPredicates[index].pointTo=false; 
              movingPredicates[index].staticNode=predicateTable[value].toNode;
           }
           //Here we become the predicate object's data
           movingPredicates[index].name=predicateTable[value].predicateObject.data('name');
        });
        
        if(node.data('y')+moveY>max){
            max=node.data('y')+moveY;
            //alert(max);
            draw = size(500,max+30);
        }
        
        node.move(node.data('x')+moveX,node.data('y')+moveY); 
        node.data('x', node.data('x')+moveX);
        node.data('y', node.data('y')+moveY);
        movingNode=getNodeData(node);

        $.each(movingPredicates, function(index, value){

            //Delete to old Predicate
            value.predicate.remove();
            //Draw the new and refresh in the array
            if(value.pointTo){         
                predicateTable[value.number].predicateObject=createArrow(value.name,value.staticNode,node);                                
            } else {
                predicateTable[value.number].predicateObject=createArrow(value.name,node,value.staticNode); 
            }                        
        });

        //Delete movingPredicates
        while(movingPredicates.length > 0) {
            movingPredicates.pop();
        }           
        });
    }
}

function newNodeFunction(){
   
    console.log('dsd');
    var ans = prompt('Name of the new node', '');
    if(ans !== null){
    nodeTable.push(createNode(ans, 0, 0));
    }
}

function newObjectFunction(){

    var node= selectedNodes[0]; 
    var ans = prompt('Name of the new node', '');
    if(ans !== null){

        nodeTable.push(createNode(ans, node.data('x'), node.data('y')+100));
        createPredicate('rdf:type', node, nodeTable[nodeTable.length-1]);
    }
} 

function newPredicate(){

    var ans = prompt('Name of the predicate', '');
    if( ans !== null){

        createPredicate(ans, selectedNodes[0], selectedNodes[1]);
    }     
}

function select(node){

    if(shiftPressed){

        if(isSelected(node)){

            node.get(3).remove();
            deleteFromArray(selectedNodes, searchInArray(selectedNodes, node));

        } else {

            newSelection(node);
        } 

        switch(selectedNodes.length){

            case 1: enableObjectBut();
                    disablePredBut();
                    break;

            case 2: disableObjectBut();
                    enablePredBut();
                    break;

            default: disableObjectBut();
                    disablePredBut();
                    break;
        }

    } else {

        if(isSelected(node)){

            deselectAllNodes();
            disableObjectBut();
            disablePredBut();

        } else {

            deselectAllNodes();
            newSelection(node);
            enableObjectBut();
        }
    }
}

function enableObjectBut(){

    document.getElementById('newObject').setAttribute('class', 'activeButton');
    document.getElementById('newObject').setAttribute('onclick', 'newObjectFunction()');
}

function disableObjectBut(){

    document.getElementById('newObject').setAttribute('class', 'passiveButton');
    document.getElementById('newObject').setAttribute('onclick', null);
}

function enablePredBut(){

    document.getElementById('newPred').setAttribute('class', 'activeButton');
    document.getElementById('newPred').setAttribute('onclick', 'newPredicate()');
}

function disablePredBut(){

    document.getElementById('newPred').setAttribute('class', 'passiveButton');
    document.getElementById('newPred').setAttribute('onclick', null);
}        

function searchInArray(array, element){

    var a=-1;
    $.each(array, function(index, value){
       if(value === element){
           a = index;
       } ;
    });
    return a;
}

function deleteFromArray(array, number){

    for(var i=number, k=array.length-1; i<k; i++){

        array[i]=array[i+1];
    }
    array.pop();
}



function deselectAllNodes(){

    $.each(selectedNodes, function(index, value){
            value.get(3).remove(); 
    });

    while(selectedNodes.length > 0) {

        selectedNodes.pop();
    } 

    document.getElementById('newPred').setAttribute('class', 'passiveButton');
    document.getElementById('newPred').setAttribute('onclick', null);
    //$('#newNode').innerHTML='New Predicate';
}

function isSelected(node){
    var a=false;
    $.each(selectedNodes, function(index, value){
        if(value === node){
            a=true;
        } 
    });

    return a;
}

function newSelection(node){

    start=getNodeData2(node);
    auxNum=draw.rect(start.w, start.h).fill('none').stroke({width:1}); 
    auxNum.addTo(node);
    selectedNodes.push(node);
}

function deselect(node){

    if(selectedNode.length>1){

    } else {

    }
}

function changeNodeObjects(node1, node2){

    var num=getNodeNumber(node1);
    nodeTable[num]=node2;
    //Here comes the change in the predicatetable
    $.each(predicateLookUp[num], function(index, value){

        if(predicateTable[value].toNode === node1){
            predicateTable[value].toNode=node2;
        } else {
            predicateTable[value].fromNode=node2;
        };           
    });
}

function getNodeNumber(node){

    var k=0;
    while(k<=nodeTable.length){

        if(nodeTable[k]===node){
            return k;
        }
        k++;
    }
    return -1;
}

function getPredicateNumber(pred){

    var k=0;
    while(k<=predicateTable.length){

        if(predicateTable[k].predicateObject=== pred){
            return k;
        }
        k++;
    }
    return -1;
}

function getNodeData(object){
    var data = new Object;
    data.a=object.data('width')/2;
    data.b=object.data('height')/2;
    data.x=object.data('x')+data.a;
    data.y=object.data('y')+data.b;
    return data;
}

function getNodeData2(object){
    var data = new Object;
    data.w=object.data('width');
    data.h=object.data('height');
    data.x=object.data('x');
    data.y=object.data('y');
    return data;
}

document.onkeydown = function(e){

    switch(e.keyCode){ 
        case 9:  
            if(selectedPredicate){
                switchPredicate();
            } else {
                addNode();
            }
            break;
        case 16: shiftPressed = true; break;
        case 37: moveNode(-20, 0); break;
        case 38: moveNode(0, -20); break;
        case 39: moveNode(20, 0); break;
        case 40: moveNode(0, 20); break;
        case 17: changeColors(); break;    
        case 13: deselectAllNodes(); break; 
        case 49: var svgExport = draw.exportSvg({ whitespace: true });
                 var draw2=SVG('draw2').size(500,500); 
                 var a=draw2.absorb(svgExport);
                 break;
    }
};

document.onkeyup = function(e){

    switch(e.keyCode){
        case 16: shiftPressed = false; break;
    }
};

document.onmousemove = function(e){
    cursorX = e.pageX;
    cursorY = e.pageY;
    moved=true;
    if(flag){
   //alert(cursorY);
    }
};

document.onmousedown = function(e){
    mouseDown=true;
};

document.onmouseup = function(e){
    mouseDown=false;
};