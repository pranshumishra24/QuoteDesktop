var electron = require('electron');

electron.app.on('ready',function(){
	var mainWindow = new electron.BrowserWindow({width:350, height:300,frame:false})
	mainWindow.loadURL('file://'+__dirname+'/index.html')
	mainWindow.setMenu(null)
});