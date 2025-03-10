const registerModel = require("../models/register");
const registerFields = require("../fields/register");
const checkInputs = require("../lib/checkInputs");
const response = require("../helpers/response");
const createToken = require("../helpers/createToken");

class registerController {
    async login(event, data) {
        const fields = registerFields.login();
        const inputs = checkInputs(data, fields);

        if (inputs.error == true) {
            return response(true, inputs.message);
        }

        data = inputs.data;

        const user = await registerModel.get(data.email);

        if (!user[0] || user[0].password != data.password) {
            return response(true, "Credenciais inválidas.");
        }

        const token = createToken(user);

        const resData = { name: user[0].name, token: token }

        event.sender.user = {
            nameUser: user[0].name,
            typeUser: user[0].type,
            token: token
        };

        return response(false, "Usuário autenticado.", resData);
    }
}

module.exports = new registerController();
