function fruitShop(input) {
  let fruit = input[0];
  let dayOfWeek = input[1];
  let fruitCount = Number(input[2]);
  let fruitPrice = 0;

  switch (dayOfWeek) {
    case "Monday":
    case "Tuesday":
    case "Wednesday":
    case "Thursday":
    case "Friday":
      if (fruit === "banana") {
        fruitPrice = fruitCount * 2.5;
      } else if (fruit === "apple") {
        fruitPrice = fruitCount * 1.2;
      } else if (fruit === "orange") {
        fruitPrice = fruitCount * 0.85;
      } else if (fruit === "grapefruit") {
        fruitPrice = fruitCount * 1.45;
      } else if (fruit === "kiwi") {
        fruitPrice = fruitCount * 2.7;
      } else if (fruit === "pineapple") {
        fruitPrice = fruitCount * 5.5;
      } else if (fruit === "grapes") {
        fruitPrice = fruitCount * 3.85;
      } else {
        console.log("error");
      }
      break;
    case "Saturday":
    case "Sunday":
      if (fruit === "banana") {
        fruitPrice = fruitCount * 2.7;
      } else if (fruit === "apple") {
        fruitPrice = fruitCount * 1.25;
      } else if (fruit === "orange") {
        fruitPrice = fruitCount * 0.9;
      } else if (fruit === "grapefruit") {
        fruitPrice = fruitCount * 1.6;
      } else if (fruit === "kiwi") {
        fruitPrice = fruitCount * 3.0;
      } else if (fruit === "pineapple") {
        fruitPrice = fruitCount * 5.6;
      } else if (fruit === "grapes") {
        fruitPrice = fruitCount * 4.2;
      } else {
        console.log("error");
      }
      break;
    default:
      console.log("error");
  }
  if (fruitPrice > 0) {
    console.log(fruitPrice.toFixed(2));
  }
}

fruitShop(["apple", "Monday", "3"]);
