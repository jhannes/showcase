/*jshint esnext:true*/

if (typeof require !== 'undefined') {
  var expect = require('chai').expect;
  var printDiamond = require('../src/print_diamond').printDiamond;
}

describe("print diamond", () => {

  describe("dimensions", function() {
    function itHasDimensions(c, n) {
      it("has correct number of rows for " + c,
         () => expect(printDiamond(c)).to.have.length(n));
      it("has correct number of columns for " + c,
         () => expect(printDiamond(c)[0]).to.have.length(n));
    }

    itHasDimensions("a", 1);
    itHasDimensions("b", 3);
    itHasDimensions("c", 5);
  });

  it("has correct middle row", () => {
    expect(printDiamond("a")[0]).to.eql("a");
    expect(printDiamond("b")[1]).to.eql("b b");
    expect(printDiamond("c")[2]).to.eql("c   c");
    expect(printDiamond("d")[3]).to.eql("d     d");
  });

  it("has correct top row", () => {
    expect(printDiamond("a")[0]).to.eql("a");
    expect(printDiamond("b")[0]).to.eql(" a ");
    expect(printDiamond("c")[0]).to.eql("  a  ");
    expect(printDiamond("d")[0]).to.eql("   a   ");
  });

  it("has correct second row", () => {
    expect(printDiamond("c")[1]).to.eql(" b b ");
    expect(printDiamond("d")[1]).to.eql("  b b  ");
  });
});
