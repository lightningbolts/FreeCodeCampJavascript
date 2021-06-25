export function doesSomethingToItem(arr, num, method) {
  return helper(arr, num, 0, arr.length - 1, method)
  function helper(arr, num, start, end, method) {
    const midIndex = Math.ceil((start + end) / 2)
    if (num === arr[midIndex]) {
      if (num === arr[midIndex - 1]) {
        return helper(arr, num, start, midIndex - 1, method)
      } else {
        if (method === "seek") {
          return midIndex;
        } else if (method === "remove") {
          return removeAllItems(arr, num)
        } else {
          return "Not valid";
        }
      }
    } else if (start === end) {
      return -1
    } else if (num < arr[midIndex]) {
      return helper(arr, num, start, midIndex - 1, method)
    } else if (num > arr[midIndex]) {
      return helper(arr, num, midIndex, end, method)
    } else {
      return -1;
    }
  }
}

function removeAllItems(arr, value) {
  var i = 0;
  while (i < arr.length) {
    if (arr[i] === value) {
      arr.splice(i, 1);
    } else {
      ++i;
    }
  }
  return arr;
}

console.log(doesSomethingToItem([1, 2, 2, 3, 4, 5], 2, "remove"))