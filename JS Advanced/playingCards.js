function solve(face, suit) {
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

  if (!faces.includes(face)) {
    throw new Error("Invalid card: " + face);
  }

  const suits = {
    S: "\u2660 ",
    H: "\u2665 ",
    D: "\u2666",
    C: "\u2663 ",
  };

  const result = {
    face,
    suit: suits[suit],
    toString() {
      return this.face + this.suit;
    },
  };

  return result;
}
solve("A", "S");
solve("10", "H");
solve("1", "C");
