var mymap, r = {}
var prevID = '0'
    mymap = L.map('worldMapBox').setView([38, -120], 4)
        L.tileLayer('https://api.mapbox.com/styles/v1/ibhagat2/ciw5heerv00212jp6c6s6dnfd/tiles/256/{z}/{x}/{y}?access_token=pk.eyJ1IjoiaWJoYWdhdDIiLCJhIjoiY2l3NWg3ZWxwMDEwczJ0czVyNm1tcnlzciJ9.XmMD1G-d16pXhvwj8jEYEg', {
        maxZoom: 18
    }).addTo(mymap);
        //its actually the red one :P
var greenIcon = L.icon({
    iconUrl: 'img/marker.png',

    iconSize:     [38, 38], // size of the icon
    shadowSize:   [50, 64], // size of the shadow
    iconAnchor:   [19, 38], // point of the icon which will correspond to marker's location
    shadowAnchor: [4, 62],  // the same for the shadow
    popupAnchor:  [0, -38] // point from which the popup should open relative to the iconAnchor
});
//the default blue one
var blueIcon = L.icon({
    iconUrl: 'img/blueMarker.png',

    iconSize:     [38, 38], // size of the icon
    shadowSize:   [50, 64], // size of the shadow
    iconAnchor:   [19, 38], // point of the icon which will correspond to marker's location
    shadowAnchor: [4, 62],  // the same for the shadow
    popupAnchor:  [0, -38] // point from which the popup should open relative to the iconAnchor
});

        //0-San Joaquin River at Vulcan Reach
        r['0'] = L.marker([38.557085, -120.598643]);
        r['0'].bindPopup("<b>San Joaquin River</b><br>Vulcan Reach").setIcon(blueIcon);
        //1-Motueka River @ Woodstock
        r['10'] = L.marker([-41.258548, 172.821568]);
        r['10'].bindPopup("<b>Motueka River </b><br> Woodstock").setIcon(blueIcon);
        //2--Motupiko River @ Korere
        r['11'] = L.marker([-41.528505, 172.869377]);
        r['11'].bindPopup("<b>Motupiko River </b><br> Korere").setIcon(blueIcon);
        //3-Motupiko River @ Quinnies Bush
        r['12'] = L.marker([-41.587326, 172.781531]);
        r['12'].bindPopup("<b>Motupiko River </b><br> Quinnies Bush").setIcon(blueIcon);
        //4-Carson River @ Lower Carson Canyon
        r['13'] = L.marker([39.708764, -118.653678]);
        r['13'].bindPopup("<b>Carson River </b><br> Lower Carson Canyon").setIcon(blueIcon);
        //5-Yampa River @ Lily Park
        r['14'] = L.marker([40.525529, -108.316242]);
        r['14'].bindPopup("<b>Yampa River </b><br> Lily Park").setIcon(blueIcon);
        //6-Redwood Creek at Weir Creek
        r['16'] = L.marker([41.292623, -124.092006]);
        r['16'].bindPopup("<b>Redwood Creek </b><br> Weir Creek").setIcon(blueIcon);
        //7-Lost Man Creek
        r['18'] = L.marker([41.326752, -124.015562]);
        r['18'].bindPopup("<b>Lost Man Creek").setIcon(blueIcon);
        //8-San Joaquin River - R1
        r['1'] = L.marker([37.4356, -119.1034]);
        r['1'].bindPopup("<b>San Joaquin River </b><br>R1").setIcon(blueIcon);
        //9-San Joaquin River - R2
        r['2'] = L.marker([38.04, -121.5104]);
        r['2'].bindPopup("<b>San Joaquin River </b><br>R2").setIcon(blueIcon);
        //10-Merced River - Robinson Reach
        r['3'] = L.marker([39.495751, -118.775164]);
        r['3'].bindPopup("<b>Merced River </b><br> Robinson Reach").setIcon(blueIcon);
        //11-Merced River - River Ranch
        r['4'] = L.marker([37.2057, -120.5832]);
        r['4'].bindPopup("<b>Merced River </b><br> River Ranch").setIcon(blueIcon);
        //12-Moras Creek
        r['5'] = L.marker([29.2225, -100.2309]);
        r['5'].bindPopup("<b>Moras Creek").setIcon(blueIcon);
        //13-Lower Yuba River
        r['6'] = L.marker([39.230899, -121.283152]);
        r['6'].bindPopup("<b>Lower Yuba River").setIcon(blueIcon);

        //
        //adding to the map
        for (id in r) r[id].addTo(mymap)

function setPrevID(id) {
    prevID = id
}

function restoreDefault() {
    r[prevID].setIcon(blueIcon)
    r[prevID].closePopup()
}    

function display3(d) {
    r[d].setIcon(greenIcon)
    r[d].openPopup()
}

function removeMap() {
	mymap.remove()
}