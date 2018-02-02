let Hopon = (function() {
    const hoponDataPath = "data/Hopon.json";
    let markers = new Array();
    
    let init = function(map) {
        $.ajax({
            type: "GET",
            url: hoponDataPath,
            dataType: "json",
            async: false,
            success: function(hoponstops) {
                var hoponNumber = hoponstops.hoponstops.length;
                _.forEach(hoponstops.hoponstops, function(hopon, i) {
                    let hoponIcon = L.icon({
                        iconUrl: hopon.iconUrl,
                        iconSize: [hopon.iconSize[0], hopon.iconSize[1]]
                    });
                    
                    let marker = L.marker(hopon.coordinates,
                        {
                        icon: new L.DivIcon({
                            html: '<div id="HoponIcons"><img width='+hopon.iconSize[0]/2+' height='+hopon.iconSize[1]/2+' src="'+hopon.iconUrl+'"/></div>'
                        }),
                        zIndexOffset: 100
                    }
                    );
                                                            
                    markers.push(marker);
                    marker.bindPopup(hopon.name);
                    marker.addTo(map);
                    
                    marker._icon.classList.add("hoponIconDiv");
                    
                    function drawpoly(l1, l2){
                        var pointA = new L.LatLng(l1[0], l1[1]);
                        var pointB = new L.LatLng(l2[0], l2[1]);
                        var pointList = [pointA, pointB];

                        var polylinepath = new L.Polyline(pointList, {
                            color: 'red',
                            weight: 3,
                            opacity: 0.5,
                            smoothFactor: 1
                        });
                        polylinepath.addTo(map);
                    }
                    
                    let drawCurveLine = function(map, latlngs1, latlngs2, color, transit) {
        
                        let midpointLatLng = getMidPointLatLng(latlngs1, latlngs2);

                        let curvedPath = L.d3SvgOverlay(function(sel,proj){ 

                            let animList = [];

                            let pathPoints = getPath(proj, latlngs1, latlngs2, midpointLatLng);

                            let path = drawPath(sel, pathPoints, color);

                            let pathOptions = {sel: sel, path: path, pathPoints: pathPoints, color: color}    
      
                        });

                        curvedPath.addTo(map);
                    
                    };
                    
                    let getMidPointLatLng = function(latlngs1, latlngs2) {

                        let offsetX  = latlngs2[1] - latlngs1[1];
                        let offsetY = latlngs2[0] - latlngs1[0];

                        let r = Math.sqrt(Math.pow(offsetX, 2) + Math.pow(offsetY, 2));
                        let theta = Math.atan2(offsetY, offsetX);

                        let thetaOffset = (3.14/10)

                        let r2 = (r/2)/(Math.cos(thetaOffset));
                        let theta2 = theta + thetaOffset;

                        let midpointX = (r2 * Math.cos(theta2)) + latlngs1[1];
                        let midpointY = (r2 * Math.sin(theta2)) + latlngs1[0];

                        return [midpointY, midpointX];
                    }

                    let getPath = function(proj, latlngs1, latlngs2, midpointLatLng) {
                        return[
                            [proj.latLngToLayerPoint(latlngs1).x, proj.latLngToLayerPoint(latlngs1).y],
                            [proj.latLngToLayerPoint(midpointLatLng).x, proj.latLngToLayerPoint(midpointLatLng).y],
                            [proj.latLngToLayerPoint(latlngs2).x, proj.latLngToLayerPoint(latlngs2).y]
                        ];
                    }

                    let drawPath = function(sel, pathPoints, color) {
                        return sel.append("path")
                                .data([pathPoints])
                                .attr("class", "hoponPath")
                                .attr("stroke", color)
                                .attr("d", d3.svg.line()
                                .tension(0)
                                .interpolate("cardinal"));
                    }
                    
                    if(i==hoponNumber-1){
                        //drawCurveLine(map, hoponstops.hoponstops[i].coordinates, hoponstops.hoponstops[0].coordinates, 'red', 'something');
                        drawpoly(hoponstops.hoponstops[i].coordinates, hoponstops.hoponstops[0].coordinates);
                    }
                    else if(i!=0){
                        //drawCurveLine(map, hoponstops.hoponstops[i-1].coordinates, hoponstops.hoponstops[i].coordinates, 'red', 'something');
                        drawpoly(hoponstops.hoponstops[i-1].coordinates, hoponstops.hoponstops[i].coordinates);
                    }
                    else{
                        
                    }
                    
                });
            }
        });
    };
    
    return {
        update: init,
    };
    
})();