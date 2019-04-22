const electron = require('electron');
const {app, BrowserWindow} = electron;

require('electron-reload')(__dirname);

app.on('ready', () =>{
  let win = new BrowserWindow({height: 600, width: 800});
  win.loadURL(`file://${__dirname}/index.html`);
});

exports.openWindow = (filename) => {
  let win = new BrowserWindow({height: 600, width: 800});
  win.loadURL(`file://${__dirname}/${filename}.html`);
};
