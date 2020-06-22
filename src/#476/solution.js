var findComplement = function (num) {
  let res = 0
  let n = 1
  while (num !== 0) {
    if (num % 2 === 0) {
      res += n
    }
    n *= 2
    num = Math.floor(num / 2)
  }
  return res
}
