export function palindrome(str) {
  let string = str.replace(/[^a-z0-9+]+/gi, '').toLowerCase();
  return string === string.split("").reverse().join("")
}

export function palindromeOther(str) {
  let string = str.replace(/[^a-z0-9+]+/gi, '').toLowerCase();
  let strLength = string.length
  return helper(0, strLength - 1)
  function helper(start, end) {
    if (Math.abs(start - end) === 1) {
      return string.charCodeAt(start) === string.charCodeAt(end)
    } else if (Math.abs(start - end) === 0) {
      return true
    } else {
      return (string.charCodeAt(start) === string.charCodeAt(end)) && helper(start + 1, end - 1)
    }
  }
}

/*
*/

console.log(palindromeOther("eye_"))