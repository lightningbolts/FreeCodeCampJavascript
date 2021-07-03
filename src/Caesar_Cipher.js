export function caesarCipher(str, shifter) {
  let format = /[ `!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~0123456789]/;
  let splitStr = str.split("")
  let alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("")
  return splitStr.map(x => {
    if (format.test(x)) {
      return x
    }
    if (shifter < 0) {
      shifter = (shifter % 26) + 26
    }
    let index = alphabet.indexOf(x)
    return x = alphabet[(index + shifter) % 26]
  }).join("")
}

console.log(caesarCipher("SERR PBQR PNZC", 13));