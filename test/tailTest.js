const tail = require("../tail.js");
const assert = require('chai').assert;

describe("#tail", () => {
  it("returns 0 for ['Lighthouse Labs'] array length", () => {
    assert.strictEqual(tail(["Lighthouse Labs"]).length, 0);
  });

  it("returns 6 for [1, 2, 3, 4, 5, 6, 7] array length", () => {
    assert.strictEqual(tail([1, 2, 3, 4, 5, 6, 7]).length, 6);
  });

  it("returns 0 for [] array length", () => {
    assert.strictEqual(tail([]).length, 0);
  });
});
