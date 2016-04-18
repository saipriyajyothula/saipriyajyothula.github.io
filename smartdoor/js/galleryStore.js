function getStore(){
    storeWindow1();
    
    function storeWindow1(){

        var storeRect = new fabric.Rect({
          left: 85,
          top: topLength,
          fill: 'white',
          stroke: 'black',
          strokeWidth: 5,
          width: 1060,
          height: 680,
          rx: 10,
          ry: 10,
          angle: 0
        });
        storeRect.hasControls = storeRect.hasBorders = false;
        storeRect.lockMovementX = storeRect.lockMovementY = true; 

        inWindow.add(storeRect);

        sideApps.deactivateAll();    
        divSide.style.display = 'none';  
        divInWindow.style.display = 'block';  

        fabric.Image.fromURL('img/store1'+language+'.png', function(store1) {
          store1.set({left: 85, top: topLength, lockMovementX: true, lockMovementY: true, hasBorders: false, hasControls: false});    
          inWindow.add(store1); 
          addInhandle();

          var weatherRect = new fabric.Rect({
          left: 898,
          top: topLength + 432,
          fill: 'white',
          opacity: 0,
          width: 120,
          height: 120,
          rx: 20,
          ry: 20,
          angle: 0
        });
        weatherRect.hasControls = weatherRect.hasBorders = false;
        weatherRect.lockMovementX = weatherRect.lockMovementY = true; 

        inWindow.add(weatherRect);  

        weatherRect.on('mousedown',function(){
              inWindow.remove(store1);
              inWindow.remove(weatherRect);
              storeWindow2();
        });  
        });
        crossSide();
    }
    
    function storeWindow2(){
        fabric.Image.fromURL('img/store2'+language+'.png', function(store2) {
          store2.set({left: 85, top: topLength, lockMovementX: true, lockMovementY: true, hasBorders: false, hasControls: false});    
          inWindow.add(store2); 
          addInhandle();
          crossStoreWindow2();
        });
    }
    
    function crossStoreWindow2(){
    fabric.Image.fromURL('img/cross.png', function(crossImg) {
    crossImg.set({left: 1170, top: topLength-25, originX: 'center', originY: 'center'});    
    inWindow.add(crossImg);
    inWindow.moveTo(crossImg, 50);
    crossImg.hasControls = crossImg.hasBorders = false;
    crossImg.lockMovementX = crossImg.lockMovementY = true;
    crossImg.on('mousedown',function(){
            inWindow.clear();
            addInhandle();
            getTime();
            getWeather();
            storeWindow1();
        });
    });
}
   
}