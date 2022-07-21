class Laptop {
  constructor({ producer, age, brand }, quality) {
    this.laptop = {
      producer,
      age,
      brand,
    };
    this.quality = quality;
    this.isOn = false;
  }
  turnOn() {
    this.quality -= 1;
    this.isOn = true;
  }
  turnOff() {
    this.quality -= 1;
    this.isOn = false;
  }
  showInfo() {
    return JSON.stringify(this.laptop);
  }
  get price() {
    return 800 - this.laptop.age * 2 + this.quality * 0.5;
  }
}

let info = { producer: "Dell", age: 2, brand: "XPS" };
let laptop = new Laptop(info, 10);
laptop.turnOn();
console.log(laptop.showInfo());
laptop.turnOff();
console.log(laptop.quality);
laptop.turnOn();
console.log(laptop.isOn);
console.log(laptop.price);
