const remote = require('electron').remote;
const main = remote.require('./index');

const btn = document.createElement('button');
btn.textContent = 'Open Window';
btn.addEventListener('click', () => {
  const currentWin = remote.getCurrentWindow();
  main.openWindow('index');
  currentWin.close();
}, false);

document.body.appendChild(btn);
