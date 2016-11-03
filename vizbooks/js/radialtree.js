var viewtype = "pn", emotion = {"sth":false, "anticipation":false, "sadness":false, "disgust":false, "joy":false, "anger":false, "surprise":false, "fear":false, "trust":false};
var root;
var chapterarray = [];

function radialtree(directoryname){
    var i = 0,
    duration = 750;

    var tree = d3.tree()
        .size([360, 200]);

    d3.json(directoryname + "first.json", function(error, treeData) {
      if (error) throw error;

        root = d3.hierarchy(treeData, function(d) {
            return d.children;
            });

        root.each(function(d) {

            d.name = d.id; //transferring name to a name variable
            d.id = i; //Assigning numerical Ids
            i++;

          });

          root.x0 = radialsvg_height/2;
          root.y0 = radialsvg_width/2;

          function collapse(d) {
            if (d.children) {
              d._children = d.children;
              d._children.forEach(collapse);
              d.children = null;
            }
          }

          //root.children.forEach(collapse);
          var chapternumber = root.children.length;
          for(var e=0; e<chapternumber;e++){
              chapterarray.push(true);
          }
          update(root);
          document.getElementById("note").value = root.data.name;
          check('sth', viewtype);
          drawpie(root.data.sentiment, viewtype);


        d3.select(self.frameElement).style("height", "800px");

        function update(source) {

          // Compute the new tree layout.
          var nodes = tree(root).descendants(),
              links = nodes.slice(1);

          // Normalize for fixed-depth.
          nodes.forEach(function(d) { d.y = d.depth * 143; });

          // Update the nodes
          var node = radialsvg.selectAll("g.node")
              .data(nodes, function(d) { return d.id || (d.id = ++i); });

          // Enter any new nodes at the parent's previous position.
          var nodeEnter = node.enter().append("g")
              .attr("class", "node")
              .attr("transform", function(d) { return "translate(" + source.y0 + "," + source.x0 + ")"; })
              .on("click", click);

          nodeEnter.append("circle")
              .attr("r", function(d){
                    if(d.depth==2)
                        return 2;
                    else
                        return 3;
              })
              .attr("class", function(d){ return giveclass(d, "circle"); })
              .style("fill", function(d) { return fillcolor(d); });

          // Transition nodes to their new position.
          var nodeUpdate = node.merge(nodeEnter).transition()
              .duration(duration)
              .attr("transform", function(d) { return "translate(" + project(d.x,d.y) + ")"; });

          nodeUpdate.select("circle")
              .attr("r", function(d){
                    if(d.depth==2)
                        return 2;
                    else
                        return 3;
              })
              .style("fill", function(d) { return fillcolor(d); })
              ;

          nodeUpdate.select("text")
              .style("fill-opacity", 1);

          // Transition exiting nodes to the parent's new position.
          var nodeExit = node.exit().transition()
              .duration(duration)
              .attr("transform", function(d) { return "translate(" + source.y + "," + source.x + ")"; })
              .remove();

          nodeExit.select("circle")
              .attr("r", function(d){
                    if(d.depth==2)
                        return 2;
                    else
                        return 3;
              });

          nodeExit.select("text")
              .style("fill-opacity", 1e-6);


          // Update the links
          var link = radialsvg.selectAll("path.link")
              .data(links, function(link) { var id = link.id + '->' + link.parent.id; return id; });

          // Transition links to their new position.
          link.transition()
              .duration(duration)
              .attr("d", connector);

          // Enter any new links at the parent's previous position.
          var linkEnter = link.enter().insert("path", "g")
                                .attr("d", function(d) {
                var o = {x: source.x0, y: source.y0, parent:{x: source.x0, y: source.y0}};
                return connector(o); })
          .attr("class", function(d){ return giveclass(d, "link"); })
          .attr("stroke-width", 0.7);

          // Transition links to their new position.
          link.merge(linkEnter).transition()
              .duration(duration)
              .attr("d", connector);

          // Transition exiting nodes to the parent's new position.
          link.exit().transition()
              .duration(duration)
              .attr("d",  function(d) {
                var o = {x: source.x, y: source.y, parent:{x: source.x, y: source.y}};
                return connector(o);
              })
              .remove();

          // Stash the old positions for transition.
          nodes.forEach(function(d) {
            d.x0 = d.x;
            d.y0 = d.y;
          });

        $('.node').tipsy({ 
            gravity: 'w', 
            title: function() {
              var d = (this.__data__);
              if(d.depth==2)
                  return "Text section "+d.data.name.split('_')[1];
              else if(d.depth==0)
                  return d.data.name;
              else{
                  return "Segment "+d.data.name.split('_')[1];
              }
              }
          });



        }

        // Toggle children on click.
        function click(d) {
          if (d.children) {
            d._children = d.children;
            d.children = null;
          } else {
            d.children = d._children;
            d._children = null;
          }
          update(d);
          changetext(d);
          context.clearRect(0-w/2,0-h/2,w,h);
          check(emotion, viewtype);
          drawpie(d.data.sentiment, viewtype);
          if(d.depth==1){
              var z = (d.data.name.split('_')[1]);
              chapterarray[z-1] = !(chapterarray[z-1]);
          }
          secondviz(directoryname,chapterarray)
        }

        function connector(d) {
          return "M" +  project(d.x,d.y) +
            "L" + project(d.parent.x,d.parent.y);
        }
    }); 

    secondviz(directoryname,chapterarray);

}


function project(x, y) {
  var angle = (x - 90) / 180 * Math.PI, radius = y;
  return [(radialsvg_width/2)+radius * Math.cos(angle), (radialsvg_height/2)+radius * Math.sin(angle)];
}

var colorpalette = {"anticipation":"#fff300", "positive":"#2b8cbe", "negative":"#d00", "sadness":"#1fd4ff", "disgust":"#00b100","joy":"#ff7900", "anger":"#b2000a", "surprise":"#ff03c4", "fear":"#800080", "trust":"#0337ff"};

function giveclass(d, flag){
    classnames = (flag=="circle")?"":flag;
    if(d.depth==2){
        var x = findmax(d.data.sentiment);
        classnames+=(" "+ x);
        if((d.data.sentiment.Positive)<(d.data.sentiment.Negative)){
            classnames+=" negative";
        }
        else{
            classnames+=" positive";
        }
    }
    return classnames;
}

function fillcolor(d){
    if(d._children){
        if(d.depth==2){
             if(d.data.sentiment.Positive < d.data.sentiment.Negative){
                 return "#ee7f7f";
             }
             else{
                 return "#95c5de";
             }
        }
        else{
            return "#ccc";
        }
    }
    else return "#fff";
}

function removetree(){
    
}

function check(emo, vt) {
    if(viewtype!=vt){
        viewtype = vt;
        drawpie(root.data.sentiment, viewtype)
    }
    emotion[emo] = !(emotion[emo]);
    if(vt!="pn"){
        d3.selectAll("path.link").attr("stroke", "#ccc");
        d3.selectAll("circle").attr("stroke", "#ccc");
        var m = findtruekeys(emotion);
        for(var j=0; j<m.length; j++){
            d3.selectAll("path.link."+m[j]).attr("stroke", colorpalette[m[j]]);
            d3.selectAll("circle."+m[j]).attr("stroke", colorpalette[m[j]]);
        }
    }
    else{
        d3.selectAll("path.link").attr("stroke", "#ccc");
        d3.selectAll("path.link.positive").attr("stroke", colorpalette["positive"]);
        d3.selectAll("path.link.negative").attr("stroke", colorpalette["negative"]);
        d3.selectAll("circle").attr("stroke", "#ccc");
        d3.selectAll("circle.positive").attr("stroke", colorpalette["positive"]);
        d3.selectAll("circle.negative").attr("stroke", colorpalette["negative"]);
    }
}

function findmax(s){
    s_keys = Object.keys(s);
    maxi = [s_keys[0], Number(s[s_keys[0]])];
    for(var i=0;i<10;i++){
        if(Number(s[s_keys[i]])>maxi[1]){
            if((s_keys[i]!="Positive")&(s_keys[i]!="Negative")){
                maxi[0] = s_keys[i];
                maxi[1] = Number(s[s_keys[i]]);
            }
        }
    }
    return maxi[0].toLowerCase();
}

function findtruekeys(k){
    k_keys = Object.keys(k);
    k_truekeys = [];
    for(var i=0;i<9;i++){
        if((k_keys[i]!="sth")&(k[k_keys[i]]==true)){
            k_truekeys.push(k_keys[i]);
        }
    }
    return k_truekeys;
}

function changetext(d){
    if(d.depth==2){
        document.getElementById("note").value = d.data.value;
    }
    else if(d.depth==1){
        document.getElementById("note").value = "Segment "+d.data.name.split('_')[1];
    }
    else{
        document.getElementById("note").value = d.data.name.replace('_', ' ');
    }
}
