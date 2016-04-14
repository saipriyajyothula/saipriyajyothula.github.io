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

var newsHeaderText = new fabric.Text('News', { left: 665, top: topLength + 80, fontFamily: 'Helvetica', fontSize: 44, originX: 'center', originY: 'top', fontWeight: 300});
newsHeaderText.hasControls = newsHeaderText.hasBorders = false;
newsHeaderText.lockMovementX = newsHeaderText.lockMovementY = true;

var newsFooterText = new fabric.Text('default', { left: 673, top: topLength +620, fontFamily: 'Helvetica', fontSize: 28, originX: 'center', originY: 'top'});
newsFooterText.hasControls = newsFooterText.hasBorders = false;
newsFooterText.lockMovementX = newsFooterText.lockMovementY = true;

var firstText = new fabric.Text('default', { left: 340, top: topLength + 240, fontFamily: 'Helvetica', fontSize: 28, originY: 'center', fontWeight: 300});
firstText.hasControls = firstText.hasBorders = false;
firstText.lockMovementX = firstText.lockMovementY = true;

var secondText = new fabric.Text('default', { left: 340, top: topLength + 390, fontFamily: 'Helvetica', fontSize: 28, originY: 'center', fontWeight: 300});
secondText.hasControls = secondText.hasBorders = false;
secondText.lockMovementX = secondText.lockMovementY = true;

var thirdText = new fabric.Text('default', { left: 340, top: topLength + 540, fontFamily: 'Helvetica', fontSize: 28, originY: 'center', fontWeight: 300});
thirdText.hasControls = thirdText.hasBorders = false;
thirdText.lockMovementX = thirdText.lockMovementY = true;

function getNews(lan){
canvas.add(newsRect);
cross();
var url = 'http://api.nytimes.com/svc/topstories/v1/world.json?api-key=141a890ea8bc94b8dd5afc9c4a88bd53:17:74891958';
var newsExtract = [];
var s = [];
var count = 0, i = 0, j = 0;
$.get(url,function(d){
    cbc(d);   
});
function cbc(d)
    {
    canvas.add(newsHeaderText);
    newsExtract = d;
    while(count<3){
        if((newsExtract.results[i].multimedia) != ''){
            s[count] = [check(newsExtract.results[i].title), newsExtract.results[i].multimedia[1].url];
            count++;
        }
        i++;
    }
        
    fabric.Image.fromURL(s[0][1], function(i1) {
    i1.set({left: 215,
    top: topLength+190, scaleX: 2/3, scaleY: 2/3});    
    canvas.add(i1);
    });
    fabric.Image.fromURL(s[1][1], function(i2) {
    i2.set({left: 215,
    top: topLength+340, scaleX: 2/3, scaleY: 2/3});    
    canvas.add(i2);
    });
    fabric.Image.fromURL(s[2][1], function(i3) {
    i3.set({left: 215,
    top: topLength+490, scaleX: 2/3, scaleY: 2/3});    
    canvas.add(i3);
    });
    
    if(lan == 0){
        newsHeaderText.text = 'News';
        firstText.text = truncate(s[0][0]);
        secondText.text = truncate(s[1][0]);
        thirdText.text = truncate(s[2][0]);
        canvas.add(firstText);
        canvas.add(secondText);
        canvas.add(thirdText);
    }
        
    if(lan == 1){
            newsHeaderText.text = 'Noticias';
            var s1Url = 'https://translate.yandex.net/api/v1.5/tr.json/translate?key=trnsl.1.1.20160403T075912Z.9381e511060b9142.5b7b4a73ebe51c4e5fe59d701f8ea99fd23032d3&text='+s[0][0]+'&lang=en-es&format=plain';
            var s1Extract = [];
                $.get(s1Url,function(d){
                    cbc1(d);
                });
                function cbc1(d)
                {
                    s1Extract = d;
                    firstText.text = truncate(s1Extract.text[0]);
                }
            var s2Url = 'https://translate.yandex.net/api/v1.5/tr.json/translate?key=trnsl.1.1.20160403T075912Z.9381e511060b9142.5b7b4a73ebe51c4e5fe59d701f8ea99fd23032d3&text='+s[1][0]+'&lang=en-es&format=plain';
            var s2Extract = [];
                $.get(s2Url,function(d){
                    cbc2(d);
                });
                function cbc2(d)
                {
                    s2Extract = d;
                    secondText.text = truncate(s2Extract.text[0]);
                }
            var s3Url = 'https://translate.yandex.net/api/v1.5/tr.json/translate?key=trnsl.1.1.20160403T075912Z.9381e511060b9142.5b7b4a73ebe51c4e5fe59d701f8ea99fd23032d3&text='+s[2][0]+'&lang=en-es&format=plain';
            var s3Extract = [];
                $.get(s3Url,function(d){
                    cbc3(d);
                });
                function cbc3(d)
                {
                    s3Extract = d;
                    thirdText.text = truncate(s3Extract.text[0]);
                }
        canvas.add(firstText);
        canvas.add(secondText);
        canvas.add(thirdText);
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

function truncate(s){
    if(s.length > 60){
        var sub = s.slice(0, 60);
        sub = sub.slice(0,sub.lastIndexOf(' '))+'\n'+sub.slice(sub.lastIndexOf(' ')+1)
        s=sub+s.slice(60);
    }
    return s;
}