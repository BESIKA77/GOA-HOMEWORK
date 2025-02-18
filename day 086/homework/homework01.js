function simple_calculator(num1,num2,operator){
    let res = "";
    if (operator === "+") {
        res = num1 + num2;
    } else if (operator === "-") {
        res = num1 - num2;
    } else if (operator === "*") {
        res = num1 * num2;
    } else if (operator === "/") {
        if (num2 === 0) {
            res = "You can't devide on 0"; 
        } 
        else if (num1 === 0) {
            res = "You can't devide 0";   
        }
        else {
            res = num1 / num2;
        }
    } else {
        res = "Something you put isn't approved"; 
    }
    return res
}
console.log(func(Number(prompt('Enter first number: ')), Number(prompt('Enter second number: ')), prompt('Enter operation(+;-;*;/): ')))