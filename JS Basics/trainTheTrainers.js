function trainTheTrainers(input) {
  let n = Number(input[0]);
  let index = 1;
  let command = input[index];
  let counter = 0;
  let sumGrades = 0;

  while (command !== "Finish") {
    counter++;
    let name = command;
    let tempSumGrade = 0;
    for (let i = 0; i < n; i++) {
      index++;
      let grade = Number(input[index]);
      tempSumGrade += grade;
    }
    let tempAverageGrade = tempSumGrade / n;
    sumGrades += tempAverageGrade;
    console.log(`${name} - ${tempAverageGrade.toFixed(2)}.`);
    index++;
    command = input[index];
  }
  let avgGrade = sumGrades / counter;
  console.log(`Student's final assessment is ${avgGrade.toFixed(2)}.`);
}
trainTheTrainers([
  "2",
  "While-Loop",
  "6.00",
  "5.50",
  "For-Loop",
  "5.84",
  "5.66",
  "Finish",
]);
