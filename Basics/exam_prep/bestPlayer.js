function BestPlayer(input) {
  let playerName = "";
  let otherPlayer = "";
  let goals = 0;

  for (let i = 0; i < input.length; i++) {
    let current = input[i];

    if (i % 2 === 0) {
      otherPlayer = current;
    }
    if (i % 2 === 1 && current > goals) {
      goals = Number(current);
      playerName = otherPlayer;
    }
  }
  console.log(`${playerName} is the best player!`);
  if (goals >= 3) {
    console.log(`He has scored ${goals} goals and made a hat-trick !!!`);
  } else {
    console.log(`He has scored ${goals} goals.`);
  }
}
BestPlayer(["Neymar", "2", "Ronaldo", "1", "Messi", "3", "END"]);
