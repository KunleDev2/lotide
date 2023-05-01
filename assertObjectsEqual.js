const assertObjectsEqual = function(actual, expected) {
  const inspect = require("util").inspect;

  const isAssertionPassed = " Assertion Passed: ";
  const isAssertionFailed = " Assertion Failed: ";

  if (eqObjects(actual, expected) === true) {
    console.log(
      String.fromCodePoint(0x2705) +
        String.fromCodePoint(0x2705) +
        String.fromCodePoint(0x2705) +
        `${isAssertionPassed}` +
        `${inspect(actual)}` +
        " !== " +
        `${inspect(expected)}`
    );
  } else {
    console.log(
      String.fromCodePoint(0x274c) +
        String.fromCodePoint(0x274c) +
        String.fromCodePoint(0x274c) +
        `${isAssertionFailed}` +
        `${inspect(actual)}` +
        " !== " +
        `${inspect(expected)}`
    );
  }
};

const eqObjects = function(object1, object2) {
  if (Object.keys(object1).length !== Object.keys(object2).length) {
    return false;
  }

  for (const iterator of Object.keys(object1)) {
    if (object1[iterator] !== object2[iterator]) {
      return false;
    }
  }

  return true;
};

const shirtObject = { color: "red", size: "medium" };
const anotherShirtObject = { size: "medium", color: "red" };
const longSleeveShirtObject = {
  size: "medium",
  color: "red",
  sleeveLength: "long",
};

assertObjectsEqual(shirtObject, { color: "red", size: "medium" });
assertObjectsEqual(anotherShirtObject, { size: "medium", color: "red" });
assertObjectsEqual(longSleeveShirtObject, {
  size: "medium",
  color: "red",
  sleeveLength: "long",
});
