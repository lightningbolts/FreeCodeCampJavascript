function translatePigLatin(str) {

  let vowels = "aeiou".split("")
  for (let i = 0; i < str.length; i++) {
    let item = str[i]
    if (vowels.indexOf(item) != -1 && i === 0) {
      return str + "way";
    }
    if (vowels.indexOf(item) != -1) {
      return str.slice(i) + str.slice(0, i) + "ay";
    }
  }
  return str + "ay"
}
console.log(translatePigLatin("eight"))
