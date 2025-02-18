// 1)https://www.codewars.com/kata/5625618b1fe21ab49f00001f/train/javascript
function sayHello(name) {
    return "Hello, " + name 
}


// 2)https://www.codewars.com/kata/5808dcb8f0ed42ae34000031/train/javascript
function switchItUp(number){
    if (number ==0){
     return "Zero"
    } else if (number == 1){
       return "One"
    } else if (number == 2){
      return "Two"
    } else if (number == 3){
      return "Three"
    } else if (number == 4){
      return "Four"
    } else if (number == 5){
      return "Five"
    } else if (number == 6){
      return "Six"
    } else if (number == 7){
      return "Seven"
    } else if (number == 8){
      return "Eight"
    } else if (number == 9){
      return "Nine"
    }
}


// 3)https://www.codewars.com/kata/53da3dbb4a5168369a0000fe/train/javascript
function evenOrOdd(number) {
    if (number % 2 === 0) return "Even";
    return "Odd";
}


// 4)https://www.codewars.com/kata/55cbd4ba903825f7970000f5/train/javascript
function getGrade(s1, s2, s3) {
    let average = (s1 + s2 + s3) / 3;
    if (average >= 90) {
      return 'A';
    }
    if (average >= 80) {
      return 'B';
    }
    if (average >= 70) {
      return 'C';
    }
    if (average >= 60) {
      return 'D';
    }
    return 'F';
}


// 5)https://www.codewars.com/kata/583710ccaa6717322c000105/train/javascript
function simpleMultiplication(number) {
    if (number % 2 === 0) {
        return number * 8;
    } else {
        return number * 9;
    }
}


// 6)https://www.codewars.com/kata/55685cd7ad70877c23000102/train/javascript
function makeNegative(num) {
    if (num > 0){
      return -num
    } else{
      return num
    }
}