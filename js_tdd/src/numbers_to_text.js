
function toNorwegian(n) {
  var numbers = {
    1: "en", 2: "to", 3: "tre",
    4: "fire", 5: "fem", 6: "seks",
    7: "syv", 8: "åtte", 9: "ni",

    10: "ti", 11: "elleve", 12: "tolv",
    13: "tretten", 14: "fjorten", 15: "femten",
    16: "seksten", 17: "sytten", 18: "atten",
    19: "nitten",

    20: "tjue", 30: "tretti", 40: "førti",
    50: "femti", 60: "seksti", 70: "søtti",
    80: "åtti", 90: "nitti",

    100: "ett hundre",
    1000: "ett tusen",
    1000000: "en million"
  };

  function convertLargeNumber(n, largeNumber, name) {
    if (n < largeNumber) return null;

    var rest = n % largeNumber;
    if (rest === 0) {
      return toNorwegian(n/largeNumber) + " " + name;
    }
    return toNorwegian(n - rest) +
      (rest < 100 ? " og " : " ") +
      toNorwegian(rest);
  }

  return numbers[n] ||
    convertLargeNumber(n, 1000000000, "milliarder") ||
    convertLargeNumber(n, 1000000, "millioner") ||
    convertLargeNumber(n, 1000, "tusen") ||
    convertLargeNumber(n, 100, "hundre") ||
    toNorwegian(n - n%10) + " " + toNorwegian(n%10);
}

if (typeof module !== 'undefined') {
  module.exports = {
    toNorwegian: toNorwegian
  };
}
