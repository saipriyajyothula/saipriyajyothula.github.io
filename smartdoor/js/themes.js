function updateTheme(){
    
    var sideVariable = 'in';
    var tempThemeName = inThemeName;
    
    var themesRect = new fabric.Rect({
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
    themesRect.hasControls = themesRect.hasBorders = false;
    themesRect.lockMovementX = themesRect.lockMovementY = true;
    
    var inThemesRect = new fabric.Rect({
      left: 85,
      top: topLength,
      opacity: 0,
      width: 530,
      height: 98
    });
    inThemesRect.hasControls = inThemesRect.hasBorders = false;
    inThemesRect.lockMovementX = inThemesRect.lockMovementY = true;
    
    var outThemesRect = new fabric.Rect({
      left: 615,
      top: topLength,
      opacity: 0,
      width: 530,
      height: 98
    });
    outThemesRect.hasControls = outThemesRect.hasBorders = false;
    outThemesRect.lockMovementX = outThemesRect.lockMovementY = true;
    
    var themeLine = new fabric.Line([85,topLength+98,1145,topLength+98],{stroke: 'black', strokeWidth: 3});
    themeLine.lockMovementX = themeLine.lockMovementY = true;
    themeLine.hasControls = themeLine.hasBorders = false;
     
    var divideLine = new fabric.Line([615,topLength,615,topLength+98],{stroke: 'black', strokeWidth: 3});
    divideLine.lockMovementX = divideLine.lockMovementY = true;
    divideLine.hasControls = divideLine.hasBorders = false;
    
    inWindow.add(themesRect);
    addInhandle();
    inWindow.add(inThemesRect);
    inWindow.add(outThemesRect);
    
    fabric.Image.fromURL('img/random/birthday.png', function(birthday) {
      birthday.set({left: leftWidth,
      top: topLength+168, lockMovementX: true, lockMovementY: true, hasBorders: false, hasControls: false});    
      inWindow.add(birthday);
      birthday.on('mousedown',function(){
          tempThemeName = 'birthday';
          changeTheme(sideVariable);
    });
    });

    fabric.Image.fromURL('img/random/christmas.png', function(christmas) {
      christmas.set({left: leftWidth+220,
      top: topLength+168, lockMovementX: true, lockMovementY: true, hasBorders: false, hasControls: false});    
      inWindow.add(christmas);
      christmas.on('mousedown',function(){
          tempThemeName = 'christmas';
          changeTheme(sideVariable);
    });
    });    

    fabric.Image.fromURL('img/random/halloween.png', function(halloween) {
      halloween.set({left: leftWidth+440,
      top: topLength+168, lockMovementX: true, lockMovementY: true, hasBorders: false, hasControls: false});    
      inWindow.add(halloween);
      halloween.on('mousedown',function(){
          tempThemeName = 'halloween';
          changeTheme(sideVariable);
    });
    });    

    fabric.Image.fromURL('img/random/metal.png', function(metal) {
      metal.set({left: leftWidth+660,
      top: topLength+168, lockMovementX: true, lockMovementY: true, hasBorders: false, hasControls: false});    
      inWindow.add(metal);
      metal.on('mousedown',function(){
          tempThemeName = 'metal';
          changeTheme(sideVariable);
    });
    });    

    fabric.Image.fromURL('img/random/red.png', function(red) {
      red.set({left: leftWidth,
      top: topLength+418, lockMovementX: true, lockMovementY: true, hasBorders: false, hasControls: false});    
      inWindow.add(red);
      red.on('mousedown',function(){
          tempThemeName = 'red';
          changeTheme(sideVariable);
    });
    });    

    fabric.Image.fromURL('img/random/sea.png', function(sea) {
      sea.set({left: leftWidth+220,
      top: topLength+418, lockMovementX: true, lockMovementY: true, hasBorders: false, hasControls: false});    
      inWindow.add(sea);
      sea.on('mousedown',function(){
          tempThemeName = 'sea';
          changeTheme(sideVariable);
    });
    });    

    fabric.Image.fromURL('img/random/stars.png', function(stars) {
      stars.set({left: leftWidth+440,
      top: topLength+418, lockMovementX: true, lockMovementY: true, hasBorders: false, hasControls: false});    
      inWindow.add(stars);
      stars.on('mousedown',function(){
          tempThemeName = 'stars';
          changeTheme(sideVariable);
    });
    });    

    fabric.Image.fromURL('img/random/wood.png', function(wood) {
      wood.set({left: leftWidth+660,
      top: topLength+418, lockMovementX: true, lockMovementY: true, hasBorders: false, hasControls: false});    
      inWindow.add(wood);
      wood.on('mousedown',function(){
          tempThemeName = 'wood';
          changeTheme(sideVariable);
    });
    });
    
    var insideThemeHeaderText = new fabric.Text('Inside theme', { left: 350, top: topLength + 30, fontFamily: 'HelveticaLight', fontSize: 40, originX: 'center', originY: 'top', fontWeight: 900, textAlign: 'center'});
    insideThemeHeaderText.hasControls = insideThemeHeaderText.hasBorders = false;
    insideThemeHeaderText.lockMovementX = insideThemeHeaderText.lockMovementY = true;

    var outsideThemeHeaderText = new fabric.Text('Outside theme', { left: 880, top: topLength + 30, fontFamily: 'HelveticaLight', fontSize: 38, originX: 'center', originY: 'top', fontWeight: 300, textAlign: 'center'});
    outsideThemeHeaderText.hasControls = outsideThemeHeaderText.hasBorders = false;
    outsideThemeHeaderText.lockMovementX = outsideThemeHeaderText.lockMovementY = true;
    
    insideThemeHeaderText.text = (language == 0) ? 'Inside theme' : 'Tema en el interior';
    outsideThemeHeaderText.text = (language == 0) ? 'Outside theme' : 'El tema fuera';
    
    var birthdayText = new fabric.Text('default', { left: leftWidth+58, top: topLength+313, fontFamily: 'HelveticaLight', fontSize: 28, fontWeight:300, originX: 'center', textAlign: 'center'});
    birthdayText.text = (language == 0) ? 'Birthday' : 'Cumpleaños';
    birthdayText.hasControls = birthdayText.hasBorders = false;
    birthdayText.lockMovementX = birthdayText.lockMovementY = true;
    birthdayText.selectable = false;
    birthdayText.evented = false;    

    var christmasText = new fabric.Text('default', { left: leftWidth+278, top: topLength+313, fontFamily: 'HelveticaLight', fontSize: 28, fontWeight:300, originX: 'center', textAlign: 'center'});
    christmasText.text = (language == 0) ? 'Christmas' : 'Navidad';
    christmasText.hasControls = christmasText.hasBorders = false;
    christmasText.lockMovementX = christmasText.lockMovementY = true;
    christmasText.selectable = false;
    christmasText.evented = false;    

    var halloweenText= new fabric.Text('default', { left: leftWidth+498, top: topLength+313, fontFamily: 'HelveticaLight', fontSize: 28, fontWeight:300, originX: 'center', textAlign: 'center'});
    halloweenText.text = (language == 0) ? 'Halloween' : 'Halloween';
    halloweenText.hasControls = halloweenText.hasBorders = false;
    halloweenText.lockMovementX = halloweenText.lockMovementY = true;
    halloweenText.selectable = false;
    halloweenText.evented = false;

    var metalText = new fabric.Text('default', { left: leftWidth+718, top: topLength+313, fontFamily: 'HelveticaLight', fontSize: 28, fontWeight:300, originX: 'center', textAlign: 'center'});
    metalText.text = (language == 0) ? 'Metal' : 'Metal';
    metalText.hasControls = metalText.hasBorders = false;
    metalText.lockMovementX = metalText.lockMovementY = true;
    metalText.selectable = false;
    metalText.evented = false;    

    var redText = new fabric.Text('default', { left: leftWidth+58, top: topLength+563, fontFamily: 'HelveticaLight', fontSize: 28, fontWeight:300, originX: 'center', textAlign: 'center'});
    redText.text = (language == 0) ? 'Red' : 'Rojo';
    redText.hasControls = redText.hasBorders = false;
    redText.lockMovementX = redText.lockMovementY = true;
    redText.selectable = false;
    redText.evented = false;    

    var seaText = new fabric.Text('default', { left: leftWidth+278, top: topLength+563, fontFamily: 'HelveticaLight', fontSize: 28, fontWeight:300, originX: 'center', textAlign: 'center'});
    seaText.text = (language == 0) ? 'Sea' : 'Mar';
    seaText.hasControls = seaText.hasBorders = false;
    seaText.lockMovementX = seaText.lockMovementY = true;
    seaText.selectable = false;
    seaText.evented = false;    

    var  starsText= new fabric.Text('default', { left: leftWidth+498, top: topLength+563, fontFamily: 'HelveticaLight', fontSize: 28, fontWeight:300, originX: 'center', textAlign: 'center'});
    starsText.text = (language == 0) ? 'Stars' : 'Estrellas';
    starsText.hasControls = starsText.hasBorders = false;
    starsText.lockMovementX = starsText.lockMovementY = true;
    starsText.selectable = false;
    starsText.evented = false;

    var woodText = new fabric.Text('default', { left: leftWidth+718, top: topLength+563, fontFamily: 'HelveticaLight', fontSize: 28, fontWeight:300, originX: 'center', textAlign: 'center'});
    woodText.text = (language == 0) ? 'Wood' : 'Madera';
    woodText.hasControls = woodText.hasBorders = false;
    woodText.lockMovementX = woodText.lockMovementY = true;
    woodText.selectable = false;
    woodText.evented = false;    
    
    var applyText = new fabric.Text('default', { left: 615, top: topLength+773, fontFamily: 'HelveticaLight', fontSize: 38, fontWeight:300, originX: 'center', fill: 'white', shadow: 'rgba(0,0,0,0.5) 0px 2px 3px', textAlign: 'center'});
    applyText.text = (language == 0) ? 'Apply' : 'Aplicar';
    applyText.hasControls = applyText.hasBorders = false;
    applyText.lockMovementX = applyText.lockMovementY = true;
    
    var applyRect = new fabric.Rect({ left: 615, top: topLength+750, width: 260, height: 90, originX: 'center', fill: '#3498db', rx: 10, ry: 10});
    applyRect.hasControls = applyRect.hasBorders = false;
    applyRect.lockMovementX = applyRect.lockMovementY = true;
    
    applyText.on('mousedown',function(){
            applyThemes();   
    });
    
    applyRect.on('mousedown',function(){
            applyThemes();   
    });
    
    inThemesRect.on('mousedown',function(){
          selectInTheme();
    });
    
    outThemesRect.on('mousedown',function(){
          selectOutTheme();
    });
    
    insideThemeHeaderText.on('mousedown',function(){
          selectInTheme();
    });
    
    outsideThemeHeaderText.on('mousedown',function(){
          selectOutTheme();
    });
    
    divMain.style.display = 'none';
    divInWindow.style.display = 'block';
    mainApps.deactivateAll();
    
    inWindow.add(insideThemeHeaderText);
    inWindow.add(outsideThemeHeaderText);
    inWindow.add(themeLine);
    inWindow.add(divideLine);
    inWindow.add(birthdayText);
    inWindow.add(christmasText);
    inWindow.add(halloweenText);
    inWindow.add(metalText);
    inWindow.add(redText);
    inWindow.add(seaText);
    inWindow.add(starsText);
    inWindow.add(woodText);
    inWindow.add(applyRect);
    inWindow.add(applyText);
    crossThemes();
    
    function selectInTheme(){
      inWindow.deactivateAll();
      insideThemeHeaderText.fontWeight = 900;
      insideThemeHeaderText.fontSize = 40;
      outsideThemeHeaderText.fontWeight = 300;
      outsideThemeHeaderText.fontSize = 38;
      inWindow.renderAll.bind(inWindow);
      sideVariable = 'in';
    }
    
    function selectOutTheme(){
      inWindow.deactivateAll();
      outsideThemeHeaderText.fontWeight = 900;
      outsideThemeHeaderText.fontSize = 40; 
      insideThemeHeaderText.fontWeight = 300;
      insideThemeHeaderText.fontSize = 38;   
      inWindow.renderAll.bind(inWindow);
      sideVariable = 'out';
    }
    
    function changeTheme(sideVar){
        inWindow.deactivateAll();
        if(sideVar == 'in'){
            mainApps.setBackgroundImage('img/' +tempThemeName +'.jpg', mainApps.renderAll.bind(mainApps));
            sideApps.setBackgroundImage('img/' +tempThemeName +'.jpg', sideApps.renderAll.bind(sideApps));
            inWindow.setBackgroundImage('img/' +tempThemeName +'.jpg', inWindow.renderAll.bind(inWindow));
        }
        else{
            outApps.setBackgroundImage('img/' +tempThemeName +'.jpg', outApps.renderAll.bind(outApps));
            outWindow.setBackgroundImage('img/' +tempThemeName +'.jpg', outWindow.renderAll.bind(outWindow));
        }
    }
    
    function crossThemes(){
        fabric.Image.fromURL('img/cross.png', function(crossImg) {
        crossImg.set({left: 1170, top: topLength-25, originX: 'center', originY: 'center'});    
        inWindow.add(crossImg);
        crossImg.hasControls = crossImg.hasBorders = false;
        crossImg.lockMovementX = crossImg.lockMovementY = true;
        crossImg.on('mousedown',function(){
                closeThemes();
            });
        });
    }

    function applyThemes(){
        inWindow.deactivateAll();
                if(sideVariable == 'in'){
                    inThemeName = tempThemeName;
                }
                else{
                    outThemeName = tempThemeName;
                }
              closeThemes();
    }

}


function closeThemes(){
    inWindow.clear();
    mainApps.setBackgroundImage('img/' + inThemeName + '.jpg', mainApps.renderAll.bind(mainApps));
    sideApps.setBackgroundImage('img/' + inThemeName + '.jpg', sideApps.renderAll.bind(sideApps));
    outApps.setBackgroundImage('img/' + outThemeName + '.jpg', outApps.renderAll.bind(outApps));
    inWindow.setBackgroundImage('img/' + inThemeName + '.jpg', inWindow.renderAll.bind(inWindow));
    outWindow.setBackgroundImage('img/' + outThemeName + '.jpg', outWindow.renderAll.bind(outWindow));
    divInWindow.style.display = 'none';
    addInhandle();
    divMain.style.display = 'block';
    getWeather();
    getTime();
}