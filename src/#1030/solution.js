var allCellsDistOrder = function (R, C, r0, c0) {
  let visited = []
  for (let i = 0; i < R; i++) {
    visited[i] = new Array(C)
  }
  
  let directions = [
    [0, 1],
    [0, -1],
    [1, 0],
    [-1, 0],
  ]

  let queue = [[r0, c0]]
  visited[r0][c0] = true
  let ret = []

  while (queue.length !== 0) {
    let front = queue[0]
    ret.push(front)
    queue.shift()
    directions.forEach(d => {
      let x = front[0] + d[0]
      let y = front[1] + d[1]
      if (x >= 0 && y >= 0 && x < R && y < C && !visited[x][y]) {
        visited[x][y] = true
        queue.push([x, y])
      }
    })
  }

  return ret
}
