const executeQuery = require("../helpers/executeQuery");

class clientsModel {
    async list() {
        const sql = "SELECT * FROM clients"
        return await executeQuery(sql);
    }

    async get(id) {
        const sql = "SELECT * FROM clients WHERE id = ?"
        return await executeQuery(sql, id);
    }

    async create(data) {
        const sql = "INSERT INTO clients SET ?"
        return await executeQuery(sql, data);
    }

    async update(id) {
        const sql = "UPDATE clients SET ? WHERE id = ?"
        return await executeQuery(sql, id);
    }

    async delete(id) {
        const sql = "DELETE FROM clients WHERE id = ?"
        return await executeQuery(sql, id);
    }
}

module.exports = new clientsModel();
