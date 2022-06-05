function solve(obj) {
  wheels = [];
  let newCar = {
    model: obj.model,
  };
  if (obj.power <= 90) {
    newCar.engine = { power: 90, volume: 1800 };
  } else if (obj.power <= 120) {
    newCar.engine = { power: 120, volume: 2400 };
  } else {
    newCar.engine = { power: 200, volume: 3500 };
  }
  newCar.carriage = { type: obj.carriage, color: obj.color };

  for (i = 0; i < 4; i++) {
    if (obj.wheelsize % 2 == 0) {
      obj.wheelsize -= 1;
    }
    wheels.push(obj.wheelsize);
  }
  newCar.wheels = wheels
  return newCar;
}
solve({
  model: "Opel Vectra",
  power: 110,
  color: "grey",
  carriage: "coupe",
  wheelsize: 17,
});
