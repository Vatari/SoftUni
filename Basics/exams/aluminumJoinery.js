function aluminumJoinery(input) {
  let orderCount = Number(input[0]);
  let materialsType = input[1];
  let deliveryType = input[2];

  let singlePrice = 0;
  let discount = 0;
  let totalprice = 0;
  let finalPrice = 0;

  switch (materialsType) {
    case "90X130":
      singlePrice = 110;
      totalprice = singlePrice * orderCount;
      if (orderCount > 30 && orderCount <= 60) {
        discount = totalprice * 0.95;
      } else if (orderCount > 60) {
        discount = totalprice * 0.92;
      } else if (orderCount <= 30){
        discount = singlePrice * orderCount;
      }
      break;
    case "100X150":
      singlePrice = 140;
      totalprice = singlePrice * orderCount;

      if (orderCount > 40 && orderCount <= 80) {
        discount = totalprice * 0.94;
      } else if (orderCount > 80) {
        discount = totalprice * 0.9;
      } else if (orderCount <= 40){
        discount = singlePrice * orderCount;
      }

      break;
    case "130X180":
      singlePrice = 190;
      totalprice = singlePrice * orderCount;

      if (orderCount > 20 && orderCount <= 50) {
        discount = totalprice * 0.93;
      } else if (orderCount > 50) {
        discount = totalprice * 0.88;
      } else if (orderCount <= 20){
        discount = singlePrice * orderCount;
      }
      break;
    case "200X300":
      singlePrice = 250;
      totalprice = singlePrice * orderCount;

      if (orderCount > 25 && orderCount <= 50) {
        discount = totalprice * 0.91;
      } else if (orderCount > 50) {
        discount = totalprice * 0.86;
      } else if (orderCount<=25){
        discount = singlePrice * orderCount;
      }
      break;
  }

  if (orderCount <= 10) {
    console.log("Invalid order");
    return;
  } else if ((orderCount > 10) & (orderCount <= 20)) {
    finalPrice = totalprice;
  } else if (orderCount > 99 && deliveryType === "With delivery") {
    finalPrice = (discount + 60) * 0.96;
  } else if (deliveryType === "Without delivery") {
    finalPrice = discount;
  }

  console.log(`${finalPrice.toFixed(2)} BGN`);
}
aluminumJoinery(["40", "100X150", "With delivery"]);
