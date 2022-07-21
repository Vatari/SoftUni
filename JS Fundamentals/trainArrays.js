function train(arr) {
  let wagons = arr.shift().split(" ").map(Number);
  // parse first element as numbers

  let maxCapacity = +arr.shift();
  //take max capacity for each wagon and parse to number

  for (let i = 0; i < arr.length; i++) {
    let newArr = arr[i].split(" ");
    let command = newArr[0];
    let firstValue = newArr[1];
    //cycle and split other strings to array and assign them
    //to new variables
    if (command === "Add") {
      wagons.push(firstValue);
    } else {
      let passengers = +newArr[0];
      for (let j = 0; j < wagons.length; j++) {
        if (passengers + wagons[j] <= maxCapacity) {
          wagons[j] += passengers;
          break;
        }
      }
    }
  }
  console.log(wagons.join(" "));
}
train(["32 54 21 12 4 0 23", "75", "Add 10", "Add 0", "30", "10", "75"]);