var intToRoman = function (num) {
  const integer = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1]
  const roman = ['M', 'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I']

  let res = ''
  let pointer = 0

  while (num > 0) {
    if (num >= integer[pointer]) {
      num -= integer[pointer]
      res += roman[pointer]
    } else {
      pointer++
    }
  }
  return res
}
