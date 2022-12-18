'use strict';
process.env.ELECTRON_DISABLE_SECURITY_WARNINGS = true;
// モジュールの読み込み
const {app, BrowserWindow} = require('electron');
const path = require('path');
// 全ウィンドウ終了時の処理
app.on('window-all-closed', () => app.quit());
// 準備が整った際の処理
app.on('ready', () => {
const win = new BrowserWindow({width: 1080, height: 1980,
webPreferences: {
//nodeIntegration: false, // v12規定値
//contextIsolation: true, // v12規定値
preload: path.join(__dirname, 'preload.js'), // 読み込みスクリプト
//nativeWindowOpen: true // v15では規定がtrueに変更とDocに
} });
const url = `file://${__dirname}/index.html`;
win.loadURL(url);
});
