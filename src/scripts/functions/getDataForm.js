function getDataForm(form) {
    const inputs = Array.from(form.elements);
    inputs.pop();
    let data = {};

    inputs.forEach((input) => {
        data[input.id] = input.value;
    });

    return data;
} 
