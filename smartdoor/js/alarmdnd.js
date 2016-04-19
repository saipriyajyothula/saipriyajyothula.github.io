function alarmWindow(){
    
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

    var alarmHeaderText = new fabric.Text('Alarm', { left: 615, top: topLength + 80, fontFamily: 'HelveticaLight', fontSize: 44, originX: 'center', originY: 'top', fontWeight: 300});
    alarmHeaderText.hasControls = alarmHeaderText.hasBorders = false;
    alarmHeaderText.lockMovementX = alarmHeaderText.lockMovementY = true;

    var alarmOnText = new fabric.Text('ON', { left: 686, top: topLength + 340, fontFamily: 'HelveticaLight', fontSize: 38, originX: 'left', originY: 'center', fontWeight: 300});
    alarmOnText.hasControls = alarmOnText.hasBorders = false;
    alarmOnText.lockMovementX = alarmOnText.lockMovementY = true;

    var alarmOffText = new fabric.Text('OFF', { left: 544, top: topLength + 340, fontFamily: 'HelveticaLight', fontSize: 38, originX: 'right', originY: 'center', fontWeight: 300});
    alarmOffText.hasControls = alarmOffText.hasBorders = false;
    alarmOffText.lockMovementX = alarmOffText.lockMovementY = true;

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

    var alarmCircle = new fabric.Circle({left: 640, top: topLength+336, radius: 25, fill: 'white', stroke: '#B7B7B7', originX: 'center', originY: 'center', shadow: 'none'});
    alarmCircle.lockMovementX = alarmCircle.lockMovementY = true;
    alarmCircle.hasControls = alarmCircle.hasBorders = false;
//functionality of the alarm on and off    
    alarmSwitchRect.on('mousedown',function(){
                   alarmSwitch();
                   });

    alarmCircle.on('mousedown',function(){
                   alarmSwitch();
                   });
    
    function alarmSwitch(){
        inWindow.deactivateAll();
        if(alarmStatus == 1){
            alarmStatus = 0;
            responsiveVoice.speak((language == 0) ? 'Security alarm disabled' : 'alarma de seguridad con discapacidad');
        }
        else{
            alarmStatus = 1;
            responsiveVoice.speak((language == 0) ? 'Security alarm enabled' : 'alarma de seguridad habilitada');
        }
        alarmPosition();
    }
    // draw the indication circle if the alarm is off
    function alarmPosition(){
        if(alarmStatus == 0){
            alarmRedCircle.strokeWidth = 5;
            alarmRedCircle.fill = 'red';
            mainApps.renderAll.bind(mainApps);
            alarmCircle.set({left: 590, shadow: '#CECECE 2px 2px 2px'});
            alarmSwitchRect.set({fill: '#EAEAEA', stroke: '#B7B7B7'});
        }
        else{
            alarmRedCircle.strokeWidth = 0;
            alarmRedCircle.fill = 'transparent';
            alarmCircle.set({left: 640, shadow: 'none'});
            alarmSwitchRect.set({fill: '#4CD964', stroke: '#4CD964'});
        }
    }
    
    mainApps.deactivateAll();
    divMain.style.display = 'none';
    divInWindow.style.display = 'block';
    inWindow.add(alarmRect);
    addInhandle();
    inWindow.add(alarmHeaderText);
    inWindow.add(alarmOnText);
    inWindow.add(alarmOffText);
    alarmPosition();
    inWindow.add(alarmSwitchRect);
    inWindow.add(alarmCircle);
    
    if(language == 1){
        alarmHeaderText.text = 'Alarma';
        alarmOnText.text = 'Encendido';
        alarmOffText.text = 'Apagado';
    }
    else{
        alarmHeaderText.text = 'Alarm';
        alarmOnText.text = 'ON';
        alarmOffText.text = 'OFF';
    }
    crossMain();
    
}

function dndWindow(){
    
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

    var dndHeaderText = new fabric.Text('DND', { left: 615, top: topLength + 80, fontFamily: 'HelveticaLight', fontSize: 44, originX: 'center', originY: 'top', fontWeight: 300});
    dndHeaderText.hasControls = dndHeaderText.hasBorders = false;
    dndHeaderText.lockMovementX = dndHeaderText.lockMovementY = true;

    var dndOnText = new fabric.Text('ON', { left: 686, top: topLength + 340, fontFamily: 'HelveticaLight', fontSize: 38, originX: 'left', originY: 'center', fontWeight: 300});
    dndOnText.hasControls = dndOnText.hasBorders = false;
    dndOnText.lockMovementX = dndOnText.lockMovementY = true;

    var dndOffText = new fabric.Text('OFF', { left: 544, top: topLength + 340, fontFamily: 'HelveticaLight', fontSize: 38, originX: 'right', originY: 'center', fontWeight: 300});
    dndOffText.hasControls = dndOffText.hasBorders = false;
    dndOffText.lockMovementX = dndOffText.lockMovementY = true;

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

    var dndCircle = new fabric.Circle({left: 640, top: topLength+336, radius: 25, fill: 'white', stroke: '#B7B7B7', originX: 'center', originY: 'center', shadow: 'none'});
    dndCircle.lockMovementX = dndCircle.lockMovementY = true;
    dndCircle.hasControls = dndCircle.hasBorders = false;
    
    dndSwitchRect.on('mousedown',function(){
                   dndSwitch();
                   });

    dndCircle.on('mousedown',function(){
                   dndSwitch();
                   });
    //dnd controls at the switch in dnd
    function dndSwitch(){
        inWindow.deactivateAll();
        if(dndStatus == 1){           
            dndStatus = 0;
            responsiveVoice.speak((language == 0) ? 'do not disturb mode disabled' : 'no el modo no molestar desactivado');
            restructureOutDoor();
            outApps.renderAll.bind(outApps);
        }
        else{
            dndStatus = 1;
            responsiveVoice.speak((language == 0) ? 'do not disturb mode enabled' : 'no molestar activado el modo');
            restructureOutDoor();
            outApps.renderAll.bind(outApps);
        }
        dndPosition();
    }
    //indicate with a red circle if the dnd is on
    function dndPosition(){
        if(dndStatus == 0){
            dndRedCircle.strokeWidth = 0;
            dndRedCircle.fill = 'transparent';
            dndCircle.set({left: 590, shadow: '#CECECE 2px 2px 2px'});
            dndSwitchRect.set({fill: '#EAEAEA', stroke: '#B7B7B7'});
        }
        else{
            dndRedCircle.strokeWidth = 5;
            dndRedCircle.fill = 'red';
            mainApps.renderAll.bind(mainApps);
            dndCircle.set({left: 640, shadow: 'none'});
            dndSwitchRect.set({fill: '#4CD964', stroke: '#4CD964'});
        }
    }
    
    mainApps.deactivateAll();
    divMain.style.display = 'none';
    divInWindow.style.display = 'block';
    inWindow.add(dndRect);
    addInhandle();
    inWindow.add(dndHeaderText);
    inWindow.add(dndOnText);
    inWindow.add(dndOffText);
    dndPosition();
    inWindow.add(dndSwitchRect);
    inWindow.add(dndCircle);
    
    if(language == 1){
        dndOnText.text = 'Encendido';
        dndOffText.text = 'Apagado';
    }
    else{
        dndOnText.text = 'ON';
        dndOffText.text = 'OFF';
    }
    crossMain();
    
}