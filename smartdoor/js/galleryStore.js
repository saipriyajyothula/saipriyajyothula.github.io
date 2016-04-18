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

function getGallery(){
    
    var galleryImg = 'gallery1';
    galleryWindow1();
    
    function galleryWindow1(){
        
        var galleryRect = new fabric.Rect({
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
        galleryRect.hasControls = galleryRect.hasBorders = false;
        galleryRect.lockMovementX = galleryRect.lockMovementY = true; 

        inWindow.add(galleryRect);

        sideApps.deactivateAll();    
        divSide.style.display = 'none';  
        divInWindow.style.display = 'block';
        addInhandle();
        
        var galleryHeaderText = new fabric.Text('Gallery', { left: 615, top: topLength + 62, fontFamily: 'HelveticaLight', fontSize: 44, originX: 'center', originY: 'top', fontWeight: 900, textAlign: 'center'});
        galleryHeaderText.text = (language == 0) ? 'Gallery' : 'Galería';
        galleryHeaderText.hasControls = galleryHeaderText.hasBorders = false;
        galleryHeaderText.lockMovementX = galleryHeaderText.lockMovementY = true;
    
        fabric.Image.fromURL('img/random/gallery1.png', function(gallery1) {
      gallery1.set({left: leftWidth,
      top: topLength+168, lockMovementX: true, lockMovementY: true, hasBorders: false, hasControls: false});    
          inWindow.add(gallery1);
          gallery1.on('mousedown',function(){
              galleryImg = 'gallery1';
              galleryWindow2();
        });
        });

        fabric.Image.fromURL('img/random/gallery2.png', function(gallery2) {
          gallery2.set({left: leftWidth+220,
          top: topLength+168, lockMovementX: true, lockMovementY: true, hasBorders: false, hasControls: false});    
          inWindow.add(gallery2);
          gallery2.on('mousedown',function(){
              galleryImg = 'gallery2';
              galleryWindow2();
        });
        });    

        fabric.Image.fromURL('img/random/gallery3.png', function(gallery3) {
          gallery3.set({left: leftWidth+440,
          top: topLength+168, lockMovementX: true, lockMovementY: true, hasBorders: false, hasControls: false});    
          inWindow.add(gallery3);
          gallery3.on('mousedown',function(){
              galleryImg = 'gallery3';
              galleryWindow2();
        });
        });    

        fabric.Image.fromURL('img/random/gallery4.png', function(gallery4) {
          gallery4.set({left: leftWidth+660,
          top: topLength+168, lockMovementX: true, lockMovementY: true, hasBorders: false, hasControls: false});    
          inWindow.add(gallery4);
          gallery4.on('mousedown',function(){
              galleryImg = 'gallery4';
              galleryWindow2();
        });
        });    

        fabric.Image.fromURL('img/random/gallery5.png', function(gallery5) {
          gallery5.set({left: leftWidth,
          top: topLength+418, lockMovementX: true, lockMovementY: true, hasBorders: false, hasControls: false});    
          inWindow.add(gallery5);
          gallery5.on('mousedown',function(){
              galleryImg = 'gallery5';
              galleryWindow2();
        });
        });    

        fabric.Image.fromURL('img/random/gallery6.png', function(gallery6) {
          gallery6.set({left: leftWidth+220,
          top: topLength+418, lockMovementX: true, lockMovementY: true, hasBorders: false, hasControls: false});    
          inWindow.add(gallery6);
          gallery6.on('mousedown',function(){
              galleryImg = 'gallery6';
              galleryWindow2();
        });
        });    

        fabric.Image.fromURL('img/random/gallery7.png', function(gallery7) {
          gallery7.set({left: leftWidth+440,
          top: topLength+418, lockMovementX: true, lockMovementY: true, hasBorders: false, hasControls: false});    
          inWindow.add(gallery7);
          gallery7.on('mousedown',function(){
              galleryImg = 'gallery7';
              galleryWindow2();
        });
        });    

        fabric.Image.fromURL('img/random/gallery8.png', function(gallery8) {
          gallery8.set({left: leftWidth+660,
          top: topLength+418, lockMovementX: true, lockMovementY: true, hasBorders: false, hasControls: false});    
          inWindow.add(gallery8);
          gallery8.on('mousedown',function(){
              galleryImg = 'gallery8';
              galleryWindow2();
        });
        });

        var gallery1Text = new fabric.Text('default', { left: leftWidth+58, top: topLength+313, fontFamily: 'HelveticaLight', fontSize: 28, fontWeight:300, originX: 'center', textAlign: 'center'});
        gallery1Text.text = (language == 0) ? 'Image 1' : 'Imagen 1';
        gallery1Text.hasControls = gallery1Text.hasBorders = false;
        gallery1Text.lockMovementX = gallery1Text.lockMovementY = true;
        gallery1Text.selectable = false;
        gallery1Text.evented = false;    

        var gallery2Text = new fabric.Text('default', { left: leftWidth+278, top: topLength+313, fontFamily: 'HelveticaLight', fontSize: 28, fontWeight:300, originX: 'center', textAlign: 'center'});
        gallery2Text.text = (language == 0) ? 'Image 2' : 'Imagen 2';
        gallery2Text.hasControls = gallery2Text.hasBorders = false;
        gallery2Text.lockMovementX = gallery2Text.lockMovementY = true;
        gallery2Text.selectable = false;
        gallery2Text.evented = false;    

        var gallery3Text= new fabric.Text('default', { left: leftWidth+498, top: topLength+313, fontFamily: 'HelveticaLight', fontSize: 28, fontWeight:300, originX: 'center', textAlign: 'center'});
        gallery3Text.text = (language == 0) ? 'Image 3' : 'Imagen 3';
        gallery3Text.hasControls = gallery3Text.hasBorders = false;
        gallery3Text.lockMovementX = gallery3Text.lockMovementY = true;
        gallery3Text.selectable = false;
        gallery3Text.evented = false;

        var gallery4Text = new fabric.Text('default', { left: leftWidth+718, top: topLength+313, fontFamily: 'HelveticaLight', fontSize: 28, fontWeight:300, originX: 'center', textAlign: 'center'});
        gallery4Text.text = (language == 0) ? 'Image 4' : 'Imagen 4';
        gallery4Text.hasControls = gallery4Text.hasBorders = false;
        gallery4Text.lockMovementX = gallery4Text.lockMovementY = true;
        gallery4Text.selectable = false;
        gallery4Text.evented = false;    

        var gallery5Text = new fabric.Text('default', { left: leftWidth+58, top: topLength+563, fontFamily: 'HelveticaLight', fontSize: 28, fontWeight:300, originX: 'center', textAlign: 'center'});
        gallery5Text.text = (language == 0) ? 'Image 5' : 'Imagen 5';
        gallery5Text.hasControls = gallery5Text.hasBorders = false;
        gallery5Text.lockMovementX = gallery5Text.lockMovementY = true;
        gallery5Text.selectable = false;
        gallery5Text.evented = false;    

        var gallery6Text = new fabric.Text('default', { left: leftWidth+278, top: topLength+563, fontFamily: 'HelveticaLight', fontSize: 28, fontWeight:300, originX: 'center', textAlign: 'center'});
        gallery6Text.text = (language == 0) ? 'Image 6' : 'Imagen 6';
        gallery6Text.hasControls = gallery6Text.hasBorders = false;
        gallery6Text.lockMovementX = gallery6Text.lockMovementY = true;
        gallery6Text.selectable = false;
        gallery6Text.evented = false;    

        var  gallery7Text= new fabric.Text('default', { left: leftWidth+498, top: topLength+563, fontFamily: 'HelveticaLight', fontSize: 28, fontWeight:300, originX: 'center', textAlign: 'center'});
        gallery7Text.text = (language == 0) ? 'Image 7' : 'Imagen 7';
        gallery7Text.hasControls = gallery7Text.hasBorders = false;
        gallery7Text.lockMovementX = gallery7Text.lockMovementY = true;
        gallery7Text.selectable = false;
        gallery7Text.evented = false;

        var gallery8Text = new fabric.Text('default', { left: leftWidth+718, top: topLength+563, fontFamily: 'HelveticaLight', fontSize: 28, fontWeight:300, originX: 'center', textAlign: 'center'});
        gallery8Text.text = (language == 0) ? 'Image 8' : 'Imagen 8';
        gallery8Text.hasControls = gallery8Text.hasBorders = false;
        gallery8Text.lockMovementX = gallery8Text.lockMovementY = true;
        gallery8Text.selectable = false;
        gallery8Text.evented = false;
        
        inWindow.add(galleryHeaderText);
        inWindow.add(gallery1Text);
        inWindow.add(gallery2Text);
        inWindow.add(gallery3Text);
        inWindow.add(gallery4Text);
        inWindow.add(gallery5Text);
        inWindow.add(gallery6Text);
        inWindow.add(gallery7Text);
        inWindow.add(gallery8Text);
        crossSide();
    }
    
    function galleryWindow2(){
        fabric.Image.fromURL('img/'+galleryImg+'.png', function(galleryShow) {
          galleryShow.set({left: 85, top: 450, lockMovementX: true, lockMovementY: true, hasBorders: false, hasControls: false});    
          inWindow.add(galleryShow); 
          addInhandle();
          crossgalleryWindow2();
        });
    }
    
    function crossgalleryWindow2(){
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
                galleryWindow1();
            });
        });
    }
}