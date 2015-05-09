var test = require('tape');
var getNeighbours = require('../lib/get-neighbours');

var grid = [
  [1,2,3,4],
  [5,6,7,8],
  [9,10,11,12],
  [13,14,15,16]
];

test('all neighbours 1', function(t) {
  t.deepEqual(getNeighbours(grid, 2, 2), [6, 7, 8, 10, 12, 14, 15, 16]);
  t.end();
});

test('all neighbours 2', function(t) {
  t.deepEqual(getNeighbours(grid, 1, 1), [1, 2, 3, 5, 7, 9, 10, 11]);
  t.end();
});

test('left edge', function(t) {
  t.deepEqual(getNeighbours(grid, 0, 1), [1, 2, 6, 9, 10]);
  t.end();
});

test('right edge', function(t) {
  t.deepEqual(getNeighbours(grid, 3, 1), [3, 4, 7, 11, 12]);
  t.end();
});

test('top edge', function(t) {
  t.deepEqual(getNeighbours(grid, 1, 0), [1, 3, 5, 6, 7]);
  t.end();
});

test('bottom edge', function(t) {
  t.deepEqual(getNeighbours(grid, 1, 3), [9, 10, 11, 13, 15]);
  t.end();
});

test('top left', function(t) {
  t.deepEqual(getNeighbours(grid, 0, 0), [2, 5, 6]);
  t.end();
});

test('bottom right', function(t) {
  t.deepEqual(getNeighbours(grid, 3, 3), [11, 12, 15]);
  t.end();
});