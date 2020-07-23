var removeDuplicates = function (S) {
  let stack = []

  for (let i = 0; i < S.length; i++) {
    if (stack.length === 0) {
      stack.push(S[i])
      continue
    }
    let last = stack[stack.length - 1]
    if (S[i] === last) {
      stack.pop()
    } else {
      stack.push(S[i])
    }
  }
  return stack.join('')
}
