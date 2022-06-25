const { expect } = require("chai");
const { PaymentPackage } = require("./PaymentPackage.js");

describe("PaymentPackage Class test", () => {
  it("constructor name test", () => {
    let newInstance = new PaymentPackage("Petar", 120);

    expect(newInstance._name).equal("Petar", "1");
  });
  it("constructor value test", () => {
    let newInstance = new PaymentPackage("Petar", 220);

    expect(newInstance._value).equal(220, "1");
  });

  it("constructor VAT test", () => {
    let newInstance = new PaymentPackage("Petar", 220);

    expect(newInstance._VAT).equal(20, "1");
  });
  it("constructor Active test", () => {
    let newInstance = new PaymentPackage("Petar", 220);

    expect(newInstance._active).equal(true, "220");
  });

  it("Throws errow if the new Name is a number", () => {
    expect(() => new PaymentPackage(222, 333)).to.throw(
      "Name must be a non-empty string"
    );
  });

  it("Throws error if the new Name is empty", () => {
    expect(() => new PaymentPackage("", 66)).to.throw(
      "Name must be a non-empty string"
    );
  });

  it("Returns correct result", () => {
    expect(() => new PaymentPackage("test", 33)).not.to.throw(
      "Name must be a non-empty string"
    );
  });
});

describe("Values tests", () => {
  it("Returns correct results", () => {
    expect(() => new PaymentPackage("test", 44)).not.to.throw(
      "Value must be a non-negative number"
    );
  });
  it("Throws error if value is a string", () => {
    expect(() => new PaymentPackage("test", "test")).to.throw(
      "Value must be a non-negative number"
    );
  });
  it("Throws error if value is an []", () => {
    expect(() => new PaymentPackage("test", [101])).to.throw(
      "Value must be a non-negative number"
    );
  });

  it("Check to set value to 0", () => {
    let newInstance = new PaymentPackage("Petar", 100);
    expect(() => {
      newInstance.value = 0;
    }).to.not.Throw();
  });
});

describe("VAT tests", () => {
  it("Returns correct results", () => {
    let mainClass = new PaymentPackage("test", 222);
    expect(() => (mainClass.VAT = 222)).not.to.throw(
      "VAT must be a non-negative number"
    );
  });
  it("Throws error if VAT is a string", () => {
    let mainClass = new PaymentPackage("test", 77);
    expect(() => (mainClass.VAT = "test")).to.throw(
      "VAT must be a non-negative number"
    );
  });

  it("Throws error if VAT is negative", () => {
    let mainClass = new PaymentPackage("test", 222);
    expect(() => (mainClass.VAT = -222)).to.throw(
      "VAT must be a non-negative number"
    );
  });

  it("Throws error if VAT is an []", () => {
    let flagClass = new PaymentPackage("test", 222);
    expect(() => (flagClass.VAT = [222])).to.throw(
      "VAT must be a non-negative number"
    );
  });
});

describe("Active tests", () => {
  it("Returns correct results", () => {
    let mainClass = new PaymentPackage("test", 222);
    expect(() => (mainClass.active = true)).not.to.throw(
      "Active status must be a boolean"
    );
  });
  it("Throws error if the new Active is a string", () => {
    let mainClass = new PaymentPackage("test", 222);
    expect(() => (mainClass.active = "test")).to.throw(
      "Active status must be a boolean"
    );
  });

  it("Throws error if Active is []", () => {
    let mainClass = new PaymentPackage("test", 222);
    expect(() => (mainClass.active = [222])).to.throw(
      "Active status must be a boolean"
    );
  });
});

describe("toString function test", () => {
  it("Returns correct results", () => {
    let mainClass = new PaymentPackage("test", 222);
    let output = [
      `Package: test`,
      `- Value (excl. VAT): 222`,
      `- Value (VAT 20%): 266.4`,
    ];
    expect(mainClass.toString()).to.equal(output.join("\n"));
  });
});

it("Returns correct results second test", () => {
  let mainClass = new PaymentPackage("test", 222);
  mainClass.VAT = 30;
  mainClass.active = false;
  let output = [
    `Package: test (inactive)`,
    `- Value (excl. VAT): 222`,
    `- Value (VAT 30%): 288.6`,
  ];
  expect(mainClass.toString()).to.equal(output.join("\n"));
});
