var js;
function IfCanvasEmpty(){
  if(js==null)
  {
    getDoodle();
  }
  else
  {
    loadDoodle();
  }
}
function getDoodle()
{
  sideApps.deactivateAll();    
  divSide.style.display = 'none';  
  divInWindow.style.display = 'block';
  DoodleApps.style.display = 'block';
  DoodleApps.style.backgroundColor='white';
  DoodleApps.style.left = '135px';
  DoodleApps.style.top = '500px';
  Doodcanvas.isDrawingMode = true;
  Doodcanvas.freeDrawingBrush.width = 5;
  Doodcanvas.freeDrawingBrush.color = "black";
  crossDoodle();
  clearDoodle();
}

function saveDoodle()
{
DoodleApps.style.display = 'none';  
js=JSON.stringify(Doodcanvas);
}

function clearDoodle()
{
var clearRect = new fabric.Rect({
  left: 642,
  top: 2040,
  fill: 'yellow',
  stroke: 'yellow',
  width: 55,
  height: 55,
  angle: 0
});
inWindow.add(clearRect);

clearRect.on('mousedown',function(){
    
Doodcanvas.clear();
})
}

function loadDoodle()
{
sideApps.deactivateAll();  
divSide.style.display = 'none'; 
divInWindow.style.display = 'block';
//console.log("asd");
DoodleApps.style.display = 'block';
Doodcanvas.loadFromJSON(js);
crossDoodle();
//console.log(js)
clearDoodle();
}

function crossDoodle(){
    fabric.Image.fromURL('img/cross.png', function(crossImg) {
    crossImg.set({left: 1170, top: topLength-25, originX: 'center', originY: 'center'});    
    inWindow.add(crossImg);
    inWindow.moveTo(crossImg, 50);
    crossImg.hasControls = crossImg.hasBorders = false;
    crossImg.lockMovementX = crossImg.lockMovementY = true;
    crossImg.on('mousedown',function(){
            inWindow.clear();
            divInWindow.style.display = 'none';
            divSide.style.display = 'block';
            getTime();
            getWeather();
            saveDoodle();
        });
    });
}