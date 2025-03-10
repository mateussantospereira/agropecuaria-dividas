const debtsModels = require("../models/debts");
const debtsFields = require("../fields/debtsFields");
const checkInputs = require("../lib/checkInputs");

class debtsController {
    async list(event) {
        let list = await debtsModels.list();
        
        list.forEach((e) => {
            let value = new Intl.NumberFormat("pt-br", {
                style: "currency",
                currency: "BRL"
            }).format(e.value/100);
            let date = e.date.toLocaleDateString();
            let hour = e.date.toLocaleTimeString();

            e.value = value;
            e.date = `${date}`;
            e.hour = `${hour}`;
            e.details = {
                text: "Detalhes",
                action: `apiWindow.openClient({ name: '${e.client}' })`
            };
        });

        return list;
    }

    async get(event, data) {
        let list = await debtsModels.get(data);
        
        list.forEach((e) => {
            let value = new Intl.NumberFormat("pt-br", {
                style: "currency",
                currency: "BRL"
            }).format(e.value/100);
            let date = e.date.toLocaleDateString();
            let hour = e.date.toLocaleTimeString();

            e.value = value;
            e.date = `${date}`;
            e.hour = `${hour}`;
            e.delete = {
                action: `apiDialog.openDialog({
                    func: apiDebts.delete,
                    params: ${e.id},
                    message: 'Você deseja excluir a dívida de ${e.value} do cliente ${e.client}?' })`,
                text: "Deletar"
            };
        });

        return list;
    }

    async create(event, data) {
        const fields = debtsFields.create();
        const inputs = checkInputs(data, fields);

        if (inputs.error == true) {
            return response(true, inputs.message);
        }

        data = inputs.data;
        
        return await debtsModels.create(data);
    }

    async delete(event, data) {
        const debt = await debtsModels.delete(data);

        return debt;
    }
}

module.exports = new debtsController();
