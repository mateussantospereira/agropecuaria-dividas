const path = require("path");
const createWindow = require("../helpers/createWindow");
const mainTemplate = require("../templates/main");

const clientWindow = (data) => {
    let options = {
        width: 800,
        height: 600,
        // autoHideMenuBar: true // Esconde o menu
        webPreferences: {
            preload: path.join(__dirname, "../routes/ipcRenderer.js")
        }
    };

    let file = "client.ejs";

    return createWindow(options, file, mainTemplate, true, data);
}

module.exports = clientWindow;
