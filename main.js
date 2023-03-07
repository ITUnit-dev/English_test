const { app, BrowserWindow, Menu } = require('electron');

let win = null;

function createWindow() {
      win = new BrowserWindow({
      width: 1000,
      height: 1000,
      fullscreen: true,
      webPreferences: {
         nodeIntegration: true
      
      }
   });
   win.loadFile('main.html');
   //win.webContents.openDevTools();
   win.on('closed', () => {
      win = null;
      app.quit();
   });
}

Menu.setApplicationMenu(null);
app.whenReady().then( () => {
   createWindow();
} );
app.on('window-all-closed', () => {
   if (process.platform !== 'darwin') {
      app.quit();
   }
});

