const path = require("path");
const createWindow = require("../helpers/createWindow");
const mainTemplate = require("../templates/main");

const mainWindow = () => {
    let options = {
        width: 400,
        height: 400,
        // autoHideMenuBar: true // Esconde o menu
        webPreferences: {
            preload: path.join(__dirname, "../routes/ipcRenderer.js")
        }
    };

    let file = "login.ejs";

    return createWindow(options, file, mainTemplate);
}

module.exports = mainWindow;
