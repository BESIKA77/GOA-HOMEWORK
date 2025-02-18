let num1 = Number(prompt("Enter first number: "));
let num2 = Number(prompt("Enter second number: "));

let operator = prompt("Choose operator(+, -, *, /): ");
let res = "";

if (operator === "+") {
    res = num1 + num2;
} else if (operator === "-") {
    res = num1 - num2;
} else if (operator === "*") {
    res = num1 * num2;
} else if (operator === "/") {
    if (num2 === 0) {
        alert("ნული არ შეიძლება იყოს გამყოფი");
        res = ""; 
    } 
    else if (num1 === 0) {
        alert("ნული არ შეიძლება იყოს გამყოფი");
        res = "";   
    }
    else {
        res = num1 / num2;
    }
} else {
    alert("რაღაცა უცხო გაქვს შეყვანილი");
    res = ""; 
}

if (res !== "") {
    alert(res);  
}