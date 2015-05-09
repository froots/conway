var getNeighbours = require('./get-neighbours');
var tickCell = require('./tick-cell');

function adder(item, counter) {
  return counter + item;
}

function tickGrid(grid) {
  return grid.map(function(row, y) {
    return row.map(function(cell, x) {
      var neighbours = getNeighbours(grid, x, y);
      var liveCount = neighbours.reduce(adder, 0);
      return tickCell(cell, liveCount);
    });
  });
}

module.exports = tickGrid;