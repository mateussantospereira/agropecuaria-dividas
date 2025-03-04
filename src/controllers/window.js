const { BrowserWindow } = require("electron");
const createWindow = require("../helpers/createWindow");
const mainTemplate = require("../templates/main");

class controllerWindow {
    openMain(event) {
        const focus = BrowserWindow.getFocusedWindow();

        const options = {
            width: 850,
            height: 650
        };

        const win = createWindow(options, "home.ejs", mainTemplate);
        
        win();

        focus.close();
    }

    openClient(event, data) {
        const options = {
            width: 750,
            height: 550
        };

        const win = createWindow(options, "client.ejs", mainTemplate, true, data);
        
        win();
    }

    openCreateClient(event, data) {
        const options = {
            width: 750,
            height: 550
        };

        const win = createWindow(options, "createClient.ejs", mainTemplate);
        
        win();
    }
}

module.exports = new controllerWindow();
