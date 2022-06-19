const { expect } = require("chai");
const { isSymmetric } = require("./checkForSymmetry");

describe("Test suite", () => {
  it("is Symmetric", () => {
    expect(isSymmetric([1, 2, 2, 1])).to.be.true;
  });
  it("is Symmetric", () => {
    expect(isSymmetric([1, 2, 3, 4, 5])).to.be.false;
  });
  it("is Array", () => {
    expect(isSymmetric(3)).to.be.false;
  });
  it("is Symmetric", () => {
    expect(isSymmetric([1, 2, 2, '1'])).to.be.false;
  });
  it('return NaN if one element of array is not a number', () => {
    expect(isNaN(isSymmetric([1, 'a']))).to.equal(true)
})
});
