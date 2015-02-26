var classStructure = document.getElementById('classStructure');
var perJel = document.createElement('div');
perJel.innerHTML ='/';
perJel.setAttribute('class', 'verticalMiddle floatLeft boneText');

var classLevel = 1;
var directoryDivs =[];

//addToDirectoryList('Branium');

//var param1 ='kutya';
var k;
function addToDirectoryList(variable){

    directoryDivs[classLevel]=document.createElement('div');   
    directoryDivs[classLevel].setAttribute('class', 'verticalMiddle floatLeft boneText hoverUnderline');
    //var param1 ='kutya';
    directoryDivs[classLevel].addEventListener('click', function(){
       goToLevel(variable); 
    });
    
    //setAttribute('onclick', 'goToLevel('+variable+')');
    directoryDivs[classLevel].innerHTML = '/   '+variable;
    classStructure.appendChild(directoryDivs[classLevel]);
    classLevel++;
}

function goToLevel(param){
    
}




var cranium ='\n\
<?xml version="1.0" encoding="UTF-8" standalone="no"?> \n\
<svg \n\
   xmlns:dc="http://purl.org/dc/elements/1.1/"\n\
   xmlns:cc="http://creativecommons.org/ns#"\n\
   xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#"\n\
   xmlns:svg="http://www.w3.org/2000/svg"\n\
   xmlns="http://www.w3.org/2000/svg"\n\
   xmlns:xlink="http://www.w3.org/1999/xlink"\n\
   version="1.1"\n\
   width="500"\n\
   height="500"\n\
   id="svg2">\n\
  <metadata id="metadata7"> \n\
    <rdf:RDF> \n\
      <cc:Work rdf:about=""> \n\
        <dc:format>image/svg+xml</dc:format> \n\
        <dc:type \n\
           rdf:resource="http://purl.org/dc/dcmitype/StillImage" /> \n\
        <dc:title></dc:title> \n\
      </cc:Work> \n\
    </rdf:RDF>   \n\
  </metadata>    \n\
  <g id="layer5" style="display:inline" transform="translate(-300,-200)"> \n\
    <path  \n\
       d="m 639.40202,288.55485 c -4.56944,6.04104 -2.899,14.16337 -3.13106,21.21207 0.005,1.78478 -0.4908,\n\
       2.64817 -0.0759,5.81219 6.35178,12.8178 7.13877,23.93117 8.75122,36.47236 0.73739,5.33394 0.41083,\n\
               11.71159 -5.38045,14.12778 -4.60052,2.53062 -10.06868,2.02721 -14.99049,3.21054 -2.15809,\n\
               2.00253 -0.92331,5.35319 -1.18446,8.00088 0.16978,5.26469 -0.0138,10.55478 0.3443,15.79696 \n\
               0.66509,6.02804 2.09767,6.10547 7.92662,6.03922 13.93806,0.0597 28.45949,-1.92924 40.38125,\n\
               -3.30441 6.23121,-1.86629 4.0692,-8.96632 5.74124,-13.72221 1.21617,-6.30668 5.02089,-12.9829 \n\
               11.87579,-14.17412 4.50883,-1.6508 9.71547,0.95289 13.80032,-1.10167 2.35995,-1.87282 6.89654,\n\
               -2.72083 5.71782,-6.52462 -0.0486,-1.99425 -0.0973,-3.98851 -0.14592,-5.98276 -4.96283,-7.64007\n\
               -12.33883,-13.32493 -20,-18.06451 -0.14337,-2.00717 -0.28674,-4.01434 -0.43011,-6.02151 -10.70655,\n\
               0.66253 -21.65715,-2.29085 -30.70786,-8.00292 -8.15839,-5.0572 -12.96456,-14.67492 -12.04189,\n\
               -24.23527 0.0859,-3.17933 0.1718,-6.35867 0.2577,-9.538 m -6.70808,0 c 2.23603,0 4.47205,0 \n\
                6.70808,0"\n\
       id="path4946" \n\
       style="fill:none;stroke:#000000;stroke-width:1px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1"> \n\
      <title id="title5205">left side of maxilla</title> \n\
    </path> \n\
    <path d="m 613.48444,288.24993 c -0.41879,6.04717 -0.13952,16.74808 -1.26853,18.06046 -0.0746,1.66628 -0.34928, \n\
            3.39926 0.28409,4.82955 0.42519,1.23106 0.64298,2.46212 0.56818,3.69318 -5.18629,8.17282 -10.4169, \n\
            16.3161 -13.9284,25.60545 -2.10927,6.30064 -3.98449,12.65979 0.64517,20.64516 0,0 2.89827,4.54759 \n\
            5.16129,5.80645 3.62395,2.01591 7.52082,2.70755 12.259,2.11875 4.40641,0.25561 2.5346,1.52471 3.12313, \n\
            4.18184 0,0 0.33907,10.21882 0,15.47357 -0.38132,5.90961 2.99176,11.86905 -11.76148,11.02441 0,0  \n\
            -18.43566,0.31703 -39.10452,-2.47599 -1.74374,-0.59855 -3.18541,-1.80119 -3.22581,-5.80645 l 0.43011, \n\
            -12.47312 c -0.17331,-2.35062 -0.57824,-4.58543 -3.01076,-5.80645 -3.36279,-1.54108 -4.6713,-5.55691  \n\
            -14.19354,-0.43011 -8.08465,0.0721 -9.30142,0.024 -13.76345,-3.2258 2.60447,-11.28709 9.85196,-27.46625 \n\
            20.21506,-29.89248 l 1.29032,-7.09677 11.1828,0 c 16.12545,-0.25867 22.24075,-6.48267 28.38709,-12.68817 \n\
            11.9079,-10.24027 11.30126,-21.04938 10.91691,-31.84839 l 5.79334,0.30491" \n\
       id="path4957" style="fill:#FF0000;stroke:#000000;stroke-width:1px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1"> \n\
      <title id="title5203">right side of maxilla</title> \n\
    </path> \n\
    <path d="m 626.45403,278.89748 -0.75047,28.33021 0,0 c -2.97306,0.2829 -5.87246,0.43187 -12.63538,7.60543 0.0748,-1.23106 -0.14299,-2.46212 -0.56818,-3.69318 -0.63337,-1.43029 \n\
    -0.35868,-3.16327 -0.28409,-4.82955 1.12901,-1.31238 0.84974,-12.01329 1.26853,-18.06046 5.09969,-6.41759 9.2816,-8.93459 12.96959,-9.35245 z" \n\
       id="path4940" \n\
       style="fill:none;stroke:#000000;stroke-width:1px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1"> \n\
      <title id="title5209">right nasal bone</title> \n\
    </path> \n\
    <path \n\
       d="m 757.37931,330.64621 c 29.92468,7.21993 20.54842,-21.28827 28.01724,-34.48276 6.05355,2.974 9.50611,2.04653 \n\
       13.36207,1.72414 2.60471,2.86922 5.00078,7.40756 5.60345,26.2931 3.78616,12.39253 8.34962,14.2916 12.93103,15.94828 \n\
       5.23281,1.08458 10.86252,2.28255 13.36207,2.5862 -4.54841,5.88095 0.42986,9.85656 1.29311,14.65517 -7.98383,4.23901 \n\
       -19.48793,5.39778 -30.60345,6.89656 l -36.63793,3.01724 c 4.36149,-6.53201 2.81761,-13.32077 -2.15518,-20.25862 -1.8947,\n\
       -5.41239 -9.86125,-9.13816 -5.17241,-16.37931 z" \n\
       id="path4951" \n\
       style="fill:none;stroke:#000000;stroke-width:1px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1"> \n\
      <title \n\
         id="title5211">left zygomatic bone</title>\n\
    </path> \n\
    <path \n\
       d="m 471.96413,349.66461 c -29.92468,7.21993 -20.54842,-21.28827 -28.01724,-34.48276 -6.05355,2.974 -9.50611,2.04653 -13.36207,\n\
       1.72414 -2.60471,2.86922 -5.00078,7.40756 -5.60345,26.2931 -3.78616,12.39253 -8.34962,14.2916 -12.93103,15.94828 -5.23281,\n\
       1.08458 -10.86252,2.28255 -13.36207,2.5862 4.54841,5.88095 -0.42986,9.85656 -1.29311,14.65517 7.98383,4.23901 19.48793,5.39778 30.60345,6.89656 \n\
        l 36.63793,3.01724 c -4.36149,-6.53201 -2.81761,-13.32077 2.15518,-20.25862 1.8947,-5.41239 9.86125,-9.13816 5.17241,-16.37931 z" \n\
       id="path4953"  style="fill:none;stroke:#000000;stroke-width:1px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1"> \n\
      <title \n\
         id="title5213">right zygomatic bone</title> \n\
    </path> \n\
    </g> \n\
</svg>';
