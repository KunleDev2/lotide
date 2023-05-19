const assertEqual = require('./assertEqual');

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

module.exports = findKeyByValue;
