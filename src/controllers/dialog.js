const { dialog } = require("electron");

class dialogController {
    openDialog(event, data) {
        console.log("Dados recebidos no dialog: ", data)
        dialog.showMessageBox({
            type: "question",
            title: "Confirmação",
            message: data.message | "Você deseja confirmar esta ação?",
            buttons: ["Confirmar", "Cancelar"]
        }).then((result) => {
            if (result == 0) {
                data.func(data.params);
            }
        });
    }
}

module.exports = new dialogController();
