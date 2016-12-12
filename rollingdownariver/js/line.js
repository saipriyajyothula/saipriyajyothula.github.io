function drawlinegraph(datafile){
    
    // set the dimensions and margins of the graph
    var width = 800,
        height = 220;
    
    var k = 0, l = 100;
    var openflag = 1; 

    // set the ranges
    var x = d3.scaleLinear().range([50, width - 10]);
    var y = d3.scaleLinear().range([(height - 30), 10]);
    
    // define the area
    var area = d3.area()
        .curve(eval("d3.curveCardinal"))
        .x(function(d, i) { return x(i+k); })
        .y0(height - 30)
        .y1(function(d) { return y(d); });

    // define the line
    var valueline = d3.line()
        .curve(eval("d3.curveCardinal"))
        .x(function(d, i) { return x(i+k); })
        .y(function(d) { return y(d); });
    
    // append the svg obgect to the body of the page
    // appends a 'group' element to 'svg'
    var svg = d3.select("#linegraphsvg"+datafile)
        .attr("width", width)
        .attr("height", height)
        .append("g")
        .attr("transform", "translate(" + 0 + "," + 0 + ")");
    
    // scale the range of the data
    x.domain([0, l]);
    y.domain([d3.min(eval("R"+datafile).z, function(d) { return d; }), d3.max(eval("R"+datafile).wse, function(d) { return d; })]);
    
    var datum = [];
    datum.z = eval("R"+datafile).z.slice(k, k+l+1);
    datum.wse = eval("R"+datafile).wse.slice(k, k+l+1);

    // define the water area
    var areaWater = d3.area()
        .curve(eval("d3.curveCardinal"))
        .x(function(d, i) { return x(i+k); })
        .y0(function(d, i){ return y(datum.z[i]); })
        .y1(function(d) { return y(d); });

    svg.append("path")
       .data([datum.z])
       .attr("class", "area"+datafile)
       .attr("d", area)
       .attr("style", "fill: #fbe3cf");

    svg.append("path")
       .data([datum.wse])
       .attr("class", "areaWater"+datafile)
       .attr("d", areaWater)
       .attr("style", "fill: #c5e3f5");

    // add the valueline path
    svg.append("path")
      .data([datum.z])
      .attr("class", "line"+datafile)
      .attr("d", valueline)
      .attr("style","stroke: #db9356; fill: none");

    // add the valueline path
    svg.append("path")
      .data([datum.wse])
      .attr("class", "lineWater"+datafile)
      .attr("d", valueline)
      .attr("style","stroke: #40a4df; fill: none");

    // add points
    svg.selectAll("dot")
        .data(datum.z)
        .enter().append("circle")
        .attr("r", 2)
        .attr("cx", function(d, i) { return x(i); })
        .attr("cy", function(d) { return y(d); })
        .attr("data", function(d,i){ return i; })
        .attr("class", "dot"+datafile)
        .attr("style", "opacity: 0; fill: #db9356")
        .on("mouseenter", function(){
           d3.select(this).attr("style", "opacity: 1; fill: #db9356").attr("r", 4); })
        .on("mouseleave", function(){
           d3.select(this).attr("style", "opacity: 0; fill: #db9356").attr("r", 2); });   

    $('circle').tipsy({ 
        gravity: $.fn.tipsy.autoWE, 
        title: function() {
        var d = (this.__data__);
        return "("+this.getAttribute("data")+", "+d+")";
        }
    }); 

    // add the X Axis
    svg.append("g")
        .attr("class", "x_axis"+datafile)
        .attr("transform", "translate(0," + (height - 20) + ")")
        .call(d3.axisBottom(x));

    // add the Y Axis
    svg.append("g")
        .attr("class", "y_axis"+datafile)
        .attr("transform", "translate(40," + 0 + ")")
        .call(d3.axisLeft(y));
    
    function updatePattern(){
        datum.z = eval("R"+datafile).z.slice(k, k+l+1);
        datum.wse = eval("R"+datafile).wse.slice(k, k+l+1);
        
        areaWater = d3.area()
            .curve(eval("d3.curveCardinal"))
            .x(function(d, i) { return x(i+k); })
            .y0(function(d, i){ return y(datum.z[i]); })
            .y1(function(d) { return y(d); });
        
        x.domain([k, k+l]);
        
        svg = d3.select("#linegraphsvg"+datafile).transition();
        
        svg.select(".line"+datafile)
            .duration(750)
            .attr("d", valueline(datum.z));
        
        svg.select(".lineWater"+datafile)
            .duration(750)
            .attr("d", valueline(datum.wse));
        
        svg.select(".area"+datafile)
            .duration(750)
            .attr("d", area(datum.z));
        
        svg.select(".areaWater"+datafile)
            .duration(750)
            .attr("d", areaWater(datum.wse));
        
        svg.select(".x_axis"+datafile)
            .duration(750)
            .call(d3.axisBottom(x));
        
        svg.select(".y.axis"+datafile)
            .duration(750)
            .call(d3.axisLeft(y));
        
        svg.selectAll(".dot"+datafile).remove();
        
    }
    
    function button_onclick(rnum){
        var input_element_pos = document.getElementById("input_pos_"+rnum);
        var input_element_ran = document.getElementById("input_ran_"+rnum);
        k = parseInt(input_element_pos.value);
        l = parseInt(input_element_ran.value);
        if((k%10==0)&&(k<=parseInt(input_element_pos.max))&&(k>=parseInt(input_element_pos.min))){
            if((l<=parseInt(input_element_ran.max))&&(l>=parseInt(input_element_ran.min))){
                updatePattern();    
            }
        }
    }
    
    document.getElementById('R'+datafile).style.display = 'block';
    document.getElementById('linegraphDiv'+datafile).style.display = 'inline-block';
    document.getElementById('river_name'+datafile).innerHTML = eval("R"+datafile).name;
    console.log(eval("R"+datafile).name);
    document.getElementById('show_entire'+datafile).onclick = function(){
        document.getElementById("input_pos_"+datafile).value = 0;
        document.getElementById("input_ran_"+datafile).value = document.getElementById("input_ran_"+datafile).max;
        button_onclick(datafile);
    }
    document.getElementById('button_'+datafile).onclick = function(){
        button_onclick(datafile);
    }
    document.getElementById('left_arrow'+datafile).onclick = function(){
        if((k-l)>=0){
            document.getElementById("input_pos_"+datafile).value = (k-l);
            button_onclick(datafile);
        }
    } 
    document.getElementById('right_arrow'+datafile).onclick = function(){
        if((k+l)<=document.getElementById("input_pos_"+datafile).max){
            document.getElementById("input_pos_"+datafile).value = (k+l);
            button_onclick(datafile);
        }
    }
    document.getElementById('close_arc'+datafile).onclick = function(){
        openflag = (openflag==1)?0:1;
        document.getElementById('arcDiv'+datafile).style.display = (openflag==0)?'none':'block';
        document.getElementById('close_arc'+datafile).innerHTML = (openflag==0)?"Open pools and riffles":"Close pools and riffles";
        document.getElementById('pools_heading'+datafile).innerHTML = (openflag==0)?"":"Pools and riffles in the entire river:";
        document.getElementById('close_arc'+datafile).style.marginLeft = (openflag==0)?"738px":"521px";
    }
}