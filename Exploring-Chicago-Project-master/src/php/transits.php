<?php 
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Credentials: true");
header("Access-Control-Max-Age: 1000");
header("Access-Control-Allow-Headers: X-Requested-With, Content-Type, Origin, Cache-Control, Pragma, Authorization, Accept, Accept-Encoding");
header("Access-Control-Allow-Methods: PUT, POST, GET, OPTIONS, DELETE");

$apiKEY = 'SrESNk3VtTZvrQgcU69fzZ6Uw';
$transitURL = 'http://ctabustracker.com/bustime/api/v2/getvehicles?tmres=s&format=json&key='.$apiKEY.'&rt=';
$busID = $_POST['busID'];

$json_url = $transitURL.$busID;
$json = file_get_contents($json_url);
    
echo $json;

?>
