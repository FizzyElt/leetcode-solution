var minimumTotal = function (triangle) {
  if (triangle.length === 0) {
    return 0
  } else if (triangle.length === 1) {
    return triangle[0][0]
  }
  for (let i = triangle.length - 2; i >= 0; i--) {
    for (let j = 0; j < triangle[i].length; j++) {
      triangle[i][j] = triangle[i][j] + Math.min(triangle[i + 1][j], triangle[i + 1][j + 1])
    }
  }
  return triangle[0][0]
}
