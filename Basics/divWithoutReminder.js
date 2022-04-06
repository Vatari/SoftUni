function abc(input) {
  let number = Number(input[0]);
  let p1 = 0;
  let p2 = 0;
  let p3 = 0;

  for (let i = 1; i <= number; i++) {
    index = Number(input[i]);

    if (index % 2 === 0) {
      p1++;
    }
    if (index % 3 === 0) {
      p2++;
    }
    if (index % 4 === 0) {
      p3++;
    }
  }
  console.log(((p1 / number) * 100).toFixed(2) + "%");
  console.log(((p2 / number) * 100).toFixed(2) + "%");
  console.log(((p3 / number) * 100).toFixed(2) + "%");
}
abc(["3", "3", "6", "9"]);
