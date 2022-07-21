const { expect } = require("chai");
const { sum } = require("./sumOfNumbers");

describe("Test suite", () => {
  it("is Array", () => {
    expect(sum([1, 2, 3])).to.contain(Array, "it is not Array");
  });
  it("works correct", () => {
    expect(sum([1, 2, 3])).to.equal(6, "incorrect calculations");
  });
  it('return NaN if one element of array is not a number', () => {
    expect(isNaN(sum([1, 'a']))).to.equal(true)
})
});
