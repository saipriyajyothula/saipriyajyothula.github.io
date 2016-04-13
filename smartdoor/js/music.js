var musicTitle = ['Uptown Funk ft. Bruno Mars', 'Sugar', 'Marvin Gaye ft. Meghan Trainor'];
var musicArtist = ['Mark Ronson', 'Maroon 5', 'Charlie Puth'];
var musicId = 0;
var volStatus = 10;

var musicRect = new fabric.Rect({
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

musicRect.hasControls = musicRect.hasBorders = false;
musicRect.lockMovementX = musicRect.lockMovementY = true; 

var titleText = new fabric.Text(musicTitle[musicId], { left: 868, top: topLength+170, fontFamily: 'Helvetica', fontSize: 44, originX: 'center', originY: 'top'});
titleText.hasControls = titleText.hasBorders = false;
titleText.lockMovementX = titleText.lockMovementY = true;

var artistText = new fabric.Text(musicArtist[musicId], { left: 868, top: topLength+240, fontFamily: 'Helvetica', fontSize: 22, originX: 'center', originY: 'top'});
artistText.hasControls = artistText.hasBorders = false;
artistText.lockMovementX = artistText.lockMovementY = true;

var playImg = new fabric.Image(playInstance, {
left: 835,
top: topLength+325,
});
playImg.lockMovementX = playImg.lockMovementY = true;
playImg.hasControls = playImg.hasBorders = false;

var pauseImg = new fabric.Image(pauseInstance, {
left: 835,
top: topLength+325,
});
pauseImg.lockMovementX = pauseImg.lockMovementY = true;
pauseImg.hasControls = pauseImg.hasBorders = false;

var prevImg = new fabric.Image(prevInstance, {
left: 705,
top: topLength+350,
});
prevImg.lockMovementX = prevImg.lockMovementY = true;
prevImg.hasControls = prevImg.hasBorders = false;

var nextImg = new fabric.Image(nextInstance, {
left: 995,
top: topLength+350,
});
nextImg.lockMovementX = nextImg.lockMovementY = true;
nextImg.hasControls = nextImg.hasBorders = false;

var uptownImg = new fabric.Image(uptownInstance, {
left: 235,
top: topLength+140
});
uptownImg.lockMovementX = uptownImg.lockMovementY = true;
uptownImg.hasControls = uptownImg.hasBorders = false;

var marvinImg = new fabric.Image(marvinInstance, {
left: 235,
top: topLength+140
});
marvinImg.lockMovementX = marvinImg.lockMovementY = true;
marvinImg.hasControls = marvinImg.hasBorders = false;

var sugarImg = new fabric.Image(sugarInstance, {
left: 235,
top: topLength+140
});
sugarImg.lockMovementX = sugarImg.lockMovementY = true;
sugarImg.hasControls = sugarImg.hasBorders = false;

var lowImg = new fabric.Image(lowInstance, {
left: 235,
top: topLength+490
});
lowImg.lockMovementX = lowImg.lockMovementY = true;
lowImg.hasControls = lowImg.hasBorders = false;

var highImg = new fabric.Image(highInstance, {
left: 485,
top: topLength+490
});
highImg.lockMovementX = highImg.lockMovementY = true;
highImg.hasControls = highImg.hasBorders = false;

var volLine = new fabric.Line([315,topLength+509,463,topLength+509],{stroke: 'black', strokeWidth: 3});
volLine.lockMovementX = volLine.lockMovementY = true;
volLine.hasControls = volLine.hasBorders = false;

var volCircle = new fabric.Circle({left: 453, top: topLength+510, radius: 10, originY: 'center'});
volCircle.lockMovementX = volCircle.lockMovementY = true;
volCircle.hasControls = volCircle.hasBorders = false;

function musicPlayer(){
    canvas.add(musicRect);
    canvas.add(prevImg);
    canvas.add(pauseImg);
    canvas.moveTo(pauseImg,-50);
    canvas.add(playImg);
    canvas.add(nextImg);
    canvas.add(uptownImg);    
    canvas.add(sugarImg);
    canvas.moveTo(sugarImg,-50);
    canvas.add(marvinImg);
    canvas.moveTo(marvinImg,-50);
    canvas.add(lowImg);
    canvas.add(highImg);
    canvas.add(titleText);
    canvas.add(artistText);
    canvas.add(volLine);
    canvas.add(volCircle);
}

playImg.on('mousedown', function() {
    playMusic();
});

pauseImg.on('mousedown', function() {
    playFront();
    pauseMusic(); 
});

prevImg.on('mousedown', function() {
    playFront();
    pauseMusic();
    if(musicId==0){
        musicId=2;
    }
    else{
        musicId -= 1;
    }
    playMusic();
});

nextImg.on('mousedown', function() {
    playFront();
    pauseMusic();
    if(musicId==2){
        musicId=0;
    }
    else{
        musicId += 1;
    }
    playMusic();
});

highImg.on('mousedown', function() {
    volumeUp(); 
});

lowImg.on('mousedown', function() {
    volumeDown(); 
});

function playMusic(){
    changeMetadata();
    pauseFront();
    if(musicId==0){
        uptown.play();
    }
    else if(musicId==1){
        sugar.play();
    }
    else{
        marvin.play();
    }
    canvas.deactivateAll();
}

function pauseMusic(){
    if(musicId==0){
        uptown.pause();
    }
    else if(musicId==1){
        sugar.pause();
    }
    else{
        marvin.pause();
    }
    canvas.deactivateAll();
}

function playFront(){
    pauseImg.opacity = 0;
    canvas.moveTo(pauseImg,-50);
    playImg.opacity = 1;
    canvas.moveTo(playImg,50);
}

function pauseFront(){
    playImg.opacity = 0;
    canvas.moveTo(playImg,-50);
    pauseImg.opacity = 1;
    canvas.moveTo(pauseImg,50);
}

function volumeUp(){
    if(volStatus==10){
    }
    else{
        volStatus += 2;
    }
    changeVolume(volStatus, '+');
    canvas.deactivateAll();
}

function volumeDown(){
    if(volStatus==0){
    }
    else{
        volStatus -= 2;
    }
    changeVolume(volStatus, '-');
    canvas.deactivateAll();
}

function changeVolume(volStatus, sign){
        uptown.volume = volStatus/10;
        sugar.volume = volStatus/10;
        marvin.volume = volStatus/10;
        if((volCircle.left <= 306)&&(sign == '-')){
        }
        else if((volCircle.left == 453)&&(sign == '+')){
        }
        else{
            if(sign == '+'){
                volCircle.left += 29.6;
            }
            else{
                volCircle.left -= 29.6;
            }
        }
}

function changeMetadata(){
    titleText.text = musicTitle[musicId];
    artistText.text = musicArtist[musicId];
    if(musicId == 0){
        canvas.moveTo(uptownImg, 50);
    }
    else if(musicId == 1){
        canvas.moveTo(sugarImg, 50);
    }
    else{
        canvas.moveTo(marvinImg, 50);
    }
}