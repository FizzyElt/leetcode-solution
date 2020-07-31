var isValid = function (s) {
  let stack = []
  if (s.length === 1) {
    return false
  }
  s.split('')
  for (let i = 0; i < s.length; i++) {
    let c = s[i]
    if (i === 0) {
      if (c === ')' || c === '}' || c === ']') {
        return false
      }
    }
    if (c === '(' || c === '{' || c === '[') {
      stack.push(c)
    } else if (c === ']') {
      if (stack.length > 0 && stack[stack.length - 1] === '[') {
        stack.pop()
      } else {
        return false
      }
    } else if (c === '}') {
      if (stack.length > 0 && stack[stack.length - 1] === '{') {
        stack.pop()
      } else {
        return false
      }
    } else if (c === ')') {
      if (stack.length > 0 && stack[stack.length - 1] === '(') {
        stack.pop()
      } else {
        return false
      }
    }
  }

  return stack.length === 0
}
console.log(isValid('(])'))
