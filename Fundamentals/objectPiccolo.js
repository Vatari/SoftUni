function piccolo(arr) {
  let cars = new Set();

  for (let carDetails of arr) {
    let [direction, number] = carDetails.split(", ");

    if (direction === "IN") {
      cars.add(number);
    } else {
      cars.delete(number);
    }
    if (cars.size <= 0) {
      console.log("Parking Lot is Empty");
      break;
    }
  }
  let sorted = Array.from(cars.keys());
  sorted.sort();
  for (let carNumber of sorted) {
    console.log(carNumber);
  }
}
piccolo([
  "IN, CA2844AA",
  "IN, CA1234TA",
  "OUT, CA2844AA",
  "IN, CA9999TT",
  "IN, CA2866HI",
  "OUT, CA1234TA",
  "IN, CA2844AA",
  "OUT, CA2866HI",
  "IN, CA9876HH",
  "IN, CA2822UU",
]);
