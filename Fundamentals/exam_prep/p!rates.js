function solve(arr) {
  let list = {};
  let line = arr.shift();

  while (line !== "Sail") {
    let cityName = line.split("||")[0];
    let cityPopulation = Number(line.split("||")[1]);
    let cityGold = Number(line.split("||")[2]);

    if (!list.hasOwnProperty(cityName)) {
      list[cityName] = [cityPopulation, cityGold];
    } else {
      list[cityName][0] += cityPopulation;
      list[cityName][1] += cityGold;
    }
    line = arr.shift();
  }

  line = arr.shift();
  while (line !== "End") {
    let command = line.split("=>")[0];

    switch (command) {
      case "Plunder":
        plunder(line);
        break;
      case "Prosper":
        prosper(line);
        break;
    }

    line = arr.shift();
  }

  let sorted = Object.entries(list);
  let citiesCount = sorted.length;

  if (citiesCount > 0) {
    sorted.sort((a, b) => {
      let nameA = a[0];
      let nameB = b[0];
      let goldA = a[1][1];
      let goldB = b[1][1];
      if (goldA !== goldB) {
        return goldB - goldA;
      } else {
        return nameA.localeCompare(nameB);
      }
    });

    console.log(
      `Ahoy, Captain! There are ${citiesCount} wealthy settlements to go to:`
    );
    for (let city of sorted) {
      let cityName = city[0];
      let cityPopulation = city[1][0];
      let cityGold = city[1][1];
      console.log(
        `${cityName} -> Population: ${cityPopulation} citizens, Gold: ${cityGold} kg`
      );
    }
  } else {
    console.log(
      `Ahoy, Captain! All targets have been plundered and destroyed!`
    );
  }

  function plunder(line) {
    let cityName = line.split("=>")[1];
    let peopleToKill = Number(line.split("=>")[2]);
    let goldToSteal = Number(line.split("=>")[3]);

    if (list.hasOwnProperty(cityName)) {
      let population = list[cityName][0];
      let gold = list[cityName][1];
      let killedPeople = 0;
      let goldStolled = 0;

      if (population <= peopleToKill) {
        killedPeople = population;
        list[cityName][0] = 0;
      } else {
        killedPeople = peopleToKill;
        list[cityName][0] -= killedPeople;
      }
      if (gold <= goldToSteal) {
        goldStolled = gold;
        list[cityName][1] = 0;
      } else {
        goldStolled = goldToSteal;
        list[cityName][1] -= goldStolled;
      }
      console.log(
        `${cityName} plundered! ${goldStolled} gold stolen, ${killedPeople} citizens killed.`
      );

      if (list[cityName][0] === 0 || list[cityName][1] === 0) {
        console.log(`${cityName} has been wiped off the map!`);
        delete list[cityName];
      }
    }

    return list;
  }

  function prosper(line) {
    let cityName = line.split("=>")[1];
    let goldToAdd = Number(line.split("=>")[2]);
    if (goldToAdd < 0) {
      console.log(`Gold added cannot be a negative number!`);
      return list;
    }

    list[cityName][1] += goldToAdd;
    console.log(
      `${goldToAdd} gold added to the city treasury. ${cityName} now has ${list[cityName][1]} gold.`
    );
    return list;
  }
}
