function cinema(input) {
  let typeProjection = input[0];
  let numRows = Number(input[1]);
  let numColons = Number(input[2]);

  let totalPrice = 0;

  switch (typeProjection) {
    case `Premiere`:
      totalPrice = numRows * numColons * 12;
      break;
    case `Normal`:
      totalPrice = numRows * numColons * 7.5;
      break;
    case `Discount`:
      totalPrice = numRows * numColons * 5;
      break;
  }

  console.log(totalPrice.toFixed(2));
}
cinema(["Discount", "12", "30"]);
