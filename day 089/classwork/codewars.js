// 1)https://www.codewars.com/kata/57089707fe2d01529f00024a
function checkAlive(h) {
    if (h <= 0) {
      return false;
    } else {
      return true;
    }
}

// 2)https://www.codewars.com/kata/57f780909f7e8e3183000078/train/javascript
function grow(arr) {
    let result = 1;
    for (let i = 0; i < arr.length; i++) {
      result *= arr[i];
    }
    return result;
}

// 3)https://www.codewars.com/kata/57eae65a4321032ce000002d/train/javascript
function fakeBin(x) {
    let result = '';
    for (let i = 0; i < x.length; i++) {
      if (x[i] < '5') {
        result += '0';
      } else {
        result += '1';
      }
    }
    return result;
  }