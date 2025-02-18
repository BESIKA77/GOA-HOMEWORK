// 1 N
function multiply() {
    let firstNumber = parseFloat(prompt("Enter the first number:"));
    let secondNumber = parseFloat(prompt("Enter the second number:"));
    return firstNumber * secondNumber;
}

// 2 N
function subtract() {
    let FNumber = parseFloat(prompt("Enter the first number:"));
    let SNumber = parseFloat(prompt("Enter the second number:"));
    return FNumber - SNumber;
}

// 3 N
function divide() {
    let firstNumber = parseFloat(prompt("Enter the first number:"));
    let secondNumber = parseFloat(prompt("Enter the second number:"));
    return firstNumber / secondNumber;
}

// 4 N
function name() {
    let Name = prompt("Enter your name:");
    let surname = prompt("Enter your surname:");
    return `${surname} ${Name}`;
}

// 5 N
function mintosec() {
    let min = parseFloat(prompt("Enter the number of minutes:"));
    return min * 60;
}

// 6 N
function rectangleArea() {
    let length = parseFloat(prompt("Enter the length of the rectangle:"));
    let width = parseFloat(prompt("Enter the width of the rectangle:"));
    return length * width;
}

// 7N
function Strings() {
    let firstString = prompt("Enter the first string:");
    let secondString = prompt("Enter the second string:");
    return firstString + secondString;
}

// 8 N
function power() {
    let base = parseFloat(prompt("Enter the base number:"));
    let exponent = parseFloat(prompt("Enter the exponent:"));
    return Math.pow(base, exponent);
}

// 9 N
function Circumference() {
    let radius = parseFloat(prompt("Enter the radius of the circle:"));
    return 2 * Math.PI * radius;
}

// 10 N
function nextNumber() {
    let num = parseInt(prompt("Enter a number:"));
    return num + 1;
}