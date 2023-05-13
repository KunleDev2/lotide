const middle = function (arrNum) {
  let getMiddlePoint = Math.floor(arrNum.length / 2);
  let resultArray = [];

  if (arrNum.length === 1 || arrNum.length === 2) {
    return resultArray;
  }

  if (arrNum.length % 2 === 0) {
    resultArray.push(arrNum[getMiddlePoint - 1], arrNum[getMiddlePoint]);

    return resultArray;
  } else {
    resultArray.push(arrNum[getMiddlePoint]);
    return resultArray;
  }
};

console.log(middle([1]));
console.log(middle([1, 2]));
console.log(middle([1, 2, 3]));
console.log(middle([1, 2, 3, 4, 5]));
console.log(middle([1, 2, 3, 4]));
console.log(middle([1, 2, 3, 4, 5, 6]));

module.exports = middle;