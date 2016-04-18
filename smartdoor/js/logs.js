var persons = ['Sai', 'Sumanth', 'Gautam', 'Vinit'];
var logsJSON = [{"mode": "keypad", "timeStamp": "6:00:18 PM"}, {"mode": "fingerprint", "timeStamp": "8:30:25 PM"}, {"mode": "fingerprint", "timeStamp": "9:16:43 PM"}];

function getLogs(){
    
    var logsRect = new fabric.Rect({
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
    logsRect.hasControls = logsRect.hasBorders = false;
    logsRect.lockMovementX = logsRect.lockMovementY = true; 

    var logsHeaderText = new fabric.Text('Logs', { left: 615, top: topLength + 80, fontFamily: 'HelveticaLight', fontSize: 44, originX: 'center', originY: 'top', fontWeight: 300});
    logsHeaderText.hasControls = logsHeaderText.hasBorders = false;
    logsHeaderText.lockMovementX = logsHeaderText.lockMovementY = true;

    var logsFirstText = new fabric.Text('default', { left: 170, top: topLength + 230, fontFamily: 'HelveticaLight', fontSize: 28, originY: 'center', fontWeight: 300});
    logsFirstText.hasControls = logsFirstText.hasBorders = false;
    logsFirstText.lockMovementX = logsFirstText.lockMovementY = true;
    
    var logsSecondText = new fabric.Text('default', { left: 170, top: topLength + 380, fontFamily: 'HelveticaLight', fontSize: 28, originY: 'center', fontWeight: 300});
    logsSecondText.hasControls = logsSecondText.hasBorders = false;
    logsSecondText.lockMovementX = logsSecondText.lockMovementY = true;
    
    var logsThirdText = new fabric.Text('default', { left: 170, top: topLength + 530, fontFamily: 'HelveticaLight', fontSize: 28, originY: 'center', fontWeight: 300});
    logsThirdText.hasControls = logsThirdText.hasBorders = false;
    logsThirdText.lockMovementX = logsThirdText.lockMovementY = true;
    
    if(language == 0){
        logsFirstText.text = persons[Math.floor(Math.random() * persons.length)] + ' opened the door via ' + logsJSON[0].mode + ' at ' + logsJSON[0].timeStamp + '.';
        logsSecondText.text = persons[Math.floor(Math.random() * persons.length)] + ' opened the door via ' + logsJSON[1].mode + ' at ' + logsJSON[1].timeStamp + '.';
        logsThirdText.text = persons[Math.floor(Math.random() * persons.length)] + ' opened the door via ' + logsJSON[2].mode + ' at ' + logsJSON[2].timeStamp + '.';
    }
    else{
        logsFirstText.text = persons[Math.floor(Math.random() * persons.length)] + ' abrió la puerta a través de ' + logsJSON[0].mode + ' a las ' + logsJSON[0].timeStamp + '.';
        logsSecondText.text = persons[Math.floor(Math.random() * persons.length)] + ' abrió la puerta a través de ' + logsJSON[1].mode + ' a las ' + logsJSON[1].timeStamp + '.';
        logsThirdText.text = persons[Math.floor(Math.random() * persons.length)] + ' abrió la puerta a través de ' + logsJSON[2].mode + ' a las ' + logsJSON[2].timeStamp + '.';
    }
    
    divMain.style.display = 'none';
    divInWindow.style.display = 'block';
    inWindow.add(logsRect);
    addInhandle();
    inWindow.add(logsHeaderText);
    crossMain();    
    logsHeaderText.text = (language == 0)? 'Logs' : 'Registros';
    inWindow.add(logsFirstText);
    inWindow.add(logsSecondText);
    inWindow.add(logsThirdText);
    
    
}