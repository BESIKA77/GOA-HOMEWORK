let arr1 = [1, 2, 3];
let arr2 = [4, 5, 6];

let Array = arr1.concat(arr2);

Array.copyWithin(Array.length, 0, 2);

Array.fill(0, Array.length - 3);

let lastElement = Array.pop();

let firstElement = Array.shift();

Array.unshift(10, 20);

console.log(Array);
console.log(firstElement);
console.log( lastElement);

function modifyArray(inputArray) {
    let result = inputArray.concat(inputArray);

    result.copyWithin(result.length, 0, 2);

    result.fill(0, result.length - 3);

    let lastElement = result.pop();
    let firstElement = result.shift();

    result.unshift(10, 20);

    return {
        modifiedArray: result,
        firstElementRemoved: firstElement,
        lastElementRemoved: lastElement
    };
}

let inputArray = [7, 8, 9];
let result = modifyArray(inputArray);
console.log(result);