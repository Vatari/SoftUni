function theHuntingGames(arr) {
  let days = +arr.shift();
  let players = +arr.shift();
  let energy = +arr.shift();

  let waterForOnePerson = +arr.shift();
  let foodForOnePerson = +arr.shift();
  let water = days * players * waterForOnePerson;
  let food = days * players * foodForOnePerson;
  let dayCount = 0;

  for (let i = 0; i < arr.length; i++) {
    wastedEnergy = +arr[i];
    energy -= wastedEnergy;
    dayCount++;

    if (energy <= 0) {
      console.log(
        `You will run out of energy. You will be left with ${food.toFixed(
          2
        )} food and ${water.toFixed(2)} water.`
      );
      break;
    }
    if (dayCount % 2 == 0) {
      water -= water * 0.3;
      energy += energy * 0.05;
    }
    if (dayCount % 3 == 0) {
      food -= food / players;
      energy += energy * 0.1;
    }
  }

  if (energy > 0) {
  console.log(
    `You are ready for the quest. You will be left with - ${energy.toFixed(
      2
    )} energy!`
  );
    }
}
/* theHuntingGames([
  "10",
  "7",
  "5035.5",
  "11.3",
  "7.2",
  "942.3",
  "500.57",
  "520.68",
  "540.87",
  "505.99",
  "630.3",
  "784.20",
  "321.21",
  "456.8",
  "330",
]); */
theHuntingGames([
  "12",
  "6",
  "4430",
  "9.8",
  "5.5",
  "620.3",
  "840.2",
  "960.1",
  "220",
  "340",
  "674",
  "365",
  "345.5",
  "212",
  "412.12",
  "258",
  "496",
]);
