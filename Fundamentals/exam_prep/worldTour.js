function solve(arr) {
  /*     You are a world traveler, and your next goal is to make a world tour. To do that, you have to plan out everything first. 
    To start with, you would like to plan out all of your stops where you will have a break.
    On the first line, you will be given a string containing all of your stops. Until you receive the command "Travel", 
    you will be given some commands to manipulate that initial string. The commands can be:
    •	"Add Stop:{index}:{string}":
    o	Insert the given string at that index only if the index is valid
    •	"Remove Stop:{start_index}:{end_index}":
    o	Remove the elements of the string from the starting index to the end index (inclusive) if both indices are valid
    •	"Switch:{old_string}:{new_string}":
    o	If the old string is in the initial string, replace it with the new one (all occurrences)
    Note: After each command, print the current state of the string
    After the "Travel" command, print the following: "Ready for world tour! Planned stops: {string}"
    Input / Constraints
    •	JavaScript: you will receive a list of strings
    •	An index is valid if it is between the first and the last element index (inclusive) in the sequence.
    Output
    •	Print the proper output messages in the proper cases as described in the problem description */

  let destination = arr.shift();

  while (arr[0] !== "Travel") {
    let command = arr.shift().split(":");

    if (command[0] === "Add Stop") {
      let index = +command[1];
      let string = command[2];
      if (index >= 0) {
        destination =
          destination.slice(0, index) + string + destination.slice(index);
        console.log(destination);
      }
    } else if (command[0] === "Remove Stop") {
      let startIndex = +command[1];
      let endIndex = +command[2];
      if (startIndex >= 0 && endIndex >= 0) {
        destination =
          destination.slice(0, startIndex) + destination.slice(endIndex + 1);
        console.log(destination);
      }
    } else if (command[0] === "Switch") {
      let oldString = command[1];
      let newString = command[2];
      destination = destination.replace(oldString, newString);
      console.log(destination);
    }
  }
  console.log(`Ready for world tour! Planned stops: ${destination}`);
}
solve([
  "Hawai::Cyprys-Greece",
  "Add Stop:7:Rome",
  "Remove Stop:11:16",
  "Switch:Hawai:Bulgaria",
  "Travel",
]);
