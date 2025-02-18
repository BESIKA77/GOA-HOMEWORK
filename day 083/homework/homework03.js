function func(point){
    if (point >= 90){
        return "You got A"
    } else if (point >= 80){
        return "You got B"
    } else if (point >= 70){
        return "You got C"
    } else if (point >= 60){
        return "You got D"
    } else{
        return "You got F"
    }
}
console.log(func(Number(prompt('Enter your test point: '))))