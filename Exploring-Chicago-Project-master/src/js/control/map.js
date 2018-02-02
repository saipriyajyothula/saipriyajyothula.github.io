let Map = (function() {
  const accessToken =
    "pk.eyJ1IjoibXRob21hNTIiLCJhIjoiY2lmOXNja3Y0MWZwenNra241NXNyejRybyJ9.R6CQ-cSJaEa2Ziu1iS7cAQ";
  const mapID = "mapbox.light";

  let tileURL =
    "https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=" +
    accessToken;

  let init = function(attributes) {
    let title = "Overview";

    let map = L.map(attributes.id, {
      closePopupOnClick: false,
      attributionControl: false
    }).setView(attributes.latlng, attributes.zoom);

    L.tileLayer(tileURL, {
      id: mapID
    }).addTo(map);

    return map;
  };

  return {
    show: init
  };
})();
