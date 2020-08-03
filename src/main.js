const { app, 
  BrowserWindow,
  Tray,
  Menu,
  MenuItem,
  webContents
} = require('electron')

let tray;

function createWindow () {
  const win = new BrowserWindow({
    width: 500,
    height: 650,
    webPreferences: {
      nodeIntegration: true,
    },
    resizable : false,
    fullscreen : false,
  })

  win.loadFile('./screen/index.html');

  win.webContents.openDevTools()

  let mainmenu = new Menu();
  let item1 = new MenuItem({
    label : "Options",
    submenu : [
      {
        label : "Restart",
        click : () => {
          app.relaunch()
          app.exit()
        }
      },
      {
        label : "Quit",
        click : () => {
          app.quit();
        }
      },
    ],
  })

  let item2 = new MenuItem({
    label : "Scores",
    click : () => {
      const displaywin = new BrowserWindow({
        width: 400,
        height: 400,
        webPreferences: {
          nodeIntegration: true,
        },
        resizable : false,
        fullscreen : false,
        parent : win,
      })

      displaywin.loadFile('./screen/highscore.html');
    }
  })

  

  mainmenu.append(item1);
  mainmenu.append(item2);
  Menu.setApplicationMenu(mainmenu);
}

app.whenReady().then(createWindow)

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow()
  }
})
