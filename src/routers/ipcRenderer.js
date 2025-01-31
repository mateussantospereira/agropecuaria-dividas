// IPC Renderer routes

const { contextBridge, ipcRenderer } = require("electron");
//const apiRegister = require("../apis/register");

function ipcRendererRoutes() {
    //apiRegister();
    contextBridge.exposeInMainWorld("apiRegister", {
        getData: (data) => ipcRenderer.invoke("get-data", data),
    });
}

module.exports = ipcRendererRoutes;
