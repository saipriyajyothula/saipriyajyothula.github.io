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
    
    
    divMain.style.display = 'none';
    divInWindow.style.display = 'block';
    mainApps.deactivateAll();
    crossSettings();
    
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
    
    var doorbellChimeText = new fabric.Text('Doorbell', { left: 638, top: topLength + 132, fontFamily: 'HelveticaLight', fontSize: 32, originX: 'center', originY: 'top', fontWeight: 900});
    doorbellChimeText.hasControls = doorbellChimeText.hasBorders = false;
    doorbellChimeText.lockMovementX = doorbellChimeText.lockMovementY = true;
    doorbellChimeText.on('mousedown',function(){
          inWindow.deactivateAll();
          doorbellChimeText.fontWeight = 900;
          doorbellChimeText.fontSize = 32;
          packageChimeText.fontWeight = 300;
          packageChimeText.fontSize = 30;
          inWindow.renderAll.bind(inWindow);
          chimeType = 'doorbell';
          changeChimeBold();
          chime1.pause();
          chime2.pause();
          chime3.pause();
    });
    
    var packageChimeText = new fabric.Text('Package', { left: 990, top: topLength + 132, fontFamily: 'HelveticaLight', fontSize: 30, originX: 'center', originY: 'top', fontWeight: 300});
    packageChimeText.hasControls = packageChimeText.hasBorders = false;
    packageChimeText.lockMovementX = packageChimeText.lockMovementY = true;
    packageChimeText.on('mousedown',function(){
          inWindow.deactivateAll();
          doorbellChimeText.fontWeight = 300;
          doorbellChimeText.fontSize = 30;
          packageChimeText.fontWeight = 900;
          packageChimeText.fontSize = 32;
          inWindow.renderAll.bind(inWindow);
          chimeType = 'package';
          changeChimeBold();
          chime1.pause();
          chime2.pause();
          chime3.pause();
    });
    
    
    var firstChimeText = new fabric.Text('Date \u0026 Time', { left: 530, top: topLength + 236, fontFamily: 'HelveticaLight', fontSize: 30, originY: 'top', fontWeight: 300});
    firstChimeText.hasControls = firstChimeText.hasBorders = false;
    firstChimeText.lockMovementX = firstChimeText.lockMovementY = true;
    firstChimeText.on('mousedown',function(){
        if(chimeType == 'doorbell'){
          tempDoorbellChimeName = doorbellChimeName;
          doorbellChimeName = 1;
        }
        else{
          tempPackageChimeName = packageChimeName;
            packageChimeName = 1;
        }
        changeChimeBold();
    });
    
    var secondChimeText = new fabric.Text('secondChime', { left: 530, top: topLength + 304, fontFamily: 'HelveticaLight', fontSize: 30, originY: 'top', fontWeight: 300});
    secondChimeText.hasControls = secondChimeText.hasBorders = false;
    secondChimeText.lockMovementX = secondChimeText.lockMovementY = true;
    secondChimeText.on('mousedown',function(){
          if(chimeType == 'doorbell'){
          tempDoorbellChimeName = doorbellChimeName;
          doorbellChimeName = 2;
        }
        else{
          tempPackageChimeName = packageChimeName;
            packageChimeName = 2;
        }
        changeChimeBold();
    });
    
    var thirdChimeText = new fabric.Text('thirdChime', { left: 530, top: topLength + 372, fontFamily: 'HelveticaLight', fontSize: 30, originY: 'top', fontWeight: 300});
    thirdChimeText.hasControls = thirdChimeText.hasBorders = false;
    thirdChimeText.lockMovementX = thirdChimeText.lockMovementY = true;
    thirdChimeText.on('mousedown',function(){
          if(chimeType == 'doorbell'){
          tempDoorbellChimeName = doorbellChimeName;
          doorbellChimeName = 3;
        }
        else{
          tempPackageChimeName = packageChimeName;
            packageChimeName = 3;
        }
        changeChimeBold();
    });
    

    var chimeLine = new fabric.Line([440,topLength+196,1145,topLength+196],{stroke: 'black', strokeWidth: 3});
    chimeLine.lockMovementX = chimeLine.lockMovementY = true;
    chimeLine.hasControls = chimeLine.hasBorders = false;
    
    var chimeTickText = new fabric.Text('\u2713', { left: 470, top: topLength + 236, fontFamily: 'HelveticaLight', fontSize: 30, originY: 'top', fontWeight: 300});
    chimeTickText.hasControls = chimeTickText.hasBorders = false;
    chimeTickText.lockMovementX = chimeTickText.lockMovementY = true;
    
    var fullDateText = new fabric.Text('Thursday, Jan. 6', { left: 530, top: topLength + 138, fontFamily: 'HelveticaLight', fontSize: 30, originY: 'top', fontWeight: 300});
    fullDateText.hasControls = fullDateText.hasBorders = false;
    fullDateText.lockMovementX = fullDateText.lockMovementY = true;
    fullDateText.on('mousedown',function(){
          inWindow.deactivateAll();
          fullDateText.fontWeight = 900;
          fullDateText.fontSize = 32;
          otherDateText.fontWeight = 300;
          otherDateText.fontSize = 30;
          dateTimeTickText.top = topLength +138;
          dateFormat = 0;
          getTime();
          outApps.renderAll.bind(outApps);
    });

    var otherDateText = new fabric.Text('Thursday, 1/6', { left: 530, top: topLength + 206, fontFamily: 'HelveticaLight', fontSize: 30, originY: 'top', fontWeight: 300});
    otherDateText.hasControls = otherDateText.hasBorders = false;
    otherDateText.lockMovementX = otherDateText.lockMovementY = true;
    otherDateText.on('mousedown',function(){
          inWindow.deactivateAll();
          fullDateText.fontWeight = 300;
          fullDateText.fontSize = 30;
          otherDateText.fontWeight = 900;
          otherDateText.fontSize = 32;
          dateTimeTickText.top = topLength +206;
          dateFormat = 1;
          getTime();
          outApps.renderAll.bind(outApps);
    });
    
    var dateTimeTickText = new fabric.Text('\u2713', { left: 470, top: topLength + 138, fontFamily: 'HelveticaLight', fontSize: 30, originY: 'top', fontWeight: 300});
    languageTickText.hasControls = languageTickText.hasBorders = false;
    languageTickText.lockMovementX = languageTickText.lockMovementY = true;
    
    var twentyFourText = new fabric.Text('24 hour clock', { left: 721.5, top: topLength + 340, fontFamily: 'HelveticaLight', fontSize: 30, originX: 'right', originY: 'center', fontWeight: 300});
    twentyFourText.hasControls = twentyFourText.hasBorders = false;
    twentyFourText.lockMovementX = twentyFourText.lockMovementY = true;
    
    var twelveText = new fabric.Text('12 hour clock', { left: 863.5, top: topLength + 340, fontFamily: 'HelveticaLight', fontSize: 30, originX: 'left', originY: 'center', fontWeight: 300});
    twelveText.hasControls = twelveText.hasBorders = false;
    twelveText.lockMovementX = twelveText.lockMovementY = true;
    
    var timeSwitchRect = new fabric.Rect({
                                  left: 741.5,
                                  top: topLength+336,
                                  width: 102,
                                  height: 52,
                                  fill: '#EAEAEA', 
                                  stroke: '#B7B7B7',
                                  originX: 'left',
                                  originY: 'center',
                                  rx: 25,
                                  ry: 25,
                                  angle: 0
                                  });
    timeSwitchRect.hasControls = timeSwitchRect.hasBorders = false;
    timeSwitchRect.lockMovementX = timeSwitchRect.lockMovementY = true;
    
    var timeCircle = new fabric.Circle({left: 818.5, top: topLength+336, radius: 25, fill: 'white', stroke: '#B7B7B7', originX: 'center', originY: 'center', shadow: '#CECECE 2px 2px 2px'});
    timeCircle.lockMovementX = timeCircle.lockMovementY = true;
    timeCircle.hasControls = timeCircle.hasBorders = false;
    
    var FText = new fabric.Text('\u00B0 F', { left: 721.5, top: topLength + 340, fontFamily: 'HelveticaLight', fontSize: 30, originX: 'right', originY: 'center', fontWeight: 300});
    FText.hasControls = FText.hasBorders = false;
    FText.lockMovementX = FText.lockMovementY = true;
    
    var CText = new fabric.Text('\u00B0 C', { left: 863.5, top: topLength + 340, fontFamily: 'HelveticaLight', fontSize: 30, originX: 'left', originY: 'center', fontWeight: 300});
    CText.hasControls = CText.hasBorders = false;
    CText.lockMovementX = CText.lockMovementY = true;
    
    var temperatureSwitchRect = new fabric.Rect({
                                  left: 741.5,
                                  top: topLength+336,
                                  width: 102,
                                  height: 52,
                                  fill: '#EAEAEA', 
                                  stroke: '#B7B7B7',
                                  originX: 'left',
                                  originY: 'center',
                                  rx: 25,
                                  ry: 25,
                                  angle: 0
                                  });
    temperatureSwitchRect.hasControls = temperatureSwitchRect.hasBorders = false;
    temperatureSwitchRect.lockMovementX = temperatureSwitchRect.lockMovementY = true;
    
    var temperatureCircle = new fabric.Circle({left: 818.5, top: topLength+336, radius: 25, fill: 'white', stroke: '#B7B7B7', originX: 'center', originY: 'center', shadow: '#CECECE 2px 2px 2px'});
    temperatureCircle.lockMovementX = temperatureCircle.lockMovementY = true;
    temperatureCircle.hasControls = temperatureCircle.hasBorders = false;
    
    function settingsMenu(){
        inWindow.add(settingsRect);
        addInhandle();
        inWindow.add(settingsLine);
        inWindow.add(settingsDivideLine);
        inWindow.add(settingsHeaderText);
        inWindow.add(languageText);
        inWindow.add(chimeText);
        inWindow.add(dateAndTimeText);
        inWindow.add(temperatureText);
        inWindow.add(fingerprintText);
        inWindow.add(passcodeText);
    }
    
    settingsMenu();

    function changeSettingsBold(){
        inWindow.deactivateAll();
        switch(tempSettingsFlag) {
            case 'l':
                languageText.fontWeight = 300;
                languageText.fontSize = 30;
                removelanguageMenu();
                break;
            case 'c':
                chimeText.fontWeight = 300;
                chimeText.fontSize = 30;
                removeChimeMenu();
                break;
            case 'd':
                dateAndTimeText.fontWeight = 300;
                dateAndTimeText.fontSize = 30;
                removeDateTimeMenu();
                break;
            case 't':
                temperatureText.fontWeight = 300;
                temperatureText.fontSize = 30;
                removeTemperatureMenu();
                break;
            case 'f':
                fingerprintText.fontWeight = 300;
                fingerprintText.fontSize = 30;
                removeFingerprintMenu();
                break;
            case 'p':
                passcodeText.fontWeight = 300;
                passcodeText.fontSize = 30;
                removepasscodeMenu();
                break;    
        }
        switch(settingsFlag) {
            case 'l':
                languageText.fontWeight = 900;
                languageText.fontSize = 32;
                languageMenu();
                break;
            case 'c':
                chimeText.fontWeight = 900;
                chimeText.fontSize = 32;
                chimeMenu();
                break;
            case 'd':
                dateAndTimeText.fontWeight = 900;
                dateAndTimeText.fontSize = 32;
                dateTimeMenu();
                break;
            case 't':
                temperatureText.fontWeight = 900;
                temperatureText.fontSize = 32;
                temperatureMenu();
                break;
            case 'f':
                fingerprintText.fontWeight = 900;
                fingerprintText.fontSize = 32;
                fingerprintMenu();
                break;
            case 'p':
                passcodeText.fontWeight = 900;
                passcodeText.fontSize = 32;
                passcodeMenu();
                break;    
        }
    }
    changeSettingsBold();
    
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
    
    function chimeMenu(){
        inWindow.add(chimeLine);
        doorbellChimeText.text = language == 0 ? 'Doorbell' : 'Del timbre';
        packageChimeText.text = language == 0 ? 'Package' : 'Paquete';
        firstChimeText.text = language == 0 ? 'Chime 1' : 'Repicar 1';
        secondChimeText.text = language == 0 ? 'Chime 2' : 'Repicar 2';
        thirdChimeText.text = language == 0 ? 'Chime 3' : 'Repicar 3';
        switch(doorbellChimeName)
        {
            case 1:
                firstChimeText.fontSize=32;
                firstChimeText.fontWeight=900;
                chimeTickText.top = topLength + 236;
                break;
            case 2:
                secondChimeText.fontSize=32;
                secondChimeText.fontWeight=900;
                chimeTickText.top = topLength + 304;
                break;   
            case 3:
                thirdChimeText.fontSize=32;
                thirdChimeText.fontWeight=900;
                chimeTickText.top = topLength + 372;
                break;    
        }
        inWindow.add(doorbellChimeText);
        inWindow.add(packageChimeText);
        inWindow.add(firstChimeText);
        inWindow.add(secondChimeText);
        inWindow.add(thirdChimeText);
        inWindow.add(chimeTickText);
    }
    
    function removeChimeMenu(){
        inWindow.remove(chimeLine);
        inWindow.remove(doorbellChimeText);
        inWindow.remove(packageChimeText);
        inWindow.remove(firstChimeText);
        inWindow.remove(secondChimeText);
        inWindow.remove(thirdChimeText);
        inWindow.remove(chimeTickText);
        chime1.pause();
        chime2.pause();
        chime3.pause();
    }
    
    function changeChimeBold(){
        if(chimeType == 'doorbell'){
        var chimeName = doorbellChimeName;
        }
        else{
        var chimeName = packageChimeName;    
        }

        inWindow.deactivateAll();
        firstChimeText.fontWeight = 300;
        firstChimeText.fontSize = 30;
        chime1.pause();
        secondChimeText.fontWeight = 300;
        secondChimeText.fontSize = 30;
        chime2.pause();
        thirdChimeText.fontWeight = 300;
        thirdChimeText.fontSize = 30;
        chime3.pause();
            
        switch(chimeName) {
            case 1:
                firstChimeText.fontWeight = 900;
                firstChimeText.fontSize = 32;
                chimeTickText.top = topLength + 236;
                chime1.load();
                chime1.play();
                break;
            case 2:
                secondChimeText.fontWeight = 900;
                secondChimeText.fontSize = 32;
                chimeTickText.top = topLength + 304;
                chime2.load();
                chime2.play();
                break;
            case 3:
                thirdChimeText.fontWeight = 900;
                thirdChimeText.fontSize = 32;
                chimeTickText.top = topLength + 372;
                chime3.load();
                chime3.play();
                break;
        }
    }
    
    function dateTimeMenu(){
        if(dateFormat == 0){
            fullDateText.fontWeight = 900;
            fullDateText.fontSize = 32;
        }
        else{
            otherDateText.fontWeight = 900;
            otherDateText.fontSize = 32;
        }
        fullDateText.text = language == 0 ? 'Thursday, Jan. 6': 'viernes, enero 6';
        otherDateText.text = language == 0 ? 'Thursday, 1/6': 'viernes, 1/6';
        inWindow.add(fullDateText);
        inWindow.add(otherDateText);
        dateTimeTickText.top = dateFormat == 0 ? topLength + 138 : topLength + 206;
        inWindow.add(dateTimeTickText);
        twentyFourText.text = language == 0 ? '24 hour clock' : 'reloj de 24 horas';
        twelveText.text = language == 0 ? '12 hour clock' : 'reloj de 12 horas';
        inWindow.add(twentyFourText);
        inWindow.add(twelveText);
        inWindow.add(timeSwitchRect);
        timePosition();
        inWindow.add(timeCircle);
    }
    
    function removeDateTimeMenu(){
        inWindow.remove(fullDateText);
        inWindow.remove(otherDateText);
        inWindow.remove(dateTimeTickText);
        inWindow.remove(twentyFourText);
        inWindow.remove(twelveText);
        inWindow.remove(timeSwitchRect);
        inWindow.remove(timeCircle);
    }
    
    timeSwitchRect.on('mousedown',function(){
                   timeSwitch();
                   });

    timeCircle.on('mousedown',function(){
                   timeSwitch();
                   });
    
    function timeSwitch(){
        inWindow.deactivateAll();
        if(timeFormat == 1){
            timeFormat = 0;
        }
        else{
            timeFormat = 1;
        }
        timePosition();
    }
    
    function timePosition(){
        if(timeFormat == 1){
            getTime();
            timeCircle.set({left: 767.5});
        }
        else{
            getTime();
            timeCircle.set({left: 818.5});
        }
    }
    
    function temperatureMenu(){
        inWindow.add(FText);
        inWindow.add(CText);
        inWindow.add(temperatureSwitchRect);
        temperaturePosition();
        inWindow.add(temperatureCircle);
    }
    
    function removeTemperatureMenu(){
        inWindow.remove(FText);
        inWindow.remove(CText);
        inWindow.remove(temperatureSwitchRect);
        inWindow.remove(temperatureCircle);
    }
    
    temperatureSwitchRect.on('mousedown',function(){
                   temperatureSwitch();
                   });

    temperatureCircle.on('mousedown',function(){
                   temperatureSwitch();
                   });
    
    function temperatureSwitch(){
        inWindow.deactivateAll();
        if(tempUnits == 'F'){
            tempUnits = 'C';
        }
        else{
            tempUnits = 'F';
        }
        temperaturePosition();
    }
    
    function temperaturePosition(){
        if(tempUnits == 'F'){
            getWeather();
            temperatureCircle.set({left: 767.5});
        }
        else{
            getWeather();
            temperatureCircle.set({left: 818.5});
        }
    }

    function fingerprintMenu(){
        fabric.Image.fromURL('img/fingerprint1'+language+'.png', function(fingerprint) {
    fingerprint.set({left: 440, top: topLength+98});    
    inWindow.add(fingerprint);
    fingerprint.hasControls = fingerprint.hasBorders = false;
    fingerprint.lockMovementX = fingerprint.lockMovementY = true;        
    
    var fingerprintCircle = new fabric.Circle({left: 1002, top: topLength+464, radius: 56, fill: 'white', stroke: 'black', originX: 'center', originY: 'center', opacity: 0});
    fingerprintCircle.lockMovementX = fingerprintCircle.lockMovementY = true;
    fingerprintCircle.hasControls = fingerprintCircle.hasBorders = false;
    
    fingerprintCircle.on('mousedown', function(){
        removeFingerprintMenu();
        fingerprintWindow2();
    });        
            
    inWindow.add(fingerprintCircle);
    
    });
    }
    
    function fingerprintWindow2(){
        fabric.Image.fromURL('img/fingerprint2'+language+'.png', function(fingerprintShow) {
          fingerprintShow.set({left: 440, top: topLength+98, lockMovementX: true, lockMovementY: true, hasBorders: false, hasControls: false});    
          inWindow.add(fingerprintShow); 
          crossfingerprintWindow2();
        });
    }
    
    function crossfingerprintWindow2(){
        fabric.Image.fromURL('img/cross.png', function(crossImg) {
        crossImg.set({left: 1170, top: topLength-25, originX: 'center', originY: 'center'});    
        inWindow.add(crossImg);
        inWindow.moveTo(crossImg, 50);
        crossImg.hasControls = crossImg.hasBorders = false;
        crossImg.lockMovementX = crossImg.lockMovementY = true;
        crossImg.on('mousedown',function(){
                inWindow.clear();
                getWeather();
                getTime();
                settingsMenu();
                crossSettings();
                fingerprintMenu();
            });
        });
    }
    
    function removeFingerprintMenu(){
            inWindow.clear();
            getWeather();
            getTime();
            settingsMenu();
            crossSettings();
        }
    
    function passcodeMenu(){
        fabric.Image.fromURL('img/passcode'+language+'.png', function(passcode) {
    passcode.set({left: 440, top: topLength+98});    
    inWindow.add(passcode);
    passcode.hasControls = passcode.hasBorders = false;
    passcode.lockMovementX = passcode.lockMovementY = true;
    });
    }
    
    function removepasscodeMenu(){
            inWindow.clear();
            getWeather();
            getTime();
            settingsMenu();
            crossSettings();
        }
    
    function crossSettings(){
    fabric.Image.fromURL('img/cross.png', function(crossImg) {
    crossImg.set({left: 1170, top: topLength-25, originX: 'center', originY: 'center'});    
    inWindow.add(crossImg);
    crossImg.hasControls = crossImg.hasBorders = false;
    crossImg.lockMovementX = crossImg.lockMovementY = true;
    crossImg.on('mousedown',function(){
            chime1.pause();
            chime2.pause();
            chime3.pause();
            inWindow.clear();
            divInWindow.style.display = 'none';
            divMain.style.display = 'block';
            getWeather();
            getTime();
        });
    });
}

}