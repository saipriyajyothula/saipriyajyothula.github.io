var emotion_vector = {"0": "Positive", "1": "Negative", "2": "Anger", "3": "Anticipation", "4": "Disgust", "5": "Fear", "6": "Joy", "7": "Sadness", "8": "Surprise", "9": "Trust"};

var numbers = ["one", "two", "three", "four", "five", "six", "seven", "eight"];

var colors = {"Positive": "#224C20", "Negative": "#7D1C22", "Anger": "#BE3E31", "Anticipation": "#99D179", "Disgust": "#9D4D1C", "Fear": "#171717", "Joy": "#FACF48", "Sadness": "#BBBBBB", "Surprise": "#EC7428", "Trust": "#1F4E8A"};

var slider_svg = d3.select("#slider_svg")
    .attr("preserveAspectRatio", "none")
    .attr("viewBox", "0 0 1024 40")
    .classed("slider_content", true);    

var x = d3.scaleLinear()
    .domain([1, 61])
    .range([10, 1014])
    .clamp(true);

var y = d3.scaleLinear()
    .domain([0, 100])
    .range([10, 1014])
    .clamp(true);

var slider_line = slider_svg.append("g");

slider_line.append("line")
    .attr("class", "slider_line")
    .attr("x1", x.range()[0])
    .attr("x2", x.range()[1])
    .attr("y1", 20)
    .attr("y2", 20)
    .select(function(){ return this.parentNode.appendChild(this.cloneNode(true)); })
    .attr("class", "slider_inside");

var first_handle = slider_line.append("circle")
    .attr("id", "first_handle")
    .attr("class", "slider_handle")
    .attr("cx", x.range()[0])
    .attr("cy", 20)
    .attr("r", 9);

var second_handle = slider_line.append("circle")
    .attr("id", "second_handle")
    .attr("class", "slider_handle")
    .attr("cx", x.range()[1])
    .attr("cy", 20)
    .attr("r", 9);
    
var handles = d3.selectAll(".slider_handle")
    .call(d3.drag()
    .on("start.interrupt", function(){ handles.interrupt(); })
    .on("start drag", function(){ respond_drag(x.invert(d3.event.x), this.id); }));

function respond_drag(cursor_pos, element){
    if(element == "first_handle"){
        first_handle.attr("cx", x(cursor_pos));
    }
    else if(element == "second_handle"){
        second_handle.attr("cx", x(cursor_pos));
    }
}

function add_colors(emo_str){
    var result = '';
    var pos = 2;
    for(var a=2; a<10; a++){
        if(emo_str[a]=='1'){
            if(pos==2){
                result += ('0 '+String(pos)+'px 0px 0px '+colors[emotion_vector[String(a)]]);
                pos += 2;
            }
            else{
                result += (', 0 '+String(pos)+'px 0px 0px #FFF, 0 '+String(pos+2)+'px 0px 0px '+colors[emotion_vector[String(a)]]);
                pos += 4;
            }
        }
    }
    return result;
}

text_data.forEach(function(chapter){
    var ch = document.createElement('p');
    var ch_sp = document.createElement('span');
    ch_sp.className = "chapter";
    ch_sp.id = "ch"+chapter['chapter'];
    ch_sp.textContent = 'CHAPTER ' + chapter['chapter'];
    ch.appendChild(ch_sp);
    chapter.paragraphs.forEach(function(paragraph){
        ch.appendChild(document.createElement('br'));
        paragraph.entities.forEach(function(entity){
            ch_sp = document.createElement('span');
            if(entity['font']=='i'){
                ch_sp.className += ' i';
            }
            if(entity['emotion']){
               ch_sp.style.boxShadow = add_colors(entity['emotion']);
            }
            ch_sp.textContent = (entity['word']);
            ch.appendChild(ch_sp);
            if(entity['space']==1){
                ch_sp = document.createTextNode(' ');
                ch.appendChild(ch_sp);
            }
        });
    });
    document.getElementById('text_div').appendChild(ch);
});



//var l = ['V', 'I', 'B', 'G', 'Y', 'O', 'R'];
//
//var k = ['G', 'O', 'I', 'Y', 'R', 'V', 'B'];
//
//k.sort(function(a, b) {
//  return l.indexOf(a) - l.indexOf(b);
//});
//
//console.log(k);



//$(function(){
//    $("#slider_line" ).slider({
//        range: true,
//        min: 0,
//        max: 61,
//        values: [ 0, 61 ],
//        slide: function( event, ui ) {
//        $( "#slider_values" ).val(ui.values[0] + " to " + ui.values[1]);
//      }
//    });
//    $( "#slider_values" ).val($("#slider_line").slider("values", 0) + " to " + $( "#slider_line" ).slider("values", 1) );
//  });