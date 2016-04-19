function getCamera(){
      
    // display just the basic functionalities during camera mode
    
    fabric.Image.fromURL('img/keypad.png', function(keypad) {
      keypad.set({left: 53,
      top: 1150, lockMovementX: true, lockMovementY: true,scaleX: 0.9, scaleY:0.9, hasControls: false, hasBorders: false});    
      outWindow.add(keypad);
      keypad.on('mousedown',function(){
          outWindow.deactivateAll();
          logsJSON.unshift({"mode":"keypad","timeStamp":""+new Date().toLocaleTimeString()+""});

    });    
    });
    
    fabric.Image.fromURL('img/outhandle.png', function(outhandle) {
      outhandle.set({left: 65,
      top: 1325, originX: 'left', lockMovementX: true, lockMovementY: true, scaleX: 0.8, scaleY: 0.8, hasControls: false, hasBorders: false});    
      outWindow.add(outhandle);
      outWindow.moveTo(outhandle, 50);
      outhandle.on('mousedown',function(){
      logsJSON.unshift({"mode":"fingerprint","timeStamp":""+new Date().toLocaleTimeString()+""});
      });
    });
    
      mainApps.deactivateAll();    
      divSide.style.display = 'none';  
      divInWindow.style.display = 'block';
      divOutApps.style.display = 'none';
      divOutWindow.style.display = 'block';
      crossCamera();
      addAvatar();
      addOutVideo();
      
    // add end call and microphone toggle icons
    
      fabric.Image.fromURL('img/endcall.png', function(end) {
      end.set({left: 1095, top: topLength+504.75, lockMovementX: true, lockMovementY: true, hasBorders: false, hasControls: false, scaleX: 0.5, scaleY: 0.5, originX: 'center', originY: 'center'});    
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
      mic.set({left: 1095, top: topLength+585.5, lockMovementX: true, lockMovementY: true, hasBorders: false, hasControls: false, originX: 'center' });    
          inWindow.add(mic);
          
          fabric.Image.fromURL('img/mutemic.png', function(mutemic) {
      mutemic.set({left: 120, top: topLength+585.5, lockMovementX: true, lockMovementY: true, hasBorders: false, hasControls: false});    
               
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
    
    // avatar mode on camera and muted video button
    
    function addAvatar(){
          inVideoEl.pause();
          fabric.Image.fromURL('img/avatar.png', function(avatar) {
      avatar.set({left: 1200, top: topLength+120, originX: 'right', lockMovementX: true, lockMovementY: true, hasBorders: false, hasControls: false, scaleX: 0.777, scaleY: 0.777});    
          inWindow.add(avatar);
          outWindow.add(avatar);
          
          fabric.Image.fromURL('img/mutevideo.png', function(mutevideo) {
      mutevideo.set({left: 1095, top: topLength+403.375, lockMovementX: true, lockMovementY: true, hasBorders: false, hasControls: false, originX: 'center', originY: 'center'});    
          inWindow.add(mutevideo);      
          mutevideo.on('mousedown',function(){
          inWindow.remove(avatar);
          outWindow.remove(avatar);
          inWindow.remove(mutevideo);
            addInVideo();
            });      
          });
          });
    }
    
    // original video mode and unmuted video button
    
    function addInVideo(){
        var inVideo = new fabric.Image(inVideoEl, {
          left: 1200,
          top: topLength+120, originX: 'right',
          lockMovementX: true, lockMovementY: true, hasBorders: false, hasControls: false
        });
        inWindow.add(inVideo);
        outWindow.add(inVideo);
        inVideo.getElement().play();
        inVideoEl.volume = 0;
        fabric.util.requestAnimFrame(function render() {
        inWindow.renderAll();
        fabric.util.requestAnimFrame(render);
        });
        fabric.Image.fromURL('img/video.png', function(video) {
      video.set({left: 1095, top: topLength+403.375, lockMovementX: true, lockMovementY: true, hasBorders: false, hasControls: false, originX: 'center'});    
          inWindow.add(video);      
          video.on('mousedown',function(){
          inWindow.remove(inVideo);
          outWindow.remove(inVideo);
          inWindow.remove(video);
            addAvatar();
            });      
          });
    }
    
    // stream from the outside
    
    function addOutVideo(){
        fabric.Image.fromURL('img/out.jpg', function(out) {
      out.set({left: 85, top: 450, width: 875, height: 1367, lockMovementX: true, lockMovementY: true, hasBorders: false, hasControls: false});    
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
    
    // cross to close the camera mode
    
    function crossCamera(){
    fabric.Image.fromURL('img/cross.png', function(crossImg) {
    crossImg.set({left: 1170, top: topLength-25, originX: 'center', originY: 'center'});    
    inWindow.add(crossImg);
    crossImg.hasControls = crossImg.hasBorders = false;
    crossImg.lockMovementX = crossImg.lockMovementY = true;
    crossImg.on('mousedown',function(){
    crossImg.on('mousedown',function(){
            inWindow.clear();
            divInWindow.style.display = 'none';
            divMain.style.display = 'block';
            divOutApps.style.display = 'block';
            divOutWindow.style.display = 'none';
            inVideoEl.pause();
            outVideoEl.pause();
            outWindow.clear();
            getWeather();
            getTime();
        });
    });
});
}
}