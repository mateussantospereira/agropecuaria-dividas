// IPC Main

const { ipcMain } = require("electron");

function IpcMainRoutes() {
    ipcMain.on("open-child", () => childWindow());

    ipcMain.on("renderer-message", (event, message) => {
        console.log(`Processo principal recebeu: ${message}`);
        event.reply("main-message", "Mensagem recebida");
    });

    ipcMain.handle("get-data", async (event, data) => {
        console.log("Dados recebidos: ", data);

        return { message: "Dados Recebidos no processo principal.", data: data };
    });
}

module.exports = IpcMainRoutes;
