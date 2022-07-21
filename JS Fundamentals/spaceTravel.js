function spaceTravel(arr) {
  let commands = arr.shift().split("||");
  let fuel = +arr.shift();
  let ammo = +arr.shift();
  let command = commands.shift();
  let isArrived = true;
  while (command !== "Titan") {
    let tokens = command.split(" ");
    let word = tokens.shift();
    let values = +tokens.shift();
    if (word === "Travel") {
      if (fuel > 0) {
        fuel -= values;
        console.log(`The spaceship travelled ${values} light-years.`);
      } else {
        isArrived = false;
        console.log("Mission failed.");
        break;
      }
    } else if (word === "Enemy") {
      if (ammo >= values) {
        ammo -= values;
        console.log(`An enemy with ${values} armour is defeated.`);
      } else if (fuel >= 2 * values) {
        fuel -= values * 2;
        console.log(`An enemy with ${values} armour is outmaneuvered.`);
      } else {
        isArrived = false;
        console.log("Mission failed.");
        break;
      }
    } else if (word === "Repair") {
      fuel += values;
      ammo += 2 * values;
      console.log(`Ammunitions added: ${2 * values}.`);
      console.log(`Fuel added: ${values}.`);
    }

    command = commands.shift();
  }
  if (isArrived) {
    console.log("You have reached Titan, all passengers are safe.");
  }
}
spaceTravel([
  "Travel 20||Enemy 50||Enemy 50||Enemy 10||Repair 15||Enemy 50||Titan",
  "60",
  "100",
]);
