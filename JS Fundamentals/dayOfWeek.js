function dayOfWeek(day) {
  if (day <= 0 || day > 7) {
    console.log("Invalid day!");
  } else {
    let days = [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
      "Sunday",
    ];
    console.log(days[day - 1]);
  }
}
dayOfWeek(3);
dayOfWeek(5);
dayOfWeek(7);
dayOfWeek(6);
dayOfWeek(-1);
dayOfWeek(50);
