function solve(num) {
  const days = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ];

  if (num > 0 && num <= days.length) {
    console.log(days[num - 1]);
  } else {
    console.log("Invalid day!");
  }
}
solve(7);
