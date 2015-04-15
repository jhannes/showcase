/*jshint expr:true*/

if (typeof require !== 'undefined') {
  var expect = require('chai').expect;
  var primeFactors = require('../src/prime_factors');
}

describe("prime factors", function() {

  var itReturnPrimeFactors = function(n, expectedPrimeFactors) {
    it("returns " + expectedPrimeFactors + " for " + n, function() {
      expect(primeFactors(n)).to.eql(expectedPrimeFactors);
    });
  };

  var itFactorsProduct = function(factors) {
    var n = 1;
    for (var i=0; i<factors.length; i++) {
      n *= factors[i];
    }
    itReturnPrimeFactors(n, factors);
  };

  itReturnPrimeFactors(1, []);
  itReturnPrimeFactors(2, [2]);
  itReturnPrimeFactors(3, [3]);
  itReturnPrimeFactors(4, [2, 2]);
  itReturnPrimeFactors(6, [2, 3]);
  itReturnPrimeFactors(8, [2, 2, 2]);
  itReturnPrimeFactors(9, [3, 3]);
  itReturnPrimeFactors(12, [2, 2, 3]);

  itFactorsProduct([2, 2, 3, 3, 13, 23, 37]);

});
