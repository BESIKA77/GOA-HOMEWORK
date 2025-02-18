
// 1

function greet(name = "Guest") {
    return `Hello, ${name}!`;
}

// 2

function addNumbers (num1, num2 = 0) {
    return num1 + num2;
}

// 3

function calculateArea (length, width = 1) {
    return length * width;
}

// 4

function convertTemperature(temperature, scale = "C") {
    if (scale.toUpperCase() === "C") {
        return (temperature * 9 / 5) + 32; 
    } else (scale.toUpperCase() === "F") 
        return (temperature - 32) * 5 / 9;

}

// 5
function addToShoppingList(item, quantity = 1) {
    return `${quantity} x ${item} დაემატა სავაჭრო სიას`;
}

// 6
function power(base, exponent = 2) {
    return Math.pow(base, exponent);
}

// 7
function createMessage(name, greeting = "Hello") {
    return `${greeting}, ${name}!`;
}

// 8
function applyDiscount(price, discount = 0.1) {
    return price * (1 - discount);
}

// 9
function introduce(name, age = "unknown", country = "unknown") {
    return `მე მქვია ${name}, ვარ ${age} წლის და ვარ ${country}-დან.`;
}

// 10
function calculatePrice(price, Tax = 0.05) {
    return price * (1 + Tax);
}

// 11
function findMax(num1, num2, num3) {
    return Math.max(num1, num2, num3);
}

// 12
function passOrFail(score) {
    return score >= 50 ? "Pass" : "Fail";
}

// 13
function sumOfNumbers(nums) {
    let total = 0;
    for (let num of nums) {
        total += num;
    }
    return total;
}

// 14
function countEvens(int) {
    let count = 0;
    for (let num of int) {
        if (num % 2 === 0) {
            count++;
        }
    }
    return count;
}