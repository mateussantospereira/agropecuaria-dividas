const { BrowserWindow, Menu } = require("electron");
const ejse = require("ejs-electron");

const createWindow = (options, file, template = false, child = false, data = null) => {
    const create = () => {
        options.icon = "src/assets/img/logo.png"; 
        const win = new BrowserWindow(options);

        if (template) {
            Menu.setApplicationMenu(Menu.buildFromTemplate(template));
        }
       
        if (data) { 
            ejse.data(data);
        }

        win.loadFile(`src/views/pages/${file}`);
    };

    const father = BrowserWindow.getFocusedWindow();

    if (child && father || !child) {
        create();
    }
};

module.exports = createWindow;
