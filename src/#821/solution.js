var shortestToChar = function (S, C) {
  let Cindex = []
  S = S.split('')
  S.forEach((v, i) => {
    if (C === v) {
      Cindex.push(i)
    }
  })
  let res = []
  S.forEach((v, i) => {
    if (v === C) {
      res.push(0)
    } else {
      let min = 10000
      Cindex.forEach(v => {
        let dis = i - v
        if (dis < 0) {
          dis *= -1
        }
        if (dis < min) {
          min = dis
        }
      })
      res.push(min)
    }
  })
  return res
}
