function convertToJSON(firstName, lastName, hairColor) {
  let newText = { name: firstName, lastName, hairColor: hairColor };
  console.log(JSON.stringify(newText));
}
convertToJSON("George", "Jones", "Brown");
