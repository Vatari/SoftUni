function solve(arr) {
  let animals = {};
  let areas = {};
  while (arr[0] !== "EndDay") {
    line = arr.shift();
    let command = line.split(": ").shift();
    let [name, limit, area] = line.split("-");
    let unused = name.split(": ");
    name = unused[1];
    if (command === "Add") {
      if (!animals.hasOwnProperty(name)) {
        animals[name] = 0;
        if (!areas.hasOwnProperty(area)) {
          areas[area] = 0;
        }
        areas[area]++;
      }
      animals[name] += +limit;
    } else if (command === "Feed") {
      if (animals.hasOwnProperty(name)) {
        animals[name] -= +limit;

        if (animals[name] <= 0) {
          console.log(`${name} was successfully fed`);
          delete animals[name];
          areas[area]--;
        }
      }
    }
  }
  let feededAnimals = Object.entries(animals);

  console.log("Animals:");
  feededAnimals.forEach((animal) => {
    console.log(`${animal[0]} -> ${animal[1]}g`);
  });

  let areasWithHungryAnimals = Object.entries(areas);

  console.log("Areas with hungry animals:");
  areasWithHungryAnimals.forEach((area) => {
    console.log(`${area[0]} : ${area[1]}`);
  });
}

solve([
  "Add: Bonie-3490-RiverArea",
  "Add: Sam-5430-DeepWoodsArea",
  "Add: Bonie-200-RiverArea",
  "Add: Maya-4560-ByTheCreek",
  "Feed: Maya-2390",
  "Feed: Bonie-3500",
  "Feed: Johny-3400",
  "Feed: Sam-5500",
  "EndDay",
]);
