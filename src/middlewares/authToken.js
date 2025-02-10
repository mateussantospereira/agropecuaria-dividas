const jwt = require("jsonwebtoken");
const response = require("../helpers/response");

function authToken(event, data) {
    try {
        const decoded = jwt.verify(data.token, process.env.SECRET);

        if (decoded.type > data.type) {
            return response(true, "Permissão negada.");
        }

        return response(false, "Permissão concedida.");
    } catch {
        return response(true, "Token inválido");
    }
} 

module.exports = authToken;
