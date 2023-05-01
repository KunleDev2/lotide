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

const eqObjects = function(object1, object2) {
  if (Object.keys(object1).length !== Object.keys(object2).length) {
    return false;
  }

  console.log(Object.keys(object1) + " | " + Object.keys(object1));

  for (const iterator of Object.keys(object1)) {
    if (eqArrays(Object.keys(object1), Object.keys(object2))) {
      if (object1[iterator] !== object2[iterator]) {
        return false;
      }
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

assertEqual(eqObjects(shirtObject, anotherShirtObject), true);
assertEqual(eqObjects(shirtObject, longSleeveShirtObject), false);
