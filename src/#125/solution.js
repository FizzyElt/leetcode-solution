var isPalindrome = function (s) {
  let strArr = s.split('')
  let right = strArr.length - 1
  let left = 0


  while (left < right) {
    validCodeL = isValidChar(strArr[left].charCodeAt(0))
    validCodeR = isValidChar(strArr[right].charCodeAt(0))
    if (validCodeL && validCodeR) {
      if (strArr[left].toLowerCase() === strArr[right].toLowerCase()) {
        left++
        right--
      } else {
        return false
      }
    } else {
      if (!validCodeL) {
        left++
      }
      if (!validCodeR) {
        right--
      }
    }
  }

  return true
}

function isValidChar(c) {
  if ((c >= 65 && c <= 90) || (c >= 97 && c <= 122) || (c >= 48 && c <= 57)) {
    return true
  }
  return false
}
