const monacemtabaza = [];

document.getElementById('idk').onsubmit = function(event) {
    event.preventDefault();

    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value.trim();
    const gender = document.querySelector('input[name="gender"]:checked').value;

    if (password.length < 8) {
        alert("ძალიან მოკლედ პაროლია...");
        return;
    }

    const objct = {
        name: name,
        email: email,
        password: password,
        gender: gender
    };

    dataBase.push(objct);
    console.log(monacemtabaza);
};