const assertEqual = require("../assertEqual.js");
const tail = require("../tail.js");

assertEqual(tail(["Lighthouse Labs"]).length, 0);
assertEqual(tail([1, 2, 3, 4, 5, 6, 7]).length, 6);
assertEqual(tail([]).length, 0);
