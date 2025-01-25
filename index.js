const { app, BrowserWindow } = require('electron')

const createWindow = () => {
  const win = new BrowserWindow({
    width: 800,
    height: 550,
    icon: "src/assets/img/logo.png",
    // autoHideMenuBar: true
  })

  win.loadFile('src/views/index.html')
}

app.whenReady().then(() => {
  createWindow()
})
