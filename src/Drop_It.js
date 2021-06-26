export function dropElements(arr, func) {
  /*while (arr.length > 0 && !func(arr[0])) {
    arr.shift();
  }*/
  return arr.filter(func);
}

// test here
console.log(dropElements([1, 2, 3, 4], function (n) {
  return n >= 3;
}));

export function addFive(arr) {
  return arr.map(x => x + 5)
}

export function sumOfArray(arr) {
  return arr.reduce(function (x, y) {
    return x ** y
  })
}