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

const flatten = function (nestedArray) {
  let resultArray = [];

  for (let i = 0; i < nestedArray.length; i++) {
    if (typeof nestedArray[i] === "object") {
      for (let j = 0; j < nestedArray[i].length; j++) {
        resultArray.push(nestedArray[i][j]);
      }
    } else {
      resultArray.push(nestedArray[i]);
    }
  }
  return resultArray;
};

assertArraysEqual(flatten([1, 2, [3, 4], 5, [6]]), [1, 2, 3, 4, 5, 6]);
assertArraysEqual(flatten([1, [2, 3, 4], 5, [6]]), [1, 2, 3, 4, 5, 6]);
assertArraysEqual(flatten([1, 2, 3, [4, 5], [6]]), [1, 2, 3, 4, 5, 6]);

console.log(flatten([1, 2, [3, 4], 5, [6]]));
console.log(flatten([1, [2, 3, 4], 5, [6]]));
console.log(flatten([1, 2, 3, [4, 5], [6]]));
