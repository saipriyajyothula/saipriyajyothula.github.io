var alarmRect = new fabric.Rect({
  left: 135,
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
  left: 135,
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

var alarmHeaderText = new fabric.Text('Alarm', { left: 665, top: topLength + 80, fontFamily: 'HelveticaLight', fontSize: 44, originX: 'center', originY: 'top', fontWeight: 300});
alarmHeaderText.hasControls = alarmHeaderText.hasBorders = false;
alarmHeaderText.lockMovementX = alarmHeaderText.lockMovementY = true;

var dndHeaderText = new fabric.Text('DND', { left: 665, top: topLength + 80, fontFamily: 'HelveticaLight', fontSize: 44, originX: 'center', originY: 'top', fontWeight: 300});
dndHeaderText.hasControls = dndHeaderText.hasBorders = false;
dndHeaderText.lockMovementX = dndHeaderText.lockMovementY = true;

var alarmOnText = new fabric.Text('ON', { left: 724, top: topLength + 340, fontFamily: 'HelveticaLight', fontSize: 38, originX: 'left', originY: 'center', fontWeight: 300});
alarmOnText.hasControls = alarmOnText.hasBorders = false;
alarmOnText.lockMovementX = alarmOnText.lockMovementY = true;

var dndOnText = new fabric.Text('ON', { left: 724, top: topLength + 340, fontFamily: 'HelveticaLight', fontSize: 38, originX: 'left', originY: 'center', fontWeight: 300});
dndOnText.hasControls = dndOnText.hasBorders = false;
dndOnText.lockMovementX = dndOnText.lockMovementY = true;

var alarmOffText = new fabric.Text('OFF', { left: 606, top: topLength + 340, fontFamily: 'HelveticaLight', fontSize: 38, originX: 'right', originY: 'center', fontWeight: 300});
alarmOffText.hasControls = alarmOffText.hasBorders = false;
alarmOffText.lockMovementX = alarmOffText.lockMovementY = true;

var dndOffText = new fabric.Text('OFF', { left: 606, top: topLength + 340, fontFamily: 'HelveticaLight', fontSize: 38, originX: 'right', originY: 'center', fontWeight: 300});
dndOffText.hasControls = dndOffText.hasBorders = false;
dndOffText.lockMovementX = dndOffText.lockMovementY = true;

var alarmSwitchRect = new fabric.Rect({
  left: 626,
  top: topLength+336,
  fill: '#4CD964',
  stroke: '#4CD964',
  width: 78,
  height: 40,
  originX: 'left',
  originY: 'center',
  rx: 19,
  ry: 19,
  angle: 0
});
alarmSwitchRect.hasControls = alarmSwitchRect.hasBorders = false;
alarmSwitchRect.lockMovementX = alarmSwitchRect.lockMovementY = true;

var dndSwitchRect = new fabric.Rect({
  left: 626,
  top: topLength+336,
  fill: 'EAEAEA',
  stroke: '#B7B7B7',
  width: 78,
  height: 40,
  originX: 'left',
  originY: 'center',
  rx: 19,
  ry: 19,
  angle: 0
});
dndSwitchRect.hasControls = dndSwitchRect.hasBorders = false;
dndSwitchRect.lockMovementX = dndSwitchRect.lockMovementY = true;

var alarmCircle = new fabric.Circle({left: 684, top: topLength+336, radius: 19, fill: 'white', stroke: '#B7B7B7', originX: 'center', originY: 'center', shadow: 'none'});
alarmCircle.lockMovementX = alarmCircle.lockMovementY = true;
alarmCircle.hasControls = alarmCircle.hasBorders = false;

var dndCircle = new fabric.Circle({left: 646, top: topLength+336, radius: 19, fill: 'white', stroke: '#B7B7B7', originX: 'center', originY: 'center', shadow: '#CECECE 2px 2px 2px'});
dndCircle.lockMovementX = dndCircle.lockMovementY = true;
dndCircle.hasControls = dndCircle.hasBorders = false;

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
    canvas.deactivateAll();
    canvas.add(alarmRect);
    canvas.add(alarmHeaderText);
    canvas.add(alarmOnText);
    canvas.add(alarmOffText);
    canvas.add(alarmSwitchRect);
    canvas.add(alarmCircle);
    if(language == 1){
        alarmHeaderText.text = 'Alarma';
        alarmOnText.text = 'Encendido';
        alarmOffText.text = 'Apagado';
    }
    cross();
}

function dndWindow(){
    canvas.deactivateAll();
    canvas.add(dndRect);
    canvas.add(dndHeaderText);
    canvas.add(dndOnText);
    canvas.add(dndOffText);
    canvas.add(dndSwitchRect);
    canvas.add(dndCircle);
    if(language == 1){
        dndOnText.text = 'Encendido';
        dndOffText.text = 'Apagado';
    }
    cross();
}

function alarmSwitch(){
    canvas.deactivateAll();
    if(alarmStatus == 1){
        alarmStatus = 0;
        alarmCircle.set({left: 646, shadow: '#CECECE 2px 2px 2px'});
        alarmSwitchRect.set({fill: '#EAEAEA', stroke: '#B7B7B7'});
    }
    else{
        alarmStatus = 1;
        alarmCircle.set({left: 684, shadow: 'none'});
        alarmSwitchRect.set({fill: '#4CD964', stroke: '#4CD964'});
    }
}

function dndSwitch(){
    canvas.deactivateAll();
    if(dndStatus == 1){
        dndStatus = 0;
        dndCircle.set({left: 646, shadow: '#CECECE 2px 2px 2px'});
        dndSwitchRect.set({fill: '#EAEAEA', stroke: '#B7B7B7'});
    }
    else{
        dndStatus = 1;
        dndCircle.set({left: 684, shadow: 'none'});
        dndSwitchRect.set({fill: '#4CD964', stroke: '#4CD964'});
    }
}

