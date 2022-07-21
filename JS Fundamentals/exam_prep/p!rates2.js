function solve(arr) {
  let cities = {};
  while (arr[0] !== "Sail") {
    let line = arr.shift();
    let [city, population, gold] = line.split("||");
    population = +population;
    gold = +gold;
    if (population > 0) {
      if (!cities.hasOwnProperty(city)) {
        cities[city] = { population, gold };
      } else {
        cities[city].population += population;
        cities[city].gold += gold;
      }
    }
  }
  let unused = arr.shift();
  while (arr[0] !== "End") {
    let line = arr.shift().split("=>");
    let command = line[0];
    if (command === "Plunder") {
      let city = line[1];
      let population = +line[2];
      let gold = +line[3];
      if (cities.hasOwnProperty(city)) {
        cities[city].population -= population;
        cities[city].gold -= gold;
        console.log(
          `${city} plundered! ${gold} gold stolen, ${population} citizens killed.`
        );

        if (cities[city].population <= 0 || cities[city].gold <= 0) {
          console.log(`${city} has been wiped off the map!`);
          delete cities[city];
        }
      }
    } else if (command === "Prosper") {
      let city = line[1];
      let gold = +line[2];
      if (gold < 0) {
        console.log(`Gold added cannot be a negative number!`);
      } else {
        if (cities.hasOwnProperty(city)) {
          cities[city].gold += gold;
          console.log(
            `${gold} gold added to the city treasury. ${city} now has ${cities[city].gold} gold.`
          );
        }
      }
    }
  }
  if (Object.keys(cities).length <= 0) {
    console.log(
      `Ahoy, Captain! All targets have been plundered and destroyed!`
    );
  } else {
    console.log(
      `Ahoy, Captain! There are ${
        Object.keys(cities).length
      } wealthy settlements to go to:`
    );
  }
  for (city in cities) {
    console.log(
      `${city} -> Population: ${cities[city].population} citizens, Gold: ${cities[city].gold} kg`
    );
  }
}
/* solve([
  "Tortuga||345000||1250",
  "Santo Domingo||240000||630",
  "Havana||410000||1100",
  "Sail",
  "Plunder=>Tortuga=>75000=>380",
  "Prosper=>Santo Domingo=>180",
  "End",
]); */

solve([
  "Nassau||95000||1000",
  "San Juan||930000||1250",
  "Campeche||270000||690",
  "Port Royal||320000||1000",
  "Port Royal||100000||2000",
  "Sail",
  "Prosper=>Port Royal=>-200",
  "Plunder=>Nassau=>94000=>750",
  "Plunder=>Nassau=>1000=>150",
  "Plunder=>Campeche=>150000=>690",
  "End",
]);
