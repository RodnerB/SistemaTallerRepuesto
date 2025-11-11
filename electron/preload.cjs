const { contextBridge } = require('electron')

// Exponer información de que estamos en Electron
contextBridge.exposeInMainWorld('electronAPI', {
  isElectron: true
})
