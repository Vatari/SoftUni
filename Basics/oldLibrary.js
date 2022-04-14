function oldLibrary(input) {
  let book = input[0];
  let index = 1;
  let command = input[index];

  while (command !== "No More Books") {
    if (command === book) {
      console.log(`You checked ${index - 1} books and found it.`);
      break;
    }
    index++;
    command = input[index];
  }
  if (command !== book) {
    console.log(`The book you search is not here!`);
    console.log(`You checked ${index - 1} books.`);
  }
}
oldLibrary([
  "Bourne",
  "True Story",
  "Forever",
  "More Space",
  "The Girl",
  "Spaceship",
  "Strongest",
  "Profit",
  "Tripple",
  "Stella",
  "The Matrix",
  "Bourne",
]);
