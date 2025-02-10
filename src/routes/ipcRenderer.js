// IPC Renderer routes

const { contextBridge, ipcRenderer } = require("electron");

contextBridge.exposeInMainWorld("apiRegister", {
    login: (data) => ipcRenderer.invoke("login", data),

    authToken: (data) => ipcRenderer.invoke("authToken", data),
});
