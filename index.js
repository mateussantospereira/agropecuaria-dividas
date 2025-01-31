console.log(`Versão do Electron: ${process.versions.electron}`);

const createDatabase = require("src/database/create");
const initApp = require("src/main/init");

async function init() {
    await createDatabase;
    await initApp;
}

init();
