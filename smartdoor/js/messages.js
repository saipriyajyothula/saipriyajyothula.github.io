	var messg;
	var choiceUser={};
	var userTxt=[];
	var js1, js2, js3, js4, js5;
    outhandleM();
	
function sendText(){
	UserDefApps.style.display='none';
	var MessageRect = new fabric.Rect({
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
    MessageRect.hasControls = MessageRect.hasBorders = false;
    MessageRect.lockMovementX = MessageRect.lockMovementY = true;
	
    var MessageBoX = new fabric.Rect({
      left: 500,
      top: topLength+550,
      fill: 'white',
      stroke: 'black',
      strokeWidth: 5,
      width: 500,
      height: 500,
      rx: 10,
      ry: 10,
      angle: 0
    });
	MessageBoX.hasControls = MessageBoX.hasBorders = false;
    MessageBoX.lockMovementX = MessageBoX.lockMovementY = true;
	
	var BzRect = new fabric.IText('Busy..will call later',{
      left: 300,
      top: topLength+250,
      fill: 'black',
      stroke: 'black',
      strokeWidth: 2,
	  fontFamily: 'HelveticaLight',
	  fontSize:32,
	  fontWeight:300,
	  originY: 'top',textAlign: 'center'
    });
    BzRect.hasControls = BzRect.hasBorders = false;
    BzRect.lockMovementX = BzRect.lockMovementY = true;
	
	var OOTRect = new fabric.IText('Out of Town',{
      left: 300,
      top: topLength+320,
      fill: 'black',
      stroke: 'black',
      strokeWidth: 2,
	  fontFamily: 'HelveticaLight',
	fontSize:32,
	fontWeight:300,
	originY: 'top',textAlign: 'center'
    });
    OOTRect.hasControls = OOTRect.hasBorders = false;
    OOTRect.lockMovementX = OOTRect.lockMovementY = true;
	
	var GoRect = new fabric.IText('Trespassers will be shot down!!',{
      left: 300,
      top: topLength+390,
      fill: 'black',
      stroke: 'black',
      strokeWidth: 2,
	  fontFamily: 'HelveticaLight',
		fontSize:32,
	fontWeight:300,
	originY: 'top',textAlign: 'center'
    });
    GoRect.hasControls = GoRect.hasBorders = false;
    GoRect.lockMovementX = GoRect.lockMovementY = true;
	
	var AllTxt = new fabric.IText('All',{
      left: 310,
      top: topLength+130,
      fill: 'black',
      stroke: 'black',
      strokeWidth: 2,
	  fontFamily: 'HelveticaLight',
	fontSize:38,
	fontWeight:300,textAlign: 'center'
    });
    AllTxt.hasControls = AllTxt.hasBorders = false;
    AllTxt.lockMovementX = AllTxt.lockMovementY = true;
	//inWindow.add(AllTxt);
	
	var GtmTxt = new fabric.IText('Gautam',{
      left: 395,
      top: topLength+130,
      fill: 'black',
      stroke: 'black',
      strokeWidth: 2,
	  fontFamily: 'HelveticaLight',
	fontSize:38
    });
    GtmTxt.hasControls = GtmTxt.hasBorders = false;
    GtmTxt.lockMovementX = GtmTxt.lockMovementY = true;
	//inWindow.add(GtmTxt);
	
	var SaiTxt = new fabric.IText('Sai',{
      left: 560,
      top: topLength+130,
      fill: 'black',
      stroke: 'black',
      strokeWidth: 2,
	  fontFamily: 'HelveticaLight',
	fontSize:38
    });
    SaiTxt.hasControls = SaiTxt.hasBorders = false;
    SaiTxt.lockMovementX = SaiTxt.lockMovementY = true;
	//inWindow.add(SaiTxt);
	
	var SumanthTxt = new fabric.IText('Sumanth',{
      left: 640,
      top: topLength+130,
      fill: 'black',
      stroke: 'black',
      strokeWidth: 2,
	  fontFamily: 'HelveticaLight',
	fontSize:38
    });
    SumanthTxt.hasControls = SumanthTxt.hasBorders = false;
    SumanthTxt.lockMovementX = SumanthTxt.lockMovementY = true;
	
	var VinitTxt = new fabric.IText('Vinit',{
      left: 820,
      top: topLength+130,
      fill: 'black',
      stroke: 'black',
      strokeWidth: 2,
	  fontFamily: 'HelveticaLight',
	fontSize:38
    });
    VinitTxt.hasControls = VinitTxt.hasBorders = false;
    VinitTxt.lockMovementX = VinitTxt.lockMovementY = true;
	//inWindow.add(VinitTxt);
	
    var WriteMessRect = new fabric.Rect({
      left: 85,
      top: topLength,
      opacity: 0,
      width: 530,
      height: 98
    });
    WriteMessRect.hasControls = WriteMessRect.hasBorders = false;
    WriteMessRect.lockMovementX = WriteMessRect.lockMovementY = true;
    
    var RecMessRect = new fabric.Rect({
      left: 615,
      top: topLength,
      opacity: 0,
      width: 530,
      height: 98
    });
    RecMessRect.hasControls = RecMessRect.hasBorders = false;
    RecMessRect.lockMovementX = RecMessRect.lockMovementY = true;
    
    var themeLine = new fabric.Line([85,topLength+98,1145,topLength+98],{stroke: 'black', strokeWidth: 3});
    themeLine.lockMovementX = themeLine.lockMovementY = true;
    themeLine.hasControls = themeLine.hasBorders = false;
     
    var divideLine = new fabric.Line([615,topLength,615,topLength+98],{stroke: 'black', strokeWidth: 3});
    divideLine.lockMovementX = divideLine.lockMovementY = true;
    divideLine.hasControls = divideLine.hasBorders = false;
    
	var divideLine1 = new fabric.Line([250,topLength+98,1145,topLength+98],{stroke: 'black', strokeWidth: 3, top: topLength+200});
    divideLine1.lockMovementX = divideLine1.lockMovementY = true;
    divideLine1.hasControls = divideLine1.hasBorders = false;
	
	var divideLine2 = new fabric.Line([15,topLength+100,15,topLength+675],{stroke: 'black', strokeWidth: 3,left: 250});
    divideLine2.lockMovementX = divideLine.lockMovementY = true;
    divideLine2.hasControls = divideLine.hasBorders = false;
	
    inWindow.add(MessageRect);
	//inWindow.add(SumanthTxt1);
    addInhandle();
    inWindow.add(WriteMessRect);
    inWindow.add(RecMessRect);
	inWindow.add(themeLine);
    inWindow.add(divideLine);
	inWindow.add(divideLine1);
	inWindow.add(divideLine2);
	divMain.style.display = 'none';
    divInWindow.style.display = 'block';
    mainApps.deactivateAll();
	crossInsideCanvas();
	//inWindow.add(MessageBoX);
	
	var WriteMessTxt1 = new fabric.IText('Write a new message',{
      left: 170,
      top: topLength+30,
      fill: 'black',
      stroke: 'black',
      strokeWidth: 2,
	  fontFamily: 'HelveticaLight',
	fontSize:38
    });
    WriteMessTxt1.hasControls = WriteMessTxt1.hasBorders = false;
    WriteMessTxt1.lockMovementX = WriteMessTxt1.lockMovementY = true;
	inWindow.add(WriteMessTxt1);
	
	WriteMessTxt1.on('mousedown',function(){
		InoutAppsDoor.style.display='none';
	})
	
	var displMessTxt1 = new fabric.IText(' ',{
      left: 80,
      top: 80,
      fill: 'black',
      stroke: 'black',
      strokeWidth: 2,
	  fontFamily: 'HelveticaLight',
	fontSize:38
    });
    displMessTxt1.hasControls = displMessTxt1.hasBorders = false;
    displMessTxt1.lockMovementX = displMessTxt1.lockMovementY = true;
	InOutCanvasMainDoor.add(displMessTxt1);
	
	
	var ReceivedMessTxt1 = new fabric.IText('Received message',{
      left: 730,
      top: topLength+30,
      fill: 'black',
      stroke: 'black',
      strokeWidth: 2,
	  fontFamily: 'HelveticaLight',
	fontSize:38
    });
    ReceivedMessTxt1.hasControls = ReceivedMessTxt1.hasBorders = false;
    ReceivedMessTxt1.lockMovementX = ReceivedMessTxt1.lockMovementY = true;
	inWindow.add(ReceivedMessTxt1);
	
	ReceivedMessTxt1.on('mousedown',function(){
		InoutAppsDoor.style.display='block';
		InoutAppsDoor.style.top='565px'
		InoutAppsDoor.style.left='148px'
		if(mess[0]==null)
		{
			displMessTxt1.setText('No messages in the Inbox');
		}
		else{
			len=mess.length
			displMessTxt1.setText(mess[len-1]);	
		}
		
	})
	
	fabric.Image.fromURL('img/message_keyboard.png', function(messageKey) {
      messageKey.set({left: leftWidth,
      top: topLength+250, lockMovementX: true, lockMovementY: true, hasBorders: false, hasControls: false, left: 130});    
      inWindow.add(messageKey);
      messageKey.on('mousedown',function(){
		  wriText();
    });

	function wriText()
	{
		DisplayCanvasApps.style.display = 'none';	
		inWindow.add(BzRect);
		inWindow.add(OOTRect);
		inWindow.add(GoRect);
		inWindow.add(SaiTxt);
		inWindow.add(GtmTxt);
		inWindow.add(AllTxt);
		inWindow.add(SumanthTxt);
		inWindow.add(VinitTxt);
		inWindow.add(ReceivedMessTxt1);
		///
		BzRect.on('selected', function(){
			messg=BzRect.getText();
			userTxt.push(messg);
			//fontFamily: 'HelveticaLight',
			BzRect.fontFamily= 'Helvetica'
		});
		OOTRect.on('selected', function(){
			messg=OOTRect.getText();
			userTxt.push(messg);
			OOTRect.fontFamily= 'Helvetica'
		});
		GoRect.on('selected', function(){
			messg=GoRect.getText();
			userTxt.push(messg);
			GoRect.fontFamily= 'Helvetica'
		});
		AllTxt.on('mousedown', function(){
			choiceUser['All']=userTxt;
			userTxt=[];
		})
		GtmTxt.on('mousedown', function(){
			choiceUser['Gtm']=userTxt;
			userTxt=[];
			console.log('tr')
		})
		SaiTxt.on('mousedown', function(){
			choiceUser['Sai']=userTxt;
			userTxt=[];
		})
		SumanthTxt.on('mousedown', function(){
			choiceUser['Sum']=userTxt;
			userTxt=[];
		})
		VinitTxt.on('mousedown', function(){
			choiceUser['Vinit']=userTxt;
			userTxt=[];
		})
	}
	
    });
	
	
	fabric.Image.fromURL('img/message_doodle.png', function(messageKey) {
		inWindow.add(SaiTxt);
		inWindow.add(GtmTxt);
		inWindow.add(AllTxt);
		inWindow.add(SumanthTxt);
		inWindow.add(VinitTxt);
      messageKey.set({left: leftWidth,
      top: topLength+420, lockMovementX: true, lockMovementY: true, hasBorders: false, hasControls: false, left: 130});    
      inWindow.add(messageKey);
      messageKey.on('mousedown',function(){
		  drawText();
    });

	function drawText()
	{
		DisplayCanvas.clear();
		User2Apps.style.display = 'none';
		User3Apps.style.display = 'none';
		User4Apps.style.display = 'none';
		User1Apps.style.display = 'none';
		UserDefApps.style.display='none';
		DisplayCanvasApps.style.display = 'block';
		DisplayCanvasApps.style.left = '312px';
        DisplayCanvasApps.style.top = up==1?'655px':'1105px';
		DisplayCanvas.isDrawingMode = true;
		DisplayCanvas.freeDrawingBrush.width = 5;
		DisplayCanvas.freeDrawingBrush.color = "#ff0000";
		
		AllTxt.on('mousedown', function(){
			js1=JSON.stringify(DisplayCanvas);
			console.log(js1);
		})
		
		GtmTxt.on('mousedown', function(){
			js2=JSON.stringify(DisplayCanvas);
			console.log(js2);
		})
		
		SaiTxt.on('mousedown', function(){
			js3=JSON.stringify(DisplayCanvas);
			console.log(js3);
		})
		
		SumanthTxt.on('mousedown', function(){
			js4=JSON.stringify(DisplayCanvas);
			console.log(js4);
		})
		
		VinitTxt.on('mousedown', function(){
			js5=JSON.stringify(DisplayCanvas);
			console.log(js5);
		})
	}
	
    });
}
function displayTextA()
{
	var rectMessAl=new fabric.Rect({
	  left: 0,
      top: 0,
      fill: 'white',
      stroke: 'black',
      strokeWidth: 5,
      width: 1060,
      height: 680,
      rx: 10,
      ry: 10,
      angle: 0
	})
	UserTextCanvasAl.add(rectMessAl);
	//console.log(choiceUser['All'])
	var MessRect = new fabric.IText(' ',{
      left: 50,
      top: 50,
      fill: 'black',
      stroke: 'black',
      strokeWidth: 2,
	  fontFamily: 'HelveticaLight',
	fontSize:38
    });
	UserTextCanvasAl.add(MessRect);
    MessRect.hasControls = MessRect.hasBorders = false;
    MessRect.lockMovementX = MessRect.lockMovementY = true;
	UserTextAlApps.style.display='block';
	UserTextU1Apps.style.display='none';
	UserTextU2Apps.style.display='none';
	UserTextU3Apps.style.display='none';
	UserTextU4Apps.style.display='none';
	DisplayCanvasApps.style.display = 'none';
    User2Apps.style.display = 'none';
    User3Apps.style.display = 'none';
	User4Apps.style.display = 'none';
    User1Apps.style.display = 'none';
	UserAlApps.style.display = 'none';
	UserDefApps.style.display='none';
	
	UserTextAlApps.style.left = '1600px';
	UserTextAlApps.style.top = '1000px';
	rt=choiceUser['All'];
	console.log(rt[0]);
	MessRect.setText(rt[0]);
	//UserTextAlApps.deactivateAll();
	//UserTextAlApps.renderAll.bind(outApps);
}
function displayTextSa()
{
	var rectMessAl=new fabric.Rect({
	  left: 0,
      top: 0,
      fill: 'white',
      stroke: 'black',
      strokeWidth: 5,
      width: 1060,
      height: 680,
      rx: 0,
      ry: 0,
      angle: 0
	})
	UserTextCanvas1.add(rectMessAl);
	//console.log(choiceUser['All'])
	var MessRect = new fabric.IText(' ',{
      left: 50,
      top: 50,
      fill: 'black',
      stroke: 'black',
      strokeWidth: 2,
	  fontFamily: 'HelveticaLight',
	fontSize:38
    });
	UserTextCanvas1.add(MessRect);
    MessRect.hasControls = MessRect.hasBorders = false;
    MessRect.lockMovementX = MessRect.lockMovementY = true;
	UserTextAlApps.style.display='none';
	UserTextU1Apps.style.display='block';
	UserTextU2Apps.style.display='none';
	UserTextU3Apps.style.display='none';
	UserTextU4Apps.style.display='none';
	DisplayCanvasApps.style.display = 'none';
    User2Apps.style.display = 'none';
    User3Apps.style.display = 'none';
	User4Apps.style.display = 'none';
    User1Apps.style.display = 'none';
	UserAlApps.style.display = 'none';
	UserDefApps.style.display='none';
	
	UserTextU1Apps.style.left = '1600px';
	UserTextU1Apps.style.top = '1000px';
	rt=choiceUser['Sai'];
	//console.log(rt[0]);
	if(choiceUser['Sai']==null)
	{
		MessRect.setText('Hi! Have a great day.. Leave a message if you' +'\n'+ 'want to');
	}
	else{
	MessRect.setText(rt[0]+'\n'+' '+'~Sai');	
	}
	
	//console.log(choiceUser['Sai'])
}
function displayTextg()
{
	var rectMessAl=new fabric.Rect({
	  left: 0,
      top: 0,
      fill: 'white',
      stroke: 'black',
      strokeWidth: 5,
      width: 1060,
      height: 680,
      rx: 0,
      ry: 0,
      angle: 0
	})
	UserTextCanvas2.add(rectMessAl);
	//console.log(choiceUser['All'])
	var MessRect = new fabric.IText(' ',{
      left: 50,
      top: 50,
      fill: 'black',
      stroke: 'black',
      strokeWidth: 2,
	  fontFamily: 'HelveticaLight',
	fontSize:38
    });
	UserTextCanvas2.add(MessRect);
    MessRect.hasControls = MessRect.hasBorders = false;
    MessRect.lockMovementX = MessRect.lockMovementY = true;
	UserTextAlApps.style.display='none';
	UserTextU1Apps.style.display='none';
	UserTextU2Apps.style.display='block';
	UserTextU3Apps.style.display='none';
	UserTextU4Apps.style.display='none';
	DisplayCanvasApps.style.display = 'none';
    User2Apps.style.display = 'none';
    User3Apps.style.display = 'none';
	User4Apps.style.display = 'none';
    User1Apps.style.display = 'none';
	UserAlApps.style.display = 'none';
	UserDefApps.style.display='none';
	UserTextU2Apps.style.left = '1600px';
	UserTextU2Apps.style.top = '1000px';
	rt=choiceUser['Gtm'];
	if(choiceUser['Gtm']==null)
	{
		MessRect.setText('Hi! Have a great day.. Leave a message if you' +'\n'+ 'want to');
	}
	else{
		MessRect.setText(rt[0]+'\n'+' '+'~Gautam');	
	}
	
	//console.log(choiceUser['Gtm'])
}
function displayTextSu()
{
	var rectMessAl=new fabric.Rect({
	  left: 0,
      top: 0,
      fill: 'white',
      stroke: 'black',
      strokeWidth: 5,
      width: 1060,
      height: 680,
      rx: 10,
      ry: 10,
      angle: 0
	})
	UserTextCanvas3.add(rectMessAl);
	//console.log(choiceUser['All'])
	var MessRect = new fabric.IText(' ',{
      left: 50,
      top: 50,
      fill: 'black',
      stroke: 'black',
      strokeWidth: 2,
	  fontFamily: 'HelveticaLight',
	fontSize:38
    });
	UserTextCanvas3.add(MessRect);
    MessRect.hasControls = MessRect.hasBorders = false;
    MessRect.lockMovementX = MessRect.lockMovementY = true;
	UserTextAlApps.style.display='none';
	UserTextU1Apps.style.display='none';
	UserTextU2Apps.style.display='none';
	UserTextU3Apps.style.display='block';
	UserTextU4Apps.style.display='none';
	DisplayCanvasApps.style.display = 'none';
    User2Apps.style.display = 'none';
    User3Apps.style.display = 'none';
	User4Apps.style.display = 'none';
    User1Apps.style.display = 'none';
	UserAlApps.style.display = 'none';
	UserDefApps.style.display='none';
	UserTextU3Apps.style.left = '1600px';
	UserTextU3Apps.style.top = '1000px';
	rt=choiceUser['Sum'];
	//console.log(rt[0]);
	//MessRect.setText(rt[0]);
	if(choiceUser['Sum']==null)
	{
		MessRect.setText('Hi! Have a great day.. Leave a message if you' +'\n'+ 'want to');
	}
	else{
		MessRect.setText(rt[0]+'\n'+' '+'~Sumanth');	
	}
	
	//console.log(choiceUser['Sum'])
}
function displayTextVi()
{
	var rectMessAl=new fabric.Rect({
	  left: 0,
      top: 0,
      fill: 'white',
      stroke: 'black',
      strokeWidth: 5,
      width: 1060,
      height: 680,
      rx: 0,
      ry: 0,
      angle: 0
	})
	UserTextCanvas4.add(rectMessAl);
	//console.log(choiceUser['All'])
	var MessRect = new fabric.IText(' ',{
      left: 50,
      top: 50,
      fill: 'black',
      stroke: 'black',
      strokeWidth: 2,
	  fontFamily: 'HelveticaLight',
	fontSize:38
    });
	UserTextCanvas4.add(MessRect);
    MessRect.hasControls = MessRect.hasBorders = false;
    MessRect.lockMovementX = MessRect.lockMovementY = true;
	UserTextAlApps.style.display='none';
	UserTextU1Apps.style.display='none';
	UserTextU2Apps.style.display='none';
	UserTextU3Apps.style.display='none';
	UserTextU4Apps.style.display='block';
	DisplayCanvasApps.style.display = 'none';
    User2Apps.style.display = 'none';
    User3Apps.style.display = 'none';
	User4Apps.style.display = 'none';
    User1Apps.style.display = 'none';
	UserAlApps.style.display = 'none';
	UserDefApps.style.display='none';
	UserTextU4Apps.style.left = '1600px';
	UserTextU4Apps.style.top = '1000px';
	rt=choiceUser['Vinit'];
	if(choiceUser['Vinit']==null)
	{
		MessRect.setText('Hi! Have a great day.. Leave a message if you' +'\n'+ 'want to');
	}
	else{
	MessRect.setText(rt[0]+'\n'+' '+'~Vinit');	
	}
	
	//console.log(choiceUser['Vinit'])
}
var JSOK={"objects":[{"type":"path","originX":"center","originY":"center","left":263.62,"top":130.82,"width":47.57,"height":23.61,"fill":null,"stroke":"#ff0000","strokeWidth":5,"strokeDashArray":null,"strokeLineCap":"round","strokeLineJoin":"round","strokeMiterLimit":10,"scaleX":1,"scaleY":1,"angle":0,"flipX":false,"flipY":false,"opacity":1,"shadow":null,"visible":true,"clipTo":null,"backgroundColor":"","fillRule":"nonzero","globalCompositeOperation":"source-over","path":[["M",275.0095184770437,119.01639344262294],["Q",275.0095184770437,119.01639344262294,275.5095184770437,119.01639344262294],["Q",276.0095184770437,119.01639344262294,273.77743561030235,119.01639344262294],["Q",271.545352743561,119.01639344262294,267.58118701007834,119.01639344262294],["Q",263.6170212765957,119.01639344262294,261.6349384098544,119.01639344262294],["Q",259.6528555431131,119.01639344262294,257.67077267637177,119.01639344262294],["Q",255.68868980963043,119.01639344262294,253.70660694288912,120.98360655737704],["Q",251.72452407614782,122.95081967213115,249.74244120940648,122.95081967213115],["Q",247.76035834266517,122.95081967213115,245.77827547592386,122.95081967213115],["Q",243.79619260918253,122.95081967213115,243.79619260918253,124.91803278688525],["Q",243.79619260918253,126.88524590163934,241.8141097424412,128.85245901639342],["Q",239.83202687569988,130.81967213114754,239.83202687569988,132.78688524590166],["Q",239.83202687569988,134.75409836065575,239.83202687569988,136.72131147540983],["Q",239.83202687569988,138.68852459016392,239.83202687569988,140.655737704918],["Q",239.83202687569988,142.62295081967213,241.8141097424412,142.62295081967213],["Q",243.79619260918253,142.62295081967213,245.77827547592386,142.62295081967213],["Q",247.76035834266517,142.62295081967213,249.74244120940648,142.62295081967213],["Q",251.72452407614782,142.62295081967213,253.70660694288912,142.62295081967213],["Q",255.68868980963043,142.62295081967213,257.67077267637177,142.62295081967213],["Q",259.6528555431131,142.62295081967213,261.6349384098544,142.62295081967213],["Q",263.6170212765957,142.62295081967213,265.59910414333706,142.62295081967213],["Q",267.5811870100784,142.62295081967213,269.56326987681973,142.62295081967213],["Q",271.545352743561,142.62295081967213,273.52743561030235,142.62295081967213],["Q",275.5095184770437,142.62295081967213,277.49160134378496,142.62295081967213],["Q",279.4736842105263,142.62295081967213,281.45576707726764,142.62295081967213],["Q",283.4378499440089,142.62295081967213,285.41993281075025,142.62295081967213],["Q",287.4020156774916,142.62295081967213,287.4020156774916,140.655737704918],["Q",287.4020156774916,138.68852459016392,287.4020156774916,136.72131147540983],["Q",287.4020156774916,134.75409836065575,287.4020156774916,132.78688524590166],["Q",287.4020156774916,130.81967213114754,287.4020156774916,128.85245901639342],["Q",287.4020156774916,126.88524590163934,285.41993281075025,126.88524590163934],["Q",283.4378499440089,126.88524590163934,283.4378499440089,124.91803278688525],["Q",283.4378499440089,122.95081967213115,281.45576707726764,122.95081967213115],["Q",279.4736842105263,122.95081967213115,277.49160134378496,122.95081967213115],["Q",275.5095184770437,122.95081967213115,273.52743561030235,122.95081967213115],["L",271.545352743561,122.95081967213115]],"pathOffset":{"x":263.6170212765957,"y":130.81967213114754}},{"type":"path","originX":"center","originY":"center","left":402.36,"top":130.82,"width":47.57,"height":31.48,"fill":null,"stroke":"#ff0000","strokeWidth":5,"strokeDashArray":null,"strokeLineCap":"round","strokeLineJoin":"round","strokeMiterLimit":10,"scaleX":1,"scaleY":1,"angle":0,"flipX":false,"flipY":false,"opacity":1,"shadow":null,"visible":true,"clipTo":null,"backgroundColor":"","fillRule":"nonzero","globalCompositeOperation":"source-over","path":[["M",401.8628219484882,115.08196721311475],["Q",401.8628219484882,115.08196721311475,402.3628219484882,115.08196721311475],["Q",402.8628219484882,115.08196721311475,402.6128219484882,117.04918032786884],["Q",402.3628219484882,119.01639344262294,398.39865621500553,119.01639344262294],["Q",394.4344904815229,119.01639344262294,392.4524076147816,119.01639344262294],["Q",390.4703247480403,119.01639344262294,390.4703247480403,120.98360655737704],["Q",390.4703247480403,122.95081967213115,388.48824188129896,122.95081967213115],["Q",386.5061590145576,122.95081967213115,384.52407614781634,124.91803278688525],["Q",382.541993281075,126.88524590163934,380.5599104143337,126.88524590163934],["Q",378.5778275475924,126.88524590163934,378.5778275475924,128.85245901639342],["Q",378.5778275475924,130.81967213114754,378.5778275475924,132.78688524590166],["Q",378.5778275475924,134.75409836065575,378.5778275475924,136.72131147540983],["Q",378.5778275475924,138.68852459016392,380.5599104143337,140.655737704918],["Q",382.541993281075,142.62295081967213,384.52407614781634,142.62295081967213],["Q",386.5061590145576,142.62295081967213,388.48824188129896,142.62295081967213],["Q",390.4703247480403,142.62295081967213,392.4524076147816,142.62295081967213],["Q",394.4344904815229,142.62295081967213,396.41657334826425,142.62295081967213],["Q",398.3986562150056,142.62295081967213,400.3807390817469,144.59016393442624],["Q",402.3628219484882,146.55737704918033,404.34490481522954,146.55737704918033],["Q",406.3269876819709,146.55737704918033,408.30907054871216,146.55737704918033],["Q",410.2911534154535,146.55737704918033,412.27323628219483,146.55737704918033],["Q",414.25531914893617,146.55737704918033,416.2374020156775,146.55737704918033],["Q",418.2194848824188,146.55737704918033,420.2015677491601,146.55737704918033],["Q",422.18365061590146,146.55737704918033,424.16573348264274,146.55737704918033],["Q",426.1478163493841,146.55737704918033,426.1478163493841,144.59016393442624],["Q",426.1478163493841,142.62295081967213,426.1478163493841,140.655737704918],["Q",426.1478163493841,138.68852459016392,426.1478163493841,136.72131147540983],["Q",426.1478163493841,134.75409836065575,426.1478163493841,132.78688524590166],["Q",426.1478163493841,130.81967213114754,426.1478163493841,128.85245901639342],["Q",426.1478163493841,126.88524590163934,426.1478163493841,124.91803278688525],["Q",426.1478163493841,122.95081967213115,426.1478163493841,120.98360655737704],["Q",426.1478163493841,119.01639344262294,424.16573348264274,119.01639344262294],["Q",422.18365061590146,119.01639344262294,420.2015677491601,119.01639344262294],["Q",418.2194848824188,119.01639344262294,416.2374020156775,119.01639344262294],["Q",414.25531914893617,119.01639344262294,412.27323628219483,119.01639344262294],["Q",410.2911534154535,119.01639344262294,408.30907054871216,119.01639344262294],["Q",406.3269876819709,119.01639344262294,406.3269876819709,117.04918032786884],["L",406.3269876819709,115.08196721311475]],"pathOffset":{"x":402.3628219484882,"y":130.81967213114754}},{"type":"path","originX":"center","originY":"center","left":336.7,"top":215.41,"width":4.46,"height":35.41,"fill":null,"stroke":"#ff0000","strokeWidth":5,"strokeDashArray":null,"strokeLineCap":"round","strokeLineJoin":"round","strokeMiterLimit":10,"scaleX":1,"scaleY":1,"angle":0,"flipX":false,"flipY":false,"opacity":1,"shadow":null,"visible":true,"clipTo":null,"backgroundColor":"","fillRule":"nonzero","globalCompositeOperation":"source-over","path":[["M",334.47200447928327,197.70491803278688],["Q",334.47200447928327,197.70491803278688,334.97200447928327,197.70491803278688],["Q",335.47200447928327,197.70491803278688,335.22200447928327,199.672131147541],["Q",334.97200447928327,201.63934426229508,334.97200447928327,203.60655737704917],["Q",334.97200447928327,205.5737704918033,334.97200447928327,207.54098360655738],["Q",334.97200447928327,209.50819672131146,334.97200447928327,211.47540983606558],["Q",334.97200447928327,213.44262295081967,334.97200447928327,215.40983606557376],["Q",334.97200447928327,217.37704918032787,334.97200447928327,219.34426229508196],["Q",334.97200447928327,221.31147540983605,334.97200447928327,223.27868852459017],["Q",334.97200447928327,225.24590163934425,336.9540873460246,225.24590163934425],["Q",338.93617021276594,225.24590163934425,338.93617021276594,227.21311475409834],["Q",338.93617021276594,229.18032786885246,338.93617021276594,231.14754098360658],["L",338.93617021276594,233.11475409836066]],"pathOffset":{"x":336.7040873460246,"y":215.40983606557376}},{"type":"path","originX":"center","originY":"center","left":334.72,"top":262.62,"width":135.28,"height":59.02,"fill":null,"stroke":"#ff0000","strokeWidth":5,"strokeDashArray":null,"strokeLineCap":"round","strokeLineJoin":"round","strokeMiterLimit":10,"scaleX":1,"scaleY":1,"angle":0,"flipX":false,"flipY":false,"opacity":1,"shadow":null,"visible":true,"clipTo":null,"backgroundColor":"","fillRule":"nonzero","globalCompositeOperation":"source-over","path":[["M",267.0811870100784,256.72131147540983],["Q",267.0811870100784,256.72131147540983,267.5811870100784,256.72131147540983],["Q",268.0811870100784,256.72131147540983,267.8311870100784,258.6885245901639],["Q",267.5811870100784,260.655737704918,267.5811870100784,262.62295081967216],["Q",267.5811870100784,264.59016393442624,269.56326987681973,264.59016393442624],["Q",271.545352743561,264.59016393442624,271.545352743561,266.55737704918033],["Q",271.545352743561,268.5245901639344,273.52743561030235,268.5245901639344],["Q",275.5095184770437,268.5245901639344,277.49160134378496,270.4918032786885],["Q",279.4736842105263,272.4590163934426,291.36618141097426,278.36065573770486],["Q",303.25867861142217,284.2622950819672,305.24076147816345,284.2622950819672],["Q",307.2228443449048,284.2622950819672,309.2049272116461,284.2622950819672],["Q",311.18701007838746,284.2622950819672,313.1690929451288,286.2295081967213],["Q",315.1511758118701,288.1967213114754,319.11534154535275,288.1967213114754],["Q",323.07950727883537,288.1967213114754,325.0615901455767,288.1967213114754],["Q",327.04367301231804,288.1967213114754,329.0257558790594,288.1967213114754],["Q",331.00783874580065,288.1967213114754,332.98992161254193,288.1967213114754],["Q",334.97200447928327,288.1967213114754,336.9540873460246,288.1967213114754],["Q",338.93617021276594,288.1967213114754,338.93617021276594,290.1639344262295],["Q",338.93617021276594,292.1311475409836,340.9182530795073,292.1311475409836],["Q",342.90033594624856,292.1311475409836,344.8824188129899,292.1311475409836],["Q",346.86450167973123,292.1311475409836,348.8465845464725,292.1311475409836],["Q",350.82866741321385,292.1311475409836,352.8107502799552,292.1311475409836],["Q",354.7928331466965,292.1311475409836,356.77491601343786,292.1311475409836],["Q",358.75699888017914,292.1311475409836,360.7390817469205,292.1311475409836],["Q",362.7211646136618,292.1311475409836,364.7032474804031,292.1311475409836],["Q",366.68533034714443,292.1311475409836,368.66741321388577,292.1311475409836],["Q",370.6494960806271,292.1311475409836,370.6494960806271,290.1639344262295],["Q",370.6494960806271,288.1967213114754,372.63157894736844,288.1967213114754],["Q",374.6136618141097,288.1967213114754,376.59574468085106,288.1967213114754],["Q",378.5778275475924,288.1967213114754,378.5778275475924,286.2295081967213],["Q",378.5778275475924,284.2622950819672,380.5599104143337,282.2950819672131],["Q",382.541993281075,280.327868852459,382.541993281075,278.3606557377049],["Q",382.541993281075,276.39344262295083,384.52407614781634,276.39344262295083],["Q",386.5061590145576,276.39344262295083,386.5061590145576,274.4262295081967],["Q",386.5061590145576,272.4590163934426,388.48824188129896,272.4590163934426],["Q",390.4703247480403,272.4590163934426,390.4703247480403,270.4918032786885],["Q",390.4703247480403,268.5245901639344,390.4703247480403,266.55737704918033],["Q",390.4703247480403,264.59016393442624,392.4524076147816,264.59016393442624],["Q",394.4344904815229,264.59016393442624,394.4344904815229,262.62295081967216],["Q",394.4344904815229,260.655737704918,394.4344904815229,258.6885245901639],["Q",394.4344904815229,256.72131147540983,394.4344904815229,254.75409836065575],["Q",394.4344904815229,252.78688524590163,396.41657334826425,252.78688524590163],["Q",398.3986562150056,252.78688524590163,398.3986562150056,250.8196721311475],["Q",398.3986562150056,248.85245901639342,398.3986562150056,246.88524590163934],["Q",398.3986562150056,244.91803278688525,398.3986562150056,242.95081967213116],["Q",398.3986562150056,240.98360655737704,400.3807390817469,239.01639344262293],["Q",402.3628219484882,237.04918032786884,402.3628219484882,235.08196721311475],["L",402.3628219484882,233.11475409836066]],"pathOffset":{"x":334.7220044792833,"y":262.62295081967216}}],"background":"white"}
function displayDoodA()
{
	DisplayCanvasApps.style.display = 'none';
    User2Apps.style.display = 'none';
    User3Apps.style.display = 'none';
	User4Apps.style.display = 'none';
    User1Apps.style.display = 'none';
	UserAlApps.style.display = 'block';
	UserTextAlApps.style.display='none';
	UserTextU1Apps.style.display='none';
	UserTextU2Apps.style.display='none';
	UserTextU3Apps.style.display='none';
	UserTextU4Apps.style.display='none';
	UserDefApps.style.display='none';
    UserAlApps.style.left = '1600px';
    UserAlApps.style.top = '1000px';
	if(js1==null)
	{
	UserCanvasAl.loadFromJSON(JSOK)	
	}
	else{
	UserCanvasAl.loadFromJSON(js1);	
	}
	
}
function displayDoodSa()
{
	DisplayCanvasApps.style.display = 'none';
    User2Apps.style.display = 'block';
    User3Apps.style.display = 'none';
	User4Apps.style.display = 'none';
    User1Apps.style.display = 'none';
	UserAlApps.style.display = 'none';
	UserTextAlApps.style.display='none';
	UserTextU1Apps.style.display='none';
	UserTextU2Apps.style.display='none';
	UserTextU3Apps.style.display='none';
	UserTextU4Apps.style.display='none';
	UserDefApps.style.display='none';
    User2Apps.style.left = '1600px';
    User2Apps.style.top = '1000px';
	if(js3==null)
	{
	UserCanvas2.loadFromJSON(JSOK)	
	}
	else{
	UserCanvas2.loadFromJSON(js3);
	}
	
}
function displayDoodg()
{
	DisplayCanvasApps.style.display = 'none';
    User2Apps.style.display = 'none';
    User3Apps.style.display = 'block';
	User4Apps.style.display = 'none';
    User1Apps.style.display = 'none';
	UserAlApps.style.display = 'none';
	UserTextAlApps.style.display='none';
	UserTextU1Apps.style.display='none';
	UserTextU2Apps.style.display='none';
	UserTextU3Apps.style.display='none';
	UserTextU4Apps.style.display='none';
	UserDefApps.style.display='none';
    User3Apps.style.left = '1600px';
    User3Apps.style.top = '1000px';
	if(js2==null)
	{
	UserCanvas3.loadFromJSON(JSOK)	
	}
	UserCanvas3.loadFromJSON(js2);
}
function displayDoodSu()
{
	DisplayCanvasApps.style.display = 'none';
    User2Apps.style.display = 'none';
    User3Apps.style.display = 'none';
	User4Apps.style.display = 'block';
    User1Apps.style.display = 'none';
	UserAlApps.style.display = 'none';
	UserTextAlApps.style.display='none';
	UserTextU1Apps.style.display='none';
	UserTextU2Apps.style.display='none';
	UserTextU3Apps.style.display='none';
	UserTextU4Apps.style.display='none';
	UserDefApps.style.display='none';
    User4Apps.style.left = '1600px';
    User4Apps.style.top = '1000px';
	if(js4==null)
	{
	UserCanvas4.loadFromJSON(JSOK)	
	}
	else{
		UserCanvas4.loadFromJSON(js4);
	}
	
}
function displayDoodVi()
{
	DisplayCanvasApps.style.display = 'none';
    User2Apps.style.display = 'none';
    User3Apps.style.display = 'none';
	User4Apps.style.display = 'none';
    User1Apps.style.display = 'block';
	UserAlApps.style.display = 'none';
	UserTextAlApps.style.display='none';
	UserTextU1Apps.style.display='none';
	UserTextU2Apps.style.display='none';
	UserTextU3Apps.style.display='none';
	UserTextU4Apps.style.display='none';
	UserDefApps.style.display='none';
    User1Apps.style.left = '1600px';
    User1Apps.style.top = '1000px';
	if(js5==null)
	{
	UserCanvas1.loadFromJSON(JSOK)	
	}
	else{
	UserCanvas1.loadFromJSON(js5);	
	}
	
}

function clearScreen()
{
	DisplayCanvasApps.style.display = 'none';
    User2Apps.style.display = 'none';
    User3Apps.style.display = 'none';
	User4Apps.style.display = 'none';
    User1Apps.style.display = 'none';
	UserAlApps.style.display = 'none';
	UserTextAlApps.style.display='none';
	UserTextU1Apps.style.display='none';
	UserTextU2Apps.style.display='none';
	UserTextU3Apps.style.display='none';
	UserTextU4Apps.style.display='none';
	UserDefApps.style.display='block';
	InoutAppsDoor.style.display='none';
}

function clearAll()
{
	DisplayCanvasApps.style.display = 'none';
    User2Apps.style.display = 'none';
    User3Apps.style.display = 'none';
	User4Apps.style.display = 'none';
    User1Apps.style.display = 'none';
	UserAlApps.style.display = 'none';
	UserTextAlApps.style.display='none';
	UserTextU1Apps.style.display='none';
	UserTextU2Apps.style.display='none';
	UserTextU3Apps.style.display='none';
	UserTextU4Apps.style.display='none';
	UserDefApps.style.display='none';
}
var mess=[];
function sendOutIn()
{
  clearAll();
  InoutApps.style.display='block';
  InoutApps.style.left = '1600px';
    InoutApps.style.top = '1000px';
  
  var MessageRect = new fabric.Rect({
      left: 0,
      top: 0,
      fill: 'white',
      stroke: 'black',
      strokeWidth: 5,
      width: 1060,
      height: 680,
      rx: 0,
      ry: 0,
      angle: 0
    });
    MessageRect.hasControls = MessageRect.hasBorders = false;
    MessageRect.lockMovementX = MessageRect.lockMovementY = true;
  InOutCanvas.add(MessageRect);
  
    var MessageBoX = new fabric.Rect({
      left: 0,
      top: 0,
      fill: 'white',
      stroke: 'black',
      strokeWidth: 5,
      width: 1500,
      height: 500,
      rx: 0,
      ry: 0,
      angle: 0
    });
  MessageBoX.hasControls = MessageBoX.hasBorders = false;
    MessageBoX.lockMovementX = MessageBoX.lockMovementY = true;
  InOutCanvas.add(MessageBoX);
  
  var divideLine2 = new fabric.Line([0,170,1000,170],{stroke: 'black', strokeWidth: 3,left: 0});
    divideLine2.lockMovementX = divideLine2.lockMovementY = true;
    divideLine2.hasControls = divideLine2.hasBorders = false;
  
  InOutCanvas.add(divideLine2);
  
  var BzRect1 = new fabric.Text('Leave a message',{left: 80, top: 50, fontFamily: 'HelveticaLight', fontSize: 38, originY: 'top', fontWeight: 300
    });
    BzRect1.hasControls = BzRect1.hasBorders = false;
    BzRect1.lockMovementX = BzRect1.lockMovementY = true;
    BzRect1.text = language==0 ? 'Leave a message':'deja un mensaje';
  
  var oORect = new fabric.Text('delivered the package',{left: 70, top: 190, fontFamily: 'HelveticaLight', fontSize: 38, originY: 'top', fontWeight: 300
    });
    oORect.hasControls = oORect.hasBorders = false;
    oORect.lockMovementX = oORect.lockMovementY = true;
    oORect.text = language==0 ? 'delivered the package':'entregado el paquete';
  
  var fgORect = new fabric.Text('Meet at the pub',{left: 70, top: 290, fontFamily: 'HelveticaLight', fontSize: 38, originY: 'top', fontWeight: 300
    });
    fgORect.hasControls = fgORect.hasBorders = false;
    fgORect.lockMovementX = fgORect.lockMovementY = true;
    fgORect.text = language==0 ? 'Meet at the pub':'Se reúnen en el pub';
  
  var iuyORect = new fabric.Text('Pick Up your from the Post Office',{left: 70, top: 390, fontFamily: 'HelveticaLight', fontSize: 38, originY: 'top', fontWeight: 300
    });
    iuyORect.hasControls = iuyORect.hasBorders = false;
    iuyORect.lockMovementX = iuyORect.lockMovementY = true;
    iuyORect.text = language==0 ? 'Pick Up your from the Post Office':'recoger su paquete Oficina postal';
  
  InOutCanvas.add(BzRect1);
  InOutCanvas.add(oORect);
  InOutCanvas.add(fgORect);
  InOutCanvas.add(iuyORect);
  BzRect1.on('mousedown',function(){
    mess.push(BzRect1.text);
  })
  oORect.on('mousedown',function(){
    mess.push(oORect.text);
  })
  fgORect.on('mousedown',function(){
    mess.push(fgORect.text);
  })
  iuyORect.on('mousedown',function(){
    mess.push(iuyORect.text);
  })
  crossOutsideCanvas();
  }
  
  
  //InoutAppsDoor.style.display='block';

	//InoutAppsDoor.style.display='block';