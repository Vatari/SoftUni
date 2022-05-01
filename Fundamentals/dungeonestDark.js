function dungeonestDark(input) {
  let rooms = input[0].split("|");
  let health = 100;
  let coins = 0;
  let isFinished = true;

  for (let i = 0; i < rooms.length; i++) {
    let room = rooms[i].split(" ");
    console.log(room);

    if (room[0] === "potion") {
      let currHealth = +room[1];
      if (health <= 100) {
        if (health + currHealth >= 100) {
          currHealth = 100 - health; //health healed
          health = 100;
        } else {
          health += currHealth;
        }
        console.log(`You healed for ${currHealth} hp.`);
        console.log(`Current health: ${health} hp.`);
      }
    } else if (room[0] === "chest") {
      let coinsFound = +room[1];
      console.log(`You found ${coinsFound} coins.`);
      coins += coinsFound;
    } else {
      let monster = room[0];
      let attackOfMonster = +room[1];
      health -= attackOfMonster;

      if (health > 0) {
        console.log(`You slayed ${monster}.`);
      } else {
        console.log(`You died! Killed by ${monster}.`);
        console.log(`Best room: ${i + 1}`);
        isFinished = false;
        break;
      }
    }
  }
  if (isFinished) {
    console.log("You've made it!");
    console.log(`Coins: ${coins}`);
    console.log(`Health: ${health}`);
  }
}
dungeonestDark(["rat 10|bat 20|potion 10|rat 10|chest 100|boss 70|chest 1000"]);
//dungeonestDark(["cat 10|potion 30|orc 10|chest 10|snake 25|chest 110"]);
