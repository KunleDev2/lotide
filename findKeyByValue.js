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

const findKeyByValue = function(object, value) {
  let testResult = undefined;

  for (const key in object) {
    if (object[key] === value) {
      testResult = key;
    }
  }
  return testResult;
};

const bestTVShowsByGenre = {
  sciFi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama: "The Wire",
  thriller: "Night out",
  action: "The Cool",
};

assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "Night out"), "thriller");
assertEqual(findKeyByValue(bestTVShowsByGenre, "The Cool"), "action");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);
