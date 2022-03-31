function building(input) {
  let x = Number(input[0]);
  let y = Number(input[1]);

  for (let i = x; i > 0; i--) {
    let result = "";

    for (let z = 0; z < y; z++) {
      if (i === x) {
        result += "L" + i + z + " ";
      } else if (i % 2 === 0) {
        result += "O" + i + z + " ";
      } else {
        result += "A" + i + z + " ";
      }
    }
    console.log(result);
  }
}
building(["6", "4"]);
