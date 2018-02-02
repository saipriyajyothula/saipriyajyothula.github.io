let Transit = (function() {
  const ctaTransitToken = "SrESNk3VtTZvrQgcU69fzZ6Uw";
  const transitDataPath = "data/Transits.json";
  const busIconURL = "imgs/transits/bus.png";
  
  const transitColors = {
    bus: "#676a6b",
    blue: "#1c75bc",
    red: "#de2d26",
    orange: "#feb24c",
    pink: '#ed499a'
  };

  let busIcon = L.icon({
    iconUrl: busIconURL,
    iconSize: [60, 60]
  });

  let markers = [];

  let init = function(kioskID, map, transit, isTimelapse) {
    Animation.clear();
    _.forEach(transit, function(d, i) {
      drawCurvePath(d, map, isTimelapse);
    });
  };

  let drawCurvePath = function(transit, map, isTimelapse) {
    let from = [];
    let to = [];
    let color;
    if(transit.type =="Bus")
      color = transitColors.bus;
    else if(transit.type == "Train")
      color = transitColors[transit.name];
    _.forEach(transit.stops, function(d,i) {
      if(transit.stops[i+1] != undefined) {
        from = {lat: transit.stops[i].lat, lon: transit.stops[i].lon};
        to = {lat: transit.stops[i + 1].lat, lon:  transit.stops[i + 1].lon};
        Animation.drawCurvePath(map, from, to, color, transit, isTimelapse);
      }
    });
  };

  let getETA = function(origin, destintaion, transitName) {
    let eta = undefined;
    $.ajax({
      url: "src/php/eta.php",
      type: "post",
      dataType: "json",
      async: false,
      data: {
        orginLat: origin.lat,
        orginLng: origin.lon,
        destinationLat: destintaion.lat,
        destinationLng: destintaion.lon
      },
      success: function(data) {
        _.forEach(data, function(d, i) {
          _.forEach(d, function(d) {
            if (d.hasOwnProperty("legs"))
              _.forEach(d.legs[0].steps, function(d, i) {
                if (d.transit_details != undefined)
                  if (d.transit_details.line.short_name == transitName)
                      eta = moment.unix(d.transit_details.arrival_time.value - d.transit_details.departure_time.value).format('m');
              });
          });
        });
      }
    });

    return eta;
  };

  return {
    update: init
  };
})();
