function degustationParty(arr) {
  let result = {};
  let unlikedMeals = [];

  while (arr[0] !== "Stop") {
    let line = arr.shift().split("-");
    let command = line[0];
    let guest = line[1];
    let meal = line[2];

    if (command === "Like") {
      if (!result.hasOwnProperty(guest)) {
        result[guest] = [meal];
      } else {
        if (!result[guest].includes(meal)) {
          result[guest].push(meal);
        }
      }
    }
    if (command === "Dislike") {
      if (!result.hasOwnProperty(guest)) {
        console.log(`${guest} is not at the party.`);
      } else {
        if (result[guest].includes(meal)) {
          result[guest].splice(result[guest].indexOf(meal), 1);
          console.log(`${guest} doesn't like the ${meal}.`);
          unlikedMeals.push(meal);
        } else {
          console.log(
            `${guest} doesn't have the ${meal} in his/her collection.`
          );
        }
      }
    }
  }
  let guests = Object.keys(result);
  for (let guest of guests) {
    console.log(`${guest}: ${result[guest].join(", ")}`);
  }
  console.log(`Unliked meals: ${unlikedMeals.length}`);
}

//degustationParty(["Like-Katy-fish", "Dislike-Katy-fish", "Stop"]);
degustationParty([
  "Like-Krisi-shrimps",
  "Dislike-Vili-carp",
  "Dislike-Krisi-salad",
  "Stop",
]);
