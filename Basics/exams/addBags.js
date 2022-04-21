function addBags(input) {
  let priceOver20 = Number(input[0]);
  let bagsWeight = Number(input[1]);
  let daysToTrip = Number(input[2]);
  let bagsCount = Number(input[3]);
  let bagPrice = 0;
  let totalPrice = 0;
  let finalPrice = 0;

  if (bagsWeight < 10) {
    bagPrice = priceOver20 * 0.2;
  } else if (bagsWeight <= 20) {
    bagPrice = priceOver20 * 0.5;
  } else if (bagsWeight > 20) {
    bagPrice = priceOver20;
  }

  totalPrice = bagPrice * bagsCount;
  if (daysToTrip > 30) {
    finalPrice = totalPrice * 1.1;
  } else if (daysToTrip < 7) {
    finalPrice = totalPrice * 1.4;
  } else if (daysToTrip <= 30) {
    finalPrice = totalPrice * 1.15;
  }

  console.log(`The total price of bags is: ${finalPrice.toFixed(2)} lv.`);
}
addBags(["30", "18", "15", "2"]);
