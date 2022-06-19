const { assert } = require("chai");
const { lookupChar } = require("./charLookUp");

describe("Function lookupChar Test", () => {
  it("first parameter is string", () => {
    assert.equal(lookupChar(1, "1"), undefined);
  });
  it("incorrect index", () => {
    assert.equal(lookupChar("1", 1), "Incorrect index");
  });
  it("both parameters are correct, but index is out of range", () => {
    let str = "string";
    let index = -1;
    assert.equal(lookupChar(str, index), "Incorrect index");
  });
  it("all is correct", () => {
    let str = "string";
    let index = 3;
    assert.equal(lookupChar(str, index), "i");
  });
  it("both parameters are correct, but index is out of range", () => {
    let str = "string";
    let index = 9;
    assert.equal(lookupChar(str, index), "Incorrect index");
  });
  it("both parameters are correct, but index is out of range", () => {
    let str = "string";
    let index = 1.1;
    assert.isUndefined(lookupChar(str, index), "Incorrect index");
  });
  it("both parameters are correct, but index is out of range", () => {
    let str = 0
    let index = 0
    assert.isUndefined(lookupChar(str, index), "Incorrect index");
  });
});
