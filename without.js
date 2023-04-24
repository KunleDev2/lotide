const assertArraysEqual = function (actual, expected) {
  const isAssertionPassed = " Assertion Passed: ";
  const isAssertionFailed = " Assertion Failed: ";

  if (eqArrays(actual, expected) === true) {
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

const eqArrays = function (arrayNum1, arrayNum2) {
  if (arrayNum1.length !== arrayNum2.length) {
    return false;
  }

  for (let i = 0; i < arrayNum1.length; i++) {
    if (arrayNum1[i] !== arrayNum2[i]) {
      return false;
    }
  }

  return true;
};

const without = function (source, itemsToRemove) {
  let resultArray = [];

  for (let i = 0; i < source.length; i++) {
    let storeBool = false;

    for (let j = 0; j < itemsToRemove.length; j++) {
      if (source[i] === itemsToRemove[j]) {
        storeBool = true;
      }
    }

    if (storeBool === false) {
      resultArray.push(source[i]);
    }
  }
  return resultArray;
};

const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]);
assertArraysEqual(words, ["hello", "world", "lighthouse"]);

console.log(without([1, 2, 3], [1]));
console.log(without(["1", "2", "3"], [1, 2, "3"]));
