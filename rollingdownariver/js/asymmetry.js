function drawasymmetry(datafile){
    // set the dimensions and margins of the arcgraph
    var width = 200,
        height = 220;
    
    // append the svg obgect to the body of the page
    // appends a 'group' element to 'svg'
    var asymsvg = d3.select("#asymmetrysvg"+datafile)
        .attr("width", width)
        .attr("height", height)
        .append("g")
        .attr("transform", "translate(" + 0 + "," + 0 + ")");
    
    var asym = eval("R" + datafile).ao;
    var temp = [(1 - asym), (1 + asym)];
    
    // set the ranges
    var x = d3.scaleLinear().range([10, width - 10]);
    
    // scale the range of the data
    x.domain([0, 2]);
    
    //asymsvg.selectAll(".arc")
    //    .data([asym])
     //   .enter().append("path")
      //  .attr("d", "M 10 100 L 100 10 L 100 210 Z M 210 100 L 100 10 L 90 210 Z")
        //.attr("stroke-linecap", "round")
    // .attr("fill", "#ccc");
    asymsvg.selectAll("text")
    .data([asym])
        .append("text")
        .text(function (d) { return "Asymmetry Index is " + d });
    
    document.getElementById('asymmetryDiv'+datafile).style.display = 'inline-block';
}