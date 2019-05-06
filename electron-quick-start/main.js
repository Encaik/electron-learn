// 用于控制应用程序生命周期和创建本机浏览器窗口
const {app, BrowserWindow, ipcMain} = require('electron')
// 保留窗口对象的全局引用，否则，当JavaScript对象被垃圾回收时，窗口将自动关闭。
let mainWindow

function createWindow () {
  // 创建浏览器窗口。
  mainWindow = new BrowserWindow({
    width: 1200,
    height: 800,
    minHeight: 645,
    minWidth: 1000,
    frame: false,
    webPreferences: {
      nodeIntegration: true
    }
  })

  // 并加载应用程序的index.html。
  mainWindow.loadFile('index.html')

  // 打开DevTools。
  mainWindow.webContents.openDevTools()

  // 窗口关闭时发出。
  mainWindow.on('closed', function () {
    // 取消引用窗口对象，如果您的应用程序支持多窗口，通常会将窗口存储在数组中，这是您应该删除相应元素的时间。
    mainWindow = null
  })
}

ipcMain.on('window-min',function(){
  mainWindow.minimize();
})

ipcMain.on('window-max',function(){
  if(mainWindow.isMaximized()){
      mainWindow.restore();
  }else{
      mainWindow.maximize();
  }
})

ipcMain.on('window-close',function(){
  mainWindow.close();
})

// 当Electron完成初始化并准备创建浏览器窗口时，将调用此方法。某些API只能在此事件发生后使用。
app.on('ready', createWindow)

// 关闭所有窗户后退出。
app.on('window-all-closed', function () {
  // 在macOS上，应用程序及其菜单栏通常保持活动状态，直到用户使用Cmd + Q显式退出
  if (process.platform !== 'darwin') app.quit()
})

app.on('activate', function () {
  // 在macOS上，当单击停靠图标并且没有其他窗口打开时，通常会在应用程序中重新创建一个窗口。
  if (mainWindow === null) createWindow()
})

// 在此文件中，您可以包含应用程序的其余特定主流程代码。 您也可以将它们放在单独的文件中，并在此处要求它们。
