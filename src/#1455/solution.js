var isPrefixOfWord = function (sentence, searchWord) {
  const words = sentence.split(' ')
  const swLen = searchWord.length
  let ans = -1
  console.log(words)
  for (let i = 0; i < words.length; i++) {
    if (words[i].length >= swLen) {
      if (words[i].slice(0, swLen) === searchWord) {
        ans = i + 1
        break
      }
    }
  }
  return ans
}
