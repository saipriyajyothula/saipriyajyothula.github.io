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
    prev_center = {};

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
        .attr("cx", function(d,i){ return 300 + ((distance/2)*Math.cos(theta*i-0.75)); })
        .attr("cy", function(d,i){ return 300 + ((distance/2)*Math.sin(theta*i-0.75)); });

    $(".target").click(function(){
        if(this.classList.contains("present")){
            var timestamp = new Date;
            timestamp = timestamp.getTime();
            //console.log([event.clientX, event.clientY]);
            //console.log(timestamp);
            console.log($("#"+this.id)[0].cx.baseVal.value);
            console.log($("#"+this.id)[0].cy.baseVal.value);
            if(click_num > 0){
                if(click_num==Number($("#click_number")[0].value)){
                    prev_time = timestamp;
                    prev_center = {"x": event.clientX, "y": event.clientY};
                }
                else{
                    datum.push({"MT":(timestamp-prev_time), "size":size, "distance": distance, "actual_distance": (Math.sqrt(Math.pow((event.clientX-prev_center.x),2)+Math.pow((event.clientY-prev_center.y),2)))});
                    prev_center = {"x": event.clientX, "y": event.clientY};
                    prev_time = timestamp;
                }
                click_num--;
                $("#"+(Number(this.id)+1)).addClass("present");
                $("#"+this.id).removeClass("present");
            }
            else if(click_num==0){
                datum.push({"MT":(timestamp-prev_time), "size":size, "distance":distance, "actual_distance": (Math.sqrt(Math.pow((event.clientX-prev_center.x),2)+Math.pow((event.clientY-prev_center.y),2)))});
                //console.log("size distance over");
                if(tuples.length != 0){
                    click_num = Number($("#click_number")["0"].value);
                    updatePattern(tuples[0].size, tuples[0].distance);
                    tuples.shift();
                    $("#1").addClass("present");
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