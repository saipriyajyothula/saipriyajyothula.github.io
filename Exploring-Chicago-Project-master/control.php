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
        <script src="https://cdnjs.cloudflare.com/ajax/libs/timepicker/1.3.5/jquery.timepicker.min.js"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/jqueryui/1.12.1/jquery-ui.min.js"></script>
        <script src="src/plugins/js/wNumb.js"></script>
 
        <!--<script src="src/plugins/js/leaflet-routing-machine.js"></script>-->

      
        <script src="https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.18.1/moment.min.js"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/require.js/2.3.3/require.min.js"></script>
    
       
        <link href='https://api.mapbox.com/mapbox-gl-js/v0.38.0/mapbox-gl.css' rel='stylesheet' />

        <link rel="stylesheet" href="https://unpkg.com/leaflet@1.1.0/dist/leaflet.css"
               integrity="sha512-wcw6ts8Anuw10Mzh9Ytw4pylW8+NAD4ch3lqm9lzAsTxg0GFeJgoAtxuCLREZSC5lUXdVyo/7yfsqFjQ4S+aKw=="
               crossorigin=""/>

        <link rel="stylesheet" href="src/plugins/css/L.Icon.Pulse.css" />  
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/timepicker/1.3.5/jquery.timepicker.min.css">
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/jqueryui/1.12.1/jquery-ui.min.css">
        <!--<link rel="stylesheet" href="src/plugins/css/leaflet-routing-machine.css" />      -->
        <link rel="stylesheet" href="src/plugins/css/nouislider.min.css" />
        <link href='src/css/control.css' rel='stylesheet' />

    </head>

    <body>
    
        <div id ="overviewMapContainer">
             <div id='overviewMap'></div>
        </div>

        <div id='sidebar'>
            <div id="startOptionsContainer"></div>
            <div id="sidebarForms"><div>
        </div>

        <div id="scripts">
            <script src='src/js/control/map.js'></script>
            <script src="src/js/control/sidebar.js"></script>
            <script src='src/js/control/controller.js'></script>
        </div>

    </body>

</html>


