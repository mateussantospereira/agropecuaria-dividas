const registerModel = require("../models/register");
const registerFields = require("../fields/register");
const checkInputs = require("../lib/checkInputs");
const response = require("../helpers/response");

class registerController {
    async login(event, data) {
        const fields = registerFields.login();
        const inputs = checkInputs(data, fields);

        if (inputs.error == true) {
            return response(true, inputs.message);
        }

        data = inputs.data;

        const user = await registerModel.get(data.email);

        if (!user[0]) {
            return response(true, "Usuário não encontrado.");
        }

        if (user[0].password != data.password) {
            return response(true, "Senha errada.");
        }

        return response(false, "Usuário autenticado.");
    }
}

module.exports = new registerController();
