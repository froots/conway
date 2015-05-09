var tickGrid = require('./lib/tick-grid');

var grid = [
  [0,0,0,0,0,0],
  [0,1,1,0,0,0],
  [0,1,1,0,0,0],
  [0,0,0,1,1,0],
  [0,0,0,1,1,0],
  [0,0,0,0,0,0]
];

function render(grid) {
  console.log(grid.map(function(row, y) {
    return row.join();
  }).join('\n') + '\n');
}

function update() {
  grid = tickGrid(grid);
  render(grid);
}

render(grid);

setInterval(update, 1000);
