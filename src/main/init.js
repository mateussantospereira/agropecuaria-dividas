const { app } = require("electron");
const mainWindow = require("../windows/main");
const ipcMainRoutes = require("../routes/ipcMain");

function initApp() {
    app.whenReady().then(() => {
        mainWindow();

        ipcMainRoutes();
    });
}

module.exports = initApp();
