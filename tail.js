const tail = function (arrays) {
  let resultArray = [];

  resultArray = arrays.slice(1);
  return resultArray;
};

console.log(tail(["Lighthouse Labs"]));
console.log(tail([1, 2, 3, 4, 5, 6, 7]));
console.log(tail([]));

module.exports = tail;
