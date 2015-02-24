<?php

ini_set('display_errors', 'On');
error_reporting(E_ALL);

header('Content-type:text/xml');
$xml_content = file_get_contents('/var/www//phpSesame/SVGFiles/sample.xml');

echo $xml_content;

//$xml_content=simplexml_load_file('/var/www//phpSesame/SVGFiles/CraniumForm.svg');
//print_r($xml_content);

//Send SVG Part
/*
header('Content-type:text/xml');
$xml_content = file_get_contents('/var/www//phpSesame/SVGFiles/CraniumForm.svg');
echo $xml_content;
*/


/*
header('Content-type:text/xml');

$doc = new DOMDocument('1.0');

$skeleton = $doc->createElement('skeleton');

$skull = $doc->createElement('skull');
$hand = $doc->createElement('hand');

$skull1 = $doc->createElement('skull1');
$skull2 = $doc->createElement('skull2');
$hand1 = $doc->createElement('hand1');
$hand2 = $doc->createElement('hand2');

$skull11 = $doc->createElement('skull11');
$skull12 = $doc->createElement('skull12');
$hand11 = $doc->createElement('hand11');
$hand12 = $doc->createElement('hand12');

$skull21 = $doc->createElement('skull21');
$skull22 = $doc->createElement('skull22');
$hand21 = $doc->createElement('hand21');
$hand22 = $doc->createElement('hand22');

$doc->appendChild($skeleton);
$skeleton->appendChild($skull);
$skeleton->appendChild($hand);

$hand->appendChild($hand1);
$hand->appendChild($hand2);

$skull->appendChild($skull1);
$skull->appendChild($skull2);

$hand1->appendChild($hand11);
$hand1->appendChild($hand12);
$hand2->appendChild($hand21);
$hand2->appendChild($hand22);

$skull1->appendChild($skull11);
$skull1->appendChild($skull12);
$skull2->appendChild($skull21);
$skull2->appendChild($skull22);

echo $doc->saveXML();
*/
