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
  DoodleApps.style.left = '170px';
  DoodleApps.style.top = '450px';
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
fabric.Image.fromURL('img/eraser.png', function(eraser) {
eraser.set({left: 1170, top: topLength+50, originX: 'center', hasBorders: false, hasControls: false, lockMovementX: true, lockMovementY: true});    
inWindow.add(eraser); 
eraser.on('mousedown',function(){    
Doodcanvas.clear();
});
});
}

function loadDoodle()
{
sideApps.deactivateAll();  
divSide.style.display = 'none'; 
divInWindow.style.display = 'block';
DoodleApps.style.display = 'block';
Doodcanvas.loadFromJSON(js);
crossDoodle();
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