function primeFactors(n) {
  var factors = [];

  for (var factor = 2; factor < n; factor++) {
    while (n % factor === 0) {
      factors.push(factor);
      n /= factor;
    }
  }

  if (n > 1) {
    factors.push(n);
  }

  return factors;
}

if (typeof exports !== 'undefined') {
  module.exports = primeFactors;
}
