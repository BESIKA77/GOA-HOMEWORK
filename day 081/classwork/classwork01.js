let userInput = prompt("Enter your text:");

if (userInput.length > 140) {
    userInput = userInput.slice(0, 140);
    alert("The text has been cut to 140 characters.");
}
else if (userInput.length < 140) {
    alert("The text has less than 140 characters");
}
else if (userInput.length === 140) {
    alert("The text is exactly 140 characters.");
}

alert("Final Text: " + userInput);