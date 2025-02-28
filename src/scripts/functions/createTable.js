function createTable(data, head = null) {
    let table = "<table>";

    function addText(text) {
        table = table + text;
    }

    if (head) {
        data.forEach((e) => {
            Object.keys(e).forEach((key) => {
                if (!Object.keys(head).includes(key)) {
                    console.log("Deletou")

                    delete e[key];
                }
            });
        });
    }

    if (head) {
        addText("<thead><tr>");
        Object.keys(head).forEach((key) => {
            addText(`<th>${head[key]}</th>`);
        });
        addText("</tr></thead>");
    }

    data.forEach((e) => {
        addText("<tr>");
        Object.keys(head).forEach((key) => {
            if (typeof(e[key]) == "object") {
                addText(`
                <td>
                    <button onclick="${e[key].action}">${e[key].text}</button>
                </td>
                `);
            } else {
                addText(`<td>${e[key]}</td>`);
            }
        });
        addText("</tr>");
    });

    return table;
}

window.createTable = createTable;
