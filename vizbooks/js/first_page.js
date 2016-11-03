//Margins
var margin = {top: 10, right: 50, bottom: 20, left: 50},
    width = 1500 - margin.left - margin.right,
    height = 800 - margin.top - margin.bottom;


function first_call(){
    
//Load data
d3.json("Data/img.json",function(d){
    
    i = d.value;
    d3.shuffle(i);

    var selected_imgdir = "";

    //svg

    var topsvg = d3.select('#topsvg');
      
    
    var image_height = 115,
        image_width = 115;

    topsvg.append("svg:image").attr('id','home')
        .attr('xlink:href','Data/home.jpg')
        .attr('x',width - 40).attr('y',10)
        .attr('width',40).attr('height',40)
        .on("click",function(){location.reload();});


    //group
    var group = topsvg.append("g")
        .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

    //images
    var images = group.selectAll("image")
        .data(i).enter();
    
    var imgs = images.append("svg:image")
        .attr('class','imgs')
        .attr("xlink:href",function(d){return d.img;})
        .attr('x',function(d,i){return (width - 350) - i%7 * (image_width + 15);})
        .attr('y',function(d,i){return (height - 400) - Math.floor(i/7) * (image_height + 15);})
        .attr('width',image_width)
        .attr('height',image_height)
        .attr('opacity',0.8)

    var top_label = d3.select("#top_label")
                .attr('align', 'center')
                .style('font-size',"24px").style('font-weight', 300)
                .attr('opacity', 1);
    top_label.text("Select a book below! :)").attr("opacity", 1);

    var label = d3.select("#label")
                .style('font-size',"20px").style('font-weight',300)
                .attr('opacity',0);

    var auth_label = d3.select("#auth_label")
                .style('font-size',"20px").style('font-weight',300)
                .attr('opacity',0);

    // listener events
    var setevents = d3.selectAll('.imgs').on('mouseenter',function(d){
            d3.select(this)
            .transition()
            .attr('opacity',1)
            .attr('height',225)
            .attr('width',225);

            top_label.text(d.name).attr('opacity',1);
        })
        .on('mouseleave',function(d){
            d3.select(this)
            .transition()
            .attr('opacity',0.8)
            .attr('height',image_height)
            .attr('width',image_width);
            top_label.text("VizBooks - Select a book below! :)").attr("opacity", 1);
        })
        .on('click',imageclick);

        function imageclick(d){
            // hide all images except selected one (dimension change)

            top_label.remove();
            imgs.classed('hidden',true);
            
            d3.select(this)
                .classed("hidden",false)
                .transition()
                .duration(300)
                .attr('width',100)
                .attr('height',100)
                .style("display","inline-block")
                .delay(100)
                .attr('x',0)
                .attr('y',0);
            
            // remove listeners
            d3.selectAll(".imgs").on('mouseenter',null)
                .on('mouseleave',null).on('click',null);

            // change svg dimensions and append text
            topsvg.transition().duration(800).attr("height",110);
            
            // add labels
            label.text("Book: " + d.name)
                .transition().duration(1000).attr('opacity',1);

            auth_label.text("Author: " + d.author_name)
            .transition().duration(1000).attr('opacity',1);


            d3.select('#radialform').classed('hidden',false);
            selected_imgdir = d.directory_name;
            radialtree(selected_imgdir);
            //secondviz(selected_imgdir);
        }
});

}
first_call();


