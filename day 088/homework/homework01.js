let password = 'Group 41 is best';
let attempts = 3;

function guessPassword() {
    while (attempts > 0) {
        let userInput = prompt("შეიყვანეთ პაროლი:");

        if (userInput === password) {
            alert("თქვენი შეყვანილი პაროლი სწორია");
            return;
        } else {
            attempts--;
            alert("პაროლი არასწორია. დარჩენილი ცდების რაოდენობა: " + attempts);
        }
    }

    alert("თქვენ ამოგეწურათ ცდების რაოდენობა");
}

guessPassword();
