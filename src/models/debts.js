const executeQuery = require("../helpers/executeQuery");

class debtsModel {
    async list() {
        const sql = "SELECT * FROM debts ORDER BY date DESC"
        return await executeQuery(sql);
    }

    async get(name) {
        const sql = "SELECT * FROM debts WHERE client = ? ORDER BY date DESC"
        return await executeQuery(sql, name);
    }

    async create(data) {
        const sql = "INSERT INTO debts SET ?"
        return await executeQuery(sql, data);
    }

    async update(id) {
        const sql = "UPDATE debts SET ? WHERE id = ?"
        return await executeQuery(sql, id);
    }

    async delete(id) {
        const sql = "DELETE FROM debts WHERE id = ?"
        return await executeQuery(sql, id);
    }
}

module.exports = new debtsModel();
