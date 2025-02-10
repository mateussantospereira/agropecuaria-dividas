// IPC Main

const { ipcMain } = require("electron");
const registerController = require("../controllers/register");
const authToken = require("../middlewares/authToken");

function IpcMainRoutes() {
    ipcMain.handle("login", registerController.login);
    ipcMain.handle("authToken", authToken);
}

module.exports = IpcMainRoutes;
