const env = process.env;

class config {
    options() {
        return {
            host: env.MYSQL_HOST,
            port: env.MYSQL_PORT,
            user: env.MYSQL_USER,
            password: env.MYSQL_PASSWORD
        }
    }

    connection() {
        const connection = this.options();
        connection.database = env.MYSQL_DATABASE;

        return connection;
    }
}

module.exports = new config();
