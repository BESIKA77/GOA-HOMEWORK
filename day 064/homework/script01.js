document.getElementById('registrationForm').onsubmit = function(event) {
    event.preventDefault();

    var name = document.getElementById('name').value.trim();
    var email = document.getElementById('email').value.trim();
    var password = document.getElementById('password').value.trim();
    var terms = document.getElementById('checkbox').checked;

    if (!name || !email || !password || !terms) {
        alert("ჩექბოქსი მონიშე რომ შეხვიდე");
        return;
    }

    console.log("სახელი:", name);
    console.log("ემაილი:", email);
    console.log("პაროლი:", password);
};