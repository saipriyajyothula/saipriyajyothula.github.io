let Stops = (function() {
  let run = "production"; //let run = 'developement/production';
  let transits = [];

  const transitDataPath = "data/Transits.json";
  const busStopIconURL = "imgs/transits/busStop3.png";

  const trainStopIconURL = "imgs/transits/trainStop.png";

  let stopMarkers = [];
  let stopMarkersForDetailedMap = [];

  let stopIconWithOptions = L.Icon.extend({
    options: {
      iconAnchor: [7, 5]
    }
  });

  let getStopIcon = function(transitType) {
    let iconUrl;
    if (transitType == "Bus") iconUrl = busStopIconURL;
    else if (transitType == "Train") iconUrl = trainStopIconURL;

    return new stopIconWithOptions({
      iconUrl: iconUrl,
      iconSize: [15.12, 18.36]
    });
  };

  let getDetailedStopIcon = function(transitType, transitName) {
    let iconUrl;
    const busDetailedStopIconURL = "imgs/transits/busStop_"+transitName+".png";
    const trainDetailedStopIconURL = "imgs/transits/trainStop_"+transitName+".png";
    if (transitType == "Bus") iconUrl = busDetailedStopIconURL;
    else if (transitType == "Train") iconUrl = trainDetailedStopIconURL;

    return new stopIconWithOptions({
      iconUrl: iconUrl,
      iconSize: [21.75, 14]
    });
  };


  let isTransitInTheList = function(transitList, transitItem) {
    return _.includes(transitList, transitItem);
  }

  let init = function(
    kioskID,
    transitList,
    transitStopFilterList,
    map,
    detailedMap = undefined,
    prevTransitList
  ) {

    if(prevTransitList)
    {
      // prevStopIds = _.map(prevTransitList, function(d,i) {
      //   return d.id
      // }); 
      prevStopIds = [];
      //console.log(prevStopIds);
        cleanStopsOnMap(map,stopMarkers, prevStopIds);
    }
    // cleanStopsOnMap(detailedMap, stopMarkersForDetailedMap);

    transitList = Array.from(transitList);

    filterStops(transitList, transitStopFilterList);
    drawStops(transits, map, detailedMap);

    return transits;
  };

  let getTransit = function() {
    return transits;
  };

  let filterStops = function(transitList, transitStopFilterList) {
    $.ajax({
      type: "GET",
      url: transitDataPath,
      dataType: "json",
      async: false,
      success: function(transitCollection) {
        transits = [];
        _.forEach(transitCollection.Transits, function(data, i) {
          if (_.includes(transitList, data.name)) {
            _.forEach(data.stops, function(stop, j) {
              _.forEach(transitStopFilterList, function(d, k) {
                if (stop != undefined && stop.lat === d.lat && stop.lon === d.lon)
                { 
                    data.stops.splice(j, 1);
                }
                    
              });
            });

            if (data.stops.length > 1) transits.push(data);
          }
        });
      }
    });
  };

  let cleanStopsOnMap = function(map, stops, prevStopIds) {
    _.forEach(stops, function(d,i) {
      if(!isTransitInTheList(prevStopIds, d.transitID))
      {
        map.removeLayer(d.marker);
      }
    });

  }

  let drawStops = function(transits, map, detailedMap) {
    if (run == "production") {
      let marker;
      _.forEach(transits, function(transit, i) {
        _.forEach(transit.stops, function(stop, i) {
          let pulsingIcon = L.icon.pulse({ iconSize: [10, 10], color: "blue" });
          marker = L.marker([stop.lat, stop.lon], { icon: getStopIcon(transit.type) })
          stopMarkers.push({'transitID': transit.id,'marker': marker});
          marker.addTo(map)
            .bindPopup("lat:" + stop.lat + "," + stop.lon);
          if (detailedMap)
            {
              marker =  L.marker([stop.lat, stop.lon], { icon: getDetailedStopIcon(transit.type, transit.name)});
              stopMarkersForDetailedMap.push({'transit': transit,'marker': marker})
              marker.addTo(detailedMap).bindPopup("lat:" + stop.lat + "," + stop.lon);
            }
          
        });
      });
    } else {
      _.forEach(transits, function(transit, i) {
        $.ajax({
          url: "src/php/stops.php",
          type: "post",
          dataType: "json",
          data: {
            busID: "124",
            busDir: "Eastbound"
          },
          success: function(data) {
            _.forEach(data["bustime-response"].stops, function(stops, i) {
              let pulsingIcon = L.icon.pulse({
                iconSize: [10, 10],
                color: d3.scale.category20()
              });
              L.marker([stops.lat, stops.lon], { icon: stopIcon })
                .addTo(map)
                .bindPopup("lat:" + stops.lat + "," + stops.lon);
            });
          }
        });
      });
    }
  };

  return {
    update: init,
    transits: getTransit
  };
})();
