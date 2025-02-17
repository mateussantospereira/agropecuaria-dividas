const mysql = require("mysql");
const config = require("./config");
const executeQuery = require("../helpers/executeQuery")

class createDatabase {
    async init() {
        await this.createDatabase();
        await this.createTableRegisters();
    }

    async createDatabase() {
        const database = process.env.MYSQL_DATABASE;
        const sql = `CREATE DATABASE IF NOT EXISTS ${database}`

        const connection = mysql.createConnection(config.options())

        return new Promise((resolve, reject) => {
            connection.query(sql, (error, response) => {
                if (error) {
                    return reject(
                        console.log("Erro ao tentar criar banco de dados", error)
                    );
                }

                return resolve(
                    console.log("Banco de dados criado com êxito.")
                );
            });
        });
    }

    async createTableRegisters() {
        const sql = `
            CREATE TABLE IF NOT EXISTS registers (
                id int not null auto_increment primary key,
                name varchar(100) not null,
                email varchar(100) not null,
                password varchar(100) not null,
                type int not null
            );
        `;

        return await this.createTable(sql, "registros");
    }

    async createTableDebts() {
        const sql = `
            CREATE TABLE IF NOT EXISTS clients (
                id int not null auto_increment primary key,
                name varchar(100) not null,
                phone varchar(15) not null
            );
        `;

        return await this.createTable(sql, "clientes");
    }

    async createTableDebts() {
        const sql = `
            CREATE TABLE IF NOT EXISTS debts (
                id int not null auto_increment primary key,
                client varchar(100) not null,
                value int not null,
                date date not null,
                foreign key (client) references clients(name)
            );
        `;

        return await this.createTable(sql, "dívidas");
    }

    async createTable(sql, name) {
        try {
            await executeQuery(sql);
            return console.log(`A tabela ${name} foi criada com êxito.`);
        } catch (error) {
            return console.log(`Erro ao tentar criar a tabela ${name}:`, error)
        }
    }
} 

module.exports = new createDatabase();
