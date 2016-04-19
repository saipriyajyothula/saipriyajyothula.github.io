	var messg;
	var choiceUser={};
	var userTxt=[];
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
      top: 1000,
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
      left: 385,
      top: 700,
      fill: 'black',
      stroke: 'black',
      strokeWidth: 2,
	  fontFamily: 'HelveticaLight',
	fontSize:50
    });
    BzRect.hasControls = BzRect.hasBorders = false;
    BzRect.lockMovementX = BzRect.lockMovementY = true;
	
	var OOTRect = new fabric.IText('Out of Town',{
      left: 385,
      top: 825,
      fill: 'green',
      stroke: 'yellow',
      fill: 'black',
      stroke: 'black',
      strokeWidth: 5,
	  fontFamily: 'HelveticaLight',
	fontSize:50
    });
    OOTRect.hasControls = OOTRect.hasBorders = false;
    OOTRect.lockMovementX = OOTRect.lockMovementY = true;
	
	var GoRect = new fabric.IText('Trespassers will be shot down!!',{
      left: 385,
      top: 950,
      fill: 'green',
      stroke: 'yellow',
      fill: 'black',
      stroke: 'black',
      strokeWidth: 5,
	  fontFamily: 'HelveticaLight',
	fontSize:50
    });
    GoRect.hasControls = GoRect.hasBorders = false;
    GoRect.lockMovementX = GoRect.lockMovementY = true;
	
	var AllTxt = new fabric.IText('All',{
      left: 350,
      top: 550,
      fill: 'black',
      stroke: 'black',
      strokeWidth: 5,
	  fontFamily: 'HelveticaLight',
	fontSize:50
    });
    AllTxt.hasControls = AllTxt.hasBorders = false;
    AllTxt.lockMovementX = AllTxt.lockMovementY = true;
	//inWindow.add(AllTxt);
	
	var GtmTxt = new fabric.IText('Gautam',{
      left: 450,
      top: 550,
      fill: 'black',
      stroke: 'black',
      strokeWidth: 5,
	  fontFamily: 'HelveticaLight',
	fontSize:50
    });
    GtmTxt.hasControls = GtmTxt.hasBorders = false;
    GtmTxt.lockMovementX = GtmTxt.lockMovementY = true;
	//inWindow.add(GtmTxt);
	
	var SaiTxt = new fabric.IText('Sai',{
      left: 680,
      top: 550,
      fill: 'black',
      stroke: 'black',
      strokeWidth: 5,
	  fontFamily: 'HelveticaLight',
	fontSize:50
    });
    SaiTxt.hasControls = SaiTxt.hasBorders = false;
    SaiTxt.lockMovementX = SaiTxt.lockMovementY = true;
	//inWindow.add(SaiTxt);
	
	var SumanthTxt = new fabric.IText('Sumanth',{
      left: 780,
      top: 550,
      fill: 'black',
      stroke: 'black',
      strokeWidth: 5,
	  fontFamily: 'HelveticaLight',
	fontSize:50
    });
    SumanthTxt.hasControls = SumanthTxt.hasBorders = false;
    SumanthTxt.lockMovementX = SumanthTxt.lockMovementY = true;
	
	
	
	var VinitTxt = new fabric.IText('Vinit',{
      left: 1030,
      top: 550,
      fill: 'black',
      stroke: 'black',
      strokeWidth: 5,
	  fontFamily: 'HelveticaLight',
	fontSize:50
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
    
	var divideLine1 = new fabric.Line([250,topLength+98,1145,topLength+98],{stroke: 'black', strokeWidth: 3, top: 650});
    divideLine1.lockMovementX = divideLine1.lockMovementY = true;
    divideLine1.hasControls = divideLine1.hasBorders = false;
	
	var divideLine2 = new fabric.Line([15,550,15,1125],{stroke: 'black', strokeWidth: 3,left: 250});
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
	crossSide();
	//inWindow.add(MessageBoX);
	
	var WriteMessTxt1 = new fabric.IText('Write a new Message',{
      left: 100,
      top: 500,
      fill: 'black',
      stroke: 'black',
      strokeWidth: 5,
	  fontFamily: 'HelveticaLight',
	fontSize:50
    });
    WriteMessTxt1.hasControls = WriteMessTxt1.hasBorders = false;
    WriteMessTxt1.lockMovementX = WriteMessTxt1.lockMovementY = true;
	inWindow.add(WriteMessTxt1);
	
	WriteMessTxt1.on('mousedown',function(){
		InoutAppsDoor.style.display='none';
	})
	
	var displMessTxt1 = new fabric.IText(' ',{
      left: 0,
      top: 0,
      fill: 'black',
      stroke: 'black',
      strokeWidth: 5,
	  fontFamily: 'HelveticaLight',
	fontSize:50
    });
    displMessTxt1.hasControls = displMessTxt1.hasBorders = false;
    displMessTxt1.lockMovementX = displMessTxt1.lockMovementY = true;
	InOutCanvasMainDoor.add(displMessTxt1);
	
	
	var ReceivedMessTxt1 = new fabric.IText('Received Message',{
      left: 700,
      top: 500,
      fill: 'black',
      stroke: 'black',
      strokeWidth: 5,
	  fontFamily: 'HelveticaLight',
	fontSize:50
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
      top: topLength+168, lockMovementX: true, lockMovementY: true, hasBorders: false, hasControls: false, left: 150});    
      inWindow.add(messageKey);
      messageKey.on('mousedown',function(){
		  wriText();
    });

	function wriText()
	{
		DisplayCanvasApps.style.display = 'none';	
	
	////
	
		
		inWindow.add(BzRect);
		inWindow.add(OOTRect);
		inWindow.add(GoRect);
		inWindow.add(SaiTxt);
		inWindow.add(GtmTxt);
		inWindow.add(AllTxt);
		inWindow.add(SumanthTxt);
		inWindow.add(VinitTxt);
		inWindow.add(ReceivedMessTxt1);
		
		BzRect.on('mousedown', function(){
			messg=BzRect.getText();
			userTxt.push(messg);
		});
		OOTRect.on('mousedown', function(){
			messg=OOTRect.getText();
			userTxt.push(messg);
		});
		GoRect.on('mousedown', function(){
			messg=GoRect.getText();
			userTxt.push(messg);
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
      top: topLength+300, lockMovementX: true, lockMovementY: true, hasBorders: false, hasControls: false, left: 150});    
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
		DisplayCanvasApps.style.left = '318px';
		DisplayCanvasApps.style.top = '655px';
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
      left: 0,
      top: 0,
      fill: 'black',
      stroke: 'black',
      strokeWidth: 5,
	  fontFamily: 'HelveticaLight',
	fontSize:50
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
      rx: 10,
      ry: 10,
      angle: 0
	})
	UserTextCanvas1.add(rectMessAl);
	//console.log(choiceUser['All'])
	var MessRect = new fabric.IText(' ',{
      left: 0,
      top: 0,
      fill: 'black',
      stroke: 'black',
      strokeWidth: 5,
	  fontFamily: 'HelveticaLight',
	fontSize:50
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
		MessRect.setText('Jelly I love apple pie tart'+'\n'+'tootsie roll tiramisu bonbon I love.'+'\n'+'I love I love cookie cotton candy. Danish'+'\n'+'candy muffin lollipop tiramisu gingerbread sugar plum lollipop.'+'\n'+'Chocolate bar sweet I love.' +'\n'+'I love powder danish biscuit bear claw fruitcake'+'\n' +'I love liquorice I love');
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
      rx: 10,
      ry: 10,
      angle: 0
	})
	UserTextCanvas2.add(rectMessAl);
	//console.log(choiceUser['All'])
	var MessRect = new fabric.IText(' ',{
      left: 0,
      top: 0,
      fill: 'black',
      stroke: 'black',
      strokeWidth: 5,
	  fontFamily: 'HelveticaLight',
	fontSize:50
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
		MessRect.setText('Jelly I love apple pie tart'+'\n'+'tootsie roll tiramisu bonbon I love.'+'\n'+'I love I love cookie cotton candy. Danish'+'\n'+'candy muffin lollipop tiramisu gingerbread sugar plum lollipop.'+'\n'+'Chocolate bar sweet I love.' +'\n'+'I love powder danish biscuit bear claw fruitcake'+'\n' +'I love liquorice I love');
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
      left: 0,
      top: 0,
      fill: 'black',
      stroke: 'black',
      strokeWidth: 5,
	  fontFamily: 'HelveticaLight',
	fontSize:50
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
		MessRect.setText('Jelly I love apple pie tart'+'\n'+'tootsie roll tiramisu bonbon I love.'+'\n'+'I love I love cookie cotton candy. Danish'+'\n'+'candy muffin lollipop tiramisu gingerbread sugar plum lollipop.'+'\n'+'Chocolate bar sweet I love.' +'\n'+'I love powder danish biscuit bear claw fruitcake'+'\n' +'I love liquorice I love');
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
      rx: 10,
      ry: 10,
      angle: 0
	})
	UserTextCanvas4.add(rectMessAl);
	//console.log(choiceUser['All'])
	var MessRect = new fabric.IText(' ',{
      left: 0,
      top: 0,
      fill: 'black',
      stroke: 'black',
      strokeWidth: 5,
	  fontFamily: 'HelveticaLight',
	fontSize:50
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
		MessRect.setText('Jelly I love apple pie tart'+'\n'+'tootsie roll tiramisu bonbon I love.'+'\n'+'I love I love cookie cotton candy. Danish'+'\n'+'candy muffin lollipop tiramisu gingerbread sugar plum lollipop.'+'\n'+'Chocolate bar sweet I love.' +'\n'+'I love powder danish biscuit bear claw fruitcake'+'\n' +'I love liquorice I love');
	}
	else{
	MessRect.setText(rt[0]+'\n'+' '+'~Vinit');	
	}
	
	//console.log(choiceUser['Vinit'])
}

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
	UserCanvasAl.loadFromJSON(js1);
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
	UserCanvas2.loadFromJSON(js3);
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
	UserCanvas4.loadFromJSON(js4);
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
	UserCanvas1.loadFromJSON(js5);
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
      rx: 10,
      ry: 10,
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
      rx: 10,
      ry: 10,
      angle: 0
    });
  MessageBoX.hasControls = MessageBoX.hasBorders = false;
    MessageBoX.lockMovementX = MessageBoX.lockMovementY = true;
  InOutCanvas.add(MessageBoX);
  
  var divideLine2 = new fabric.Line([0,170,1000,170],{stroke: 'black', strokeWidth: 3,left: 0});
    divideLine2.lockMovementX = divideLine2.lockMovementY = true;
    divideLine2.hasControls = divideLine2.hasBorders = false;
  
  InOutCanvas.add(divideLine2);
  
  var BzRect1 = new fabric.Text('Leave a message',{left: 80, top: 50, fontFamily: 'HelveticaLight', fontSize: 80, originY: 'top', fontWeight: 300
    });
    BzRect1.hasControls = BzRect1.hasBorders = false;
    BzRect1.lockMovementX = BzRect1.lockMovementY = true;
    BzRect1.text = language==0 ? 'Leave a message':'deja un mensaje';
  
  var oORect = new fabric.Text('delivered the package',{left: 70, top: 190, fontFamily: 'HelveticaLight', fontSize: 60, originY: 'top', fontWeight: 300
    });
    oORect.hasControls = oORect.hasBorders = false;
    oORect.lockMovementX = oORect.lockMovementY = true;
    oORect.text = language==0 ? 'delivered the package':'entregado el paquete';
  
  var fgORect = new fabric.Text('Meet at the pub',{left: 70, top: 290, fontFamily: 'HelveticaLight', fontSize: 60, originY: 'top', fontWeight: 300
    });
    fgORect.hasControls = fgORect.hasBorders = false;
    fgORect.lockMovementX = fgORect.lockMovementY = true;
    fgORect.text = language==0 ? 'Meet at the pub':'Se reúnen en el pub';
  
  var iuyORect = new fabric.Text('You Suck!!',{left: 70, top: 370, fontFamily: 'HelveticaLight', fontSize: 60, originY: 'top', fontWeight: 300
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
  crossSide();
  }
  
  {
	  InoutAppsDoor.style.display='none';
  }
  //InoutAppsDoor.style.display='block';

	//InoutAppsDoor.style.display='block';