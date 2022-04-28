function deckOfCards(arr) {
  let newArr = arr.shift().split(", ");
  let n = Number(arr.shift());

  for (let i = 0; i < n; i++) {
    let tokens = arr[i].split(", ");
    let command = tokens[0];
    let index = tokens[1];
    let card = tokens[2];

    if (command === "Add") {
      if (newArr.includes(index)) {
        console.log("Card is already in the deck");
      } else {
        newArr.push(index);
        console.log("Card successfully added");
      }
    } else if (command === "Remove") {
      if (newArr.includes(index)) {
        let findIndex = newArr.indexOf(index);
        newArr.splice(findIndex, 1);
        console.log("Card successfully removed");
      } else {
        console.log("Card not found");
      }
    } else if (command === "Remove At") {
      let currentIndex = +(index);
      if (currentIndex >= 0 && currentIndex < newArr.length) {
        newArr.splice(currentIndex, 1);
        console.log("Card successfully removed");
      } else {
        console.log("Index out of range");
      }
    } else if (command === "Insert") {
      let currentIndex = +(index);
      if (currentIndex >= 0 && currentIndex < newArr.length) {
        if (newArr.includes(card)) {
          console.log("Card is already added");
        } else {
          newArr.splice(currentIndex, 0, card);
          console.log("Card successfully added");
        }
      } else {
        console.log("Index out of range");
      }
    }
  }

  console.log(newArr.join(", "));
}
deckOfCards([
  "Jack of Spades, Ace of Clubs, Jack of Clubs",
  "2",
  "Insert, -1, Queen of Spades",
  "Remove At, 1",
]);
