// arrays with months of the year and days of the week

var months0 = ['Jan.','Feb.','Mar.','Apr.','May','June','July','Aug.','Sept.','Oct.','Nov.','Dec.'];
var months1 = ['enero','feb.','marzo','abr.','mayo','jun.','jul.','agosto','set.','oct.','nov','dic'];
var days0 = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
var days1 = ['lunes','martes','miércoles','jueves','viernes','sábado','domingo'];

// weather text

var tempText = new fabric.Text('23 \u00B0C', { left: 1110, top: 125, fontFamily: 'HelveticaLight', fontSize: 105, originX: 'right', originY: 'top', fill: 'white', shadow: 'black 2px 2px 2px'});
tempText.hasControls = tempText.hasBorders = false;
tempText.lockMovementX = tempText.lockMovementY = true;

var tempDesText = new fabric.Text('Partly cloudy', { left: 1110, top: 260, fontFamily: 'HelveticaLight', fontSize: 52, originX: 'right', originY: 'top', fill: 'white', shadow: 'black 2px 2px 2px'});
tempDesText.hasControls = tempDesText.hasBorders = false;
tempDesText.lockMovementX = tempDesText.lockMovementY = true;

// time and date text on the inside

var timeText = new fabric.Text('default', { left: 120, top: 125, fontFamily: 'HelveticaLight', fontSize: 105, originX: 'left', originY: 'top', fill: 'white', shadow: 'black 2px 2px 2px'});
timeText.lockMovementX = timeText.lockMovementY = true;
timeText.hasControls = timeText.hasBorders = false;

var dateText = new fabric.Text('default', { left: 120, top: 260, fontFamily: 'HelveticaLight', fontSize: 52, originX: 'left', originY: 'top', fill: 'white', shadow: 'black 2px 2px 2px'});
dateText.lockMovementX = dateText.lockMovementY = true;
dateText.hasControls = dateText.hasBorders = false;

// time and date text on the outside

var outTimeText = new fabric.Text('default', { left: 1165, top: 60, fontFamily: 'HelveticaLight', fontSize: 38, originX: 'right', originY: 'top', fill: 'white', shadow: 'black 2px 2px 2px'});
outTimeText.lockMovementX = outTimeText.lockMovementY = true;
outTimeText.hasControls = outTimeText.hasBorders = false;

var outDateText = new fabric.Text('default', { left: 60, top: 60, fontFamily: 'HelveticaLight', fontSize: 38, originX: 'left', originY: 'top', fill: 'white', shadow: 'black 2px 2px 2px'});
outDateText.lockMovementX = outDateText.lockMovementY = true;
outDateText.hasControls = outDateText.hasBorders = false;

mainApps.add(timeText);
mainApps.add(dateText);
sideApps.add(timeText);
sideApps.add(dateText);
outApps.add(outTimeText);
outApps.add(outDateText);
outWindow.add(outTimeText);
outWindow.add(outDateText);
mainApps.add(tempText);
mainApps.add(tempDesText);
sideApps.add(tempText);
sideApps.add(tempDesText);

// get time

function getTime() {
    var datetime = new Date();
    var h = datetime.getHours();
    var m = datetime.getMinutes();
    var mm = datetime.getMonth();
    var dd = datetime.getDate();
    var day = datetime.getDay();
    m = checkdigit(m);
    month = (language==0) ? months0[mm] : months1[mm];
    weekdd = (language==0) ? days0[day] : days1[day];
    dd = checkdigit(dd);
    if(timeFormat == 0){
    timeText.text = (h>12)? checkdigit(h-12) + ":" + m + ' PM': checkdigit(h) + ":" + m + ' AM';
    outTimeText.text = timeText.text;
    }
    else{
    timeText.text = outTimeText.text = checkdigit(h) + ":" + m;    
    }
    if(dateFormat == 0){
    dateText.text = outDateText.text = weekdd +", "+ month + " "+ dd ;
    }
    else{
    mm +=1;
    dateText.text =outDateText.text= weekdd +", "+ mm + "/"+ dd ;
    }
    inWindow.add(timeText);
    inWindow.add(dateText);
    
    // update time every 5 seconds
    
    setTimeout(getTime, 5000);
}

function checkdigit(i) {
    if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
    return i;
}

function getWeather(){
    var units='metric';
    var lang='en';
    if(tempUnits=='F'){
        units='imperial';
    }
    if(language==1){
        lang='es';    
    }
    
    // url for openweathermap API
    
    var url = 'http://api.openweathermap.org/data/2.5/weather?q=Chicago&units='+units+'&APPID=788adeb06070edb262bf78f315e1400a&lang='+lang;

    //metric for C and imperial for F
    
    var weatherExtract=[];    
    $.get(url,function(d){
        cbc(d);
    });
    function cbc(d)
        {
        weatherExtract=d;      
        var weathericonurl = weatherExtract.weather[0].icon;
        var x = String(Math.round(weatherExtract.main.temp));
        tempText.text = x +' \u00B0'+tempUnits;
        var d = weatherExtract.weather[0].description;
        tempDesText.text = d[0].toUpperCase() + d.slice(1);
        
        fabric.Image.fromURL('img/'+ weathericonurl +'.png', function(weatherImg) {
        weatherImg.set({left: 840, top: 109.5, originX: 'right', originY: 'top'});
        if((x>-1)&&(x<10)){weatherImg.left = 895;}
        mainApps.add(weatherImg);
        sideApps.add(weatherImg);
        inWindow.add(weatherImg);
        weatherImg.hasControls = weatherImg.hasBorders = false;
        weatherImg.lockMovementX = weatherImg.lockMovementY = true;
    
    });    
            
        inWindow.add(tempText);
        inWindow.add(tempDesText);
        }
}