function drawarc(datafile){
    
    // set the dimensions and margins of the arcgraph
    var width = 740,
        height = 420;
    var centerflag = 0;
    
    // append the svg obgect to the body of the page
    // appends a 'group' element to 'svg'
    var arcsvg = d3.select("#arcsvg"+datafile)
        .attr("width", width)
        .attr("height", height)
        .append("g")
        .attr("transform", "translate(" + 0 + "," + 0 + ")");
    
    var datum = [];
    
    datum.z = eval("R"+datafile).z;
    datum.ext = eval("R"+datafile).ext;
    datum.fit = eval("R" + datafile).fit;
    datum.ao = eval("R" + datafile).ao;
    
    var maxim = Number.NEGATIVE_INFINITY;
    var minim = Infinity;
    
    var maxim_center = Number.NEGATIVE_INFINITY;
    var minim_center = Infinity;
    
    // set the ranges
    var x = d3.scaleLinear().range([0, width]);
    var y = d3.scaleLinear().range([0, (height/2-40)]);
    var z = d3.scaleLinear().range([60, (width/2)]);
    
    datum.ext.forEach(function(d){
        if((Math.abs(datum.z[d.x]-datum.fit[d.x]))>maxim){
            maxim = (Math.abs(datum.z[d.x]-datum.fit[d.x]));    
        }
        if((Math.abs(datum.z[d.x]-datum.fit[d.x]))<minim){
            minim = (Math.abs(datum.z[d.x]-datum.fit[d.x]));    
        }
        if(d.rb>maxim_center){
            maxim_center = d.rb;
        }
        if((0-d.lb)>maxim_center){
            maxim_center = d.lb;
        }
        if(d.rb<minim_center){
            minim_center = d.rb;
        }
        if((0-d.lb)<minim_center){
            minim_center = d.lb;
        }
        if(d.val==-1){
            document.getElementById('sequence'+datafile).innerHTML += ' P'    
        }
        if(d.val==1){
            document.getElementById('sequence'+datafile).innerHTML += ' R'    
        }
    });

    document.getElementById('sequence' + datafile).innerHTML += ('<br>Asymmetry index is '+datum.ao);
        
    var arcpath = function(extarr, elevations){
        var flag = (extarr.val==1)?200:220;
        var ordinate = (extarr.val==1)?y(Math.abs(elevations[0]-elevations[1])):410-y(Math.abs(elevations[0]-elevations[1]));
        return "M " + (x(extarr.x+extarr.lb)) + " " + flag + " L " + (x(extarr.x)) + " " + ordinate +" L "+ (x(extarr.x+extarr.rb)) + " " + flag;
    }
    
    var centerpath = function(extarr, elevations){
        var flag = (extarr.val==1)?200:220;
        var ordinate = (extarr.val==1)?y(Math.abs(elevations[0]-elevations[1])):410-y(Math.abs(elevations[0]-elevations[1]));
        return "M " + ((width/2)-z(0-extarr.lb)-50) + " " + flag + " L " + (width/2) + " " + ordinate +" L "+ ((width/2)+z(extarr.rb)-50) + " " + flag;
    }

    // scale the range of the data
    x.domain([0, datum.z.length]);
    y.domain([maxim, minim]);
    z.domain([minim_center, maxim_center]);
    
    arcsvg.selectAll(".arc")
        .data(datum.ext)
        .enter().append("path")
        .attr("d", function(d){ return arcpath(d, [datum.z[d.x], datum.fit[d.x]]); })
        .attr("class", "arc"+datafile)
        .attr("data", function(d){ return "(" + d.val + ", " + datum.z[d.x] + ")"; })
        .attr("stroke", function(d){
            var temp = y(Math.abs(datum.z[d.x]-datum.fit[d.x]));
            var maxi = y(minim);
            var mini = y(maxim);
            if((temp>=mini)&&(temp<(((maxi-mini)/3)+mini))){
                return "#e41a1c";
            }
            else if((temp>(mini+(2*(maxi-mini)/3)))&&(temp<=maxi)){
                return "#4daf4a";
            }
            else{
                return "#377eb8";
            }
        })
        .attr("stroke-width", 0.5)
        .attr("fill", "none");  
    
    update_colors(parseInt(document.getElementById('input_pos_'+datafile).value), parseInt(document.getElementById('input_ran_'+datafile).value));
    
    function update_arcs(){
        arcsvg = d3.select("#arcsvg"+datafile).transition();
    
        arcsvg.selectAll(".arc"+datafile)
            .duration(750)
            .attr("d", function(d){
                if(centerflag == 0){
                    return centerpath(d, [datum.z[d.x], datum.fit[d.x]]);
                }
                else{
                    return arcpath(d, [datum.z[d.x], datum.fit[d.x]]);
                }
            });
        
        centerflag = (centerflag==0)?1:0;
        document.getElementById('center_button'+datafile).innerHTML = (centerflag==0)?"Center":"Normal";
    }
    
    function update_colors(colork,colorl){
        arcsvg.selectAll(".arc"+datafile)
            .attr("stroke-width", function(d){
                if(((d.x)>=colork)&&((d.x)<=(colorl+colork))){
                   return 2;
                   }
                return 0.5;
        });
    }
    
    $('path.arc'+datafile).tipsy({ 
        gravity: $.fn.tipsy.autoWE, 
        title: function() {
        return this.getAttribute("data");
        }
    }); 
    
    document.getElementById('arcDiv'+datafile).style.display = 'block';
    document.getElementById('center_button'+datafile).onclick = function(){
         update_arcs();
     };
    
    $('.show_entire'+datafile).bind("click", function(){
        update_colors(0, parseInt(document.getElementById('input_ran_'+datafile).max));
    });
    
    $('.left_arrow'+datafile).bind("click", function(){
        var cok = parseInt(document.getElementById('input_pos_'+datafile).value);
        var col = parseInt(document.getElementById('input_ran_'+datafile).value);
        if(cok-col>=0){
            update_colors(cok-col,col);
        }
        else{
            update_colors(cok,col);
        }    
    });
    
    $('.right_arrow'+datafile).bind("click", function(){
        var cok = parseInt(document.getElementById('input_pos_'+datafile).value);
        var col = parseInt(document.getElementById('input_ran_'+datafile).value);
        if(cok+col<=parseInt(document.getElementById('input_ran_'+datafile).max)){
            update_colors(cok+col,col);
        }
        else{
            update_colors(cok,col);
        }
    });
    
    $('.redraw'+datafile).bind("click", function(){
        update_colors(parseInt(document.getElementById('input_pos_'+datafile).value), parseInt(document.getElementById('input_ran_'+datafile).value));
    });
}