const app = require('electron').remote;
const dialog = app.dialog;
const fs = require('fs');

document.getElementById('savefile').onclick = () => {
  dialog.showSaveDialog(filename => {
    if (filename === undefined) {
      alert('Save The File!');
    }
    fs.writeFile(filename, 'NOICE', (err) => {
      if (err) console.error(err);
      alert('File Saved! :)');
    })
  })
};
document.getElementById('openfile').onclick = () => {
  dialog.showOpenDialog(filenames => {
    if (filenames === undefined) {
      alert('No File Selected!');
    }
    fs.readFile(filenames[0], 'utf-8', (err, data) => {
      if (err) {
        console.error(err);
        return;
      } else {
        console.log(data);
      }
    })
  })
};