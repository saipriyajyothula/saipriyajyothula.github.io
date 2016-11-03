var arc = d3.arc()
    .outerRadius(radius - 10)
    .innerRadius(0)
    .context(context);

var labelArc = d3.arc()
    .outerRadius(radius - 40)
    .innerRadius(radius - 40)
    .context(context);

var pie = d3.pie()
    .sort(null)
    .value(function(d) { return d.val; });

context.translate(w / 2, h / 2);

var data = {
                "Anticipation":"8.75",
                "Positive":"13.75",
                "Negative":"12.25",
                "Sadness":"7.625",
                "Disgust":"3.75",
                "Joy":"8.125",
                "Anger":"3.75",
                "Surprise":"5.75",
                "Fear":"7.625",
                "Trust":"7.625"
            };
    
function drawpie(data, flag) {
  var dat = [];
  data_keys = Object.keys(data);
  for(var p = 0; p < 10; p++){
      var temp={};
      if(flag == "pn"){
          if(data_keys[p]=="Positive"|data_keys[p]=="Negative"){
              temp.senti = data_keys[p];
              temp.val= Number(data[data_keys[p]]);
              dat.push(temp);
          }
              
      }
      else{
          if((data_keys[p]!="Positive")&(data_keys[p]!="Negative")){
              temp.senti = data_keys[p];
              temp.val= Number(data[data_keys[p]]);
              dat.push(temp);
          }
      }
  }
    
  var arcs = pie(dat);

  arcs.forEach(function(d, i) {
    context.beginPath();
    arc(d);
    context.fillStyle = colorpalette[d.data.senti.toLowerCase()];
    context.fill();
  });

  context.beginPath();
  arcs.forEach(arc);
  context.strokeStyle = "#fff";
  context.stroke();

  context.textAlign = "center";
  context.textBaseline = "middle";
  context.fillStyle = "#000";
  arcs.forEach(function(d) {
    var c = labelArc.centroid(d);
    context.fillText(d.data.senti, c[0], c[1]);
  });

}