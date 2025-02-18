// 1)https://www.codewars.com/kata/5168bb5dfe9a00b126000018
function solution(str){
    return str.split('').reverse().join('')
}

// 2)https://www.codewars.com/kata/56dae9dc54c0acd29d00109a
function main(verb, noun) {
    return verb + noun;
}

// 3)https://www.codewars.com/kata/5ab6538b379d20ad880000ab
function areaOrPerimeter(l, w) {
    if (l === w) {
        return l * w;
    }
    return 2 * l + 2 * w;
}

// 4)https://www.codewars.com/kata/55685cd7ad70877c23000102
function makeNegative(num) {
    if (num > 0){
      return -num
    } else{
      return num
    }
}

// 5)https://www.codewars.com/kata/56dec885c54a926dcd001095
function opposite(number) {
    return number * -1;
}