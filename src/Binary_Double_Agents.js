export function binaryAgent(str) {
  var biSplit = str.split(" ");
  let strSplit = str.split("")
  //var uniString = [];

  /*using the radix (or base) parameter in parseInt, we can convert the binary
      number to a decimal number while simultaneously converting to a char*/
  //Using for loop
  /*for (var i = 0; i < biString.length; i++) {
    uniString.push(String.fromCharCode(parseInt(biString[i], 2)));
  }*/
  //Using map method
  if (checker(str)) {
    return biSplit.map(x => {
      return String.fromCharCode(parseInt(x, 2))
    }).join("")
  } else {
    return strSplit.map(x => {
      return padding(dec2bin(x.charCodeAt(0)))
    }).join(" ")
  }
  // we then simply join the string
  // return uniString.join("");
}

// test here
console.log(binaryAgent(
  "01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111"
));

function checker(str) {
  let splitStr = str.split(" ")
  return splitStr.every(x => x.split("").every(c => c === "0" || c === "1"))
}

function dec2bin(dec) {
  return (dec >>> 0).toString(2);
}

function padding(biStr) {
  let splitBiStr = biStr.split("")
  if (biStr.length === 8) {
    return biStr
  } else if (biStr.length < 8) {
    splitBiStr.unshift("0")
    return padding(splitBiStr.join(""))
  }
}