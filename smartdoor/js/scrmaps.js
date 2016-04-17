function getScreencast()
{
  sideApps.deactivateAll();    
  divSide.style.display = 'none';  
  divInWindow.style.display = 'block';  
  fabric.Image.fromURL('img/screencast.jpg', function(scrcast) {
      scrcast.set({left:85,width:1060,height: 1750,
      top: 450, lockMovementX: true, lockMovementY: true});    
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