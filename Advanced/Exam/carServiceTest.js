const { carService } = require("./carService");
const { expect, assert } = require("chai");

describe("Function carService Tests", () => {
  it("test isItExpensive method", () => {
    expect(carService.isItExpensive("Engine")).to.equal(
      "The issue with the car is more severe and it will cost more money"
    );
    expect(carService.isItExpensive("Transmission")).to.equal(
      "The issue with the car is more severe and it will cost more money"
    );
    expect(carService.isItExpensive("Brakes")).equal(
      "The overall price will be a bit cheaper"
    );
  });
  it("test discount method", () => {
    expect(carService.discount(2, 100)).to.equal("You cannot apply a discount");
    expect(carService.discount(7, 100)).to.equal(
      "Discount applied! You saved 15$"
    );
    expect(carService.discount(1, 100)).to.equal("You cannot apply a discount");
    expect(carService.discount(8, 100)).to.equal(
      "Discount applied! You saved 30$"
    );
    expect(() => {
      carService.discount(1, "a").to.throw(Error);
    });
    expect(() => {
      carService.discount([], "a").to.throw(Error);
    });
    expect(() => {
      carService.discount([], {}).to.throw(Error);
    });
  });
  it("test partsTobuy method", () => {
    let sum = 0;
    let partsCatalog = [
      { part: "blowoff valve", price: 145 },
      { part: "coil springs", price: 230 },
    ];
    let neededParts = ["blowoff valve", "injectors"];
    sum = carService.partsToBuy(partsCatalog, neededParts);
    expect(sum).to.equal(145);
  });
});
