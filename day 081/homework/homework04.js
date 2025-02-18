let num1 = Number(prompt("Enter the first number: "));
let num2 = Number(prompt("Enter the second number: "));

// +
console.log("Addition:");
console.log(num1 + num2);  // მაგალითი 1
console.log(5 + 3);        // მაგალითი 2
console.log(10 + 20);      // მაგალითი 3

// გამოკლება
console.log("Subtraction:");
console.log(num1 - num2);  // მაგალითი 1
console.log(10 - 3);       // მაგალითი 2
console.log(100 - 25);     // მაგალითი 3

// *
console.log("Multiplication:");
console.log(num1 * num2);  // მაგალითი 1
console.log(5 * 2);        // მაგალითი 2
console.log(7 * 8);        // მაგალითი 3

// !=
console.log("Division:");
if (num2 !== 0) {
    console.log(num1 / num2);  // მაგალითი 1
} else {
    console.log("Division by zero is not allowed.");
}
console.log(10 / 2);       // მაგალითი 2
console.log(100 / 4);      // მაგალითი 3

// %
console.log("Modulus:");
console.log(num1 % num2);  // მაგალითი 1
console.log(10 % 3);       // მაგალითი 2
console.log(17 % 5);       // მაგალითი 3

// **
console.log("Exponentiation:");
console.log(num1 ** num2);  // მაგალითი 1
console.log(2 ** 3);        // მაგალითი 2
console.log(5 ** 2);        // მაგალითი 3
