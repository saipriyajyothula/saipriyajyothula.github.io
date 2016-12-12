
console.log("sihat");
  function getEventTarget(e) {
        e = e || window.event;
        return e.target || e.srcElement; 
    }

    var ul = document.getElementById('panel');
    ul.onclick = function(event) {

        var target = getEventTarget(event);
        alert(target.innerHTML);
    };

    $("#button").click(function(){
    if($(this).html() == "+ World Map"){
        $(this).html("- World Map");
    }
    else{
        $(this).html("+ World Map");
    }
    $("#box").slideToggle();
});
