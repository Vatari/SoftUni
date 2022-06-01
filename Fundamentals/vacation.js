function vacation(people, groupType, day) {
  let tempPrice = 0;
  let totalPrice = 0;
  switch (day) {
    case "Friday":
      switch (groupType) {
        case "Students":
          tempPrice = 8.45;
          break;
        case "Business":
          tempPrice = 10.9;
          break;
        case "Regular":
          tempPrice = 15;
          break;
      }
      break;
    case "Saturday":
      switch (groupType) {
        case "Students":
          tempPrice = 9.8;
          break;
        case "Business":
          tempPrice = 15.6;
          break;
        case "Regular":
          tempPrice = 20;
          break;
      }
      break;
    case "Sunday":
      switch (groupType) {
        case "Students":
          tempPrice = 10.46;
          break;
        case "Business":
          tempPrice = 16;
          break;
        case "Regular":
          tempPrice = 22.5;
          break;
      }
      break;
  }
  totalPrice = people * tempPrice;

  if (groupType == "Students" && people >= 30) {
    totalPrice *= 0.85;
  }
  if (groupType == "Business" && people >= 100) {
    totalPrice = (people - 10) * tempPrice;
  }
  if (groupType == "Regular" && people >= 10 && people <= 20) {
    totalPrice *= 0.95;
  }

  console.log(`Total price: ${totalPrice.toFixed(2)}`);
}
vacation(30, "Students", "Sunday");
