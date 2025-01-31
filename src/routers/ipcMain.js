// IPC Main

const { ipcMain } = require("electron");

function IpcMainRoutes() {
    ipcMain.on("open-child", () => childWindow());

    ipcMain.on("renderer-message", (event, message) => {
        console.log(`Processo principal recebeu: ${message}`);
        event.reply("main-message", "Mensagem recebida");
    });
}

module.exports = IpcMainRoutes();
