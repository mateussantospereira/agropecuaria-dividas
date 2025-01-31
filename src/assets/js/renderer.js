// Processo de renderização

async function getApi() {
    const response = await apiRegister.getData({ user: "Mateus" });

    console.log(response);
}
