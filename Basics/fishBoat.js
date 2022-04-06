function fishBoat(input) {
  let budget = Number(input[0]);
  let season = input[1];
  let fishermansCount = Number(input[2]);

  let boatRentPrice = 0;

  switch (season) {
    case "Spring":
      boatRentPrice = 3000;
      break;
    case "Winter":
      boatRentPrice = 2600;
      break;
    case "Summer":
    case "Autumn":
      boatRentPrice = 4200;
      break;
  }

  if (fishermansCount <= 6) {
    boatRentPrice = boatRentPrice * 0.9;
  } else if (fishermansCount <= 11) {
    boatRentPrice = boatRentPrice * 0.85;
  } else if (fishermansCount >= 12) {
    boatRentPrice = boatRentPrice * 0.75;
  }

  if (fishermansCount % 2 === 0 && season !== "Autumn") {
    boatRentPrice = boatRentPrice * 0.95;
  }

  if (budget >= boatRentPrice) {
    console.log(
      `Yes! You have ${(budget - boatRentPrice).toFixed(2)} leva left.`
    );
  } else {
    console.log(
      `Not enough money! You need ${(boatRentPrice - budget).toFixed(2)} leva.`
    );
  }
}
fishBoat(["3000", "Summer", "11"]);
