class clientsFields {
    create() {
        return {
            name: { max: 100 },
            phone: { max: 15 }
        };
    }
}

module.exports = new clientsFields();
