console.log(`Electron: ${process.versions.electron}`);

const { app, BrowserWindow, Menu, shell, ipcMain } = require('electron');
const path = require("node:path");

const createWindow = () => {
    const win = new BrowserWindow({
        width: 800,
        height: 550,
        icon: "src/assets/img/logo.png",
        // autoHideMenuBar: true // Esconde o menu
        webPreferences: {
            preload: path.join(__dirname, "preload.js")
        }
    });

    Menu.setApplicationMenu(Menu.buildFromTemplate(template));

    win.loadFile('src/views/index.html');
}

// Janela 2

const childWindow = () => {
    const father = BrowserWindow.getFocusedWindow();

    if (father) {
        const win = new BrowserWindow({
            width: 450,
            height: 300,
            icon: "src/assets/img/logo.png",
            autoHideMenuBar: true,
            resizable: false,
            parent: father
        });

        win.loadFile('src/views/janela2.html');
    }
}

// Janela sobre

const aboutWindow = () => {
    const win = new BrowserWindow({
        width: 360,
        height: 220,
        icon: "src/assets/img/logo.png",
        autoHideMenuBar: true,
        resizable: false
    });

    win.loadFile('src/views/sobre.html');
}

app.whenReady().then(() => {
    createWindow();

    // IPC
    ipcMain.on("open-child", () => childWindow());
    ipcMain.on("renderer-message", (event, message) => {
        console.log(`Processo principal recebeu: ${message}`);
        event.reply("main-message", "Mensagem recebida");
    });
});

// Menu

const template = [
    {
        label: "Arquivo",
        submenu: [
            {
                label: "Janela 2",
                click: () => childWindow()
            },
            {
                label: "Sair",
                click: () => app.quit()
            }
        ]
    },
    {
        label: "Exibir",
        submenu: [
            {
                label: "Recarregar",
                role: "reload"
            },
            {
                label: "Ferramentas do desenvolvedor",
                role: "toggleDevTools"
            }
        ]
    },
    {
        label: "Ajuda",
        submenu: [
            {
                label: "Sobre",
                click: () => aboutWindow()
            }
        ]
    }
];
