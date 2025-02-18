// easy
// პირველი num 1
function num(number) {
    if (number % 2 === 0) {
        console.log(`${number}  ლუწია`);
    } else {
        console.log(`${number}  კენტია`);
    }
}
// მეორე num2
function num2(numm2) {
    if (numm2.length === 0) {
        console.log("ცარიელია");
    } else {
        let jami = numm2.reduce((acc, num2) => acc + num2, 0);
        console.log(`რიცხვების ჯამი: ${jami}`);
    }
}
// მესამე num3
function num3(numm3) {
    return numm3.map(num3 => num3 * 3).filter(num3 => num3 > 20);
}
// Medium 
// მეოთხე num4
function num4(numm4) {
    if (numm4.length === 0) {
        return "ცარიელია";
    }
    return Math.max(numm4);
}
// მეხუთე num5
function num5(num1, num2) {
    if (num1 * num2 > 100) {
        console.log("ნამრავლი 100-ზე მეტია");
    } else {
        console.log("ნამრავლი 100-ზე ნაკლებია");
    }
}
//  მეექვსე num6
function num6(nm) {
if (nm.charAt(0) === nm.charAt(nm.length - 1)) {
    console.log("პირველი და ბოლო ასოები ერთიადაიგივეა.");
} else {
    console.log("პირველი და ბოლო ასოები ერთიადაიგივეა");
}
}