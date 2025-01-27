// Processo de renderização

console.log(`Electron: ${api.verElectron()}`);

function openChild() {
    api.open();
}

api.send("Olá mundo!");

api.on((event, message) => {
    console.log("Processo de renderização recebeu: " + message);
})
