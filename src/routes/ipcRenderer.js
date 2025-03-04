// IPC Renderer routes

const { contextBridge, ipcRenderer } = require("electron");

contextBridge.exposeInMainWorld("apiRegister", {
    login: (data) => ipcRenderer.invoke("login", data),
    authToken: (data) => ipcRenderer.invoke("authToken", data),
});

contextBridge.exposeInMainWorld("apiClient", {
    list: () => ipcRenderer.invoke("listClients"),
    create: (data) => ipcRenderer.invoke("createClient", data)
});

contextBridge.exposeInMainWorld("apiDebts", {
    list: () => ipcRenderer.invoke("listDebts")
});

contextBridge.exposeInMainWorld("apiWindow", {
    openMain: () => ipcRenderer.invoke("openMain"),
    openCreateClient: () => ipcRenderer.invoke("openCreateClientWindow"),
    openClient: (data) => ipcRenderer.invoke("openClientWindow", data)
});
