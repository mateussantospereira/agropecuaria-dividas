function response(error, message, data = null) {
    return {
        error: error,
        message: message,
        data: data
    };
}

module.exports = response;
