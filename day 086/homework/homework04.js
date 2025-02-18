function func(num){
    if (num < 0 ){
        return 'This number is negative'
    } else if (num === 0){
        return 'This number is 0'
    } else{
        return 'This number is positive'
    }
}
console.log(func(Number(prompt('Enter number: '))))