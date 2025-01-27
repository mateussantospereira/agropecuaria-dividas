// Preload
const { contextBridge, ipcRenderer } = require("electron");

// Processos
contextBridge.exposeInMainWorld("api", {
    verElectron: () => process.versions.electron,
    open: () => ipcRenderer.send("open-child"),
    send: (message) => ipcRenderer.send("renderer-message", message),
    on: (message) => ipcRenderer.on("main-message", message)
});

// Manipulação do DOM
window.addEventListener("DOMContentLoaded", () => {
    const dataAtual = document.getElementById("dataAtual").innerHTML = obterData();
});

function obterData() {
    const data = new Date();
    const options = {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric"
    }

    return data.toLocaleDateString("pt-BR", options);
}
