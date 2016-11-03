function force(graph,emotion_dict,current_emotion,emotion_no,pname){
  //d3.selectAll('.forcenodes').remove();
  //d3.selectAll('.forcelinks').remove();
  d3.selectAll('#forcesvg').remove();

  if(emotion_no > 7){
    emotion_no = "null";    
  }

  if(current_emotion == "null"){
    current_emotion = "Count";
  }


  var forcewidth = 700,
      forceheight = 700,
      forceradius = 9,
      forcetextsize = 12;

  var forcesvg = d3.select('body')
      //.append("div").attr("id","mychart")
      .append("svg")
      .attr("width", forcewidth)
      .attr("height", forceheight)
      .attr('id','forcesvg');

  var color = d3.scaleOrdinal(d3.schemeCategory20);

  var manybody = d3.forceManyBody().strength([-400]),
      simlink = d3.forceLink().id(function(d) { return d.id; });

  var forcecollide = d3.forceCollide().radius([3]);

  var simulation = d3.forceSimulation()
      .force("link", simlink)
      .force("charge", manybody)
      .force("center", d3.forceCenter(forcewidth/2, forceheight/2 ))
      .force("collide",forcecollide);
      




  var forcelink = forcesvg.selectAll(".forcelinks")
      .data(graph.links)
      .enter().append("g")
      .attr("class", "forcelinks");




  var forcenode = forcesvg.selectAll(".forcenodes")
          .data(graph.nodes)
          .enter().append('g')
          .attr("class","forcenodes")
          .call(d3.drag()
          .on("start", dragstarted)
          .on("drag", dragged)
          .on("end", dragended));


    // Filter large networks
    var link_limiter = 75;
    forcelink.sort(function(a,b){
      return d3.descending(a.value[current_emotion],b.value[current_emotion])});
    forcelink = forcelink.filter(function(d,i){return i < link_limiter;});
    // end experimental filter


          function neighboring(a, b) {
        return linkedByIndex[a.id + "," + b.id];
      }  


      // Hightlights connected nodes
    var toggle = 0;
    var linkedByIndex = {};
    
      forcenode.each(function(d){
        linkedByIndex[d.id + "," + d.id] = 1;
      })

      forcelink.each(function (l) {
        var s,t;
        forcenode.each(function(d){
          if(d.id == l.source){

            s = d.id;
          }
          if(d.id == l.target){
            t = d.id;
          }
          
        })
        linkedByIndex[s + "," + t] = 1;});


      if(pname != "null"){
        neighbour_list = [];
        forcelink.each(function(l){
            if(l.source == pname){
              neighbour_list.push(l.target);
            }
            else if(l.target == pname){
              neighbour_list.push(l.source);
            }
        })

        forcelink = forcelink.filter(function(l){

          if(l.source == pname && neighbour_list.indexOf(l.target) > -1)
          {
            return true;
          }
          else if(l.target == pname && neighbour_list.indexOf(l.source) > -1)
          {
            return true;
          }
          else{
            return false;
          }

        })
      }

    // Filters the node that have 0 outgoing and incoming edges
    forcenode.each(function(d) {
        d.inDegree = 0;
        d.outDegree = 0;
    });


    forcelink.each(function(d) {
      if(d.value[current_emotion] > 0){
          forcenode.each(function(l){
          if(l.id == d.source){
              l.outDegree += 1;
          }
          if(l.id == d.target){
                    l.inDegree += 1;
                  }

                });
              }});
      
      // if person name is selected show only his connections
      forcelink = forcelink.filter(function(l){
        return l.value[current_emotion] > 0;
      });
    // end filter



    forcenode = forcenode.filter(function(n){
      if(n.inDegree == 0 && n.outDegree == 0){
        return false;
      }
      else{
        return true;
      }
    })


    // line width scale
    var max_value = get_max(forcelink);
    var min_value = get_min(forcelink);

    function get_max(forcelink){
      var max = 0;
      forcelink.each(function(l){
        if(l.value[current_emotion] > max){
          max = l.value[current_emotion];
        }
      })
      return max;
    }

    function get_min(forcelink){
      var min = Infinity;
      forcelink.each(function(l){
        if(l.value[current_emotion] < min){
          min = l.value[current_emotion];
        }
      })
      return min;
    }
    
    var line_scale = d3.scaleLinear().domain([min_value,max_value]).range([1,10]);



    // Append circles, lines and labels
    var forcecircle = forcenode.append('circle')
              .attr('r',forceradius)
              .attr("fill", function(d) { return color(d.group); });
    
    var forcelabel = forcenode.append('text')
        .text(function(d){return d.id;})
        .attr('dy',".35em")
        .attr('dx',".5em")
        .style('font-size',forcetextsize.toString() + "px");

     var forceline = forcelink.append('line')
            .attr("stroke-width", function(d) { 
        return line_scale(d.value[current_emotion]); })
      .style('stroke',function(){
        return emotion_dict[emotion_no].color;
      });

    


    function connectedNodes() {
       
      if (toggle == 0) {
          //Reduce the opacity of all but the neighbouring nodes
          d = d3.select(this).node().__data__;

          forcenode.style("opacity", function (o) {
              
              return neighboring(d, o) | neighboring(o, d) ? 1 : 0.2;
          });
          forcelink.style("opacity", function (o) {

              return d.id==o.source.id | d.id==o.target.id ? 1 : 0.2;
          });
          forcecircle.transition().attr("r",function(o){
            return o.id == d.id?forceradius + 6:forceradius;})
          .attr("fill",function(o){ return o.id==d.id?"forestgreen":color(d.group);});

          forcelabel.transition().style('font-size',
            function(o){ return o.id==d.id? (forcetextsize + 10).toString() + "px":forcetextsize.toString() + "px";});

          toggle = 1;

      } else {
          //Put them back to starting opacity
          forcenode.style("opacity", 1);
          forcelink.style("opacity", 0.8);
          forcecircle.transition().attr('r',forceradius)
                    .attr("fill", function(d) { return color(d.group); });
          forcelabel.transition().style('font-size',forcetextsize.toString() + "px");
          toggle = 0;
      }
    }
    
    forcenode.on('click', connectedNodes);
    // end function




  simulation
      .nodes(graph.nodes)
      .on("tick", ticked);
      
  simulation.force("link")
      .links(graph.links);
    

  function ticked() {
    var padding = 100;
    forceline
        .attr("x1", function(d) { return d.source.x = Math.max(forceradius, Math.min(forcewidth - forceradius - padding, d.source.x)); })
        .attr("y1", function(d) { return d.source.y = Math.max(forceradius, Math.min(forceheight - forceradius, d.source.y)); })        
        .attr("x2", function(d) { return d.target.x = Math.max(forceradius, Math.min(forcewidth - forceradius - padding,d.target.x)); })
        .attr("y2", function(d) { return d.target.y = Math.max(forceradius, Math.min(forceheight - forceradius, d.target.y)); });
        
    forcecircle
        .attr("cx", function(d) { return d.x = Math.max(forceradius, Math.min(forcewidth - forceradius - padding, d.x)); })
        .attr("cy", function(d) { return d.y = Math.max(forceradius, Math.min(forceheight - forceradius, d.y)); });
    
    forcelabel
        .attr('x',function(d){return d.x;})
        .attr('y',function(d){return d.y;});

  }

  // Functions for dragging
  function dragstarted(d) {
    if (!d3.event.active) simulation.alphaTarget(0.3).restart();
    d.fx = d.x;
    d.fy = d.y;
  }

  function dragged(d) {
    d.fx = d3.event.x;
    d.fy = d3.event.y;
  }

  function dragended(d) {
    if (!d3.event.active) simulation.alphaTarget(0);
    d.fx = null;
    d.fy = null;
  }
  // end functions for dragging  
}
