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

const middle = function (arrNum) {
  let getMiddlePoint = Math.floor(arrNum.length / 2);
  let resultArray = [];

  if (arrNum.length === 1 || arrNum.length === 2) {
    return resultArray;
  }

  if (arrNum.length % 2 === 0) {
    resultArray.push(arrNum[getMiddlePoint - 1], arrNum[getMiddlePoint]);

    return resultArray;
  } else {
    resultArray.push(arrNum[getMiddlePoint]);
    return resultArray;
  }
};

assertArraysEqual(middle([1]), []);
assertArraysEqual(middle([1, 2]), []);
assertArraysEqual(middle([1, 2, 3]), [2]);
assertArraysEqual(middle([1, 2, 3, 4, 5]), [3]);
assertArraysEqual(middle([1, 2, 3, 4]), [2, 3]);
assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]);

console.log(middle([1]));
console.log(middle([1, 2]));
console.log(middle([1, 2, 3]));
console.log(middle([1, 2, 3, 4, 5]));
console.log(middle([1, 2, 3, 4]));
console.log(middle([1, 2, 3, 4, 5, 6]));
