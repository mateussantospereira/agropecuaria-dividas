require("dotenv").config();

const path = require("path");

require("electron-reload")(__dirname, {
    electron: path.join(__dirname, "node_modules", ".bin", "electron")
});

console.log(`Versão do Electron: ${process.versions.electron}`);

const createDatabase = require("./src/database/create");
const initApp = require("./src/main/init");

async function init() {
    await createDatabase.init();
    await initApp;
}

init();
