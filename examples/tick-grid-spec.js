var test = require('tape');
var tickGrid = require('../lib/tick-grid');

var empty = [[0,0,0],[0,0,0],[0,0,0]];

test('empty 3x3', function(t) {
  t.deepEqual(tickGrid(empty), empty, 'still empty');
  t.end();
});

test('single cell', function(t) {
  var inp = [
    [1,0,0],
    [0,0,0],
    [0,0,0]
  ];
  t.deepEqual(tickGrid(inp), empty, 'still empty');
  t.end();
});

test('two cells', function(t) {
  var inp = [
    [1,1,0],
    [0,0,0],
    [0,0,0]
  ];
  t.deepEqual(tickGrid(inp), empty, 'still empty');
  t.end();
});

test('three cells', function(t) {
  var inp = [
    [1,1,0],
    [1,0,0],
    [0,0,0]
  ];
  var exp = [
    [1,1,0],
    [1,1,0],
    [0,0,0]
  ];
  t.deepEqual(tickGrid(inp), exp, 'breeds a new cell');
  t.end();
});