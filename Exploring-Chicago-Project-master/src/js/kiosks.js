let Kiosks = (function() {
  const kioskID = 1;
  const iconSize = [10, 10];
  const color = "#045a8d";
  const latlng = [41.883435, -87.623354];

  let initPosition = function(map, detailedMap = undefined) {
    let pulsingIcon = L.icon.pulse({ iconSize: iconSize, color: color });
    let marker = L.marker(latlng, { icon: pulsingIcon }).addTo(map);

    if (detailedMap)
      marker = L.marker(latlng, { icon: pulsingIcon }).addTo(detailedMap);
  };

  let showKioskID = function() {
    return kioskID;
  };

  return {
    showPosition: initPosition,
    getKioskID: showKioskID
  };
})();
