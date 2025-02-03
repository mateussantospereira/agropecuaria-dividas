class registerFields {
    login() {
        return {
            email: { name: "E-mail", max: 60 },
            password: { name: "Senha", max: 30}
        }
    }
}

module.exports = new registerFields();
