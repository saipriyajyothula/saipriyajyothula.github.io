function updateSettings(){
    
    var tempSettingsFlag = 'l';
    
    var settingsRect = new fabric.Rect({
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
    settingsRect.hasControls = settingsRect.hasBorders = false;
    settingsRect.lockMovementX = settingsRect.lockMovementY = true;
    
    var settingsHeaderText = new fabric.Text('Settings', { left: 615, top: topLength + 30, fontFamily: 'HelveticaLight', fontSize: 38, originX: 'center', originY: 'top', fontWeight: 300});
    settingsHeaderText.hasControls = settingsHeaderText.hasBorders = false;
    settingsHeaderText.lockMovementX = settingsHeaderText.lockMovementY = true;
    settingsHeaderText.text = language==0 ? 'Settings': 'Ajustes';
    
    var settingsLine = new fabric.Line([85,topLength+98,1145,topLength+98],{stroke: 'black', strokeWidth: 3});
    settingsLine.lockMovementX = settingsLine.lockMovementY = true;
    settingsLine.hasControls = settingsLine.hasBorders = false;
    
    var settingsDivideLine = new fabric.Line([440,topLength+98,440,topLength+680],{stroke: 'black', strokeWidth: 3});
    settingsDivideLine.lockMovementX = settingsDivideLine.lockMovementY = true;
    settingsDivideLine.hasControls = settingsDivideLine.hasBorders = false;
    
    inWindow.add(settingsRect);
    addInhandle();
    inWindow.add(settingsHeaderText);
    inWindow.add(settingsLine);
    inWindow.add(settingsDivideLine);
    
    divMain.style.display = 'none';
    divInWindow.style.display = 'block';
    mainApps.deactivateAll();
    crossMain();
    
    var languageText = new fabric.Text('Language', { left: 115, top: topLength + 138, fontFamily: 'HelveticaLight', fontSize: 30, originY: 'top', fontWeight: 300});
    languageText.hasControls = languageText.hasBorders = false;
    languageText.lockMovementX = languageText.lockMovementY = true;
    languageText.text = language==0 ? 'Language': 'Idioma';
    languageText.on('mousedown',function(){
          tempSettingsFlag = settingsFlag;
          settingsFlag = 'l';
          changeSettingsBold();
    });
    
    var chimeText = new fabric.Text('Chime', { left: 115, top: topLength + 206, fontFamily: 'HelveticaLight', fontSize: 30, originY: 'top', fontWeight: 300});
    chimeText.hasControls = chimeText.hasBorders = false;
    chimeText.lockMovementX = chimeText.lockMovementY = true;
    chimeText.text = language==0 ? 'Chime':'Repicar';
    chimeText.on('mousedown',function(){
          tempSettingsFlag = settingsFlag;
          settingsFlag = 'c';
          changeSettingsBold();
    });
    
    var dateAndTimeText = new fabric.Text('Date \u0026 Time', { left: 115, top: topLength + 274, fontFamily: 'HelveticaLight', fontSize: 30, originY: 'top', fontWeight: 300});
    dateAndTimeText.hasControls = dateAndTimeText.hasBorders = false;
    dateAndTimeText.lockMovementX = dateAndTimeText.lockMovementY = true;
    dateAndTimeText.text = language==0 ? 'Date \u0026 Time':'Fecha y hora';
    dateAndTimeText.on('mousedown',function(){
          tempSettingsFlag = settingsFlag;
          settingsFlag = 'd';
          changeSettingsBold();
    });
    
    var temperatureText = new fabric.Text('Temperature', { left: 115, top: topLength + 342, fontFamily: 'HelveticaLight', fontSize: 30, originY: 'top', fontWeight: 300});
    temperatureText.hasControls = temperatureText.hasBorders = false;
    temperatureText.lockMovementX = temperatureText.lockMovementY = true;
    temperatureText.text = language==0 ? 'Temperature': 'Temperatura';
    temperatureText.on('mousedown',function(){
          tempSettingsFlag = settingsFlag;
          settingsFlag = 't';
          changeSettingsBold();
    });
    
    var fingerprintText = new fabric.Text('Fingerprint', { left: 115, top: topLength + 410, fontFamily: 'HelveticaLight', fontSize: 30, originY: 'top', fontWeight: 300});
    fingerprintText.hasControls = fingerprintText.hasBorders = false;
    fingerprintText.lockMovementX = fingerprintText.lockMovementY = true;
    fingerprintText.text = language==0 ? 'Fingerprint': 'Huella dactilar';
    fingerprintText.on('mousedown',function(){
          tempSettingsFlag = settingsFlag;
          settingsFlag = 'f';
          changeSettingsBold();
    });
    
    var passcodeText = new fabric.Text('Passcode', { left: 115, top: topLength + 478, fontFamily: 'HelveticaLight', fontSize: 30, originY: 'top', fontWeight: 300});
    passcodeText.hasControls = passcodeText.hasBorders = false;
    passcodeText.lockMovementX = passcodeText.lockMovementY = true;
    passcodeText.text = language==0 ? 'Passcode': 'Código de accesx`o';
    passcodeText.on('mousedown',function(){
          tempSettingsFlag = settingsFlag;
          settingsFlag = 'p';
          changeSettingsBold();
    });
    
    inWindow.add(languageText);
    inWindow.add(chimeText);
    inWindow.add(dateAndTimeText);
    inWindow.add(temperatureText);
    inWindow.add(fingerprintText);
    inWindow.add(passcodeText);
    
    function changeSettingsBold(){
        inWindow.deactivateAll();
        switch(tempSettingsFlag) {
            case 'l':
                languageText.fontWeight = 300;
                languageText.fontSize = 30;
                break;
            case 'c':
                chimeText.fontWeight = 300;
                chimeText.fontSize = 30;
                break;
            case 'd':
                dateAndTimeText.fontWeight = 300;
                dateAndTimeText.fontSize = 30;
                break;
            case 't':
                temperatureText.fontWeight = 300;
                temperatureText.fontSize = 30;
                break;
            case 'f':
                fingerprintText.fontWeight = 300;
                fingerprintText.fontSize = 30;
                break;
            case 'p':
                passcodeText.fontWeight = 300;
                passcodeText.fontSize = 30;
                break;    
        }
        switch(settingsFlag) {
            case 'l':
                languageText.fontWeight = 900;
                languageText.fontSize = 32;
                break;
            case 'c':
                chimeText.fontWeight = 900;
                chimeText.fontSize = 32;
                break;
            case 'd':
                dateAndTimeText.fontWeight = 900;
                dateAndTimeText.fontSize = 32;
                break;
            case 't':
                temperatureText.fontWeight = 900;
                temperatureText.fontSize = 32;
                break;
            case 'f':
                fingerprintText.fontWeight = 900;
                fingerprintText.fontSize = 32;
                break;
            case 'p':
                passcodeText.fontWeight = 900;
                passcodeText.fontSize = 32;
                break;    
        }
    }
    changeSettingsBold();
    
    function languageMenu(){
        
    }
}