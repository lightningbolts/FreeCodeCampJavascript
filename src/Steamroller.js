function steamrollArray(arr) {
  // if the array is one-dimensional, return the array.
  let output = []

  function checkArr(x) {
    return !Array.isArray(x)
  }
  // scan through all the items in the array and check the type
  for (let index in arr) {
    let item = arr[index]
    if (checkArr(item)) {
      console.log(output.push(item))
      console.log(output)
    } else {
      let result = steamrollArray(item)
      output = output.concat(result)
    }
  }
  // else, we need to flatten the array
  // recursion method is the best in this case
  return output
}

console.log(steamrollArray([1, [2], [3, [[4]]]]));