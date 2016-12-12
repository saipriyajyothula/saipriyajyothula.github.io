function drawgraphs(rivers){
    rivers.forEach(function(d){
       drawlinegraph(String(d));
       drawarc(String(d)); 
       drawasymmetry(String(d));
    });
}

var query = window.location.search.substring(1);
query = query.slice(7).split(',');
drawgraphs(query);

$(".form").submit(function(e) {
    e.preventDefault();
});