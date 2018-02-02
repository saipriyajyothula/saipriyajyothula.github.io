<?php 
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Credentials: true");
header("Access-Control-Max-Age: 1000");
header("Access-Control-Allow-Headers: X-Requested-With, Content-Type, Origin, Cache-Control, Pragma, Authorization, Accept, Accept-Encoding");
header("Access-Control-Allow-Methods: PUT, POST, GET, OPTIONS, DELETE");
header("Content-Type: application/json", true);


function get_numerics ($str) {
    preg_match_all('/\d+./', $str, $matches);
    return $matches[0];
}


function base64_to_jpeg($base64_string, $output_file) {
    $ifp = fopen($output_file, "wb"); 

    $data = explode(',', $base64_string);

    fwrite($ifp, base64_decode($base64_string)); 
    fclose($ifp); 

    return $output_file; 
}

function addKiosk() {
    $id = $_POST['id'];
    $name = $_POST['name'];
    $lat = str_replace("Lat:", "", $_POST['lat']);
    $lon = str_replace("Lon:", "", $_POST['lon']);
    $mapCenterLat = $_POST['mapCenterLat'];
    $mapCenterLon = $_POST['mapCenterLon'];
    $mapZoom = $_POST['mapZoom'];
    $image = $_POST['image'];

    $inp = file_get_contents('../../data/results.json');
    $tempArray = json_decode($inp, true);
    if(!$tempArray)
        $tempArray = [];
    $data = array('id'=>$id, 'name'=>$name, 'lat'=>$lat, 'lon'=>$lon, 
                    'iconUrl'=>"imgs/kiosks/".$id.".png", 'iconSize'=>array(200, 200),
                    'mapCenterLat'=>$mapCenterLat, 'mapCenterLon'=>$mapCenterLon, 'mapZoom'=>$mapZoom);
    array_push($tempArray, $data);
    $jsonData = json_encode($tempArray);
    $imgName = str_replace(' ', '_', $name);
    file_put_contents('../../data/results.json', $jsonData);
    file_put_contents('../../imgs/kiosks/'.$id.'.png', base64_decode(preg_replace('#^data:image/\w+;base64,#i', '', $image)));

    echo json_encode($id);
}

function updateKiosk() {
    $id = $_POST['id'];
    $name = $_POST['name'];
    $lat = str_replace("Lat:", "", $_POST['lat']);
    $lon = str_replace("Lon:", "", $_POST['lon']);
    $mapCenterLat = $_POST['mapCenterLat'];
    $mapCenterLon = $_POST['mapCenterLon'];
    $mapZoom = $_POST['mapZoom'];
    $image = $_POST['image'];

    $inp = file_get_contents('../../data/results.json');
    $tempArray = json_decode($inp, true);
    forEach($tempArray as $key=>$element){
        if($element['id'] == $id)
        {
            $tempArray[$key]['name'] = $name;
            $tempArray[$key]['lat'] = $lat;
            $tempArray[$key]['lon'] = $lon;
            $tempArray[$key]['mapCenterLat'] = $mapCenterLat;
            $tempArray[$key]['mapCenterLon'] = $mapCenterLon;
            $tempArray[$key]['mapZoom'] = $mapZoom;

        }
    }
    $jsonData = json_encode($tempArray);
    file_put_contents('../../data/results.json', $jsonData);
    if($image!="")
        file_put_contents('../../imgs/kiosks/'.$id.'.png', base64_decode(preg_replace('#^data:image/\w+;base64,#i', '', $image)));

    echo json_encode($id);
}

function addAttraction() {
    $id = $_POST['id'];
    // $kioskID = $_POST['kioskID'];
    $name = $_POST['name'];
    $lat = str_replace("Lat:", "", $_POST['lat']);
    $lon = str_replace("Lon:", "", $_POST['lon']);
    $endLat = str_replace("Lat:", "", $_POST['endLat']);
    $endLon = str_replace("Lon:", "", $_POST['endLon']);
    $type = $_POST['type'];
    $day = $_POST['day'];
    $attractionFile = '';
    $attractionFile = '../../data/attractions/AttractionList.json';
    $image = $_POST['image'];

    if (!file_exists($attractionFile)) {
        // $content = '{"attractions": []}';
        $fh = fopen($attractionFile, 'w');
        // fwrite($fh, $content."\n");
        fclose($fh);
    } 

    $inp = file_get_contents($attractionFile);
    $tempArray = json_decode($inp, true);
    if(!$tempArray)
        $tempArray = [];
    $data = array('id'=>$id, 'name'=>$name, 'lat'=>$lat, 'lon'=>$lon,
                    'endLat'=>$endLat, 'endLon'=>$endLon,
                    'type'=>$type,
                    'iconUrl'=>"imgs/attractions/".$name.".png", 'iconSize'=>array(200, 200));

    if($day[0]!="everyday")
        $data['days'] = $day;
    array_push($tempArray, $data);
    $jsonData = json_encode($tempArray);
    $imgName = str_replace(' ', '_', $name);
    file_put_contents($attractionFile, $jsonData);

    // if (!file_exists('../../imgs/attractions/'.$kioskID)) {
    //     mkdir('../../imgs/attractions/'.$kioskID, 0777, true);
    // }

    file_put_contents('../../imgs/attractions/'.$name.'.png', base64_decode(preg_replace('#^data:image/\w+;base64,#i', '', $image)));

    echo json_encode($day);
}


if ($_POST['action'] == "addKiosk") {
    addKiosk();
}

else if ($_POST['action'] == "updateKiosk") {
    updateKiosk();
}

else if ($_POST['action'] == "addAttraction") {
    addAttraction();
}

?>