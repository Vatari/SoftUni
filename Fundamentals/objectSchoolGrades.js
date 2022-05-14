function schoolGrades(arr) {
  let students = {};
  for (let el of arr) {
    let newArr = el.split(" ");
    student = newArr.shift();
    let grades = newArr.map(Number);

    if (!students.hasOwnProperty(student)) {
      students[student] = [];
    }
    let existingGrade = students[student];
    for (let grade of grades) {
      existingGrade.push(grade);
    }
    students[student] = existingGrade;
  }
  let result = Object.entries(students);
  result.sort((a, b) => a[0].localeCompare(b[0]));
  for (let [student, grade] of result) {
    console.log(`${student}: ${average(grade).toFixed(2)}`);
  }

  function average(arr) {
    let sum = 0;
    for (el of arr) {
      sum += el;
    }
    return sum / arr.length;
  }
}
schoolGrades(["Lilly 4 6 6 5", "Tim 5 6", "Tammy 2 4 3", "Tim 6 6"]);
