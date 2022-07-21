function garage(arr) {
  let garages = {};
  //store cars in garage
  for (el of arr) {
    let [garageNumber, cars] = el.split(" - ");
    if (!garages.hasOwnProperty(garageNumber)) {
      garages[garageNumber] = [];
    }
    garages[garageNumber].push(cars);
  }
  let sorted = Object.entries(garages);
  for (let [garage, cars] of sorted) {
    console.log(`Garage № ${garage}`);

    for (let car of cars) {
      car = car.replace(/: /g, " - ");
      console.log(`--- ${car}`);
    }
  }
}
garage([
  "1 - color: blue, fuel type: diesel",
  "1 - color: red, manufacture: Audi",
  "2 - fuel type: petrol",
  "4 - color: dark blue, fuel type: diesel, manufacture: Fiat",
]);
