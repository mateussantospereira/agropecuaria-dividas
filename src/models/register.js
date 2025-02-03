const executeQuery = require("../helpers/executeQuery");

class registerModel {
    async get(email) {
        const sql = "SELECT * FROM registers WHERE email = ?"
        return await executeQuery(sql, email);
    }
}

module.exports = new registerModel();
