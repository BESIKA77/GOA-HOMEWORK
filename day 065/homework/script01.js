let num1 = 2;
let num2 = 7;

if (num1 < num2) {
    console.log(" მეტობა ");
}
if (num1 < num2 && num2 > 0) {
    console.log("Both conditions are true");
}

// დავალება 4

let num11 = 60;
let num22 = 30;
let bol = true
let strr = "numba";

// დავალება 5
let age = 14

function agee(age) {
    if (age >= 18) {
        console.log("თქვენ სრულწლოვანი ხართ.");
    } else {
        let yearsLeft = 18 - age;
        console.log(`თქვენ ჯერ არ ხართ ${yearsLeft} წელი დარჩა`);
    }
}
agee(age);