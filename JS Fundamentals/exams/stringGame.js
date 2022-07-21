function stringGame(arr) {
  let originalString = arr.shift();

  while (arr[0] !== "Done") {
    let line = arr.shift().split(" ");
    let command = line[0];

    if (command === "Change") {
      originalString = originalString.split(line[1]).join(line[2]);
      console.log(originalString);
    }
    if (command === "Includes") {
      let str = line[1];
      if (!originalString.includes(str)) {
        console.log("False");
      } else {
        console.log("True");
      }
    }
    if (command === "End") {
      if (originalString.endsWith(line[1])) {
        console.log("True");
      } else {
        console.log("False");
      }
    }
    if (command === "Uppercase") {
      originalString = originalString.toLocaleUpperCase();
      console.log(originalString);
    }
    if (command === "FindIndex") {
      let str = line[1];
      let index = originalString.indexOf(str);
      console.log(index);
    }
    if (command === "Cut") {
      let startIndex = Number(line[1]);
      let count = Number(line[2]);
      let sliced = originalString.slice(startIndex, count + startIndex);
      console.log(sliced);
    }
  }
}
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
