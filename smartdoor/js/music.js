var musicTitle = ['Uptown Funk ft. Bruno Mars', 'Sugar', 'Marvin Gaye ft. Meghan Trainor'];
var musicArtist = ['Mark Ronson', 'Maroon 5', 'Charlie Puth'];
var musicId = 1;
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

var titleText = new fabric.Text(musicTitle[musicId], { left: 868, top: topLength+170, fontFamily: 'HelveticaLight', fontSize: 44, originX: 'center', originY: 'top'});
titleText.hasControls = titleText.hasBorders = false;
titleText.lockMovementX = titleText.lockMovementY = true;

var artistText = new fabric.Text(musicArtist[musicId], { left: 868, top: topLength+240, fontFamily: 'HelveticaLight', fontSize: 22, originX: 'center', originY: 'top'});
artistText.hasControls = artistText.hasBorders = false;
artistText.lockMovementX = artistText.lockMovementY = true;

var volLine = new fabric.Line([315,topLength+509,463,topLength+509],{stroke: 'black', strokeWidth: 3});
volLine.lockMovementX = volLine.lockMovementY = true;
volLine.hasControls = volLine.hasBorders = false;

var volCircle = new fabric.Circle({left: 453, top: topLength+510, radius: 10, originY: 'center'});
volCircle.lockMovementX = volCircle.lockMovementY = true;
volCircle.hasControls = volCircle.hasBorders = false;

function playFront(){
    fabric.Image.fromURL('img/play.png', function(play) {
    play.set({left: 835, top: topLength+325});    
    canvas.add(play);
    play.hasControls = play.hasBorders = false;
    play.lockMovementX = play.lockMovementY = true;
        play.on('mousedown',function(){
            changeMetadata();
            playMusic();
            pauseFront();
        });
    });
}

function pauseFront(){
    fabric.Image.fromURL('img/pause.png', function(pause) {
    pause.set({left: 835, top: topLength+325});    
    canvas.add(pause);
    pause.hasControls = pause.hasBorders = false;
    pause.lockMovementX = pause.lockMovementY = true;
        pause.on('mousedown',function(){
            changeMetadata();
            pauseMusic();
            playFront();
            canvas.deactivateAll();
        });
    });
}

function prevButton(){
    fabric.Image.fromURL('img/prev.png', function(prev) {
    prev.set({left: 705, top: topLength+350});    
    canvas.add(prev);
    prev.hasControls = prev.hasBorders = false;
    prev.lockMovementX = prev.lockMovementY = true;
        prev.on('mousedown',function(){
        pauseMusic();
        if(musicId==0){
            musicId=2;
        }
        else{
            musicId -= 1;
        }
        changeMetadata();
        playMusic();
        pauseFront();
        canvas.deactivateAll();
        });
    }); 
}

function nextButton(){
    fabric.Image.fromURL('img/next.png', function(next) {
    next.set({left: 995, top: topLength+350});    
    canvas.add(next);
    next.hasControls = next.hasBorders = false;
    next.lockMovementX = next.lockMovementY = true;
        next.on('mousedown',function(){
        pauseMusic();
        if(musicId==2){
            musicId=0;
        }
        else{
            musicId += 1;
        }
        changeMetadata();
        playMusic();
        pauseFront();    
        });
    }); 
}

function lowButton(){
    fabric.Image.fromURL('img/low.png', function(low) {
    low.set({left: 235, top: topLength+490});    
    canvas.add(low);
    low.hasControls = low.hasBorders = false;
    low.lockMovementX = low.lockMovementY = true;
        low.on('mousedown',function(){
            volumeDown();
        });
    }); 
}

function highButton(){
    fabric.Image.fromURL('img/high.png', function(high) {
    high.set({left: 485, top: topLength+490});    
    canvas.add(high);
    high.hasControls = high.hasBorders = false;
    high.lockMovementX = high.lockMovementY = true;
        high.on('mousedown',function(){
            volumeUp();
        });
    }); 
}

function uptownArtwork(){
    fabric.Image.fromURL('img/uptown.png', function(uptownImg) {
    uptownImg.set({left: 235, top: topLength+140});    
    canvas.add(uptownImg);
    uptownImg.hasControls = uptownImg.hasBorders = false;
    uptownImg.lockMovementX = uptownImg.lockMovementY = true;
    });
}

function sugarArtwork(){
    fabric.Image.fromURL('img/sugar.png', function(sugarImg) {
    sugarImg.set({left: 235, top: topLength+140});    
    canvas.add(sugarImg);
    sugarImg.hasControls = sugarImg.hasBorders = false;
    sugarImg.lockMovementX = sugarImg.lockMovementY = true;
    });
}

function marvinArtwork(){
    fabric.Image.fromURL('img/marvin.png', function(marvinImg) {
    marvinImg.set({left: 235, top: topLength+140});    
    canvas.add(marvinImg);
    marvinImg.hasControls = marvinImg.hasBorders = false;
    marvinImg.lockMovementX = marvinImg.lockMovementY = true;
    });
}

function playMusic(){
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

function changeMetadata(){
    titleText.text = musicTitle[musicId];
    artistText.text = musicArtist[musicId];
    if(musicId == 0){
        uptownArtwork();
    }
    else if(musicId == 1){
        sugarArtwork();
    }
    else{
        marvinArtwork();
    }
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

function musicPlayer(){
    canvas.add(musicRect);
    canvas.add(titleText);
    canvas.add(artistText);
    canvas.add(volLine);
    canvas.add(volCircle);
    playFront();
    prevButton();
    nextButton();
    changeMetadata();
    lowButton();
    highButton();
    closeMusicPlayer();
}

function closeMusicPlayer(){
    fabric.Image.fromURL('img/cross.png', function(crossImg) {
    crossImg.set({left: 1195+25, top: topLength-25, originX: 'center', originY: 'center'});    
    canvas.add(crossImg);
    crossImg.hasControls = crossImg.hasBorders = false;
    crossImg.lockMovementX = crossImg.lockMovementY = true;
    crossImg.on('mousedown',function(){
            pauseMusic();
            canvas.deactivateAll();
            canvas.clear();
            mainscreen();
        });
    });
}