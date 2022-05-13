function nikuldenMeals(input) {
  let result = {};
  let line = input.shift();
  let unliked = 0;
  while (line !== "Stop") {
    let [command, name, meal] = line.split("-");
    if (command === "Unlike") {
      if (!result.hasOwnProperty(name)) {
        console.log(`${name} is not at the party.`);
      } else {
        if (result[name].indexOf(meal) === -1) {
          console.log(
            `${name} doesn't have the ${meal} in his/her collection.`
          );
        } else {
          console.log(`${name} doesn't like the ${meal}.`);
          let index = result[name].indexOf(meal);
          result[name].splice(index, 1);
          unliked++;
        }
      }
    } else if (command === "Like") {
      if (!result.hasOwnProperty(name)) {
        result[name] = [];
        result[name].push(meal);
      } else {
        if (result[name].indexOf(meal) === -1) {
          result[name].push(meal);
        }
      }
    }

    line = input.shift();
  }
  let newArr = Object.entries(result);
  newArr.sort((a, b) => b[1].length - a[1].length || a[0].localeCompare(b[0]));
  for (let el of newArr) {
    console.log(`${el[0]}: ${el[1].join(", ")}`);
  }
  console.log(`Unliked meals: ${unliked}`);
}

nikuldenMeals([
  "Like-Krisi-shrimps",
  "Like-Krisi-soup",
  "Like-Misho-salad",
  "Like-Pena-dessert",
  "Stop",
]);
