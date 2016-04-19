// canvas variables for main apps screen, side apps screen, outside door, inside window and outside window

var canvas = this.__canvas = new fabric.Canvas('c');

var mainApps = this.__canvas = new fabric.Canvas('main');

var sideApps = this.__canvas = new fabric.Canvas('side');

var outApps = this.__canvas = new fabric.Canvas('out');

var inWindow = this.__canvas = new fabric.Canvas('inWindow');

var outWindow = this.__canvas = new fabric.Canvas('outWindow');

var divMain = document.getElementById('mainApps');
var divSide = document.getElementById('sideApps');
var divOutApps = document.getElementById('outApps');
var divInWindow = document.getElementById('insideWindow');
var divOutWindow = document.getElementById('outsideWindow');

// set default background image

mainApps.setBackgroundImage('img/sea.jpg', mainApps.renderAll.bind(mainApps));
sideApps.setBackgroundImage('img/sea.jpg', sideApps.renderAll.bind(sideApps));
outApps.setBackgroundImage('img/sea.jpg', outApps.renderAll.bind(outApps));
inWindow.setBackgroundImage('img/sea.jpg', inWindow.renderAll.bind(inWindow));
outWindow.setBackgroundImage('img/sea.jpg', outWindow.renderAll.bind(outWindow));

// various global variables with default values

var leftWidth = 225;
var up = 1;
var topLength = 450;
var tempUnits = 'C';
var language = 0;
var alarmStatus = 1;
var dndStatus = 0;
var lockStatus = 1;
var inThemeName = 'sea';
var outThemeName = 'sea';
var settingsFlag = 'l';
var languageFlag = 'en';
var tempSettingsFlag = 'l';
var tempLanguageFlag = 'en';
var chimeType = 'doorbell';
var doorbellChimeName = 2;
var tempDoorbellChimeName = 2;
var packageChimeName = 1;
var tempPackageChimeName = 1;
var timeFormat = 0;
var dateFormat = 0;
var videoStatus = 0;

// get the video elements from DOM and setting them on loop

var inVideoEl = document.getElementById('inVideo');
var outVideoEl = document.getElementById('outVideo');
var helpVideoEl = document.getElementById('helpVideo');
outVideoEl.setAttribute('loop','loop');
inVideoEl.setAttribute('loop','loop');
helpVideoEl.setAttribute('loop','loop');

// voice commands

if (annyang) {

                var commands2 = {'Smart Door Alarm ON': function() {alarmStatus=1;responsiveVoice.speak('Security alarm enabled');}
                    ,'Smart Door alarma activada': function() {alarmStatus=1;responsiveVoice.speak('alarma de seguridad habilitada');} 
                    ,'Smart Door Alarm Off': function() {alarmStatus=0;responsiveVoice.speak('Security alarm disabled');}
                    ,'Smart Door alarma de seguridad fuera': function() {alarmStatus=0;responsiveVoice.speak('alarma de seguridad con discapacidad');}            
                    ,'Smart Door Play Music': function() {sugar.play(); setTimeout(function(){sugar.pause();},10000);}
                    ,'Smart Door reproducir música': function() {sugar.play(); setTimeout(function(){sugar.pause();},10000);}              
                                 
               };
               annyang.addCommands(commands2);
               annyang.start();
            }

var alarmRedCircle = new fabric.Circle({left: leftWidth + 120, top: topLength+250, radius: 18, fill: 'red', originX: 'center', originY: 'center', stroke: 'white', strokeWidth: 5});
alarmRedCircle.lockMovementX = alarmRedCircle.lockMovementY = true;
alarmRedCircle.hasControls = alarmRedCircle.hasBorders = false;

var dndRedCircle = new fabric.Circle({left: leftWidth + 560, top: topLength+500, radius: 18, fill: 'red', originX: 'center', originY: 'center', stroke: 'white', strokeWidth: 5});
dndRedCircle.lockMovementX = dndRedCircle.lockMovementY = true;
dndRedCircle.hasControls = dndRedCircle.hasBorders = false;

// cross buttons

function crossMain(){
    fabric.Image.fromURL('img/cross.png', function(crossImg) {
    crossImg.set({left: 1170, top: topLength-25, originX: 'center', originY: 'center'});    
    inWindow.add(crossImg);
    crossImg.hasControls = crossImg.hasBorders = false;
    crossImg.lockMovementX = crossImg.lockMovementY = true;
    crossImg.on('mousedown',function(){
            inWindow.clear();
            divInWindow.style.display = 'none';
            divMain.style.display = 'block';
            getWeather();
            getTime();
        });
    });
}

function crossSide(){
    fabric.Image.fromURL('img/cross.png', function(crossImg) {
    crossImg.set({left: 1170, top: topLength-25, originX: 'center', originY: 'center'});    
    inWindow.add(crossImg);
    inWindow.moveTo(crossImg, 50);
    crossImg.hasControls = crossImg.hasBorders = false;
    crossImg.lockMovementX = crossImg.lockMovementY = true;
    crossImg.on('mousedown',function(){
            inWindow.clear();
            divInWindow.style.display = 'none';
            addInhandle();
            divSide.style.display = 'block';
            getTime();
            getWeather();
            saveDoodle();	
        });
    });
}

// adding lock icon on inside window

function addLock(){
    if(up == 1){
    fabric.Image.fromURL('img/unlock_door.png', function(lock) {
             lock.set({left: 1165, top: 1227.5, originX: 'right', originY: 'center', lockMovementY: true, hasBorders: false, hasControls: false});    
             
             fabric.Image.fromURL('img/lock_door.png', function(unlock) {
             unlock.set({left: 1165, top: 1227.5, originX: 'right', originY: 'center', lockMovementY: true, hasBorders: false, hasControls: false});
                if(lockStatus == 0){
                    inWindow.add(lock);
                }
                else{
                    inWindow.add(unlock);
                }
            
                 lock.on('mousedown',function(){
                     responsiveVoice.speak((language == 0) ? 'Door Unlocked' : 'Desbloqueo de puerta');
                     inWindow.remove(lock);
                     inWindow.add(unlock);
                 });
                 unlock.on('mousedown',function(){
                     responsiveVoice.speak((language == 0) ? 'Door Locked' : 'Puerta Cerrada');
                     inWindow.remove(unlock);
                     inWindow.add(lock);
                 });
             });
    });
}}

var Doodcanvas = this.__canvas=new fabric.Canvas('DoodleSheet');

var LoadDoodCanvas = this.__canvas=new fabric.Canvas('LoadDoodSheet');

var DoodleApps = document.getElementById("DoodIt");

var DisplayCanvas= this.__canvas=new fabric.Canvas('DisplayDoodC');

var UserCanvasAl= this.__canvas=new fabric.Canvas('DisplayDoodCUAl');

var UserCanvas1= this.__canvas=new fabric.Canvas('DisplayDoodCU1');

var UserCanvas2= this.__canvas=new fabric.Canvas('DisplayDoodCU2');

var UserCanvas3= this.__canvas=new fabric.Canvas('DisplayDoodCU3');

var UserCanvas4= this.__canvas=new fabric.Canvas('DisplayDoodCU4');

var UserTextCanvasAl= this.__canvas=new fabric.Canvas('DisplayTextCAl');

var UserTextCanvas1= this.__canvas=new fabric.Canvas('DisplayTextCU1');

var UserTextCanvas2= this.__canvas=new fabric.Canvas('DisplayTextCU2');

var UserTextCanvas3= this.__canvas=new fabric.Canvas('DisplayTextCU3');

var UserTextCanvas4= this.__canvas=new fabric.Canvas('DisplayTextCU4');

var DefaultCanvas= this.__canvas=new fabric.Canvas('DefaultText');

var InOutCanvas= this.__canvas=new fabric.Canvas('InOutText');

var InOutCanvasMainDoor= this.__canvas=new fabric.Canvas('InOutTextMainD');

var DisplayCanvasApps = document.getElementById("DisplayDood");
var User1Apps = document.getElementById("DisplayDoodU1");
var User2Apps = document.getElementById("DisplayDoodU2");
var User3Apps = document.getElementById("DisplayDoodU3");
var User4Apps = document.getElementById("DisplayDoodU4");
var UserAlApps = document.getElementById("DisplayDoodUAl");

var UserTextAlApps = document.getElementById("DisplayTextAl");
var UserTextU1Apps = document.getElementById("DisplayTextU1");
var UserTextU2Apps = document.getElementById("DisplayTextU2");
var UserTextU3Apps = document.getElementById("DisplayTextU3");
var UserTextU4Apps = document.getElementById("DisplayTextU4");

var UserDefApps = document.getElementById("DefaultTe");

var InoutApps = document.getElementById("InOut");

var InoutAppsDoor = document.getElementById("InOutMainD");

Doodcanvas.backgroundColor='white';
DisplayCanvas.backgroundColor='white';
DefaultCanvas.backgroundColor='white';

InOutCanvas.backgroundColor='white';
InOutCanvasMainDoor.backgroundColor='white';

function crossInsideCanvas(){
	fabric.Image.fromURL('img/cross.png', function(crossImg) {
    crossImg.set({left: 1170, top: topLength-25, originX: 'center', originY: 'center'});    
    inWindow.add(crossImg);
    crossImg.hasControls = crossImg.hasBorders = false;
    crossImg.lockMovementX = crossImg.lockMovementY = true;
    crossImg.on('mousedown',function(){
            inWindow.clear();
            divInWindow.style.display = 'none';
            divMain.style.display = 'block';
            getWeather();
            getTime();
			saveDoodle();
            clearScreen();
        });
    });
}

function crossOutsideCanvas(){
	outApps.deactivateAll();
	fabric.Image.fromURL('img/cross.png', function(crossImg) {
    crossImg.set({left: 1085, top: 970, originX: 'center', originY: 'center'});    
    outApps.add(crossImg);
    crossImg.hasControls = crossImg.hasBorders = false;
    crossImg.lockMovementX = crossImg.lockMovementY = true;
    crossImg.on('mousedown',function(){
			outApps.remove(crossImg);
			clearScreen();
			InoutApps.style.display = 'none';
            divOutApps.style.display = 'block';
            getWeather();
            getTime();
        });
    });
}

function outhandleM(){
    fabric.Image.fromURL('img/outhandle.png', function(outhandle) {
      outhandle.set({left: -143,
      top: 333, originX: 'left', lockMovementX: true, lockMovementY: true, scaleX: 0.8, scaleY: 0.8, hasControls: false, hasBorders: false});    
      DefaultCanvas.add(outhandle);
      outhandle.on('mousedown',function(){
      logsJSON.unshift({"mode":"fingerprint","timeStamp":""+new Date().toLocaleTimeString()+""});
      responsiveVoice.speak((language == 0) ? 'Door Unlocked' : 'Desbloqueo de puerta');      
      });
    });
}