let Attractions = (function() {
  const attractionDataPath = "data/Attractions.json";
  let transitList;
  let transitStopFilterList;
  let currentTime;
  let currentDay;
  let markers = new Array();
  let sidebarAttractions = new Set();
  let futureAttractions = [];
  let currentAttractionList;

  let init = function(map, time=undefined, day=undefined, isTimeLapse, attractionList) {
    transitList = new Set();
    transitStopFilterList = new Set();
    futureAttractions = [];
    if(!time)
      currentTime = moment().format('H:mm');
    else
      currentTime = moment(time, "h:mm A").format('HH:mm');

    if(!day)
      currentDay = moment().format("dddd").toLowerCase();
    else
      currentDay = day;

    
    $.ajax({
      type: "GET",
      url: attractionDataPath,
      dataType: "json",
      async: false,
      success: function(attractions) {
        attractions = filterAttractions(attractions, map);
        transitList = filterTransits(attractions);
        deleteMarkerList = [];

        if(attractionList)
        {
          attractionIds = _.map(attractions, function(d,i) {
              return d.id;
          });
          cleanUpAttractions(map, attractionIds, attractionList);
        }

        _.forEach(attractions, function(attraction, i) {
          if(attractionList)
          {
            attractionIds = _.map(attractionList, function(d,i) {
              return d.id;
            });
            if(!isAttractionInTheList(attractionIds, attraction.id))
                addAttractionToMap(attraction,map);

            populateSidebar(attraction, i);
          }
          else {
                addAttractionToMap(attraction, map);
                populateSidebar(attraction, i);
          }
        });

        // deleteMarkerFromTheMap(deleteMarkerList);
        currentAttractionList = attractions;
        populateInfoBar(time);
        // if(!isTimeLapse)
        // showFutureAttractions(futureAttractions, map);
      }
    });

    return currentAttractionList;
  };

  let isAttractionInTheList = function(attractionList, attractionItem) {
    return _.includes(attractionList, attractionItem);
  }

  let addAttractionToMap = function(attraction, map) {
          if(attraction.hasOwnProperty("type")&&attraction.type=="offmap"){
              //console.log(attraction.name);
          }
          else{
          let attractionIcon = L.icon({
                    iconUrl: attraction.iconUrl,
                    iconSize: [attraction.iconSize[0]/2, attraction.iconSize[1]/2]
                  });

          let marker = L.marker(attraction.coordinates, {
                icon: new L.DivIcon({
                  className: 'fadeTimelapse',
                  html: '<div id="nowAttractionIcons"><img width='+attraction.iconSize[0]/2+' height='+attraction.iconSize[1]/2+' src="'+attraction.iconUrl+'"/></div>'
                }),
                zIndexOffset: 100
          });
          markers.push({'attraction':attraction, 'marker': marker});
          marker.addTo(map);
          marker.valueOf()._icon.style.border = 'green';
          }
  }

  let showFutureAttractions = function(futureAttractions, map) {
    let timer = setInterval(function() {

      let attraction = _.sample(futureAttractions);

      let marker = L.marker(attraction.coordinates, {
            icon: new L.DivIcon({
               className: 'futureAttractions',
               html: '<div id="futureAttractionIcons"><img width='+attraction.iconSize[0]/2+' height='+attraction.iconSize[1]/2+' src="'+attraction.iconUrl+'"/> <p> '+attraction.hours.start_time+'</p></div>'
                      
            }),
            zIndexOffset: 100
      });

      marker.addTo(map);
      setTimeout(function(){ map.removeLayer(marker); }, 8 * 1000);
      
    }, 10 * 1000);
  }

  let deleteMarkerFromTheMap = function(deleteMarkerList) {
    _.forEach(deleteMarkerList, function(d,i) {
        map.removeLayer(d);
    })
  }

  let cleanUpAttractions = function(map, attractionIds, prevAttractionList) {
  
    _.forEach(markers, function(d,i) {
      if(!isAttractionInTheList(attractionIds, d.attraction.id ))
      {
        map.removeLayer(d.marker);
      }
    });
    sidebarAttractions.clear();
    $('#listings').empty();
    $('#infobar').empty();
    $('#offmapContainer').empty();
  }

  let getTransitList = function() {
    return transitList;
  };

  let getTransitStopFilterList = function() {
    return transitStopFilterList;
  };

  let filterTransits = function(data) {
    let transitSet = new Set();
    _.forEach(data, function(attraction, i) {
      _.forEach(attraction.cta, function(d, i) {
        transitSet.add(d);
      });
    });
    return transitSet;
  };

  let filterAttractions = function(data, map) {
    const attractions = data.attractions.filter(function(d, i) {
      //console.log(map.getBounds().contains(new L.LatLng(d.coordinates[0],d.coordinates[1])));
      if (isOpenYearRound(d) || isOpenToday(d)) {
        if (isOpenNow(d)) return d;
        else if (d.hasOwnProperty("stops")) transitStopFilterList.add(d.stops);

        if(isOpenAfter(d)) {
          futureAttractions.push(d);
        }
      } 
      else if (d.hasOwnProperty("stops")) transitStopFilterList.add(d.stops);
    });

    cleanFilterStopList(attractions);

    return attractions;
  };

  let cleanFilterStopList = function(attractions) {
    let stops = attractions.map(function(d, i) {
      if (d.hasOwnProperty("stops")) return d.stops;

      return false;
    });

    stops = _.pull(_.flattenDeep(stops), false);
    transitStopFilterList = _.flattenDeep(Array.from(transitStopFilterList));
    const intersection = _.intersectionWith(
      stops,
      transitStopFilterList,
      _.isEqual
    );

    _.forEach(intersection, function(d, i) {
      _.remove(transitStopFilterList, d);
    });
  };

  const timeToSeconds = s => {
    const m = s.match(/(\d{1,2})\:(\d{2})\s*(AM|PM)*/);
    return parseInt(m[1]) * 60 + parseInt(m[2]) + (m[3] === "PM" ? 12 * 60 : 0);
  };

  let isOpenNow = function(attraction) {
    if (isOpenAllHours(attraction) || isOpenAtThisHour(attraction))
      return attraction;
  };

  let isOpenAfter = function(attraction) {
    if(isOpenAfterThisHour(attraction))
      return attraction;
  }

  let isOpenAtThisHour = function(attraction) {
    return (
      timeToSeconds(attraction.hours.start_time) <=
        timeToSeconds(currentTime) &&
      timeToSeconds(attraction.hours.end_time) >
        timeToSeconds(currentTime)
    );
  };

  let isOpenAfterThisHour = function(attraction) {
    return (
      timeToSeconds(attraction.hours.start_time) >=
        timeToSeconds(currentTime) 
    );
  };

  let isOpenAllHours = function(attraction) {
    return !attraction.hasOwnProperty("hours");
  };

  let isOpenToday = function(attraction) {
    let open = false;
    _.forEach(attraction.days, function(d, i) {
      if (d.toLowerCase() == currentDay) open = true;
    });
    return open;
  };

  let isOpenYearRound = function(attraction) {
    return !attraction.hasOwnProperty("days");
  };

  let populateInfoBar = function(time) {
    let timeToDisplay;

    if(time)
      timeToDisplay = time;
    else 
      timeToDisplay = currentTime;

    // const infoBar = document.getElementById("infobar");
    // const infoBarTitle =  document.createElement("span");
    // infoBarTitle.id = "infobarTitle";
    // const infoBarTime = document.createElement("span");
    // infoBarTime.id = "infobarTime";

    // infoBarTitle.innerHTML = "Cloud Gate";
    // infoBarTime.innerHTML = moment().format("MM/DD/YYYY dddd") + " " + moment(timeToDisplay, "h:mm a").format("h:mm a");
    // infoBar.appendChild(infoBarTime);
    // infoBar.appendChild(infoBarTitle);
  }

  let populateSidebar = function(attraction, index) {
    // if(!(_.includes(Array.from(sidebarAttractions),attraction.id)))
    // 
      if(attraction.hasOwnProperty("type")&&attraction.type == "offmap"){
//          console.log(attraction.name);
          const offmapContainer = document.getElementById('offmapContainer');
          if(offmapContainer.childElementCount==0){
              offmapContainer.Childnum = 0;
              const descTextDiv= offmapContainer.appendChild(document.createElement("div"));
              descTextDiv.id = "offmapDescTextDiv";
              const descText = descTextDiv.appendChild(document.createElement("span"));
              descText.className = "offmapDescText";
              descText.innerHTML = "*List of attractions not shown on the map";
              const offmapList = offmapContainer.appendChild(document.createElement("div"));
              offmapList.id = "offmapList";
              
              const offmapAttrEmpty = offmapList.appendChild(document.createElement("div"));
              offmapAttrEmpty.className = "offmapAttrEmpty";
          }
          
          if(offmapContainer.Childnum<5){
          
              offmapContainer.Childnum+=1;

              const offmapAttr = document.getElementById('offmapList').appendChild(document.createElement("div"));
              offmapAttr.className = "offmapAttr";
              
              const offmapImgDiv = offmapAttr.appendChild(document.createElement("div"));
              offmapImgDiv.className = "offmapImgDiv";
              
              const offmapImg = offmapImgDiv.appendChild(document.createElement("img"));
              offmapImg.className = "offmapImg";
              offmapImg.src = attraction.iconUrl;
              
              const offmapTitleDiv = offmapAttr.appendChild(document.createElement("div"));
              offmapTitleDiv.className = "offmapTitleDiv";
              
              const offmapTitle = offmapTitleDiv.appendChild(document.createElement("h3"));
              offmapTitle.className = "offmapTitle";
              offmapTitle.innerHTML = attraction.name;

              const offmapHours = offmapTitleDiv.appendChild(document.createElement("span"));
              offmapHours.className = "offmapHours";
              if (attraction.hasOwnProperty("hours")){
                  if((attraction.hours.start_time == "00:00")&&(attraction.hours.end_time == "24:00")){
                      offmapHours.innerHTML = "Open All Hours<br>";
                  }
                  else{
                      offmapHours.innerHTML = 
                          moment(attraction.hours.start_time, "HH:mm").format("h a") +
                          " - " +
                          moment(attraction.hours.end_time, "HH:mm").format("h a") +
                          "<br>";}
              }
              
              const offmapTransitDiv = offmapTitleDiv.appendChild(document.createElement("div"));
              offmapTransitDiv.className = "offmapTransitDiv";
              
              const offmapUberIcon = offmapTransitDiv.appendChild(document.createElement("img"));
              offmapUberIcon.className = "offmapUberIcon";
              offmapUberIcon.src = 'imgs/transits/uber.png';
              
              const offmapUberText = offmapTransitDiv.appendChild(document.createElement("span"));
              offmapUberText.className = "offmapUberText";
              offmapUberText.innerHTML = "40 min";
              
              const offmapTrainIcon = offmapTransitDiv.appendChild(document.createElement("img"));
              offmapTrainIcon.className = "offmapTrainIcon";
              offmapTrainIcon.src = 'imgs/transits/transit.png';
              
              const offmapTrainText = offmapTransitDiv.appendChild(document.createElement("span"));
              offmapTrainText.className = "offmapTrainText";
              offmapTrainText.innerHTML = "1.2 hrs";
              
          }
      }
      else{
      sidebarAttractions.add(attraction.id);
      const listings = document.getElementById("listings");
      const listing = listings.appendChild(document.createElement("div"));
      listing.className = "item";
      listing.id = "listing-" + index;

      if (attraction.hasOwnProperty("sidebarUrl")) {
        listing.className = "item_img";

        const sidebarImg = listing.appendChild(document.createElement("img"));
        sidebarImg.className = "sidebarImg";
        sidebarImg.dataPosition = index;
        sidebarImg.src = attraction.sidebarUrl;
      } else {
        const listing1 = listing.appendChild(document.createElement("div"));
        listing1.className = "sub-item-image";

        const icon = listing1.appendChild(document.createElement("img"));
        icon.className = "icon";
        icon.style =
          "width:" +
          attraction.iconSize[0] +
          "px;height:" +
          attraction.iconSize[1] +
          "px;";
        icon.dataPosition = index;
        icon.src = attraction.iconUrl;

        const listing2 = listing.appendChild(document.createElement("div"));
        listing2.className = "sub-item";

        const title = listing2.appendChild(document.createElement("h3"));
        title.className = "title";
        title.dataPosition = index;
        title.innerHTML = attraction.name;
        if(attraction.price)
          title.innerHTML+= '<span class="attraction_price">'+attraction.price+'</span>';

        const hours = listing2.appendChild(document.createElement("span"));
        hours.className = "openHours";
        hours.dataPosition = index;
        if (attraction.hasOwnProperty("hours")){
            if((attraction.hours.start_time == "00:00")&&(attraction.hours.end_time == "24:00")){
                hours.innerHTML = "Open All Hours<br>";
            }
            else{
          hours.innerHTML =
            moment(attraction.hours.start_time, "HH:mm").format("h a") +
            " - " +
            moment(attraction.hours.end_time, "HH:mm").format("h a") +
            "<br>";}
            }


        // const description = listing2.appendChild(document.createElement("span"));
        // description.className = "description";
        // description.dataPosition = index;
        // if (attraction.hasOwnProperty("description"))
        //   description.innerHTML = attraction.description;

        const uberIcon = listing2.appendChild(document.createElement("img"));
        uberIcon.className = "uberIcon";
        uberIcon.src = 'imgs/transits/uber.png';

        const uberTimeText= listing2.appendChild(document.createElement("p"));
        uberTimeText.className = "uberTimeText";
        uberTimeText.innerHTML = "15 min";

        const transitIcon = listing2.appendChild(document.createElement("img"));
        transitIcon.className = "uberIcon";
        transitIcon.src = 'imgs/transits/walk.png';

        const transitTimeText= listing2.appendChild(document.createElement("p"));
        transitTimeText.className = "uberTimeText";
        transitTimeText.innerHTML = "15 min";

        const walkIcon = listing2.appendChild(document.createElement("img"));
        walkIcon.className = "uberIcon";
        walkIcon.src = 'imgs/transits/transit.png';

        const walkTimeText= listing2.appendChild(document.createElement("p"));
        walkTimeText.className = "uberTimeText";
        walkTimeText.innerHTML = "15 min";

        const border = listing.appendChild(document.createElement("div"));
        border.className = "sub-item-border";
      }
     }  

  };

  return {
    update: init,
    transitList: getTransitList,
    transitStopFilterList: getTransitStopFilterList
  };
})();
