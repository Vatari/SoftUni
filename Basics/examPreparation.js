function examPreparation(input) {
  let sumBadGrades = Number(input[0]);
  let index = 1;
  let command = input[index];
  let numberofProblems = 0;
  let sumGrades = 0;
  let numberBadGrades = 0;

  while (command !== "Enough") {
    numberofProblems++;
    index++;

    let currentGrade = Number(input[index]);

    sumGrades += currentGrade;
    if (currentGrade <= 4) {
      numberBadGrades++;
    }
    if (numberBadGrades >= sumBadGrades) {
      console.log(`You need a break, ${numberBadGrades} poor grades.`);
      break;
    }
    index++;
    command = input[index];
  }

  if (command === "Enough") {
    let averageGrade = (sumGrades / numberofProblems).toFixed(2);
    console.log(`Average score: ${averageGrade}`);
    console.log(`Number of problems: ${numberofProblems}`);
    index -= 2;
    command = input[index];
    console.log(`Last problem: ${command}`);
  }
}
examPreparation([
  "3",
  "Money",
  "6",
  "Story",
  "4",
  "Spring Time",
  "5",
  "Bus",
  "6",
  "Enough",
]);
