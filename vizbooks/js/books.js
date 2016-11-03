// radial tree svg dimensions

// set the dimensions and margins of the graph
var margin_object = {top: 20, right: 20, bottom: 20, left: 20};
var radialsvg_width = 720 - margin_object.left - margin_object.right;
var radialsvg_height = 720 - margin_object.top - margin_object.bottom; 


// set the width and height to window dimensions
// append the svg object to the body of the page
var radialsvg = d3.select("#radialsvg")
    .attr("width", radialsvg_width + margin_object.left + margin_object.right)
    .attr("height", radialsvg_height + margin_object.top + margin_object.bottom)
    .style("background-color","#fff")

// appends a 'group' element to 'svg'
// moves the 'group' element to the top left margin
var radialsvg_g = radialsvg.append("g")
    .attr("transform", "translate(" + (radialsvg_width/2 + margin_object.left) + "," + (radialsvg_height/2 + margin_object.top)+ ")");

// pie chart canvas dimensions

var canvas = document.querySelector("canvas"),
    context = canvas.getContext("2d");

var w = canvas.width,
    h = canvas.height,
    radius = Math.min(w, h) / 2;