function armies(arr) {
  let armies = {};
  let leaders = [];

  for (let el of arr) {
    if (el.includes("arrives")) {
      let indexOfArrives = el.indexOf("arrives");
      let leader = el.slice(0, indexOfArrives).trim();
      if (!armies.hasOwnProperty(leader)) {
        armies[leader] = {
          armyName: {},
          armyCount: 0,
        };
      }
      leaders.push(leader);
    } else if (el.includes("defeated")) {
      let indexOfDefeated = el.indexOf("defeated");
      let leader = el.slice(0, indexOfDefeated).trim();
      let indexOfLeader = leaders.indexOf(leader);
      if (armies.hasOwnProperty(leader)) {
        delete armies[leader];
        leaders.splice(indexOfLeader, 1);
      }
    } else if (el.includes(":")) {
      let [leader, army] = el.split(": ");
      let [armyName, armyCount] = army.split(", ");
      if (armies.hasOwnProperty(leader)) {
        if (!armies[leader].armyName.hasOwnProperty(armyName)) {
          armies[leader].armyName[armyName] = Number(armyCount);
          armies[leader].armyCount += Number(armyCount);
        }
      }
    } else if (el.includes("+")) {
      let [armyName, armyCount] = el.split(" + ");
      leaders.forEach((leader) => {
        for (let army in armies[leader]) {
          if (armies[leader][army].hasOwnProperty(armyName)) {
            armies[leader].armyName[armyName] += Number(armyCount);
            armies[leader].armyCount += Number(armyCount);
          }
        }
      });
    }
  }
  // console.log(armies);
  Object.entries(armies)
    .sort((a, b) => b[1].armyCount - a[1].armyCount)
    .forEach((army) => {
      console.log(`${army[0]}: ${army[1].armyCount}`);
      Object.entries(army[1].armyName)
        .sort((a, b) => b[1] - a[1])
        .forEach((armyName) => {
          console.log(`>>> ${armyName[0]} - ${armyName[1]}`);
        });
    });
}
armies([
  "Rick Burr arrives",
  "Fergus: Wexamp, 30245",
  "Rick Burr: Juard, 50000",
  "Findlay arrives",
  "Findlay: Britox, 34540",
  "Wexamp + 6000",
  "Juard + 1350",
  "Britox + 4500",
  "Porter arrives",
  "Porter: Legion, 55000",
  "Legion + 302",
  "Rick Burr defeated",
  "Porter: Retix, 3205",
]);
