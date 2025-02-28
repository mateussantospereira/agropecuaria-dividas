function errorMessage(response) {
    const message = document.getElementById("message");
    
    if (response.error) {
        message.innerText = response.message;
        message.style.display = "block";

        return true;
    }

    return false;
}

window.errorMessage = errorMessage;
