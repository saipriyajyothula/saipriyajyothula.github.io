function secondviz(directoryname,chapter)
{
  d3.selectAll("#easysankeysvg").remove();
  var units = "",curr_emo="null",chapter_arr,curr_nodeno = "null",temp_val = "null";

  var forcedata;
  //chapter array, emotion_dict, emotion array, current emo
  // set the dimensions and margins of the graph
  var margin = {top: 10, right: 10, bottom: 10, left: 10},
      width = 600 - margin.left - margin.right,
      height = 700 - margin.top - margin.bottom;

  // format variables
  var formatNumber = d3.format(",.0f"),    // zero decimal places
      format = function(d) { return formatNumber(d) + " " + units; },
      color =  ["#fff300", "#1fd4ff", "#00b100","#ff7900", "#b2000a","#ff03c4","#800080","#0337ff"],
      color2= d3.scaleOrdinal(d3.schemeCategory10);

  // emotion selector
  var emotion_dict = {
    "0": {"name":"Anticipation","color":color[0]},
    "1": {"name":"Sadness","color":color[1]},
    "2": {"name":"Disgust","color":color[2]},
    "3": {"name":"Joy","color":color[3]},
    "4": {"name":"Anger","color":color[4]},
    "5": {"name":"Surprise","color":color[5]},
    "6": {"name":"Fear","color":color[6]},
    "7": {"name":"Trust","color":color[7]},
    "8": {"name":"Positive","color":"blue"},
    "9": {"name":"Negative","color":"red"},
    "null": {"name":"Count","color":"#999"}
  };

  // append the svg object to the body of the page
  var sankeysvg = d3.select("body").append("svg")
      .attr("id", 'easysankeysvg')
      .attr("width", width + margin.left + margin.right)
      .attr("height", height + margin.top + margin.bottom)
    .append("g")
      .attr("transform", 
            "translate(" + margin.left + "," + margin.top + ")");
    
  // Set the sankey diagram properties
  var sankey = d3.sankey()
      .nodeWidth(30)
      .nodePadding(40)
      .size([width, height]);

  var path = sankey.link();

  var generateData= function(directoryname){


    d3.json(directoryname + "second.json", function(forcenodedata) {
      forcedata = forcenodedata;


    d3.json(directoryname + "third.json",function(data) {
      var finaldata={}
      var resources = data.character_emotion;

      chapter_arr=chapter;
      for(var i=0;i<resources.length;i++)
      {
        var obj = resources[i];
        var name = obj.character_name;
        //finaldata["name"]=name;
        var chpdata = obj.chap_sentiment;
        all_val={}
        var emotion = ["Anticipation","Sadness","Disgust","Joy","Anger","Surprise","Fear","Trust","Total"];
        for (var j=0; j<emotion.length;j++){
          key=emotion[j];
          all_val[key] = 0;
        }
        for(var j = 0;j< chpdata.length; j++)
        {
          item=chpdata[j];
          if (chapter[j]){
            if(item.value!=null)
            {
              for(var key in item.value){
                if(!(key=="Positive" || key=="Negative"||key=="Total"))
                  all_val[key] = (+all_val[key]) + (+item.value[key]);
              }
            }
          }       
        }
        all_val['Total']= +0;
        for (var j=0; j<emotion.length;j++){
          key=emotion[j];
          if(key!="Total")
          {
            all_val["Total"]= (+all_val["Total"]) + (+all_val[key]);
          }
        }
        var ignoreList=["Emerald","City","Oh","Cowardly","Netherfield","The "]
        if(ignoreList.indexOf(name)==-1)
          finaldata[name]=all_val;
      }

      var finaldata2=[];
      for(var key in finaldata)
        finaldata2.push([key,finaldata[key]])

      finaldata2.sort(function(a,b){
        return +b[1]["Total"] - +a[1]["Total"];
      })

      var finaldata3=[];
      for(var j=0;j<10;j++)
        finaldata3.push(finaldata2[j]);

      finaldata4={"nodes":[
  {"node":0,"name":"Anticipation"},
  {"node":1,"name":"Sadness"},
  {"node":2,"name":"Disgust"},
  {"node":3,"name":"Joy"},
  {"node":4,"name":"Anger"},
  {"node":5,"name":"Surprise"},
  {"node":6,"name":"Fear"},
  {"node":7,"name":"Trust"},
  {"node":8,"name":"Sirius"},
  {"node":9,"name":"Albus"},
  {"node":10,"name":"Remus"},
  {"node":11,"name":"Oliver"},
  {"node":12,"name":"Draco"},
  {"node":13,"name":"Hagrid"},
  {"node":14,"name":"Voldemort"},
  {"node":15,"name":"Marvolo"},
  {"node":16,"name":"Ron"},
  {"node":17,"name":"Harry"}
  ]}  
      for(var j=8;j<18;j++)
      {
        finaldata4["nodes"][j]["name"]=finaldata3[j-8][0];
      } 

      var lnks=[];
      for(var j=0;j<finaldata3.length;j++)
      {
        var nam=finaldata3[j][0];
        var target,source=null,value=null;
        for(var k=0;k<finaldata4["nodes"].length;k++)
        {
          if(finaldata4["nodes"][k]["name"]==nam)
            target=finaldata4["nodes"][k]["node"];
        }
        for(var key in finaldata3[j][1])
        {
          if(key!="Total")
          {
          var pth={};
          if(key=="Anger")
            source=4;
          if(key=="Anticipation")
            source=0;
          if(key=="Disgust")
            source=2;
          if(key=="Fear")
            source=6;
          if(key=="Joy")
            source=3;
          if(key=="Sadness")
            source=1;
          if(key=="Surprise")
            source=5;
          if(key=="Trust")
            source=7;

          value=finaldata3[j][1][key];
          pth["source"]=source;
          pth["target"]=target;
          pth["value"]=value;
          lnks.push(pth);
        }
        finaldata4["links"]=lnks;
       }
      }
      /*
      for(var k=0;k<finaldata4["links"].length;k++)
      {
        //console.log(finaldata4["links"][k])
        if(finaldata4["links"][k]["source"] == "0" && finaldata4["links"][k]["target"] == "8")
        {
          finaldata4["links"][k].value=0;
        }
      }*/

      myfunc(finaldata4);
    })})};

  // load the data
  var myfunc = function(graph) {

    var max = 0.0;

    graph.links.map(function(d){
      if(d.value > max){
        max = d.value;
      }
    });


    sankey
        .nodes(graph.nodes)
        .links(graph.links)
        .layout(32);

    var stroke_scale = d3.scaleLinear().domain([0.0,max]).range([0.0,15.0]);

  // add in the links
    var viz3link = sankeysvg.selectAll(".viz3link").append("g")
        .data(graph.links)
      .enter().append("g")
              .attr("class", "viz3link");

      //link.each(function(l){console.log(l)})

     var viz3line = viz3link.append("path")
         .attr("d", path)
        .style("stroke-width", function(d) {if(d.dy>0){return (d.dy+3)}else{return d.dy}; })
        .attr('opacity',function(d){return 0.6})
        .sort(function(a, b) { return b.dy - a.dy; });

      //console.log(link);

  // add the link titles
    viz3line.append("title")
          .text(function(d) {
          return d.source.name + " → " + 
                  d.target.name + "\n" + format(d.value); });

  // add in the nodes
    var viz3node = sankeysvg.append("g").selectAll(".thirdnode")
        .data(graph.nodes)
      .enter().append("g")
        .attr("class", "thirdnode")
        .attr("transform", function(d) { 
        return "translate(" + d.x + "," + d.y + ")"; })
        .call(d3.drag()
          .subject(function(d) {
            return d;
          })
          .on("start", function() {
            this.parentNode.appendChild(this);
          })
          .on("drag", dragmove));

    var noderect = viz3node.append("rect")
        .attr("height", function(d) { return d.dy+5; })
        .attr("width", sankey.nodeWidth())
        .style("fill", function(d) { 
            var num= +d.node;
            if(num<8)
                return d.color = color[num];          
            else
              return d.color = "#ccc" })
        .style("stroke", function(d) { 
        return d3.rgb(d.color).darker(2); })
        .on('click',onNodeClick)
      .append("title")
        .text(function(d) { 
        return d.name + "\n" + format(d.value); });

  // add in the title for the nodes
   nodetext = viz3node.append("text")
        .attr("x", -6)
        .attr("y", function(d) { return d.dy / 2; })
        .attr("dy", ".35em")
        .attr("text-anchor", "end")
        .attr("transform", null)
        .text(function(d) { return d.name; })
      .filter(function(d) { return d.x < width / 2; })
        .attr("x", 6 + sankey.nodeWidth())
        .attr("text-anchor", "start");

    var toggle = -1;

    viz3line.on('mouseover',function(l){
      viz3line.style('opacity',function(o){
          if(o.source.name == l.source.name && o.target.name == l.target.name){
            return 1;
          }
          else{
            return 0.6;
          }
      })
    })

    viz3line.on('mouseout',function(){
      viz3line.style('opacity',0.6);
    })




  //the on click function
    function onNodeClick(d){
        var target_list = [];

        graph.links.map(function(l){
          if(+d.node<8)
          {               
            if(d.name == l.source.name && l.value > 0){
            target_list.push(l.target.name);

            }
          }

          if(+d.node>7)
          {
            //console.log(l)
            if(d.name == l.target.name && l.value > 0){
            target_list.push(l.source.name);
            }
          }
        })

        viz3line.style('opacity',function(l){

          if(toggle ==d.node){
            return 1;
          }

          if(+d.node < 8){
            if(l.source.name == d.name && target_list.indexOf(l.target.name) > -1){
            return 1;
          }
          else{
            return 0;
          }
          }
          else{
            if(l.target.name == d.name && target_list.indexOf(l.source.name) > -1){
              return 1;
            }
            else{return 0;}
          }
        })

       viz3line.style("stroke",function(l){
          if(toggle == d.node){
            return "gray";
          }
          if(+d.node < 8){
            if(l.source.name == d.name && target_list.indexOf(l.target.name) > -1){
            return d.color;
          }
          }
          else{
            if(l.target.name == d.name && target_list.indexOf(l.source.name) > -1){
            return d.color;
          }
          }
          
        });
       // second click
       if(toggle == d.node){
          viz3line.classed('hidden',false);  
          viz3line.style("opacity",0.6);
          toggle = -1;
          curr_emo="null";
          curr_nodeno = "null";
          temp_val = "null";
       }
       // first click
       else{
          viz3line.classed('hidden',function(l){
            if(+d.node<8)
            {
              if(l.source.name == d.name && target_list.indexOf(l.target.name) > -1){
              return false;
            }
            else{
              return true;
            }
            }
            else
            {
              if(l.target.name == d.name && target_list.indexOf(l.source.name) > -1){
              return false;
            }
            else{
              return true;
            }
            }
          })
          toggle=d.node;
          if(+d.node<8){
            curr_emo=d.name;
            temp_val = "null";
          }
          
          curr_nodeno = d.node;
          if(+d.node>7){
          temp_val = d.name;
          }
       }
      force_call(forcedata,directoryname,chapter_arr,emotion_dict,curr_emo,curr_nodeno,temp_val);       
    }
    
    force_call(forcedata,directoryname,chapter_arr,emotion_dict,curr_emo,curr_nodeno,temp_val);       


  // the function for moving the nodes
    function dragmove(d) {
      d3.select(this).attr("transform", 
          "translate(" + (
              d.x = Math.max(0, Math.min(width - d.dx, d3.event.x))
          )
          + "," + (
              d.y = Math.max(0, Math.min(height - d.dy, d3.event.y))
          ) + ")");
      sankey.relayout();
      viz3line.attr("d", path);
    }
  };
  generateData(directoryname);
}
