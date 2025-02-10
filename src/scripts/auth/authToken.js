const type = document.currentScript.dataset.type;

async function authToken() {
    window.addEventListener("DOMContentLoaded", async () => {
        const token = localStorage.getItem("authToken");
        const win = window.location.href;

        if (!token && win != "login.ejs") {
            redirectToLogin();
        }

        const data = { token: token, type: type };

        const response = await apiRegister.authToken(data);

        if (response.error == true) {
            redirectToLogin();
        }
    });
}
 
function redirectToLogin() {
    window.location.href = "login.ejs";
}

authToken();
