let Animation = (function() {

    window.requestAnimationFrame = window.requestAnimationFrame
        || window.mozRequestAnimationFrame
        || window.webkitRequestAnimationFrame
        || window.msRequestAnimationFrame
        || function(f){return setTimeout(f, 1000/60)} // simulate calling code 60 
 
    window.cancelAnimationFrame = window.cancelAnimationFrame
        || window.mozCancelAnimationFrame
        || function(requestID){clearTimeout(requestID)} //fall back
  
    let timers = [];
    let badgeIntervals = [];
  

    let init = function() {

    };

    let drawCurveLine = function(map, startCoordinates, endCoordinates, color, transit, isTimelapse) {
        
        let latlngs1 = [startCoordinates.lat, startCoordinates.lon];
        let latlngs2 = [endCoordinates.lat, endCoordinates.lon];
        let midpointLatLng = getMidPointLatLng(latlngs1, latlngs2);
      
       
        let curvedPath = L.d3SvgOverlay(function(sel,proj){ 

            let badgeContainter;
            let badgeRect;
            let badgeIcon;
            let badgeText;
            let badgeMidpoint;

            let animList = [];

            let pathPoints = getPath(proj, latlngs1, latlngs2, midpointLatLng);

            let path = drawPath(sel, pathPoints, color);

            badgeMidpoint = pathPoints[1];
            
            badgeContainter = drawBadge(sel, pathPoints, transit, color, badgeMidpoint);
            badgeRect = badgeContainter.badgeRect;
            badgeIcon = badgeContainter.badgeIcon;
            badgeText = badgeContainter.badgeText;
            

            let pathOptions = {sel: sel, path: path, pathPoints: pathPoints, color: color}    

            if(!isTimelapse)
                drawTransits(transit, pathOptions);  
        
            badgeIntervals.push(setInterval(function() {
                $(badgeRect[0]).remove();
                $(badgeIcon[0]).remove();
                $(badgeText[0]).remove();
         
                badgeContainter = drawBadge(sel, pathPoints, transit, color, badgeMidpoint);
                badgeRect = badgeContainter.badgeRect;
                badgeIcon = badgeContainter.badgeIcon;
                badgeText = badgeContainter.badgeText;
               

            },500));
            
        });

        
        curvedPath.addTo(map);

    };

    let drawTransits = function(transit, pathOptions) {
        let transitCircle;


        _.times(transit.frequency, function(index) {
            timers.push(setTimeout(function(){
                
                transitCircle = drawTransitCircle(pathOptions.sel, pathOptions.pathPoints, pathOptions.color, transit);
              
                
                transitionAnim(transitCircle, pathOptions, transit, index);
                if(index == transit.frequency-1)
                    drawTransits(transit, pathOptions)
            }, index * 1000 * transit.frequency));
        });
            
    }

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
                .attr("class", "transitPath")
                .attr("stroke", color)
                .attr("d", d3.svg.line()
                .tension(0)
                .interpolate("cardinal"));
    }

    let drawBadge = function(sel, pathPoints, transit, color, midpoint) {
        let midpointXY;
        let t = [];

        midpointXY = midpoint;

        badgeRect =  sel.selectAll(".point")
                .data([midpointXY])
                .enter().append("rect")
                .attr("x", -20)
                .attr("y", -10)
                .attr("width", 40)
                .attr("height", 40)
                .attr("class", "transitBadge")
                .attr("fill", color)
                .attr("transform", function(d) { return "translate(" + d + ")"; });

        badgeIcon = sel.selectAll(".point")
                .data([midpointXY])
                .enter()
                .append("image")
                .attr('href', function(){
                    if(transit.type == "Train")
                        return 'imgs/transits/train.png';
                    else if(transit.type == "Bus")
                        return 'imgs/transits/bus.png';
                })
                .attr("class", "transitBadge")
                .attr("width", "20px")
                .attr("height", "20px")
                .attr("transform", function(d) {
                    t[0] = d[0] - 10;
                    t[1] = d[1] - 5;

                    return "translate(" + t + ")";
                 });
                
        badgeText = sel.selectAll(".point")
                .data([midpointXY])
                .enter()
                .append("text")
                .text(transit.name)
                .attr("font-size", "12px")
                .attr("font-weight", "bold")
                .attr("fill", "white")
                .attr("class", "transitBadge")
                .attr("transform", function(d) {
                    if(transit.name.length == 2) 
                        t[0] = d[0] - 7;
            
                    else if(transit.name.length == 3) 
                        t[0] = d[0] - 10;

                    else if(transit.name.length == 4)
                        t[0] = d[0] - 12;
                    else
                        t[0] = d[0] - 14;

                    t[1] = d[1] + 26;

                    return "translate(" + t + ")";
                 });
    
            return {badgeRect:badgeRect, badgeIcon: badgeIcon, badgeText: badgeText};
    }

    let drawTransitCircle = function(sel, pathPoints, color, transit) {
            return sel.append("circle")
                .attr("r", 6)
                .attr("class", "transitCircle fadeTimelapse")
                .attr("transform", "translate(" + pathPoints[0] + ")")
                .attr("fill", color);
    };

    let transitionAnim = function(transitCircle, pathOptions, transit, index) {
        let delayBaseForTravel = 1000;
        let duration = delayBaseForTravel * transit.travelTime;
        transitCircle.transition()
                .duration(duration)
                .attrTween("transform", translateAlong(pathOptions.path.node()))
                .ease("easeLinear")
                .each("end", function(){
                    transitCircle.remove();
                });
    }

    let translateAlong = function(path) {
        let l = path.getTotalLength();
        return function(d, i, a) {
            return function(t) {
            let p = path.getPointAtLength(t * l);
            return "translate(" + p.x + "," + p.y + ")";
            };
        };
    }

    let cleanUpAnim = function() {
        $('.transitPath').remove();
        $('.transitBadge').remove();
        $('.transitCircle').remove();
        _.forEach(timers, function(d,i) {
            clearTimeout(d);
        });
        _.forEach(badgeIntervals, function(d,i) {
            clearInterval(d);
        });
        
    };

    return {
        init: init,
        drawCurvePath: drawCurveLine,
        clear: cleanUpAnim
    }

})();