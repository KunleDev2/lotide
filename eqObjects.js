const assertEqual = require('./assertEqual');

const eqObjects = function(object1, object2) {
  if (Object.keys(object1).length !== Object.keys(object2).length) {
    return false;
  }

  for (const iterator of Object.keys(object1)) {
      if (object1[iterator] !== object2[iterator]) {
        return false;
    }
  }

  return true;
};

const shirtObject = { color: "red", size: "medium" };
const anotherShirtObject = { size: "medium", color: "red" };
const longSleeveShirtObject = {
  size: "medium",
  color: "red",
  sleeveLength: "long",
};

assertEqual(eqObjects(shirtObject, anotherShirtObject), { color: "red", size: "medium" });
assertEqual(eqObjects(shirtObject, longSleeveShirtObject), { size: "medium", color: "red" });

module.exports = eqObjects;
