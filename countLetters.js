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

const countLetters = function(itemsToCount) {
  const itemResult = {};
  for (const item of itemsToCount) {
    if (itemResult[item]) {
      itemResult[item] += item;
    } else {
      itemResult[item] = item;
    }
  }

  return itemResult;
};

const result1 = countLetters("LHL");

console.log(result1.L);
assertEqual(result1["L"], "LL");
assertEqual(result1["H"], "H");
assertEqual(result1["R"], undefined);
assertEqual(result1["P"], undefined);
