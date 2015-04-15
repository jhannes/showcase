if (typeof require !== 'undefined') {
  var expect = require('chai').expect;
  var toNorwegian = require('../src/numbers_to_text').toNorwegian;
}

describe("numbers in norwegian", function() {
  function itDisplays(n, text) {
    it("displays " + n + " as '" + text + "'", function() {
      expect(toNorwegian(n)).to.equal(text);
    });
  }

  describe("simple numbers", function() {
    itDisplays(1, "en");
    itDisplays(2, "to");
    itDisplays(3, "tre");
  });

  itDisplays(20, "tjue");
  itDisplays(21, "tjue en");
  itDisplays(34, "tretti fire");
  itDisplays(99, "nitti ni");


  itDisplays(100, "ett hundre");
  itDisplays(145, "ett hundre og førti fem");
  itDisplays(200, "to hundre");
  itDisplays(256, "to hundre og femti seks");
  itDisplays(888, "åtte hundre og åtti åtte");

  itDisplays(1000, "ett tusen");
  itDisplays(11000, "elleve tusen");
  itDisplays(12713, "tolv tusen syv hundre og tretten");
  itDisplays(12900, "tolv tusen ni hundre");
  itDisplays(12014, "tolv tusen og fjorten");

  describe("very large numbers", function() {
    itDisplays(1000000, "en million");
    itDisplays(15000000, "femten millioner");
    itDisplays(16017000, "seksten millioner sytten tusen");
    itDisplays(18019060, "atten millioner nitten tusen og seksti");
    itDisplays(70000170, "søtti millioner ett hundre og søtti");
    itDisplays(70000170, "søtti millioner ett hundre og søtti");
    itDisplays(80000090, "åtti millioner og nitti");

    itDisplays(80090120090,
               "åtti milliarder nitti millioner ett hundre og tjue tusen og nitti");

  });
});
