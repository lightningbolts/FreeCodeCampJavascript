function sumAll(arr) {
  let minimum = Math.min(arr[0], arr[1])
  let maximum = Math.max(arr[0], arr[1])
  let result = 0
  for (let i = minimum; i <= maximum; i++) {
    result += i;
  }
  return result;
}

sumAll([1, 4]);