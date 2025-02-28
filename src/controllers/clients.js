const clientsModels = require("../models/clients");
const clientsFields = require("../fields/clients");
const checkInputs = require("../lib/checkInputs");

class clientsController {
    async list(event) {
        return await clientsModels.list();
    }

    async get(event, data) {
        return await clientsModels.get(data);
    }

    async create(event, data) {
        const fields = clientsFields.create();
        const inputs = checkInputs(data, fields);

        if (inputs.error == true) {
            return response(true, inputs.message);
        }

        data = inputs.data;
        
        let client = await clientsModels.get(data.name);

        if (client[0]) {
            return response(true, "Erro. Cliente existente.");
        }

        return await clientsModels.create(data);
    }
}

module.exports = new clientsController();
