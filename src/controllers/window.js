const { BrowserWindow } = require("electron");
const createWindow = require("../helpers/createWindow");
const mainTemplate = require("../templates/main");

class controllerWindow {
    openMain(event) {
        const data = event.sender.user;
        const focus = BrowserWindow.getFocusedWindow();
        const options = {
            width: 850,
            height: 650
        };
        const win = createWindow(options, "home.ejs", mainTemplate, false, data);
        console.log(data)
        focus.close();
        win();
    }

    openClient(event, data) {
        data = Object.assign(data, event.sender.user);
        const options = {
            width: 750,
            height: 550
        };
        const win = createWindow(options, "client.ejs", mainTemplate, true, data);
        
        win();
    }

    openCreateClient(event) {
        const options = {
            width: 750,
            height: 550
        };
        const win = createWindow(options, "createClient.ejs", mainTemplate);
        
        win();
    }
}

module.exports = new controllerWindow();
