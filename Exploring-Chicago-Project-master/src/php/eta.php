<?php 
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Credentials: true");
header("Access-Control-Max-Age: 1000");
header("Access-Control-Allow-Headers: X-Requested-With, Content-Type, Origin, Cache-Control, Pragma, Authorization, Accept, Accept-Encoding");
header("Access-Control-Allow-Methods: PUT, POST, GET, OPTIONS, DELETE");

$apiKEY = 'AIzaSyCG1P6OqgxoQEvknzQzHFSd1cJxs2Ahu9Q';
$originLat = $_POST['orginLat'];
$originLng = $_POST['orginLng'];
$destinationLat = $_POST['destinationLat'];
$destinationLng = $_POST['destinationLng'];

$etaURL = 'https://maps.googleapis.com/maps/api/directions/json?origin='.$originLat.','.$originLng.'&destination='.$destinationLat.','.$destinationLng.'&mode=transit&key='.$apiKEY;

$json = file_get_contents($etaURL);
    
echo $json;

?>
