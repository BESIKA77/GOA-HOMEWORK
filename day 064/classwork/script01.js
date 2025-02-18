window.onload = function() {
    document.getElementById('form').onsubmit = function(event) {
        event.preventDefault();

        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const password = document.getElementById('password').value.trim();
        const terms = document.getElementById('checkbox').checked;

        if (!name || !email || !password || !terms) {
            alert("გთხოვთ ჩექბოქსი მონიშე");
            return;
        }

        console.log("სახელი:", name);
        console.log("ემაილი:", email);
        console.log("პაროლი:", password);
    };
};