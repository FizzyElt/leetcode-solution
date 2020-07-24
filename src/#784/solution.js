var letterCasePermutation = function (S) {
  let output = []
  helper(0, '')

  return output

  function helper(index, currStr) {
    if (index >= S.length) {
      output.push(currStr)
      return
    }
    let code = S[index].charCodeAt()
    if (code >= 48 && code <= 57) {
      helper(index + 1, currStr + S[index])
      return
    }
    if (code >= 65 && code <= 90) {
      helper(index + 1, currStr + S[index])
      helper(index + 1, currStr + String.fromCharCode(code + 32))
    }
    if (code >= 97 && code <= 122) {
      helper(index + 1, currStr + S[index])
      helper(index + 1, currStr + String.fromCharCode(code - 32))
    }
  }
}
