var test = require('tape');
var tickCell = require('../lib/tick-cell');

test('dead cell, 0 neighbors', function(t) {
  t.equal(tickCell(0, 0), 0, '-> dead');
  t.end();
});

test('dead cell, 1 neighbour', function(t) {
  t.equal(tickCell(0, 1), 0, '-> dead');
  t.end();
});