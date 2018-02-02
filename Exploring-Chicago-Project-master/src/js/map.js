let Map = (function() {
  const accessToken =
    "pk.eyJ1IjoibXRob21hNTIiLCJhIjoiY2lmOXNja3Y0MWZwenNra241NXNyejRybyJ9.R6CQ-cSJaEa2Ziu1iS7cAQ";
  const mapID = "mapbox.light";

  let tileURL =
    "https://api.mapbox.com/styles/v1/mthoma52/cjatxzuveioap2rmtxm7ykhmf/tiles/256/{z}/{x}/{y}?access_token=" +
    accessToken;

  let init = function(attributes, mainMap = undefined) {
    let title = "Overview";

    let map = L.map(attributes.id, {
      closePopupOnClick: false,
      attributionControl: false,
      zoomSnap:0.25,
    }).setView(attributes.latlng, attributes.zoom);

    let bounds = [
      [map.getBounds()._southWest.lat, map.getBounds()._southWest.lng],
      [map.getBounds()._northEast.lat, map.getBounds()._northEast.lng]
    ];

    // let walkingDistanceLine = L.circle(
    //   attributes.latlng,
    //   attributes.walkingDistance
    // ).setStyle({
    //   fill: true,
    //   fillColor: "#de2d26",
    //   fillOpacity: 0.1,
    //   stroke: false
    // });

    let border = L.rectangle(map.getBounds()).setStyle({
      fill: false,
      stroke: true,
      color: "#58595b",
      weight: 5
    });

    if (attributes.isDetailedView) {
      title = "Detailed View";
      border.addTo(map);

      tileURL =
        "https://api.mapbox.com/styles/v1/mthoma52/cjamytzaue2t82rsuyykj8g1m/tiles/256/{z}/{x}/{y}?access_token=" +
        accessToken;

      L.rectangle(bounds, {
        fill: false,
        stroke: true,
        color: "#58595b",
        weight: 1
      }).addTo(mainMap);

    //       plotWalkingDistance(
    //   map,
    //   attributes.latlng,
    //   attributes.walkingDistance,
    //   attributes.walkingDistanceLineOffset
    // );
    }

    map.zoomControl.remove();
    map.dragging.disable();
    map.touchZoom.disable();
    map.doubleClickZoom.disable();
    map.scrollWheelZoom.disable();


    // walkingDistanceLine.addTo(map);

    L.tileLayer(tileURL, {
      id: mapID
    }).addTo(map);

    return map;
  };

  let plotWalkingDistance = function(
    map,
    startPoint,
    walkingDistance,
    walkingDistanceLineOffset
  ) {
    const R = 6378.1;
    const brng = 1.57;

    let length = walkingDistance / 1000;

    lat1 = toRadian(startPoint[0]);
    lon1 = toRadian(startPoint[1]);

    lat2 = Math.asin(
      Math.sin(lat1) * Math.cos(length / R) +
        Math.cos(lat1) * Math.sin(length / R) * Math.cos(brng)
    );

    lon2 =
      lon1 +
      Math.atan2(
        Math.sin(brng) * Math.sin(length / R) * Math.cos(lat1),
        Math.cos(length / R) - Math.sin(lat1) * Math.sin(lat2)
      );

    lat2 = toDegrees(lat2);
    lon2 = toDegrees(lon2);

    let line = L.polyline([startPoint, [lat2, lon2]], {
      color: "#de2d26",
      weight: 3,
      opacity: 0.7,
      dashArray: "5,15",
      lineJoin: "round"
    });

    line.addTo(map);

    let textOverlay = L.d3SvgOverlay(function(sel,proj){ 
      sel.append("text")
        .text("10 min Walk")
        .attr("font-size", "12px")
        .attr("font-weight", "bold")
        .attr("fill", "black")
        .attr("class", "walkLengthText")
        .attr("transform", function() { return "translate("+(proj.latLngToLayerPoint(startPoint).x +50) + ","+(proj.latLngToLayerPoint(startPoint).y-5)+")"; });
    });

     textOverlay.addTo(map);
  };

  let toDegrees = function(angle) {
    return angle * (180 / Math.PI);
  };

  let toRadian = function(angle) {
    return angle * (Math.PI / 180);
  };

  return {
    show: init
  };
})();
