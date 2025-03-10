// IPC Main

const { ipcMain } = require("electron");
const registerController = require("../controllers/register");
const clientController = require("../controllers/clients");
const debtsController = require("../controllers/debts");
const windowController = require("../controllers/window");
const dialogController = require("../controllers/dialog");
const authToken = require("../middlewares/authToken");

function IpcMainRoutes() {
    ipcMain.handle("login", registerController.login);
    ipcMain.handle("authToken", authToken);

    ipcMain.handle("createClient", clientController.create);

    ipcMain.handle("listDebts", debtsController.list);
    ipcMain.handle("getDebts", debtsController.get);
    ipcMain.handle("createDebts", debtsController.create);
    ipcMain.handle("deleteDebts", debtsController.delete);

    ipcMain.handle("openMainWindow", windowController.openMain);
    ipcMain.handle("openClientWindow", windowController.openClient);
    ipcMain.handle("openCreateClientWindow", windowController.openCreateClient);

    ipcMain.handle("openDialog", dialogController.openDialog);
}

module.exports = IpcMainRoutes;
