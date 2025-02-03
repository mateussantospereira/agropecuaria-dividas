// IPC Main

const { ipcMain } = require("electron");
const registerController = require("../controllers/register");

function IpcMainRoutes() {
    console.log(typeof registerController.login);
    ipcMain.handle("login", registerController.login);

    ipcMain.handle("get-data", async (event, data) => {
        console.log("Dados recebidos: ", data);

        return { message: "Dados Recebidos no processo principal.", data: data };
    });
}

module.exports = IpcMainRoutes;
