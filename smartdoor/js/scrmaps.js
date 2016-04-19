function getScreencast()
{
  sideApps.deactivateAll();    
  divSide.style.display = 'none';  
  divInWindow.style.display = 'block';  
  fabric.Image.fromURL('img/screencast.jpg', function(scrcast) {
      scrcast.set({left:85,
      top: 450, lockMovementX: true, lockMovementY: true, scaleX: 0.861, scaleY: 0.795});    
      inWindow.add(scrcast); 
      addInhandle();
    }); 
   
    crossSide();
}

function getMaps()
{
  sideApps.deactivateAll();    
  divSide.style.display = 'none';  
  divInWindow.style.display = 'block';  
  fabric.Image.fromURL('img/map.jpg', function(map) {
      map.set({left:85,width:1060,height: 1750,
      top: 450, lockMovementX: true, lockMovementY: true});    
      inWindow.add(map);
      addInhandle();
    }); 
   
    crossSide();
}

function getMirror()
{
  addLock();
  mainApps.deactivateAll();    
  divMain.style.display = 'none';  
  divInWindow.style.display = 'block';  
  fabric.Image.fromURL('img/model.png', function(model) {
      model.set({left:85, top: 450, lockMovementX: true, lockMovementY: true, hasBorders: false, hasControls:  false});    
      inWindow.add(model);
      addInhandle();
    }); 
   
    crossMain();
}

function getHelp(){
   addLock();
   mainApps.deactivateAll();    
   divMain.style.display = 'none';  
   divInWindow.style.display = 'block';
   crossHelp();
   var helpVideo = new fabric.Image(helpVideoEl, {
          left: 85,
          top: topLength,
          lockMovementX: true, lockMovementY: true, hasBorders: false, hasControls: false
        });
        inWindow.add(helpVideo);
        helpVideo.getElement().play();
        fabric.util.requestAnimFrame(function render() {
        inWindow.renderAll();
        fabric.util.requestAnimFrame(render);
        });
}

function crossHelp(){
    fabric.Image.fromURL('img/cross.png', function(crossImg) {
    crossImg.set({left: 1170, top: topLength-25, originX: 'center', originY: 'center'});    
    inWindow.add(crossImg);
    crossImg.hasControls = crossImg.hasBorders = false;
    crossImg.lockMovementX = crossImg.lockMovementY = true;
    crossImg.on('mousedown',function(){
            inWindow.clear();
            divInWindow.style.display = 'none';
            divMain.style.display = 'block';
            getWeather();
            getTime();
            helpVideoEl.pause();
        });
    });
}

function approaching()
{
  addLock();
  mainApps.deactivateAll();    
  divMain.style.display = 'none';  
  divInWindow.style.display = 'block';  
  fabric.Image.fromURL('img/approaching.png', function(approach) {
      approach.set({left:85, top: 450, lockMovementX: true, lockMovementY: true, hasBorders: false, hasControls:  false});    
      inWindow.add(approach);
      addInhandle();
    }); 
    crossMain();
}