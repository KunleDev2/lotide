const assertEqual = require('./assertEqual');

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

module.exports = countLetters;
