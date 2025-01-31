const path = require("path");
const createWindow = require("../helpers/createWindow");
const mainTemplate = require("../templates/main");

const mainWindow = () => {
    let options = {
        width: 800,
        height: 550,
        // autoHideMenuBar: true // Esconde o menu
        webPreferences: {
            preload: path.join(__dirname, "../main/preload.js")
        }
    };

    let file = "../views/index.html";

    return createWindow(options, file, mainTemplate);
}

module.exports = mainWindow;
