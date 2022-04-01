function solve(arr) {
  let carCount = arr.shift();
  let cars = {};
  for (let i = 0; i < carCount; i++) {
    let [car, mileage, fuel] = arr.shift().split("|");
    fuel = +fuel;
    mileage = +mileage;
    if (mileage > 0 && fuel > 0) {
      cars[car] = { mileage, fuel };
    }
  }

  while (arr[0] !== "Stop") {
    let line = arr.shift().split(" : ");
    let command = line[0];
    if (command === "Drive") {
      let car = line[1].trim();
      let distance = +line[2];
      let fuel = +line[3];
      if (cars.hasOwnProperty(car)) {
        if (cars[car].fuel < fuel) {
          console.log(`Not enough fuel to make that ride`);
        } else {
          cars[car].fuel -= fuel;
          cars[car].mileage += distance;
          console.log(
            `${car} driven for ${distance} kilometers. ${fuel} liters of fuel consumed.`
          );
        }

        if (cars[car].mileage >= 100000) {
          console.log(`Time to sell the ${car}!`);
          delete cars[car];
        }
      }
    }
    if (command === "Refuel") {
      let car = line[1].trim();
      let fuel = +line[2];

      if (cars.hasOwnProperty(car)) {
        let oldFuel = cars[car].fuel;
        cars[car].fuel += fuel;
        if (cars[car].fuel > 75) {
          cars[car].fuel = 75;
          console.log(`${car} refueled with ${75 - oldFuel} liters`);
        } else {
          console.log(`${car} refueled with ${fuel} liters`);
        }
      }
    }
    if (command === "Revert") {
      let car = line[1].trim();
      let mileage = +line[2];
      if (cars.hasOwnProperty(car)) {
        cars[car].mileage -= mileage;
        if (cars[car].mileage < 10000) {
          cars[car].mileage = 10000;
          continue;
        }
        console.log(`${car} mileage decreased by ${mileage} kilometers`);
      }
    }
  }
  for (car in cars) {
    console.log(
      `${car} -> Mileage: ${cars[car].mileage} kms, Fuel in the tank: ${cars[car].fuel} lt.`
    );
  }
}
solve([
  "4",
  "Lamborghini Veneno|11111|74",
  "Bugatti Veyron|12345|67",
  "Koenigsegg CCXR|67890|12",
  "Aston Martin Valkryie|99900|50",
  "Drive : Koenigsegg CCXR : 382 : 82",
  "Drive : Aston Martin Valkryie : 99 : 23",
  "Drive : Aston Martin Valkryie : 2 : 1",
  "Refuel : Lamborghini Veneno : 40",
  "Revert : Bugatti Veyron : 2000",
  "Stop",
]);
/* solve([
  "3",
  "Audi A6|38000|62",
  "Mercedes CLS|11000|35",
  "Volkswagen Passat CC|45678|5",
  "Drive : Audi A6 : 543 : 47",
  "Drive : Mercedes CLS : 94 : 11",
  "Drive : Volkswagen Passat CC : 69 : 8",
  "Refuel : Audi A6 : 50",
  "Revert : Mercedes CLS : 500",
  "Revert : Audi A6 : 30000",
  "Stop",
]); */
