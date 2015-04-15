if (typeof require !== 'undefined') {
  var _ = require('lodash');
}

function generateShape(rank, checkf, printf) {
  return _.collect(_.range(-rank, rank+1), function(i) {
    return _.collect(_.range(-rank, rank+1), function(j) {
      return checkf(i, j, rank) ? printf(i, j) : " ";
    }).join("");
  });
}

function printDiamond(c) {
  function character(c) {
    return String.fromCharCode(97 + c);
  }
  var abs = Math.abs;

  var rank = c.charCodeAt(0) - 'a'.charCodeAt(0);

  return generateShape(rank,
     function(i, j, rank) { return abs(i) + abs(j) === abs(rank); },
     function(i, j) { return character(abs(j)); });
}

if (typeof module !== 'undefined') {
  module.exports = {
    printDiamond: printDiamond
  };
}
