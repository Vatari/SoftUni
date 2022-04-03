function cinemaTickets(input) {
  let index = 0;
  let command = input[index];
  let studentCounter = 0;
  let standartCounter = 0;
  let kidCounter = 0;
  let totalTicketsCounter = 0;

  while (command !== "Finish") {
    let name = command;
    index++;
    let freeSpaces = Number(input[index]);
    index++;
    let ticketType = input[index];
    let ticketCounter = 0;
    while (ticketType !== "End") {
      ticketCounter++;
      switch (ticketType) {
        case "standard":
          standartCounter++;
          break;
        case "student":
          studentCounter++;
          break;
        case "kid":
          kidCounter++;
          break;
      }
      if (ticketCounter >= freeSpaces) {
        break;
      }
      ticketType = input[++index];
    }
    totalTicketsCounter += ticketCounter;
    let resultSingleFilm = (ticketCounter / freeSpaces) * 100;
    console.log(`${name} - ${resultSingleFilm.toFixed(2)}% full.`);
    command = input[++index];
  }

  console.log(`Total tickets: ${totalTicketsCounter}`);
  console.log(
    `${((studentCounter / totalTicketsCounter) * 100).toFixed(
      2
    )}% student tickets.`
  );
  console.log(
    `${((standartCounter / totalTicketsCounter) * 100).toFixed(
      2
    )}% standard tickets.`
  );
  console.log(
    `${((kidCounter / totalTicketsCounter) * 100).toFixed(2)}% kids tickets.`
  );
}
cinemaTickets([
  "Taxi",
  "10",
  "standard",
  "kid",
  "student",
  "student",
  "standard",
  "standard",
  "End",
  "Scary Movie",
  "6",
  "student",
  "student",
  "student",
  "student",
  "student",
  "student",
  "Finish",
]);
