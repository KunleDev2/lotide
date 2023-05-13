const assertEqual = function(actual, expected) {
  const isAssertionPassed = " Assertion Passed: ";
  const isAssertionFailed = " Assertion Failed: ";
  
    if (actual === expected) {
      console.log(
        String.fromCodePoint(0x2705) +
          String.fromCodePoint(0x2705) +
          String.fromCodePoint(0x2705) +
          `${isAssertionPassed}` +
          actual +
          " === " +
          expected
      );
    } else {
      console.log(
        String.fromCodePoint(0x274c) +
          String.fromCodePoint(0x274c) +
          String.fromCodePoint(0x274c) +
          `${isAssertionFailed}` +
          actual +
          " !== " +
          expected
      );
    }
};

module.exports = assertEqual;
