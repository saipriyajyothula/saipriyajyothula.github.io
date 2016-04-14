var months0 = ['Jan.','Feb.','Mar.','Apr.','May','June','July','Aug.','Sept.','Oct.','Nov.','Dec.'];
var months1 = ['enero','feb.','marzo','abr.','mayo','jun.','jul.','agosto','set.','oct.','nov','dic'];
var days0 = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
var days1 = ['lunes','martes','miércoles','jueves','viernes','sábado','domingo'];

var tempText = new fabric.Text('default', { left: 2300, top: 200, fontFamily: 'Helvetica', fontSize: 60, originX: 'left', originY: 'center'});
tempText.hasControls = tempText.hasBorders = false;
tempText.lockMovementX = tempText.lockMovementY = true;

var tempDesText = new fabric.Text('default', { left: 2300, top: 300, fontFamily: 'Helvetica', fontSize: 40, originX: 'left', originY: 'center'});
tempDesText.hasControls = tempDesText.hasBorders = false;
tempDesText.lockMovementX = tempDesText.lockMovementY = true;

var timeText = new fabric.Text('default', { left: 945, top: 200, fontFamily: 'Helvetica', fontSize: 60, originX: 'center', originY: 'center'});
timeText.lockMovementX = timeText.lockMovementY = true;
timeText.hasControls = timeText.hasBorders = false;

var dateText = new fabric.Text('default', { left: 945, top: 300, fontFamily: 'Helvetica', fontSize: 40, originX: 'center', originY: 'center'});
dateText.lockMovementX = dateText.lockMovementY = true;
dateText.hasControls = dateText.hasBorders = false;

function getTime(lan) {
    var datetime = new Date();
    var h = datetime.getHours();
    var m = datetime.getMinutes();
    var mm = datetime.getMonth();
    var dd = datetime.getDate();
    var day = datetime.getDay();
    m = checkdigit(m);
    month = (lan==0) ? months0[mm] : months1[mm];
    weekdd = (lan==0) ? days0[day] : days1[day];
    dd = checkdigit(dd);
    timeText.text = (h>12)? h-12 + ":" + m + ' PM': h + ":" + m + ' AM';
    dateText.text = weekdd +", "+ month + " "+ dd ;
    setTimeout(getTime, 1000, lan);
    canvas.add(timeText);
    canvas.add(dateText);
}

function checkdigit(i) {
    if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
    return i;
}

function getWeather(unit, lan){
    var units='metric';
    var lang='en';
    if(unit=='F'){
        units='imperial';
    }
    if(lan==1){
        lang='es';    
    }
    var url = 'http://api.openweathermap.org/data/2.5/weather?q=Chicago&units='+units+'&APPID=788adeb06070edb262bf78f315e1400a&lang='+lang;

    //metric for C and imperial for F
    
    var weatherExtract=[];    
    $.get(url,function(d){
        cbc(d);
    });
    function cbc(d)
        {
        weatherExtract=d;      
        var weathericonurl = 'http://openweathermap.org/img/w/'+weatherExtract.weather[0].icon+'.png';
        tempText.text = String(Math.round(weatherExtract.main.temp))+' \u00B0'+unit;
        var d = weatherExtract.weather[0].description;
        tempDesText.text = d[0].toUpperCase() + d.slice(1);
        canvas.add(tempText);
        canvas.add(tempDesText);
        }
}