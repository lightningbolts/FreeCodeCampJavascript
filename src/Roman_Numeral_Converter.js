let roman = [
  [1000, "M"],
  [900, "CM"],
  [500, "D"],
  [400, "CD"],
  [100, "C"],
  [90, "XC"],
  [50, "L"],
  [40, "XL"],
  [10, "X"],
  [9, "IX"],
  [5, "V"],
  [4, "IV"],
  [1, "I"]
]

function convertToRoman(num) {
  if (num === 0) {
    return ""
  } else {
    for (let i = 0; i < roman.length; i++) {
      if (num >= roman[i][0]) {
        return roman[i][1] + convertToRoman(num - roman[i][0])
      }
    }
  }
}

console.log(convertToRoman(3));