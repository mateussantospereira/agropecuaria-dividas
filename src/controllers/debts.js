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
            }).format(e.value/100)
            
            e.value = value;

            let date = e.date.toLocaleDateString();
            let hour = e.date.toLocaleTimeString();

            e.date = `${date}`;
            e.hour = `${hour}`;

            e.details = {
                text: "Detalhes",
                action: `apiWindow.openClientWindow({ name: '${e.client}' })`
            };
        });
        return list;
    }

    async get(event, data) {
        return await debtsModels.get(data);
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
}

module.exports = new debtsController();
