'use strict';
// モジュールの読み込み
const { contextBridge } = require('electron');
// コンテクスト ブリッジ
contextBridge.exposeInMainWorld('myApi', {
    getElectronVer: () => process.versions.electron
});