var numIslands = function (grid) {
  let res = 0;

  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length; j++) {
      if (grid[i][j] === "1") {
        res++;
        findIsland(i, j);
      }
    }
  }
  return res
  function findIsland(x, y) {
    grid[x][y] = "0";

    for (let i = -1; i < 2; i += 2) {
      let newX = x + i;
      if (0 <= newX && newX < grid.length && grid[newX][y] === "1") {
        findIsland(newX, y);
      }
    }

    for (let j = -1; j < 2; j += 2) {
      let newY = y + j;
      if (0 <= newY && newY < grid[0].length && grid[x][newY] === "1") {
        findIsland(x, newY);
      }
    }
  }
};
