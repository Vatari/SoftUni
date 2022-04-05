function solve(arr) {
  let gladiators = {};

  while (arr[0] != "Ave Cesar") {
    let [name, skill, skillPoints] = arr.shift().split(" -> ");
    skillPoints = +skillPoints;

    if (!gladiators.hasOwnProperty(name)) {
      gladiators[name] = [skill, skillPoints];
    } else {
      if (!gladiators[name].includes(skill)) {
        gladiators[name].push(skill, skillPoints);
      } else {
        let oldPoints = gladiators[name][1];
        if (oldPoints < skillPoints) {
          gladiators[name][0][1] = skillPoints;
        }
      }
    }
  }
  console.log(gladiators);
}
solve([
  "Peter -> BattleCry -> 400",
  "Alex -> PowerPunch -> 300",
  "Stefan -> Duck -> 12",
  "Stefan -> Duck -> 2223423423400",
  "Stefan -> Duck -> 2",
  "Stefan -> Tiger -> 11250",
  "Stefan -> Tiger -> 1250",
  "Stefan -> Tiger -> 1111250",
  "Ave Cesar",
]);
