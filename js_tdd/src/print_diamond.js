/*jshint esnext:true*/

if (typeof require !== 'undefined') {
  var _ = require('lodash');
}

function generateShape(rank, checkf, printf) {
  return _.collect(_.range(-rank, rank+1), (i) =>
    _.collect(_.range(-rank, rank+1),
              (j) => checkf(i, j, rank) ? printf(i, j) : " ").join("")
  );
}

function printDiamond(c) {
  var abs = Math.abs;
  var rank = c.charCodeAt(0) - 'a'.charCodeAt(0);

  return generateShape(rank,
     (i, j, rank) => abs(i) + abs(j) === abs(rank),
     (i, j) => String.fromCharCode(97 +abs(j)));
}

if (typeof module !== 'undefined') {
  module.exports = {
    printDiamond: printDiamond
  };
}
