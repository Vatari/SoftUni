function christmasPreparation(input) {
  let packingPapperRolls = Number(input[0]);
  let clothRolls = Number(input[1]);
  let glueLiters = Number(input[2]);
  let discount = Number(input[3]);

  let pricePackingPaper = packingPapperRolls * 5.8;
  let priceclothRolls = clothRolls * 7.2;
  let priceGlue = glueLiters * 1.2;
  let totalPrice = pricePackingPaper + priceclothRolls + priceGlue;
  let discountPrice = (totalPrice * discount) / 100;

  console.log(Math.abs(discountPrice - totalPrice).toFixed(3));
}
christmasPreparation(["2", "3", "2.5", "25"]);
