let App = (function() {
  const mainMapAttribute = {
    id: "overviewMap",
    latlng: [41.883435, -87.623354],
    zoom: 13.5,
  };

  let map;

  let init = function() {
     map = Map.show(mainMapAttribute);
     Sidebar.init(map);
  };

  let getMap = function() {
    return map;
  }

  let update = function(time=undefined, day=undefined, isTimelapse=false) {
    let map = getMap();
  };
  
  return {
    start: init,
    update: update
  };

})();

App.start();

