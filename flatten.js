const assertArraysEqual = require('./assertArraysEqual');

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

module.exports = flatten;
