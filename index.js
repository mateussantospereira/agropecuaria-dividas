require("dotenv").config();

console.log(`Versão do Electron: ${process.versions.electron}`);

const createDatabase = require("./src/database/create");
const initApp = require("./src/main/init");

async function init() {
    await createDatabase.init();
    await initApp;
}

init();
