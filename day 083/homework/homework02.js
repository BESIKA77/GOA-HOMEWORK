function temp(temperature){
    if (temperature <= 7){
        return "It's cold today"
    } else if (temperature <= 25){
        return "It's neutral temperature today"
    } else{
        return "It's cold today"
    }
}
console.log(temperature(Number(prompt('Enter todays temperature: '))))