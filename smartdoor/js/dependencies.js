var canvas = this.__canvas = new fabric.Canvas('c');
canvas.backgroundColor = "white";  // light grey

var leftWidth = 280;    
var topLength = 500;
var tempUnits = 'C';
var language = 0;

function cross(){
    fabric.Image.fromURL('img/cross.png', function(crossImg) {
    crossImg.set({left: 1195+25, top: topLength-25, originX: 'center', originY: 'center'});    
    canvas.add(crossImg);
    crossImg.hasControls = crossImg.hasBorders = false;
    crossImg.lockMovementX = crossImg.lockMovementY = true;
    crossImg.on('mousedown',function(){
            canvas.deactivateAll();
            canvas.clear();
            addelements();
        });
    });
}