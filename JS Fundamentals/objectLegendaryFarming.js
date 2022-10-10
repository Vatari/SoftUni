function farming(arr) {
  let input = arr.toLowerCase().split(" ");
  let legendary = { fragments: 0, shards: 0, motes: 0 };
  let junk = {};
  let materialsNeeded = false;
  while (!materialsNeeded && input.length > 0) {
    let qty = +input.shift();
    let material = input.shift();
    switch (material) {
      case "shards":
        legendary[material] += qty;
        if (legendary[material] >= 250) {
          console.log(`Shadowmourne obtained!`);
          legendary[material] -= 250;
          materialsNeeded = true;
        }
        break;
      case "fragments":
        legendary[material] += qty;
        if (legendary[material] >= 250) {
          console.log(`Valanyr obtained!`);
          legendary[material] -= 250;
          materialsNeeded = true;
        }
        break;
      case "motes":
        legendary[material] += qty;
        if (legendary[material] >= 250) {
          console.log(`Dragonwrath obtained!`);
          legendary[material] -= 250;
          materialsNeeded = true;
        }
        break;
      default:
        if (!junk.hasOwnProperty(material)) {
          junk[material] = 0;
        }
        junk[material] += qty;
        break;
    }
  }
  Object.entries(legendary)
    .sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0]))
    .forEach((el) => {
      console.log(`${el[0]}: ${el[1]}`);
    });

  Object.entries(junk)
    .sort((a, b) => a[0].localeCompare(b[0]))
    .forEach((el) => {
      console.log(`${el[0]}: ${el[1]}`);
    });
}
farming(
  "1243 silver 6 shards 8 shards 5 motes 9 fangs 75 motes 103 MOTES 8 Shards 86 Motes 7 stones 19 silver"
);
