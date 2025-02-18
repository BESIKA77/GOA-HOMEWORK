function evenorodd(number) {
    if (number % 2 === 0) {
        return 'Even';
    } else {
        return 'Odd';
    }
}
console.log(evenorodd(Number(prompt('Enter a number: '))))