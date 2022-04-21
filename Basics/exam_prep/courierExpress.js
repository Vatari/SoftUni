function courierExpress(input) {
  let packageWeight = Number(input[0]);
  let serviceType = input[1];
  let distance = Number(input[2]);

  let distancePrice = 0;

  switch (serviceType) {
    case "standard":
      if (packageWeight < 1) {
        distancePrice = distance * 0.03;
      } else if (packageWeight < 10) {
        distancePrice = distance * 0.05;
      } else if (packageWeight < 40) {
        distancePrice = distance * 0.1;
      } else if (packageWeight < 90) {
        distancePrice = distance * 0.15;
      } else if (packageWeight < 150) {
        distancePrice = distance * 0.2;
      }
      break;

    case "express":
      let tempDistancePrice = 0;
      let overprice = 0;
      if (packageWeight < 1) {
        overPrice = 0.03 * 1.8 - 0.03;
        tempDistancePrice = packageWeight * overPrice;
        distancePrice = distance * 0.03 + distance * tempDistancePrice;
      } else if (packageWeight < 10) {
        overPrice = 0.05 * 1.4 - 0.05;
        tempDistancePrice = packageWeight * overPrice;
        distancePrice = distance * 0.05 + distance * tempDistancePrice;
      } else if (packageWeight < 40) {
        overPrice = 0.1 * 1.05 - 0.1;
        tempDistancePrice = packageWeight * overPrice;
        distancePrice = distance * 0.1 + distance * tempDistancePrice;
      } else if (packageWeight < 90) {
        overPrice = 0.15 * 1.02 - 0.15;
        tempDistancePrice = packageWeight * overPrice;
        distancePrice = distance * 0.15 + distance * tempDistancePrice;
      } else if (packageWeight < 150) {
        overPrice = 0.2 * 1.01 - 0.2;
        tempDistancePrice = packageWeight * overPrice;
        distancePrice = distance * 0.2 + distance * tempDistancePrice;
      }
  }
  console.log(
    `The delivery of your shipment with weight of ${packageWeight.toFixed(
      3
    )} kg. would cost ${distancePrice.toFixed(2)} lv.`
  );
}
courierExpress(["87", "express", "130"]);
