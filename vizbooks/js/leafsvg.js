function drawleaf(radius, arclength, flag){   // positive: flag = 1, negative: flag = 0
    
    var radius = radius;   // sector radius, set to the value specified
    var arclength = arclength;   // sector arclength, set to the value specified
    
    var angle = arclength/radius;   // angle in a sector formula

    // r+h = radius of the sector
    var r = radius*Math.cos(angle/2);   // apothem in a sector formula
    var h = radius*(1-Math.cos(angle/2));   // sagitta in a sector formula

    var a = 2*radius*Math.sin(angle/2);   // chord length in a sector formula

    var padding = {x:2, y:2};   // x and y padding values

    // Visit http://mathworld.wolfram.com/CircularSector.html for the math behind the sector path
    var sectorpath = "m "+padding.x+" "+(h+padding.y)+ " a "+radius+" "+radius+", "+0+", "+0+", "+1+", "+a+" 0"+" l "+(0-a/2)+" "+r+" z";   // path for the sector svg

    // store the colors for fill and stroke of the sector
    var sectorfill = flag?"#e1fff3":"mistyrose"
    var sectorstroke = flag?"#c8ffe9":"#ffcdc8"

    // add the sector to svg
    svg.append("path")
        .attr("d",sectorpath)
        .attr("stroke", sectorstroke)
        .attr("stroke-width",padding.x)
        .attr("fill", sectorfill)
    
}

//drawleaf(100,40,1)