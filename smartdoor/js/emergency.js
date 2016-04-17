function emergencyWindow1(){
    
    var emergencyRect = new fabric.Rect({
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
    emergencyRect.hasControls = emergencyRect.hasBorders = false;
    emergencyRect.lockMovementX = emergencyRect.lockMovementY = true; 

    var emergencyHeaderText = new fabric.Text('Emergency', { left: 615, top: topLength + 80, fontFamily: 'HelveticaLight', fontSize: 44, originX: 'center', originY: 'top', fontWeight: 300});
    emergencyHeaderText.hasControls = emergencyHeaderText.hasBorders = false;
    emergencyHeaderText.lockMovementX = emergencyHeaderText.lockMovementY = true;

    var fireText = new fabric.Text('Fire', { left: 285, top: topLength + 490, fontFamily: 'HelveticaLight', fontSize: 38, originX: 'center', originY: 'top', fontWeight: 300});
    fireText.hasControls = fireText.hasBorders = false;
    fireText.lockMovementX = fireText.lockMovementY = true;

    var policeText = new fabric.Text('Police', { left: 615, top: topLength + 490, fontFamily: 'HelveticaLight', fontSize: 38, originX: 'center', originY: 'top', fontWeight: 300});
    policeText.hasControls = policeText.hasBorders = false;
    policeText.lockMovementX = policeText.lockMovementY = true;

    var medicalText = new fabric.Text('Medical', { left: 955, top: topLength + 490, fontFamily: 'HelveticaLight', fontSize: 38, originX: 'center', originY: 'top', fontWeight: 300});
    medicalText.hasControls = medicalText.hasBorders = false;
    medicalText.lockMovementX = medicalText.lockMovementY = true;

    var callingText = new fabric.Text('Medical', { left: 615, top: topLength + 210, fontFamily: 'HelveticaLight', fontSize: 44, originX: 'center', originY: 'top', fontWeight: 300});
    callingText.hasControls = callingText.hasBorders = false;
    callingText.lockMovementX = callingText.lockMovementY = true;
    
    divMain.style.display = 'none';
    divInWindow.style.display = 'block';
    
    inWindow.add(emergencyRect);
    addInhandle();
    
    if(language == 1){
        emergencyHeaderText.text = 'Emergencia';
        fireText.text = 'Fuego';
        policeText.text = 'Policía';
        medicalText.text = 'Médico';
    }
    
    inWindow.add(emergencyHeaderText);
    
    fabric.Image.fromURL('img/fire.png', function(fire) {
    fire.set({left: 185, top: topLength+245, scaleX: 0.909, scaleY: 0.909});    
    inWindow.add(fire);
    fire.hasControls = fire.hasBorders = false;
    fire.lockMovementX = fire.lockMovementY = true;
        fire.on('mousedown',function(){
            emergencyWindow2();
        });
    });
    
    fabric.Image.fromURL('img/police.png', function(police) {
    police.set({left: 515, top: topLength+245, scaleX: 0.909, scaleY: 0.909});    
    inWindow.add(police);
    police.hasControls = police.hasBorders = false;
    police.lockMovementX = police.lockMovementY = true;
        police.on('mousedown',function(){
            emergencyWindow2();
        });
    });
    
    fabric.Image.fromURL('img/medical.png', function(medical) {
    medical.set({left: 855, top: topLength+245, scaleX: 0.909, scaleY: 0.909});    
    inWindow.add(medical);
    medical.hasControls = medical.hasBorders = false;
    medical.lockMovementX = medical.lockMovementY = true;
        medical.on('mousedown',function(){
            emergencyWindow2();
        });
    });
    
    inWindow.add(fireText);
    inWindow.add(policeText);
    inWindow.add(medicalText);
    crossMain();

function emergencyWindow2(){
    inWindow.add(emergencyRect);
    addInhandle();
    if(language != 1){
        callingText.text = 'Calling 911..';
    }
    else{
        callingText.text = 'Llamando al 911..';
    }
    
    inWindow.add(callingText);
    
    fabric.Image.fromURL('img/endcall.png', function(endcall) {
    endcall.set({left: 615, top: topLength+315, originX: 'center'});    
    inWindow.add(endcall);
    endcall.hasControls = endcall.hasBorders = false;
    endcall.lockMovementX = endcall.lockMovementY = true;
        endcall.on('mousedown',function(){
            inWindow.deactivateAll();
            emergencyWindow1();    
        });
    });
    crossSecondWindow();
}

}


function crossSecondWindow(){
    fabric.Image.fromURL('img/cross.png', function(crossImg) {
    crossImg.set({left: 1170, top: topLength-25, originX: 'center', originY: 'center'});    
    inWindow.add(crossImg);
    crossImg.hasControls = crossImg.hasBorders = false;
    crossImg.lockMovementX = crossImg.lockMovementY = true;
    crossImg.on('mousedown',function(){
            inWindow.deactivateAll();
            emergencyWindow1();
        });
    });
}