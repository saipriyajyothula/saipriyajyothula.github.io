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