
function customAlert(msg,duration)
    {
    var opac = document.createElement("div");
    opac.setAttribute('style', 'position: fixed; top:0; left: 0; height: 100%; \n\
                                    width: 100%; background: gray; opacity: 0.6;')
    var alertDiv = document.createElement("div");
     
    alertDiv.setAttribute("style","position: absolute; top:50%; left: 50%; margin:0 auto; \n\
                                border: solid 1px; width:200px; height:100px; \n\
                            transform: translate(-50%, -50%); background-color: white ;");
    
    var textDiv = document.createElement("div");
    textDiv.setAttribute("style","position: relative; top: 50%; transform: translateY(-50%);\n\
                           text-align: center;");
    textDiv.innerHTML = msg;
    alertDiv.appendChild(textDiv);
    
    setTimeout(function(){
       opac.parentNode.removeChild(opac);
       alertDiv.parentNode.removeChild(alertDiv);
     },duration);
      document.body.appendChild(opac);
     document.body.appendChild(alertDiv);
    }
