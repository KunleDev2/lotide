const assertArraysEqual = require('./assertArraysEqual');

const letterPositions = function (sentence) {
  const results = {};
  for (let i = 0; i < sentence.length; i++) {
    if (results[sentence[i]]) {
      results[sentence[i]].push(i);
    } else if (sentence[i] === " ") {
    } else {
      results[sentence[i]] = [i];
    }
  }

  return results;
};

console.log(letterPositions("lighthouse in the house"));

console.log(
  assertArraysEqual(letterPositions("lighthouse in the house").e, [1])
);

module.exports = letterPositions;
