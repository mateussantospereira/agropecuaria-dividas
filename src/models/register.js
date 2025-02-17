const executeQuery = require("../helpers/executeQuery");

class registerModel {
    async list() {
        const sql = "SELECT * FROM registers"
        return await executeQuery(sql);
    }

    async get(email) {
        const sql = "SELECT * FROM registers WHERE email = ?"
        return await executeQuery(sql, email);
    }

    async create(data) {
        const sql = "INSERT INTO registers SET ?"
        return await executeQuery(sql, data);
    }

    async update(email) {
        const sql = "UPDATE registers SET ? WHERE email = ?"
        return await executeQuery(sql, email);
    }

    async delete(email) {
        const sql = "DELETE FROM registers WHERE email = ?"
        return await executeQuery(sql, email);
    }
}

module.exports = new registerModel();
