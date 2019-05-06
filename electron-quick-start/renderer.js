// index.html文件需要此文件，并将在该窗口的呈现器进程中执行。此过程中提供了所有Node.js API。
const {ipcRenderer: ipc} = require('electron');
document.getElementById('maxbtn').addEventListener('click', () => {
    ipc.send('window-max');
});
document.getElementById('minbtn').addEventListener('click', () => {
    ipc.send('window-min');
});
document.getElementById('clsbtn').addEventListener('click', () => {
    ipc.send('window-close');
});