var canvas = this.__canvas = new fabric.Canvas('c');
canvas.backgroundColor = "#DDDDDD";  // light grey

var leftWidth = 280;    
var topLength = 500;
var language = 0;

var newsRect = new fabric.Rect({
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

newsRect.hasControls = newsRect.hasBorders = false;
newsRect.lockMovementX = newsRect.lockMovementY = true; 

var newsHeaderText = new fabric.Text('News', { left: 673, top: topLength + 30, fontFamily: 'Helvetica', fontSize: 45, originX: 'center', originY: 'top'});
newsHeaderText.hasControls = newsHeaderText.hasBorders = false;
newsHeaderText.lockMovementX = newsHeaderText.lockMovementY = true;

var newsFooterText = new fabric.Text('default', { left: 673, top: topLength +620, fontFamily: 'Helvetica', fontSize: 35, originX: 'center', originY: 'top'});
newsFooterText.hasControls = newsFooterText.hasBorders = false;
newsFooterText.lockMovementX = newsFooterText.lockMovementY = true;

var newsHeadlinesText = new fabric.Text('default', { left: 673, top: topLength + 80, fontFamily: 'Helvetica', fontSize: 35, originX: 'center', originY: 'top'});
newsHeadlinesText.hasControls = newsHeadlinesText.hasBorders = false;
newsHeadlinesText.lockMovementX = newsHeadlinesText.lockMovementY = true;
    
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

/*var powerImg = document.getElementById('bg');
var power = new fabric.Image(powerImg, {
left: 60,
top: 10,
});
*/
/*var powerRect = new fabric.Rect({
  left: 60,
  top: 10,
  fill: 'black',
  opacity: 0.06,
  width: 1230,
  height: 2200,
  angle: 0
});

var filter = new fabric.Image.filters.Convolute({
  matrix: [ 1/8, 1/8, 1/8,
            1/8, 1/8, 1/8,
            1/8, 1/8, 1/8 ]
});
power.filters.push(filter);
power.applyFilters(canvas.renderAll.bind(canvas));*/

var months0 = ['Jan.','Feb.','Mar.','Apr.','May','June','July','Aug.','Sept.','Oct.','Nov.','Dec.'];
var months1 = ['enero','feb.','marzo','abr.','mayo','jun.','jul.','agosto','set.','oct.','nov','dic'];
var days0 = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
var days1 = ['lunes','martes','miércoles','jueves','viernes','sábado','domingo'];
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

var newsHeadlines = '';    
    
function getNews(lan){
canvas.add(newsRect);
var url = 'http://api.nytimes.com/svc/topstories/v1/world.json?api-key=141a890ea8bc94b8dd5afc9c4a88bd53:17:74891958';
var newsExtract = [];
$.get(url,function(d){
    cbc(d);   
});
function cbc(d)
    {
    newsExtract = d;
    for(var i=0; i<5; i++){
        var s = newsExtract.results[i].title;
        s=check(s);
        if(lan != 1){
        if(s.length > 50){
            var sub = s.slice(50);
            sub = sub.slice(0,sub.indexOf(' '))+'\n'+sub.slice(sub.indexOf(' ')+1)
            s=s.slice(0,50)+sub;
        }
        newsHeadlines += '\n'+s;
        newsHeadlinesText.text = newsHeadlines;
        newsFooterText.text = 'Last updated '+ new Date().toLocaleString();
        newsHeaderText.text = 'News';
        canvas.add(newsHeaderText);
        canvas.add(newsHeadlinesText);
        canvas.add(newsFooterText);
        }
        if(lan == 1){
            var sUrl = 'https://translate.yandex.net/api/v1.5/tr.json/translate?key=trnsl.1.1.20160403T075912Z.9381e511060b9142.5b7b4a73ebe51c4e5fe59d701f8ea99fd23032d3&text='+s+'&lang=en-es&format=plain';
            var sExtract = [];
            $.get(sUrl,function(d1){
                cbc1(d1);
            });
            function cbc1(d1)
            {
                sExtract = d1;
                s = sExtract.text[0];
                if(s.length > 50){
                    var sub = s.slice(50);
                    sub = sub.slice(0,sub.indexOf(' '))+'\n'+sub.slice(sub.indexOf(' ')+1)
                    s=s.slice(0,50)+sub;
                }
                newsHeadlines += '\n'+s;
                newsHeadlinesText.text = newsHeadlines;
                newsFooterText.text = 'Last updated '+ new Date().toLocaleString();
                newsHeaderText.text = 'News';
                canvas.add(newsHeaderText);
                canvas.add(newsHeadlinesText);
                canvas.add(newsFooterText);;
            }
        }   
    }
    }
}  
   
function check(s){
    if(s.includes('&#')){
        s=s.slice(0,s.indexOf('&#'))+s.slice(s.indexOf('&#')+7);
        s=check(s);
        return s;
    }
    return s;
}

var gElement = function(id){return document.getElementById(id)};