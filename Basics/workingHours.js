function workingHours(input) {
  let hour = Number(input[0]);
  let weekDay = input[1];

  switch (weekDay) {
    case "Monday":
    case "Tuesday":
    case "Wednesday":
    case "Thursday":
    case "Friday":
    case "Saturday":
      if (hour < 10 || hour > 18) {
        console.log("closed");
      } else if (hour >= 10 || hour <= 18) {
        console.log("open");
      }
      break;
    case "Sunday":
      console.log("closed");
      break;
  }
}
workingHours(["21", "Friday"]);
