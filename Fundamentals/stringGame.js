function stringGame(arr) {
  let myString = arr.shift();

  while (arr[0] !== "Done") {
    let tokens = arr.shift().split(` `);
    let command = tokens[0];

    if (command === `Change`) {
      let char = tokens[1];
      let replacement = tokens[2];
      myString = myString.split(char);
      myString = myString.join(replacement);
      console.log(myString);
    }
    if (command === "Includes") {
      let substring = tokens[1];
      if (myString.includes(substring)) {
        console.log(`True`);
      } else {
        console.log(`False`);
      }
    }
    if (command === "End") {
      let endStr = tokens[1];
      if (myString.endsWith(endStr)) {
        console.log(`True`);
      } else {
        console.log(`False`);
      }
    }
    if (command === "Uppercase") {
      myString = myString.toUpperCase();
      console.log(myString);
    }
    if (command === "FindIndex") {
      let currChar = tokens[1];
      let index = myString.indexOf(currChar);
      console.log(index);
    }
    if (command === "Cut") {
      let startIndex = +tokens[1];
      let count = +tokens[2];
      let cut = myString.substring(startIndex, startIndex + count);
      console.log(cut);
    }
  }
}
stringGame([
  "//Th1s 1s my str1ng!//",
  "Change 1 i",
  "Includes string",
  "End my",
  "Uppercase",
  "FindIndex I",
  "Cut 5 5",
  "Done",
]);
console.log(`---`);
stringGame([
  "*S0ftUni is the B3St Plac3**",
  "Change 2 o",
  "Includes best",
  "End is",
  "Uppercase",
  "FindIndex P",
  "Cut 3 7",
  "Done",
]);
