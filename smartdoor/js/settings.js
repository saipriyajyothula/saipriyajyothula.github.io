function updateSettings(){
    
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
    
    var englishText = new fabric.Text('English', { left: 530, top: topLength + 138, fontFamily: 'HelveticaLight', fontSize: 30, originY: 'top', fontWeight: 300});
    englishText.hasControls = englishText.hasBorders = false;
    englishText.lockMovementX = englishText.lockMovementY = true;
    englishText.on('mousedown',function(){
          tempLanguageFlag = languageFlag;
          languageFlag = 'en';
          changeLanguageBold();
          changeLanguage();

    });

    var spanishText = new fabric.Text('Español', { left: 530, top: topLength + 206, fontFamily: 'HelveticaLight', fontSize: 30, originY: 'top', fontWeight: 300});
    spanishText.hasControls = spanishText.hasBorders = false;
    spanishText.lockMovementX = spanishText.lockMovementY = true;
    spanishText.on('mousedown',function(){
          tempLanguageFlag = languageFlag;
          languageFlag = 'es';
          changeLanguageBold();
          changeLanguage();
    });

    var hindiText = new fabric.Text('हिंदी', { left: 530, top: topLength + 274, fontFamily: 'HelveticaLight', fontSize: 30, originY: 'top', fontWeight: 300});
    hindiText.hasControls = hindiText.hasBorders = false;
    hindiText.lockMovementX = hindiText.lockMovementY = true;
    hindiText.on('mousedown',function(){
          tempLanguageFlag = languageFlag;
          languageFlag = 'hi';
          changeLanguageBold();
          changeLanguage();
    });

    var kannadaText = new fabric.Text('ಕನ್ನಡ', { left: 530, top: topLength + 342, fontFamily: 'HelveticaLight', fontSize: 30, originY: 'top', fontWeight: 300});
    kannadaText.hasControls = kannadaText.hasBorders = false;
    kannadaText.lockMovementX = kannadaText.lockMovementY = true;
    kannadaText.on('mousedown',function(){
          tempLanguageFlag = languageFlag;
          languageFlag = 'kn';
          changeLanguageBold();
          changeLanguage();
    });

    var koreanText = new fabric.Text('한국어', { left: 530, top: topLength + 410, fontFamily: 'HelveticaLight', fontSize: 30, originY: 'top', fontWeight: 300});
    koreanText.hasControls = koreanText.hasBorders = false;
    koreanText.lockMovementX = koreanText.lockMovementY = true;
    koreanText.on('mousedown',function(){
          tempLanguageFlag = languageFlag;
          languageFlag = 'ko';
          changeLanguageBold();
          changeLanguage();
    });

    var marathiText = new fabric.Text('मराठी', { left: 530, top: topLength + 478, fontFamily: 'HelveticaLight', fontSize: 30, originY: 'top', fontWeight: 300});
    marathiText.hasControls = marathiText.hasBorders = false;
    marathiText.lockMovementX = marathiText.lockMovementY = true;
    marathiText.on('mousedown',function(){
          tempLanguageFlag = languageFlag;
          languageFlag = 'mr';
          changeLanguageBold();
          changeLanguage();
    });

    var tamilText = new fabric.Text('தமிழ்', { left: 530, top: topLength + 546, fontFamily: 'HelveticaLight', fontSize: 30, originY: 'top', fontWeight: 300});
    tamilText.hasControls = tamilText.hasBorders = false;
    tamilText.lockMovementX = tamilText.lockMovementY = true;
    tamilText.on('mousedown',function(){
          tempLanguageFlag = languageFlag;
          languageFlag = 'ta';
          changeLanguageBold();
          changeLanguage();
    });

    var teluguText = new fabric.Text('తెలుగు', { left: 530, top: topLength + 614, fontFamily: 'HelveticaLight', fontSize: 30, originY: 'top', fontWeight: 300});
    teluguText.hasControls = teluguText.hasBorders = false;
    teluguText.lockMovementX = teluguText.lockMovementY = true;
    teluguText.on('mousedown',function(){
          tempLanguageFlag = languageFlag;
          languageFlag = 'te';
          changeLanguageBold();
          changeLanguage();
    });
    
    var languageTickText = new fabric.Text('\u2713', { left: 470, top: topLength + 138, fontFamily: 'HelveticaLight', fontSize: 30, originY: 'top', fontWeight: 300});
    languageTickText.hasControls = languageTickText.hasBorders = false;
    languageTickText.lockMovementX = languageTickText.lockMovementY = true;
    
        inWindow.add(settingsHeaderText);
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
    languageMenu();
    
    function languageMenu(){
        inWindow.add(englishText);
        inWindow.add(spanishText);
        inWindow.add(hindiText);
        inWindow.add(kannadaText);
        inWindow.add(koreanText);
        inWindow.add(marathiText);
        inWindow.add(tamilText);
        inWindow.add(teluguText);
        inWindow.add(languageTickText);
        changeLanguageBold();
    }
    
    function removelanguageMenu(){
        inWindow.remove(englishText);
        inWindow.remove(spanishText);
        inWindow.remove(hindiText);
        inWindow.remove(kannadaText);
        inWindow.remove(koreanText);
        inWindow.remove(marathiText);
        inWindow.remove(tamilText);
        inWindow.remove(teluguText);
        inWindow.remove(languageTickText);
    }
    
    function changeLanguageBold(){
        inWindow.deactivateAll();
        switch(tempLanguageFlag) {
            case 'en':
                englishText.fontWeight = 300;
                englishText.fontSize = 30;
                break;
            case 'es':
                spanishText.fontWeight = 300;
                spanishText.fontSize = 30;
                break;
            case 'hi':
                hindiText.fontWeight = 300;
                hindiText.fontSize = 30;
                break;
            case 'kn':
                kannadaText.fontWeight = 300;
                kannadaText.fontSize = 30;
                break;
            case 'ko':
                koreanText.fontWeight = 300;
                koreanText.fontSize = 30;
                break;
            case 'mr':
                marathiText.fontWeight = 300;
                marathiText.fontSize = 30;
                break;
            case 'ta':
                tamilText.fontWeight = 300;
                tamilText.fontSize = 30;
                break;
            case 'te':
                teluguText.fontWeight = 300;
                teluguText.fontSize = 30;
                break;
        }
        switch(languageFlag) {
            case 'en':
                englishText.fontWeight = 900;
                englishText.fontSize = 32;
                languageTickText.top = topLength + 138;
                break;
            case 'es':
                spanishText.fontWeight = 900;
                spanishText.fontSize = 32;
                languageTickText.top = topLength + 206;
                break;
            case 'hi':
                hindiText.fontWeight = 900;
                hindiText.fontSize = 32;
                languageTickText.top = topLength + 274;
                break;
            case 'kn':
                kannadaText.fontWeight = 900;
                kannadaText.fontSize = 32;
                languageTickText.top = topLength + 342;
                break;
            case 'ko':
                koreanText.fontWeight = 900;
                koreanText.fontSize = 32;
                languageTickText.top = topLength + 410;
                break;
            case 'mr':
                marathiText.fontWeight = 900;
                marathiText.fontSize = 32;
                languageTickText.top = topLength + 478;
                break;
            case 'ta':
                tamilText.fontWeight = 900;
                tamilText.fontSize = 32;
                languageTickText.top = topLength + 546;
                break;
            case 'te':
                teluguText.fontWeight = 900;
                teluguText.fontSize = 32;
                languageTickText.top = topLength + 614;
                break;
        }
    }
    
    function changeLanguage(){
        if(languageFlag == 'es'){
            language = 1;
            inWindow.deactivateAll();
            restructureMainSide();
            restructureOutDoor();
            getTime();
            settingsHeaderText.text = 'Ajustes';
            languageText.text = 'Idioma';
            chimeText.text = 'Repicar';
            dateAndTimeText.text = 'Fecha y hora';
            temperatureText.text = 'Temperatura';
            fingerprintText.text = 'Huella dactilar';
            passcodeText.text = 'Código de accesx`o';

        }
        else{
            language = 0;
            if(tempLanguageFlag == 'es'){
                restructureMainSide();
                restructureOutDoor(); 
            }
            settingsHeaderText.text = 'Settings';
            languageText.text = 'Language';
            chimeText.text = 'Chime';
            dateAndTimeText.text = 'Date \u0026 Time';
            temperatureText.text = 'Temperature';
            fingerprintText.text = 'Fingerprint';
            passcodeText.text = 'Passcode';
        }
    }
}