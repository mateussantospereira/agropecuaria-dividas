const { contextBridge, ipcRenderer } = require("electron");

function apiRegister() {
    contextBridge.exposeInMainWorld("apiRegister", {
        verElectron: () => process.versions.electron,

        sendLogin: (data) => ipcRenderer.send("send-login", data),

        resLogin: (data) => ipcRenderer.on("res-login", data),

        open: () => ipcRenderer.send("open-child"),
        send: (message) => ipcRenderer.send("renderer-message", message),

        on: (message) => ipcRenderer.on("main-message", message)
    });
}

module.exports = apiRegister();
