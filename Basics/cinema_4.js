function abc(input) {
  let totalCapacity = Number(input[0]);
  let index = 1;
  let command = input[index];
  let money = 0;
  isFull = false;
  let countSeats = 0;

  while (command !== "Movie time!") {
    let people = Number(input[index]);
    countSeats += people;

    if (countSeats > totalCapacity) {
      console.log(`The cinema is full.`);
      console.log(`Cinema income - ${money} lv.`);
      isFull = true;
      break;
    }

    if (people % 3 === 0) {
      money += people * 5 - 5;
    } else {
      money += people * 5;
    }

    index++;
    command = input[index];
  }
  if (!isFull) {
    console.log(
      `There are ${totalCapacity - countSeats} seats left in the cinema.`
    );
    console.log(`Cinema income - ${money} lv.`);
  }
}

abc(["50", "15", "10", "10", "15", "5"]);
