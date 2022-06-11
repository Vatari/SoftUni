function solve(year, month, day) {
  let date = new Date(year, month +1, day-1,0);

  console.log(`${date.getFullYear()}-${date.getMonth()-1}-${date.getDate()}`);
}
solve(2016, 9, 30);
solve(2016, 10, 1)