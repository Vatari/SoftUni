function solve(arr) {
  let result = [];

  arr.forEach((x) => {
    let face = x.slice(0, -1);
    let suit = x.slice(-1);
    try {
      const card = createCard(face, suit);

      result.push(card);
    } catch (err) {
      result = ["Invalid card: " + x];
    }
  });

  function createCard(face, suit) {
    const faces = [
      "2",
      "3",
      "4",
      "5",
      "6",
      "7",
      "8",
      "9",
      "10",
      "J",
      "Q",
      "K",
      "A",
    ];

    const suits = {
      S: "\u2660 ",
      H: "\u2665 ",
      D: "\u2666",
      C: "\u2663 ",
    };

    if (!faces.includes(face)) {
      throw new Error("Invalid card: " + face);
    }
    if (suits[suit] == undefined) {
      throw new Error("Invalid card: " + suit);
    }

    const result = {
      face,
      suit: suits[suit],
      toString() {
        return this.face + this.suit;
      },
    };

    return result;
  }
  console.log(result.join(" "));
}
solve(["AS", "10D", "KH", "2C"]);
solve(["5S", "3D", "QD", "1C"]);
