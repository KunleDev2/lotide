const assertEqual = function (actual, expected) {
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

const tail = function (arrays) {
  let resultArray = [];

  resultArray = arrays.slice(1);
  return resultArray;
};

assertEqual(tail(["Lighthouse Labs"]).length, 0);
assertEqual(tail([1, 2, 3, 4, 5, 6, 7]).length, 6);
assertEqual(tail([]).length, 0);

console.log(tail(["Lighthouse Labs"]));
console.log(tail([1, 2, 3, 4, 5, 6, 7]));
console.log(tail([]));
