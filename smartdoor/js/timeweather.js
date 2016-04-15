var months0 = ['Jan.','Feb.','Mar.','Apr.','May','June','July','Aug.','Sept.','Oct.','Nov.','Dec.'];
var months1 = ['enero','feb.','marzo','abr.','mayo','jun.','jul.','agosto','set.','oct.','nov','dic'];
var days0 = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
var days1 = ['lunes','martes','miércoles','jueves','viernes','sábado','domingo'];

var tempText = new fabric.Text('default', { left: 1160, top: 125, fontFamily: 'HelveticaLight', fontSize: 105, originX: 'right', originY: 'top'});
tempText.hasControls = tempText.hasBorders = false;
tempText.lockMovementX = tempText.lockMovementY = true;

var tempDesText = new fabric.Text('default', { left: 1160, top: 260, fontFamily: 'HelveticaLight', fontSize: 52, originX: 'right', originY: 'top'});
tempDesText.hasControls = tempDesText.hasBorders = false;
tempDesText.lockMovementX = tempDesText.lockMovementY = true;

var timeText = new fabric.Text('default', { left: 170, top: 125, fontFamily: 'HelveticaLight', fontSize: 105, originX: 'left', originY: 'top'});
timeText.lockMovementX = timeText.lockMovementY = true;
timeText.hasControls = timeText.hasBorders = false;

var dateText = new fabric.Text('default', { left: 170, top: 260, fontFamily: 'HelveticaLight', fontSize: 52, originX: 'left', originY: 'top'});
dateText.lockMovementX = dateText.lockMovementY = true;
dateText.hasControls = dateText.hasBorders = false;

var outTimeText = new fabric.Text('default', { left: 2585, top: 60, fontFamily: 'HelveticaLight', fontSize: 38, originX: 'right', originY: 'top'});
outTimeText.lockMovementX = outTimeText.lockMovementY = true;
outTimeText.hasControls = outTimeText.hasBorders = false;

var outDateText = new fabric.Text('default', { left: 1480, top: 60, fontFamily: 'HelveticaLight', fontSize: 38, originX: 'left', originY: 'top'});
outDateText.lockMovementX = outDateText.lockMovementY = true;
outDateText.hasControls = outDateText.hasBorders = false;

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
    timeText.text = (h>12)? checkdigit(h-12) + ":" + m + ' PM': checkdigit(h) + ":" + m + ' AM';
    outTimeText.text = timeText.text;
    dateText.text = weekdd +", "+ month + " "+ dd ;
    outDateText.text = dateText.text;
    setTimeout(getTime, 60000, lan);
    canvas.add(timeText);
    canvas.add(dateText);
    canvas.add(outTimeText);
    canvas.add(outDateText);
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
        var weathericonurl = weatherExtract.weather[0].icon;
        var x = String(Math.round(weatherExtract.main.temp));
        tempText.text = x +' \u00B0'+unit;
        var d = weatherExtract.weather[0].description;
        tempDesText.text = d[0].toUpperCase() + d.slice(1);
        
        fabric.Image.fromURL('img/'+ weathericonurl +'.png', function(weatherImg) {
        weatherImg.set({left: 890, top: 109.5, originX: 'right', originY: 'top'});
        if((x>-1)&&(x<10)){weatherImg.left = 935;}
        canvas.add(weatherImg);
        weatherImg.hasControls = weatherImg.hasBorders = false;
        weatherImg.lockMovementX = weatherImg.lockMovementY = true;
    
    });    
            
        canvas.add(tempText);
        canvas.add(tempDesText);
        }
}