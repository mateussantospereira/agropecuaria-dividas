const mainTemplate = [
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

module.exports = mainTemplate;
