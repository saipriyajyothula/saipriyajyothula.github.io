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

mainApps.setBackgroundImage('img/sea.jpg', mainApps.renderAll.bind(mainApps));
sideApps.setBackgroundImage('img/sea.jpg', sideApps.renderAll.bind(sideApps));
outApps.setBackgroundImage('img/sea.jpg', outApps.renderAll.bind(outApps));
inWindow.setBackgroundImage('img/sea.jpg', inWindow.renderAll.bind(inWindow));
outWindow.setBackgroundImage('img/sea.jpg', outWindow.renderAll.bind(outWindow));

var leftWidth = 225;
var up = 1;
var topLength = 450;
var tempUnits = 'C';
var language = 0;
var alarmStatus = 1;
var dndStatus = 0;
var lockStatus = 0;
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

var alarmRedCircle = new fabric.Circle({left: leftWidth + 120, top: topLength+250, radius: 18, fill: 'red', originX: 'center', originY: 'center', stroke: 'white', strokeWidth: 5});
alarmRedCircle.lockMovementX = alarmRedCircle.lockMovementY = true;
alarmRedCircle.hasControls = alarmRedCircle.hasBorders = false;

var dndRedCircle = new fabric.Circle({left: leftWidth + 560, top: topLength+500, radius: 18, fill: 'red', originX: 'center', originY: 'center', stroke: 'white', strokeWidth: 5});
dndRedCircle.lockMovementX = dndRedCircle.lockMovementY = true;
dndRedCircle.hasControls = dndRedCircle.hasBorders = false;

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
        });
    });
}

var Doodcanvas = this.__canvas=new fabric.Canvas('DoodleSheet');

var LoadDoodCanvas = this.__canvas=new fabric.Canvas('LoadDoodSheet');

var DoodleApps = document.getElementById("DoodIt");