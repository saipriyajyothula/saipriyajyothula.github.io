<?php 
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Credentials: true");
header("Access-Control-Max-Age: 1000");
header("Access-Control-Allow-Headers: X-Requested-With, Content-Type, Origin, Cache-Control, Pragma, Authorization, Accept, Accept-Encoding");
header("Access-Control-Allow-Methods: PUT, POST, GET, OPTIONS, DELETE");
?>

<html>
    <head>
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css">
        
        <script src="https://cdnjs.cloudflare.com/ajax/libs/d3/3.4.11/d3.min.js"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/lodash.js/4.13.1/lodash.min.js"></script>
        <script src="http://d3js.org/queue.v1.min.js"></script>
        <script src="https://code.jquery.com/jquery-2.1.2.min.js"></script>
        <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/js/bootstrap.min.js"></script>
        <script src='https://api.mapbox.com/mapbox-gl-js/v0.38.0/mapbox-gl.js'></script>
        <script src="https://unpkg.com/leaflet@1.1.0/dist/leaflet.js"
                integrity="sha512-mNqn2Wg7tSToJhvHcqfzLMU6J4mkOImSPTxVZAdo+lcPlk+GhZmYgACEe0x35K7YzW1zJ7XyJV/TT1MrdXvMcA=="
                crossorigin=""></script>


        <script src="src/plugins/js/L.Icon.Pulse.js"></script>
        <script src="src/plugins/js/L.D3SvgOverlay.min.js"></script>
        <script src="src/plugins/js/leaflet.migrationLayer.js"></script>
        <script src="src/plugins/js/leaflet.curve.js"></script>
        <script src="src/plugins/js/nouislider.js"></script>
        <script src="src/plugins/js/wNumb.js"></script>
        <!--<script src="src/plugins/js/leaflet-routing-machine.js"></script>-->

      
        <script src="https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.18.1/moment.min.js"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/require.js/2.3.3/require.min.js"></script>
    
       
        <link href='https://api.mapbox.com/mapbox-gl-js/v0.38.0/mapbox-gl.css' rel='stylesheet' />

        <link rel="stylesheet" href="https://unpkg.com/leaflet@1.1.0/dist/leaflet.css"
               integrity="sha512-wcw6ts8Anuw10Mzh9Ytw4pylW8+NAD4ch3lqm9lzAsTxg0GFeJgoAtxuCLREZSC5lUXdVyo/7yfsqFjQ4S+aKw=="
               crossorigin=""/>

        <link rel="stylesheet" href="src/plugins/css/L.Icon.Pulse.css" />  
        <!--<link rel="stylesheet" href="src/plugins/css/leaflet-routing-machine.css" />      -->
        <link rel="stylesheet" href="src/plugins/css/nouislider.min.css" />
        <link href='src/css/main.css' rel='stylesheet' />

    </head>

    <body>
        <!--<div id ="infobar">
        </div>-->
        <div id ="overviewMapContainer">
             <!--<p>Overview</p>-->
            
             <div id='overviewMap'></div>
             <div id='offmap'>
                <div id='offmapContainer'></div>
             </div>

        </div>

        <article class="clock">
            <div class="hours-container">
                <div class="hours"></div>
            </div>
            <div class="minutes-container">
                <div class="minutes"></div>
            </div>
            <div class="seconds-container">
                <div class="seconds"></div>
            </div>
        </article>
                
        <div id ="detailedMapContainer">
            <!--<p id="localview">Detailed View</p>-->
            <div id='detailedMap'></div>
            <div id='detailedMapText'>
                <p>DETAILED VIEW</p>
            </div>
        </div>

        <div id='sidebar'>
            <!--<div class='heading'>
                <h1>Top Attractions</h1>
            </div>-->
            <div id='listings' class='listings'></div>
            <div class="sliders" id="controlpanel"></div>
            <div class="sliders" id="timelapse"></div>
            <div class="sliders" id="daycontrol"></div>
            <div class="sliders" id="timecontrol"></div>
            <div class="sliders" id="nexthourcontrol"></div>
        </div>

        <div id='legend'>
            <div id = 'legend_dollar'>
                <p>$<br>$$<br>$$$</p>
            </div>
            <div id = 'legend_dollaramt'>
                <p>$3-10<br>$11-30<br>$31+</p>
            </div>
            <div id = 'legend_border'></div>
            <img id = "QRcode" src = "imgs/sidebar/QR_code.png">
            <div id = 'legend_infotext'>
                <p>For further details download the app.</p>
            </div>
        </div>
        
        <div id="scripts">
            <script src='src/js/map.js'></script>
            <script src="src/js/animation.js"></script>
            <script src='src/js/attractions.js'></script>
            <script src='src/js/transits.js'></script>
            <script src='src/js/kiosks.js'></script>
            <script src='src/js/stops.js'></script>
            <script src='src/js/timeControl.js'></script>
            <script src='src/js/hopon.js'></script>
            <script src='src/js/controller.js'></script>
        </div>

    </body>

</html>


