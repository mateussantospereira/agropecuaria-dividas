async function getApi(func, params = null, message = false, link = false) {
    const response = await func(params);

    if (message) {
        if (errorMessage(response)) {
            return response;
        }
    }

    if (link) {
        window.location.href = link;
        return;
    }

    return response;
}
