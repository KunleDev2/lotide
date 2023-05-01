const assertArraysEqual = function(actual, expected) {
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

const eqArrays = function(arrayNum1, arrayNum2) {
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

const takeUntil = function(array, callback) {
  let resultArry = [];

  for (let i = 0; i < array.length; i++) {
    if (callback(array[i])) {
      return resultArry;
    } else {
      resultArry.push(array[i]);
    }
  }

  return resultArry;
};

const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, (x) => x < 0);
console.log(results1);

console.log("---");

const data2 = [
  "I've",
  "been",
  "to",
  "Hollywood",
  ",",
  "I've",
  "been",
  "to",
  "Redwood",
];
const results2 = takeUntil(data2, (x) => x === ",");
console.log(results2);

assertArraysEqual(
  takeUntil(data1, (x) => x < 0),
  [1, 2, 5, 7, 2]
);
assertArraysEqual(
  takeUntil(data2, (x) => x === ","),
  ["I've", "been", "to", "Hollywood"]
);
