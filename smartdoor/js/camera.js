function getCamera(){
      
      cameraFlag = 1;
      mainApps.deactivateAll();    
      divSide.style.display = 'none';  
      divInWindow.style.display = 'block';
      crossCamera();
      addAvatar();
      addOutVideo();
      
      fabric.Image.fromURL('img/endcall.png', function(end) {
      end.set({left: 1110, top: topLength+644, lockMovementX: true, lockMovementY: true, hasBorders: false, hasControls: false, scaleX: 0.5, scaleY: 0.5, originX: 'right'});    
          inWindow.add(end);
      end.on('mousedown',function(){
            inWindow.clear();
            divInWindow.style.display = 'none';
            divMain.style.display = 'block';
            getWeather();
            getTime();
            inVideoEl.pause();
            outVideoEl.pause();
      });
      });
    
      fabric.Image.fromURL('img/mic.png', function(mic) {
      mic.set({left: 120, top: topLength+900, lockMovementX: true, lockMovementY: true, hasBorders: false, hasControls: false});    
          inWindow.add(mic);
          
          fabric.Image.fromURL('img/mutemic.png', function(mutemic) {
      mutemic.set({left: 120, top: topLength+900, lockMovementX: true, lockMovementY: true, hasBorders: false, hasControls: false});    
               
          mutemic.on('mousedown',function(){
              inWindow.remove(mutemic);
              inWindow.add(mic); 
            }); 
              mic.on('mousedown',function(){
                inWindow.remove(mic);
                  inWindow.add(mutemic); 
            });      
          });
          });
    
    function addAvatar(){
          inVideoEl.pause();
          fabric.Image.fromURL('img/avatar.png', function(avatar) {
      avatar.set({left: 120, top: topLength+120, lockMovementX: true, lockMovementY: true, hasBorders: false, hasControls: false, scaleX: 0.5, scaleY: 0.5});    
          inWindow.add(avatar);
          outApps.add(avatar);
          
          fabric.Image.fromURL('img/mutevideo.png', function(mutevideo) {
      mutevideo.set({left: 120, top: topLength+474, lockMovementX: true, lockMovementY: true, hasBorders: false, hasControls: false});    
          inWindow.add(mutevideo);      
          mutevideo.on('mousedown',function(){
          inWindow.remove(avatar);
          outApps.remove(avatar);
          inWindow.remove(mutevideo);
            addInVideo();
            });      
          });
          });
    }
    
    function addInVideo(){
        var inVideo = new fabric.Image(inVideoEl, {
          left: 120,
          top: topLength+120,
          scaleX: 0.5, scaleY: 0.5,
          lockMovementX: true, lockMovementY: true, hasBorders: false, hasControls: false
        });
        inWindow.add(inVideo);
        outApps.add(inVideo);
        inVideo.getElement().play();
        inVideoEl.volume = 0;
        fabric.util.requestAnimFrame(function render() {
        inWindow.renderAll();
        fabric.util.requestAnimFrame(render);
        });
        fabric.Image.fromURL('img/video.png', function(video) {
      video.set({left: 120, top: topLength+474, lockMovementX: true, lockMovementY: true, hasBorders: false, hasControls: false});    
          inWindow.add(video);      
          video.on('mousedown',function(){
          inWindow.remove(inVideo);
          outApps.remove(inVideo);
          inWindow.remove(video);
            addAvatar();
            });      
          });
    }
    
    function addOutVideo(){
        fabric.Image.fromURL('img/out.jpg', function(out) {
      out.set({left: 85, top: 450, width: 701, height: 1095, lockMovementX: true, lockMovementY: true, hasBorders: false, hasControls: false});    
        inWindow.add(out);
        var outVideo = new fabric.Image(outVideoEl, {
          left: 85,
          top: 450,
          lockMovementX: true, lockMovementY: true, hasBorders: false, hasControls: false
        });
        inWindow.add(outVideo);
        outVideo.getElement().play();
        fabric.util.requestAnimFrame(function render() {
        inWindow.renderAll();
        fabric.util.requestAnimFrame(render);
        });
        });
    }
    
    function crossCamera(){
    fabric.Image.fromURL('img/cross.png', function(crossImg) {
    crossImg.set({left: 1170, top: topLength-25, originX: 'center', originY: 'center'});    
    inWindow.add(crossImg);
    crossImg.hasControls = crossImg.hasBorders = false;
    crossImg.lockMovementX = crossImg.lockMovementY = true;
    crossImg.on('mousedown',function(){
            cameraFlag = 0;
            inWindow.clear();
            divInWindow.style.display = 'none';
            divMain.style.display = 'block';
            getWeather();
            getTime();
            inVideoEl.pause();
            outVideoEl.pause();
            outApps.clear();
            outDoor();
        });
    });
}
}