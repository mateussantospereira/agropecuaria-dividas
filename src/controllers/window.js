const { BrowserWindow } = require("electron");
const mainWindow = require("../windows/main");
const clientWindow = require("../windows/client");

class controllerWindow {
    openMain(event) {
        const focus = BrowserWindow.getFocusedWindow();

        mainWindow();

        focus.close();
    }

    openClient(event, data) {
        console.log(data)
        clientWindow(data)
    }
}

module.exports = new controllerWindow();
