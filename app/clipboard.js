const electron = require('electron');
const clipboard = electron.clipboard;

document.getElementById('clip').onclick = () => {
  clipboard.writeText('UP!');
};
document.getElementById('clipaste').onclick = () => {
  console.log(clipboard.readText());
};