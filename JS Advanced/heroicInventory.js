function solve(arr) {
  let result = [];
  for (line of arr) {
    let [name, level, ...items] = line.split(" / ");
    level = Number(level);
    if (items.length > 0) {
      items = items.join(",").split(", ");
    } else {
      items = [];
    }
    let heroes = { name: name, level: level, items: items };

    result.push(heroes);
  }
  console.log(JSON.stringify(result));
}
solve([
  "Isacc / 25 / Apple, GravityGun",
  "Derek / 12 / BarrelVest, DestructionSword",
  "Hes / 1 / Desolator, Sentinel, Antara",
]);