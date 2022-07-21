function hotelRoom(input) {
  let month = input[0];
  let nights = Number(input[1]);

  let studioPrice = 0;
  let apartmentPrice = 0;

  switch (month) {
    case "May":
    case "October":
      studioPrice = 50;
      apartmentPrice = 65;
      break;
    case "June":
    case "September":
      studioPrice = 75.2;
      apartmentPrice = 68.7;
      break;
    case "July":
    case "August":
      studioPrice = 76;
      apartmentPrice = 77;
      break;
  }

  if (nights > 14 && (month === "May" || month === "October")) {
    studioPrice = studioPrice * 0.7;
  } else if (nights > 7 && (month === "May" || month === "October")) {
    studioPrice = studioPrice * 0.95;
  } else if (nights > 14 && (month === "June" || month === "September")) {
    studioPrice = studioPrice * 0.8;
  }
  if (nights > 14) {
    apartmentPrice = apartmentPrice * 0.9;
  }
  console.log(`Apartment: ${(nights * apartmentPrice).toFixed(2)} lv.`);
  console.log(`Studio: ${(nights * studioPrice).toFixed(2)} lv.`);
}
hotelRoom(["June", "14"]);
