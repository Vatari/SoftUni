function formatGrades(grade) {
  let formatted = grade.toFixed(2);
  let desc = " ";

  if (formatted < 3) {
    formatted = 2;
    desc = "Fail";
  } else if (formatted < 3.5) {
    desc = "Poor";
  } else if (formatted < 4.5) {
    desc = "Good";
  } else if (formatted < 5.5) {
    desc = "Very good";
  } else {
    desc = "Excellent";
  }
  console.log(`${desc} (${formatted})`);
}
formatGrades(3.33);
formatGrades(4.5);
formatGrades(2.99);
