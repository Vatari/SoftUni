function heroRecrcruitment(arr) {
  let heroes = {};

  while (arr[0] !== "End") {
    let [command, name, spell] = arr.shift().split(` `);

    if (command == "Enroll") {
      if (heroes.hasOwnProperty(name) == false) {
        heroes[name] = [];
      } else {
        console.log(`${name} is already enrolled.`);
      }
    }
    if (command === "Learn") {
      if (heroes.hasOwnProperty(name)) {
        if (heroes[name].includes(spell)) {
          console.log(`${name} has already learnt ${spell}.`);
        } else {
          heroes[name].push(spell);
        }
      } else {
        console.log(`${name} doesn't exist.`);
      }
    }
    if (command === "Unlearn") {
      if (heroes.hasOwnProperty(name)) {
        if (heroes[name].includes(spell) == false) {
          console.log(`${name} doesn't know ${spell}.`);
        } else {
          let searchedIndex = heroes[name].indexOf(spell);
          heroes[name].splice(searchedIndex, 1);
        }
      } else {
        console.log(`${name} doesn't exist.`);
      }
    }
  }
  console.log(`Heroes:`);
  for (let currHero in heroes) {
    console.log(`== ${currHero}: ${heroes[currHero].join(`, `)}`);
  }
}
heroRecrcruitment([
  "Enroll Stefan",
  "Enroll Peter",
  "Enroll Stefan",
  "Learn Stefan ItShouldWork",
  "Learn John ItShouldNotWork",
  "Unlearn George Dispel",
  "Unlearn Stefan ItShouldWork",
  "End",
]);
console.log(`---`);
heroRecrcruitment([
  "Enroll Stefan",
  "Learn Stefan ItShouldWork",
  "Learn Stefan ItShouldWork",
  "Unlearn Stefan NotFound",
  "End",
]);
console.log(`---`);
heroRecrcruitment([
  "Enroll Stefan",
  "Enroll Peter",
  "Enroll John",
  "Learn Stefan Spell",
  "Learn Peter Dispel",
  "End",
]);
