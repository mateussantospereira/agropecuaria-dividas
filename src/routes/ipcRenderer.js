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
    list: () => ipcRenderer.invoke("listDebts"),
    get: (data) => ipcRenderer.invoke("getDebts", data),
    create: (data) => ipcRenderer.invoke("createDebts", data),
    delete: (data) => ipcRenderer.invoke("deleteDebts", data),
});

contextBridge.exposeInMainWorld("apiWindow", {
    openMain: () => ipcRenderer.invoke("openMainWindow"),
    openClient: (data) => ipcRenderer.invoke("openClientWindow", data),
    openCreateClient: () => ipcRenderer.invoke("openCreateClientWindow"),
});

contextBridge.exposeInMainWorld("apiDialog", {
    openDialog: (data) => ipcRenderer.invoke("openDialog", data),
});
