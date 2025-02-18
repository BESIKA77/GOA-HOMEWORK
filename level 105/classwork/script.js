const nestedArray = [1, [2, 3], [4, [5, 6]], 7];

const flatArray = nestedArray.flat(1);
console.log("გაშლილი მასივი (1 დონე):", flatArray);

const fullyFlatArray = nestedArray.flat(Infinity);
console.log("სრულიად გაშლილი მასივი:", fullyFlatArray);

function checkElement(array, value) {
  return array.includes(value);
}
console.log("ელემენტის შემოწმება (არსებობს 5):", checkElement(fullyFlatArray, 5));
console.log("ელემენტის შემოწმება (არსებობს 10):", checkElement(fullyFlatArray, 10));

function findIndexOfElement(array, value) {
  return array.indexOf(value);
}
console.log("ელემენტის ინდექსი (5):", findIndexOfElement(fullyFlatArray, 5));
console.log("ელემენტის ინდექსი (10):", findIndexOfElement(fullyFlatArray, 10));

function findLastIndexOfElement(array, value) {
  return array.lastIndexOf(value);
}
console.log("ელემენტის ბოლო ინდექსი (5):", findLastIndexOfElement(fullyFlatArray, 5));
console.log("ელემენტის ბოლო ინდექსი (10):", findLastIndexOfElement(fullyFlatArray, 10));
