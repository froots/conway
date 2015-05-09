var test = require('tape');
var tickCell = require('../lib/tick-cell');

var examples = [
  [0, 0, 0],
  [0, 1, 0],
  [0, 2, 0],
  [0, 3, 1],
  [0, 4, 0],
  [0, 8, 0],
  [1, 0, 0],
  [1, 1, 0],
  [1, 2, 1],
  [1, 3, 1],
  [1, 4, 0],
  [1, 8, 0]
];

examples.forEach(function(e) {
  var testName = (e[0] ? 'Live ' : 'Dead ') +
    'cell with ' + e[1] + ' neighbours';
  var msg = '-> ' + e[2] ? 'live' : 'dead';
  test(testName, function(t) {
    t.equal(tickCell(e[0], e[1]), e[2], msg);
    t.end();
  });
});
