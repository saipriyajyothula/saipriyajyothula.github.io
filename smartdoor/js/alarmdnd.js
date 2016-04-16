var alarmRect = new fabric.Rect({
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
alarmRect.hasControls = alarmRect.hasBorders = false;
alarmRect.lockMovementX = alarmRect.lockMovementY = true; 

var dndRect = new fabric.Rect({
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
dndRect.hasControls = dndRect.hasBorders = false;
dndRect.lockMovementX = dndRect.lockMovementY = true; 

var alarmHeaderText = new fabric.Text('Alarm', { left: 615, top: topLength + 80, fontFamily: 'HelveticaLight', fontSize: 44, originX: 'center', originY: 'top', fontWeight: 300});
alarmHeaderText.hasControls = alarmHeaderText.hasBorders = false;
alarmHeaderText.lockMovementX = alarmHeaderText.lockMovementY = true;

var dndHeaderText = new fabric.Text('DND', { left: 615, top: topLength + 80, fontFamily: 'HelveticaLight', fontSize: 44, originX: 'center', originY: 'top', fontWeight: 300});
dndHeaderText.hasControls = dndHeaderText.hasBorders = false;
dndHeaderText.lockMovementX = dndHeaderText.lockMovementY = true;

var alarmOnText = new fabric.Text('ON', { left: 686, top: topLength + 340, fontFamily: 'HelveticaLight', fontSize: 38, originX: 'left', originY: 'center', fontWeight: 300});
alarmOnText.hasControls = alarmOnText.hasBorders = false;
alarmOnText.lockMovementX = alarmOnText.lockMovementY = true;

var dndOnText = new fabric.Text('ON', { left: 686, top: topLength + 340, fontFamily: 'HelveticaLight', fontSize: 38, originX: 'left', originY: 'center', fontWeight: 300});
dndOnText.hasControls = dndOnText.hasBorders = false;
dndOnText.lockMovementX = dndOnText.lockMovementY = true;

var alarmOffText = new fabric.Text('OFF', { left: 544, top: topLength + 340, fontFamily: 'HelveticaLight', fontSize: 38, originX: 'right', originY: 'center', fontWeight: 300});
alarmOffText.hasControls = alarmOffText.hasBorders = false;
alarmOffText.lockMovementX = alarmOffText.lockMovementY = true;

var dndOffText = new fabric.Text('OFF', { left: 544, top: topLength + 340, fontFamily: 'HelveticaLight', fontSize: 38, originX: 'right', originY: 'center', fontWeight: 300});
dndOffText.hasControls = dndOffText.hasBorders = false;
dndOffText.lockMovementX = dndOffText.lockMovementY = true;

var alarmSwitchRect = new fabric.Rect({
  left: 564,
  top: topLength+336,
  fill: '#4CD964',
  stroke: '#4CD964',
  width: 102,
  height: 52,
  originX: 'left',
  originY: 'center',
  rx: 25,
  ry: 25,
  angle: 0
});
alarmSwitchRect.hasControls = alarmSwitchRect.hasBorders = false;
alarmSwitchRect.lockMovementX = alarmSwitchRect.lockMovementY = true;

var dndSwitchRect = new fabric.Rect({
  left: 564,
  top: topLength+336,
  fill: 'EAEAEA',
  stroke: '#B7B7B7',
  width: 102,
  height: 52,
  originX: 'left',
  originY: 'center',
  rx: 25,
  ry: 25,
  angle: 0
});
dndSwitchRect.hasControls = dndSwitchRect.hasBorders = false;
dndSwitchRect.lockMovementX = dndSwitchRect.lockMovementY = true;

var alarmCircle = new fabric.Circle({left: 640, top: topLength+336, radius: 25, fill: 'white', stroke: '#B7B7B7', originX: 'center', originY: 'center', shadow: 'none'});
alarmCircle.lockMovementX = alarmCircle.lockMovementY = true;
alarmCircle.hasControls = alarmCircle.hasBorders = false;

var dndCircle = new fabric.Circle({left: 590, top: topLength+336, radius: 25, fill: 'white', stroke: '#B7B7B7', originX: 'center', originY: 'center', shadow: '#CECECE 2px 2px 2px'});
dndCircle.lockMovementX = dndCircle.lockMovementY = true;
dndCircle.hasControls = dndCircle.hasBorders = false;

var alarmRedCircle = new fabric.Circle({left: leftWidth + 120, top: topLength+250, radius: 18, fill: 'red', originX: 'center', originY: 'center', stroke: 'white', strokeWidth: 5});
alarmRedCircle.lockMovementX = alarmRedCircle.lockMovementY = true;
alarmRedCircle.hasControls = alarmRedCircle.hasBorders = false;

var dndRedCircle = new fabric.Circle({left: leftWidth + 560, top: topLength+500, radius: 18, fill: 'red', originX: 'center', originY: 'center', stroke: 'white', strokeWidth: 5});
dndRedCircle.lockMovementX = dndRedCircle.lockMovementY = true;
dndRedCircle.hasControls = dndRedCircle.hasBorders = false;

alarmSwitchRect.on('mousedown',function(){
      alarmSwitch();
});

dndSwitchRect.on('mousedown',function(){
      dndSwitch();
});

alarmCircle.on('mousedown',function(){
      alarmSwitch();
});

dndCircle.on('mousedown',function(){
      dndSwitch();
});

function alarmWindow(){
    mainApps.deactivateAll();
    divMain.style.display = 'none';
    divInWindow.style.display = 'block';
    inWindow.add(alarmRect);
    inWindow.add(alarmHeaderText);
    inWindow.add(alarmOnText);
    inWindow.add(alarmOffText);
    inWindow.add(alarmSwitchRect);
    inWindow.add(alarmCircle);
    if(language == 1){
        alarmHeaderText.text = 'Alarma';
        alarmOnText.text = 'Encendido';
        alarmOffText.text = 'Apagado';
    }
    crossAlarmDND();
}

function dndWindow(){
    mainApps.deactivateAll();
    divMain.style.display = 'none';
    divInWindow.style.display = 'block';
    inWindow.add(dndRect);
    inWindow.add(dndHeaderText);
    inWindow.add(dndOnText);
    inWindow.add(dndOffText);
    inWindow.add(dndSwitchRect);
    inWindow.add(dndCircle);
    if(language == 1){
        dndOnText.text = 'Encendido';
        dndOffText.text = 'Apagado';
    }
    crossAlarmDND();
}

function alarmSwitch(){
    inWindow.deactivateAll();
    if(alarmStatus == 1){
        alarmStatus = 0;
        alarmCircle.set({left: 590, shadow: '#CECECE 2px 2px 2px'});
        alarmSwitchRect.set({fill: '#EAEAEA', stroke: '#B7B7B7'});
    }
    else{
        alarmStatus = 1;
        alarmCircle.set({left: 640, shadow: 'none'});
        alarmSwitchRect.set({fill: '#4CD964', stroke: '#4CD964'});
    }
}

function dndSwitch(){
    inWindow.deactivateAll();
    if(dndStatus == 1){
        packageText.fill = 'white';
        doorbellText.fill = 'white';
        dndStatus = 0;
        dndCircle.set({left: 590, shadow: '#CECECE 2px 2px 2px'});
        dndSwitchRect.set({fill: '#EAEAEA', stroke: '#B7B7B7'});
    }
    else{
        packageText.fill = '#777777';
        doorbellText.fill = '#777777';
        dndStatus = 1;
        dndCircle.set({left: 640, shadow: 'none'});
        dndSwitchRect.set({fill: '#4CD964', stroke: '#4CD964'});
    }
}

function crossAlarmDND(){
    fabric.Image.fromURL('img/cross.png', function(crossImg) {
    crossImg.set({left: 1170, top: topLength-25, originX: 'center', originY: 'center'});    
    inWindow.add(crossImg);
    crossImg.hasControls = crossImg.hasBorders = false;
    crossImg.lockMovementX = crossImg.lockMovementY = true;
    crossImg.on('mousedown',function(){
            inWindow.clear();
            divInWindow.style.display = 'none';
            if(alarmStatus == 0){
                mainApps.add(alarmRedCircle);
            }
            else{
                mainApps.remove(alarmRedCircle);
            }
            if(dndStatus == 0){
                mainApps.remove(dndRedCircle);
            }
            else{
                mainApps.add(dndRedCircle);
            }
            divMain.style.display = 'block';
            getWeather();
            getTime();
        });
    });
}