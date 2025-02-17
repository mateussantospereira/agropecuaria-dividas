async function getApi(func, params = null, message = false, link = false) {
    const response = await func(params);

    if (message) {
        errorMessage(response);
    }

    if (link) {
        window.location.href = link;
        return;
    }

    return response;
}
