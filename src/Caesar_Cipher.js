function rot13(str) {
  let splitStr = str.split('')
  for (let index in splitStr) {
    let item = splitStr[index]
    if (item === "A") {
      item[index] = "N"
    } else if (item === "B") {
      item[index] = "O"
    } else if (item === "C") {
      item[index] = "P"
    } else if (item === "D") {
      item[index] = "Q"
    } else if (item === "E") {
      item[index] = "R"
    } else if (item === "F") {
      item[index] = "S"
    } else if (item === "G") {
      item[index] = "T"
    } else if (item === "H") {
      item[index] = "U"
    } else if (item === "I") {
      item[index] = "V"
    } else if (item === "J") {
      item[index] = "W"
    } else if (item === "K") {
      item[index] = "X"
    } else if (item === "L") {
      item[index] = "Y"
    } else if (item === "M") {
      item[index] = "Z"
    } else if (item === "N") {
      item[index] = "A"
    } else if (item === "O") {
      item[index] = "B"
    } else if (item === "P") {
      item[index] = "C"
    } else if (item === "Q") {
      item[index] = "D"
    } else if (item === "R") {
      item[index] = "E"
    } else if (item === "S") {
      item[index] = "F"
    } else if (item === "T") {
      item[index] = "G"
    } else if (item === "U") {
      item[index] = "H"
    } else if (item === "V") {
      item[index] = "I"
    } else if (item === "W") {
      item[index] = "J"
    } else if (item === "X") {
      item[index] = "K"
    } else if (item === "Y") {
      item[index] = "L"
    } else if (item === "Z") {
      item[index] = "M"
    }
  }
  return splitStr.join(',');
}

rot13("SERR PBQR PNZC");