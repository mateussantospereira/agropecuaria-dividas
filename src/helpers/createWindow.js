const { BrowserWindow, Menu } = require("electron");

const createWindow = (options, file, template, child) => {
    const create = () => {
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
