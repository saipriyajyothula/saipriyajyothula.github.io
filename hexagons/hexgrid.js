$(".form").submit(function(e) {
    e.preventDefault();
});

$("#submit_button").click(function(){
    var a = $("#size_1")["0"].value;
    var b = $("#size_2")["0"].value;
    var c = $("#click_number")["0"].value;
    if((a%1==0)&&(parseInt(a)<=$("#size_1")["0"].max)&&(parseInt(a)>=$("#size_1")["0"].min)){
        if((b%1==0)&&(parseInt(b)<=$("#size_2")["0"].max)&&(parseInt(b)>=$("#size_2")["0"].min)){
            if((c%1==0)&&(parseInt(c)<=$("#click_number")["0"].max)&&(parseInt(c)>=$("#click_number")["0"].min)){
                trial++;
                datum.push({"trial": trial+1, "clicks": []});
                count = parseInt(c)*2;
                halfcount = parseInt(c);
                updatePattern();
                select_random();
            }
        }
    }
});

var width = 960,
    height = 600,
    radius,
    rows,
    rowsforodd,
    columns,
    count = 20,
    halfcount = 10,
    trial = 0,
    datum = [{"trial": trial+1, clicks: []}],
    mousedata = [],
    pointnumber = 120;

var svg = d3.select("body").append("svg")
    .attr("width", width)
    .attr("height", height)
    .on("mousemove", function(){
        var point = d3.mouse(this);
        tick(point);
    });


var line = d3.line()
    .curve(d3.curveBasis)
    .x(function(d) { return d[0]; })
    .y(function(d) { return d[1]; });

var path = svg.append("path")
    .data([mousedata])
    .attr("d", line)
    .attr("class", "mouseline")
    .attr("stroke", "#000")
    .attr("fill", "transparent")

var halfradius;

//var hexpath = function(d){
//    return "M " + 0 + " " + (Math.sqrt(3)*halfradius) + " L " + halfradius + " " + 0 + " L " + (halfradius*3) + " " + 0 + " L " + (2*radius) + " " + (Math.sqrt(3)*halfradius) + " L " + (3*halfradius) + " " + (Math.sqrt(3)*radius) + " L " + halfradius + " " + (Math.sqrt(3)*radius) + " Z";
//}

var hexpaths;
var previous, present = "nothing";

var hexagons = function(width, height, radius){
    hexpaths = [];
    halfradius = radius/2;
    rows = Math.floor(width/(3*radius));
    if(((rows*3*radius)+(3*halfradius)+(2*radius))>width){
        rowsforodd = rows - 1;
    }
    columns = Math.floor(height/(Math.sqrt(3)*halfradius)) - 1;
    for(var i=0; i<rows; i++){
        for(var j=0; j<columns;j++){
            temp = [i, j];
            if(j%2 == 0){
                temp.push("M " + (3*radius*i) + " " + ((Math.sqrt(3)*halfradius*j)+(Math.sqrt(3)*halfradius)) + " L " + ((3*radius*i)+halfradius) + " " + (Math.sqrt(3)*halfradius*j) + " L " + ((3*radius*i)+(halfradius*3)) + " " + (Math.sqrt(3)*halfradius*j) + " L " + ((3*radius*i)+(2*radius)) + " " + ((Math.sqrt(3)*halfradius*j)+(Math.sqrt(3)*halfradius)) + " L " + ((3*radius*i)+(3*halfradius)) + " " + ((Math.sqrt(3)*halfradius*j)+(Math.sqrt(3)*radius)) + " L " + ((3*radius*i)+halfradius) + " " + ((Math.sqrt(3)*halfradius*j)+(Math.sqrt(3)*radius)) + " Z");
                hexpaths.push(temp);
            }
            else{
                if(i<rowsforodd){
                    temp.push("M " + ((3*halfradius)+(3*radius*i)) + " " + ((Math.sqrt(3)*halfradius*j)+(Math.sqrt(3)*halfradius)) + " L " + ((3*halfradius)+(3*radius*i)+halfradius) + " " + (Math.sqrt(3)*halfradius*j) + " L " + ((3*halfradius)+(3*radius*i)+(halfradius*3)) + " " + (Math.sqrt(3)*halfradius*j) + " L " + ((3*halfradius)+(3*radius*i)+(2*radius)) + " " + ((Math.sqrt(3)*halfradius*j)+(Math.sqrt(3)*halfradius)) + " L " + ((3*halfradius)+(3*radius*i)+(3*halfradius)) + " " + ((Math.sqrt(3)*halfradius*j)+(Math.sqrt(3)*radius)) + " L " + ((3*halfradius)+(3*radius*i)+halfradius) + " " + ((Math.sqrt(3)*halfradius*j)+(Math.sqrt(3)*radius)) + " Z");
                    hexpaths.push(temp);
                }
            }
        }
    }
}

hexagons(width, height, radius);

updatePattern();
select_random();

function updatePattern(){
    
    if(count>halfcount){
        hexagons(width, height, parseInt($("#size_1")["0"].value));    
    }
    else if(count==halfcount){
        hexagons(width, height, parseInt($("#size_2")["0"].value));    
    }
    
    d3.selectAll(".hexagon").remove();
    
    svg.selectAll("hexagon")
        .data(hexpaths)
        .enter().append("path")
        .attr("d", function(d){ return d[2]; })
        .attr("class", "hexagon")
        .attr("id", function(d){ return d[0] + "_" + d[1]; })
        .attr("stroke", "#EEE")
        .attr("fill", "transparent")
    
    $(".hexagon").click(function(){
        if(this.classList.contains("present")){
            var t = new Date;
            
            if(count>=halfcount){
                datum[trial].clicks[(halfcount*2)-count-1] = {};
                datum[trial].clicks[(halfcount*2)-count-1]["size"] = parseInt($("#size_1")["0"].value);
            }
            else if(count>=0){
                datum[trial].clicks[(halfcount*2)-count-1] = {};
                datum[trial].clicks[(halfcount*2)-count-1]["size"] = parseInt($("#size_2")["0"].value);
            }
            
            datum[trial].clicks[(halfcount*2)-count-1]["absTime"] = t.getTime();
            
            if(((halfcount*2)-count-1)>0){
                datum[trial].clicks[(halfcount*2)-count-1]["previous"] = previous;
            }
            else{
                datum[trial].clicks[(halfcount*2)-count-1]["previous"] = "nothing";
            }
            
            datum[trial].clicks[(halfcount*2)-count-1]["present"] = present;
            
            console.log(datum);
            
            if(count==halfcount){
                updatePattern();
                select_random();
            }
            else if(count>=0){
                select_random();
            }
        }
    });
    
}

function select_random(){
    console.log(count);
    if(count!=0){
        if((previous!="nothing")&&(previous!=undefined)){
            $("#" + previous).removeClass("previous");
        }
        previous = present;
        temp = Math.floor(Math.random()*rowsforodd) + "_" + Math.floor(Math.random()*columns);
        if(temp==previous){
            var first = parseInt(temp.split('_')[0]);
            var second = parseInt(temp.split('_')[1]);
            second = (second == columns - 1) ? (second - 1) : (second + 1)
            temp = first + "_" + second;
        }
        present = temp;
        if((previous!="nothing")&&(previous!=undefined)){
            $("#" + previous).removeClass("present");
            $("#" + previous).addClass("previous");
        }
        console.log("previous: "+ previous + ", present: " + present);        
        count--;
        $("#" + present).addClass("present");
    }
    else{
        $("#" + present).removeClass("present");
    }
}

function tick(point){
    
    mousedata.push(point);
    
    path.attr("d", function(d) { return line(d);})

    if(mousedata.length > pointnumber){
        mousedata.shift();
    }
    
}