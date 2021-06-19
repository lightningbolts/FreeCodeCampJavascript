function titleCase(str) {
    let result = ""
    let words = str.split(" ")
    console.log(words)
    for (let i = 0; i < words.length; i += 1) {
        let word = words[i]
        for (let j = 0; j < word.length; j += 1) {
            if (j === 0) {
                result += word[j].toUpperCase();
            } else {
                result += word[j].toLowerCase();
            }
        }
        result += " "
    }
    return result
}
  
console.log(titleCase("I'm a little tea pot"));