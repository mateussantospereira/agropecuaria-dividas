class debtsFields {
    create() {
        return {
            client: { max: 100 },
            value: { max: 15, number: true },
            date: { max: 10, date: true }
        };
    }
}

module.exports = new debtsFields();
