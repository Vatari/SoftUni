function graduation(input) {
  let index = 0;
  let name = input[index];
  index++;

  let i = 1;
  let badGradeCounter = 0;
  let sumGrade = 0;
  let isExcluded = false;
  while (i <= 12) {
    let tempGrade = Number(input[index]);
    index++;

    if (tempGrade < 4) {
      badGradeCounter++;
      if (badGradeCounter >= 2) {
        isExcluded = true;
        console.log(`${name} has been excluded at ${i} grade`);
        break;
      }

      continue;
    }
    sumGrade += tempGrade;
    i++;
  }
  if (!isExcluded) {
    let avg = sumGrade / 12;

    console.log(`${name} graduated. Average grade: ${avg.toFixed(2)}`);
  }
}
graduation([
  "Gosho",
  "5",
  "5.5",
  "6",
  "5.43",
  "5.5",
  "6",
  "5.55",
  "5",
  "6",
  "6",
  "5.43",
  "5",
]);
