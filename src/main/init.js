const { app } = require("electron");
const loginWindow = require("../windows/login");
const ipcMainRoutes = require("../routes/ipcMain");

function initApp() {
    app.whenReady().then(() => {
        loginWindow();

        ipcMainRoutes();
    });
}

module.exports = initApp();
