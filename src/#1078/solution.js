var findOcurrences = function (text, first, second) {
  let newStr = text.split(' ')
  let res = []

  if (newStr.length < 2) {
    return res
  }

  for (let i = 2; i < newStr.length; i++) {
      if (newStr[i-2]===first&&newStr[i-1]===second){
        res.push(newStr[i])
      }
  }
  return res
}
