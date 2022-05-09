function arena(arr) {
  let gladiators = {};
  for (let el of arr) {
    if (el === "Ave Cesar") {
      break;
    } else if (el.includes(" -> ")) {
      addSkill(el);
    } else if (el.includes(" vs ")) {
      fight(el);
    }
  }
  let tier = Object.entries(gladiators);
  let newArr = [];
  for (let el of tier) {
    let name = el[0];
    let power = Object.entries(el[1]);
    let sum = power.map((a) => a[1]).reduce((a, b) => a + b);
    newArr.push([name, power, sum]);
  }
  newArr.sort((a, b) => b[2] - a[2] || a[0].localeCompare(b[0]));
  for (let el of newArr) {
    console.log(`${el[0]}: ${el[2]} skill`);
    el[1]
      .sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0]))
      .map((x) => console.log(`- ${x[0]} <!> ${x[1]}`));
  }

  function addSkill(el) {
    let [gladiator, skill, power] = el.split(" -> ");
    power = Number(power);
    if (!gladiators.hasOwnProperty(gladiator)) {
      gladiators[gladiator] = {};
      gladiators[gladiator][skill] = power;
    } else {
      if (!gladiators[gladiator].hasOwnProperty(skill)) {
        gladiators[gladiator][skill] = power;
      } else {
        let oldPower = gladiators[gladiator][skill];
        if (power > oldPower) {
          gladiators[gladiator][skill] = power;
        }
      }
    }
  }
  function fight(el) {
    let [gladiator1, gladiator2] = el.split(" vs ");
    if (
      gladiators.hasOwnProperty(gladiator1) &&
      gladiators.hasOwnProperty(gladiator2)
    ) {
      let skill1 = gladiators[gladiator1];
      let skill2 = gladiators[gladiator2];
      for (let el1 in skill1) {
        for (let el2 in skill2) {
          if (el1 === el2) {
            if (skill1[el1] > skill2[el2]) {
              delete gladiators[gladiator2];
            } else if (skill1[el1] < skill2[el2]) {
              delete gladiators[gladiator1];
            }
          }
        }
      }
    }
  }
}
arena([
  "Peter -> BattleCry -> 400",
  "Alex -> PowerPunch -> 300",
  "Stefan -> Duck -> 200",
  "Stefan -> Tiger -> 250",
  "Ave Cesar",
]);
