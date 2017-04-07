$(".form").submit(function(e) {
    e.preventDefault();
});

$("#submit_button").click(function(){
    if(validateValues(["#size_1", "#size_2", "#distance_1", "#distance_2", "#distance_3", "#click_number"])){
        document.getElementById("form_div").style.display = "none";
        document.getElementById("inputsvg").style.display = "block";
        click_num = Number($("#click_number")["0"].value);
        updatePattern(tuples[0].size, tuples[0].distance);
        tuples.shift()
        $("#1").addClass("present");
        }
    });

function validateValues(items){
    var res = [];
    items.forEach(function(item){
        item = $(item)["0"];
        var v = item.value;
        if((v%(Number(item.step))==0)&&(Number(v)<=item.max)&&(Number(v)>=item.min)){
            res.push(true);
        }
    });
    if(res.length==items.length){
        tuples = [];
        for(var i=1; i<=2; i++){
            for(var j=1; j<=3; j++){
                tuples.push({"size": Number($("#size_"+i)["0"].value), "distance": Number($("#distance_"+j)["0"].value)});
            }
        }
        return true;
    }
    else return false;
}

var width = 600,
    height = 600,
    mousedata = [],
    pointnumber = 120,
    tuples = [],
    click_num,
    prev_time,
    datum = [],
    prev_pt = {},
    prev_center = {},
    MTsum,
    dev_width_square_sum,
    actual_distance_sum,
    AMT,
    We,
    De,
    IDe;

var svg = d3.select("body").append("svg")
    .attr("width", width)
    .attr("height", height)
    .attr("id", "inputsvg")
    .style("display", "none")
    .style("outline", "thin solid #EEE")
//    .on("mousemove", function(){
//        var point = d3.mouse(this);
//        tick(point);
//    });

function updatePattern(size, distance){
    d3.selectAll(".target").remove();
    circles = [];
    var theta = (2*Math.PI)/(click_num+1);
    for(var k=2; k<=(click_num+1); k+=2){
        circles.push(k);
    }
    for(var k=1; k<=(click_num+1); k+=2){
        circles.push(k);
    }
    svg.selectAll("target")
        .data(circles)
        .enter().append("circle")
        .attr("class", "target")
        .attr("id", function(d){ return d; })
        .attr("r", size/2)
        .attr("cx", function(d,i){ return width/2 + ((distance/2)*Math.cos(theta*i-0.75)); })
        .attr("cy", function(d,i){ return height/2 - ((distance/2)*Math.sin(theta*i-0.75)); })
        .attr("angle", function(d,i){ return (theta*i-0.75); });

    $(".target").click(function(){
        if(this.classList.contains("present")){
            var timestamp = new Date;
            timestamp = timestamp.getTime();
            var xc = Number($("#"+this.id)[0].cx.baseVal.value);
            var yc = Number($("#"+this.id)[0].cy.baseVal.value);
            if(click_num > 0){
                if(click_num!=Number($("#click_number")[0].value)){
                    datum.push({"target_width":size, "target_distance": distance, "actual_distance": (Math.sqrt(Math.pow((event.clientX-prev_pt.x),2)+Math.pow((event.clientY-prev_pt.y),2))), "dev_width_squared": distToSegmentSquared({"x": event.clientX, "y": event.clientY}, {"x": xc, "y": yc}, prev_center), "MT":(timestamp-prev_time), "ID": Math.log2((distance/size)+1)});
                    MTsum += datum[datum.length-1].MT;
                    dev_width_square_sum += datum[datum.length-1].dev_width_squared;
                    actual_distance_sum += datum[datum.length-1].actual_distance;
                }
                else{
                    MTsum = 0;
                    dev_width_square_sum = 0;
                    actual_distance_sum = 0;
                }
                prev_time = timestamp;
                prev_pt = {"x": event.clientX, "y": event.clientY};
                prev_center = {"x": xc, "y": yc};
                click_num--;
                $("#"+(Number(this.id)+1)).addClass("present");
                $("#"+this.id).removeClass("present");
            }
            else if(click_num==0){
                datum.push({"target_width":size, "target_distance": distance, "actual_distance": (Math.sqrt(Math.pow((event.clientX-prev_pt.x),2)+Math.pow((event.clientY-prev_pt.y),2))), "dev_width_squared": distToSegmentSquared({"x": event.clientX, "y": event.clientY}, {"x": xc, "y": yc}, prev_center), "MT":(timestamp-prev_time), "ID": Math.log2((distance/size)+1)});
                MTsum += datum[datum.length-1].MT;
                dev_width_square_sum += datum[datum.length-1].dev_width_squared;
                actual_distance_sum += datum[datum.length-1].actual_distance;
                AMT = MTsum/(Number($("#click_number")["0"].value));
                We = 4.133*Math.sqrt(dev_width_square_sum/(Number($("#click_number")["0"].value)));
                De = actual_distance_sum/(Number($("#click_number")["0"].value));
                IDe = Math.log2((De/We)+1);
                for(var goback = (datum.length-1); goback>((datum.length)-(Number($("#click_number")["0"].value)+1)); goback--){
                    datum[goback]["effective_distance"] = De;
                    datum[goback]["effective_width"] = We;
                    datum[goback]["effective_ID"] = IDe;
                    datum[goback]["average_MT"] = AMT;
                    datum[goback]["throughput"] = (datum[goback]["ID"])/AMT;
                    datum[goback]["effective_throughput"] = IDe/MT;
                }
                if(tuples.length != 0){
                    click_num = Number($("#click_number")["0"].value);
                    updatePattern(tuples[0].size, tuples[0].distance);
                    tuples.shift();
                    $("#1").addClass("present");
                    //console.log("size distance over");
                }
                else{
                    $("#"+this.id).removeClass("present");
                    document.getElementById("form_div").style.display = "block";
                    console.log(JSON.stringify(datum));
                    //console.log("done!");
                }
            }
            
        }
    });
}

var line = d3.line()
    .curve(d3.curveBasis)
    .x(function(d) { return d[0]; })
    .y(function(d) { return d[1]; });

var path = svg.append("path")
    .data([mousedata])
    .attr("d", line)
    .attr("class", "mouseline")
    .attr("fill", "transparent");

function tick(point){
    mousedata.push(point);
    path.attr("d", function(d) { return line(d);})
    if(mousedata.length > pointnumber){
        mousedata.shift();
    }
}

//code from https://stackoverflow.com/questions/849211/shortest-distance-between-a-point-and-a-line-segment

function sqr(x) { return x * x; }
function dist2(v, w) { return sqr(v.x - w.x) + sqr(v.y - w.y); }
function distToSegmentSquared(p, v, w) {
  var l2 = dist2(v, w);
  if (l2 == 0) return dist2(p, v);
  var t = ((p.x - v.x) * (w.x - v.x) + (p.y - v.y) * (w.y - v.y)) / l2;
  t = Math.max(0, Math.min(1, t));
  return dist2(p, { x: v.x + t * (w.x - v.x),
                    y: v.y + t * (w.y - v.y) });
}
function distToSegment(p, v, w) { return Math.sqrt(distToSegmentSquared(p, v, w)); }
