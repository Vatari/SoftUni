function skiVacation(input) {
  let days = Number(input[0] - 1);
  let type = input[1];
  let onePersonPrice = 18;
  let apartmentPrice = 25;
  let presidentPrice = 35;
  let ocenka = input[2];
  let totalPrice = 0;

  switch (type) {
    case "room for one person":
      totalPrice = days * onePersonPrice;
      break;
    case "apartment":
      if (days < 9) {
        totalPrice = days * apartmentPrice * 0.7;
      } else if (days < 14) {
        totalPrice = days * apartmentPrice * 0.65;
      } else if (days >= 14) {
        totalPrice = days * apartmentPrice * 0.5;
      }
      break;
    case "president apartment":
      if (days < 9) {
        totalPrice = days * presidentPrice * 0.9;
      } else if (days < 14 && days > 9) {
        totalPrice = days * presidentPrice * 0.85;
      } else if (days >= 14) {
        totalPrice = days * presidentPrice * 0.8;
      }
      break;
  }

  if (ocenka === "positive") {
    console.log((totalPrice * 1.25).toFixed(2));
  } else if (ocenka === "negative") {
    console.log((totalPrice * 0.9).toFixed(2));
  }
}

skiVacation(["30", "president apartment", "negative"]);
