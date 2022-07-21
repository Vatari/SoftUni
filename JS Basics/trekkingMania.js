function trekkingMania(input) {
  let musala = 0;
  let monblan = 0;
  let kilimanajdaro = 0;
  let k2 = 0;
  let everest = 0;
  let sum = 0;

  for (let s = 1; s < input.length; s++) {
    let index = Number(input[s]);
    sum += index;
    if (index <= 5) {
      musala += index;
    } else if (index <= 12) {
      monblan += index;
    } else if (index <= 25) {
      kilimanajdaro += index;
    } else if (index <= 40) {
      k2 += index;
    } else if (index > 40) {
      everest += index;
    }
  }
  console.log(((musala / sum) * 100).toFixed(2) + "%");
  console.log(((monblan / sum) * 100).toFixed(2) + "%");
  console.log(((kilimanajdaro / sum) * 100).toFixed(2) + "%");
  console.log(((k2 / sum) * 100).toFixed(2) + "%");
  console.log(((everest / sum) * 100).toFixed(2) + "%");
}
trekkingMania([
  "10",
  "10",
  "5",
  "1",
  "100",
  "12",
  "26",
  "17",
  "37",
  "40",
  "78",
]);
