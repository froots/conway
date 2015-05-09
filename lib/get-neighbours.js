function getNeighbours(g, x, y) {
  var cells = [];
  if (g[y-1]) {
    cells = cells.concat([g[y-1][x-1], g[y-1][x], g[y-1][x+1]]);
  }
  cells = cells.concat([g[y][x-1], g[y][x+1]]);
  if (g[y+1]) {
    cells = cells.concat([g[y+1][x-1], g[y+1][x], g[y+1][x+1]]);
  }
  return cells.filter(function(c) {
    return c !== undefined;
  });
}

module.exports = getNeighbours;
