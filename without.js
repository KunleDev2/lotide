const assertArraysEqual = require('./assertArraysEqual');

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

module.exports = without;
