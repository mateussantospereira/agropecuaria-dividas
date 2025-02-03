// IPC Renderer routes

const { contextBridge, ipcRenderer } = require("electron");

contextBridge.exposeInMainWorld("apiRegister", {
    getData: (data) => ipcRenderer.invoke("get-data", data),
    login: (data) => ipcRenderer.invoke("login", data)
});
