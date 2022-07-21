function solve(arr) {
  let plantCount = +arr.shift();

  let plants = {};

  for (j = 0; j < plantCount; j++) {
    line = arr.shift();

    let [name, rarity] = line.split("<->");
    rarity = +rarity;
    plants[name] = { rarity, rating: [] };
  }

  while (arr[0] !== "Exhibition") {
    let line = arr.shift();
    let index = line.indexOf(":");
    let command = line.substring(0, index).trim();
    if (command === "Rate") {
      if (line.includes("-")) {
        let [name, rate] = line
          .substring(index + 1)
          .trim()
          .split(" - ");
        if (plants.hasOwnProperty(name)) {
          rate = +rate;
          if (rate > 0) {
            plants[name].rating.push(+rate);
          }
        } else {
          console.log("error");
        }
      }
    } else if (command === "Update") {
      if (line.includes("-")) {
        let [name, rarity] = line
          .substring(index + 1)
          .trim()
          .split(" - ");
        if (plants.hasOwnProperty(name)) {
          rarity = +rarity;
          if (rarity > 0) {
            plants[name].rarity = rarity;
          }
        } else {
          console.log("error");
        }
      }
    } else if (command === "Reset") {
      let name = line.substring(index + 1).trim();
      if (plants.hasOwnProperty(name)) {
        plants[name].rating = 0;
      } else {
        console.log("error");
      }
    }
  }

  console.log("Plants for the exhibition:");
  for (let name in plants) {
    console.log(
      `- ${name}; Rarity: ${plants[name].rarity}; Rating: ${average(
        plants[name].rating
      ).toFixed(2)}`
    );
  }

  function average(arr) {
    if (!arr.length) return 0;
    return arr.reduce((a, b) => a + b, 0) / arr.length;
  }
}
solve([
  "3",
  "Arnoldii<->4",
  "Woodii<->7",
  "Welwitschia<->2",
  "Rate: Woodii - 10",
  "Rate: Welwitschia - 7",
  "Rate: Arnoldii - 3",
  "Rate: Woodii - 5",
  "Update: Woodii - 5",
  "Reset: Arnoldii",
  "Exhibition",
]);
