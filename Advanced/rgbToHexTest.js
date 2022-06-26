const { expect } = require("chai");
const { rgbToHexColor } = require("./RgbToHex");

describe("Test", () => {
  it("Convert to Black", () => {
    expect(rgbToHexColor(0, 0, 0)).to.equal("#000000");
  });
  it("Convert to White", () => {
    expect(rgbToHexColor(255, 255, 255)).to.equal("#FFFFFF");
  });
  it("Convert to Sofuni Blue", () => {
    expect(rgbToHexColor(35, 68, 101)).to.equal("#234465");
  });
  it("Test for undefined", () => {
    expect(rgbToHexColor(0, 0)).to.be.undefined;
    expect(rgbToHexColor(0)).to.be.undefined;
    expect(rgbToHexColor()).to.be.undefined;
  });
  it("Test for out of bound", () => {
    expect(rgbToHexColor(-1, 0, 0)).to.be.undefined;
    expect(rgbToHexColor(0, -1, 0)).to.be.undefined;
    expect(rgbToHexColor(0, 0, -1)).to.be.undefined;
  });
  it("Test for out of bound", () => {
    expect(rgbToHexColor(256, 0, 0)).to.be.undefined;
    expect(rgbToHexColor(0, 256, 0)).to.be.undefined;
    expect(rgbToHexColor(0, 0, 256)).to.be.undefined;
  });
});
