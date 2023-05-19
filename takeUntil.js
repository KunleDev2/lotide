const assertArraysEqual = require('./assertArraysEqual');

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

module.exports = takeUntil;