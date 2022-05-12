function inventory(arr) {
  let arrOfHeroes = [];

  for (let el of arr) {
    let info = el.split(" / ");
    let heroName = info[0];
    let heroLevel = +info[1];
    let heroItems = info[2];
    let heroes = {
      name: heroName,
      level: heroLevel,
      items: heroItems,
    };
    arrOfHeroes.push(heroes);
  }
  arrOfHeroes.sort((a, b) => a.level - b.level);
  for (let hero of arrOfHeroes) {
    console.log(
      `Hero: ${hero.name}\nlevel => ${hero.level}\nitems => ${hero.items}`
    );
  }
}
inventory([
  "Isacc / 25 / Apple, GravityGun",
  "Derek / 12 / BarrelVest, DestructionSword",
  "Hes / 1 / Desolator, Sentinel, Antara",
]);
