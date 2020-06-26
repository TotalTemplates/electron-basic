const { app, BrowserWindow } = require('electron')

app.on('ready', createWindow)
app.on('activate', createWindow)
app.on('window-all-closed', app.quit)

function createWindow () {
  new BrowserWindow({ webPreferences: { nodeIntegration: true }, autoHideMenuBar: true })
    .loadFile('./app/index.html')
}
