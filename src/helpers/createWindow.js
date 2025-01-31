const { BrowserWindow, Menu } = require("electron");

const createWindow = (options, file, template = false, child = false) => {
    const create = () => {
        options.icon = "src/assets/img/logo.png"; 
        const win = new BrowserWindow(options);

        if (template) {
            Menu.setApplicationMenu(Menu.buildFromTemplate(template));
        }

        win.loadFile(`src/views/${file}`);
    };

    const father = BrowserWindow.getFocusedWindow();

    if (child && father || !child) {
        create();
    }
};

module.exports = createWindow;
