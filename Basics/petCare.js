function abc(input) {
  let totalFood = Number(input[0] * 1000);
  let index = 1;
  let command = input[index];
  let totalEatenFood = 0;

  while (command != "Adopted") {
    let eatenFood = Number(input[index]);

    totalEatenFood += eatenFood;
    index++;
    command = input[index];
  }

  if (totalEatenFood <= totalFood) {
    console.log(
      `Food is enough! Leftovers: ${totalFood - totalEatenFood} grams.`
    );
  } else {
    console.log(
      `Food is not enough. You need ${totalEatenFood - totalFood} grams more.`
    );
  }
}
abc(["1", "130", "345", "400", "180", "230", "120", "Adopted"]);
