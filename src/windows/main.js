const path = require("path");
const createWindow = require("../helpers/createWindow");
const mainTemplate = require("../templates/main");

const mainWindow = () => {
    let options = {
        width: 800,
        height: 550,
        // autoHideMenuBar: true // Esconde o menu
        webPreferences: {
            preload: path.join(__dirname, "../routes/ipcRenderer.js")
        }
    };

    let file = "home.ejs";

    return createWindow(options, file, mainTemplate);
}

module.exports = mainWindow;
