function ordersFunction(product, quantity) {
  let sum = 0;

  switch (product) {
    case "coffee":
      sum = quantity * 1.5;
      break;
    case "water":
      sum = quantity * 1.0;
      break;
    case "coke":
      sum = quantity * 1.4;
      break;
    case "snacks":
      sum = quantity * 2.0;
      break;
  }
  return(sum.toFixed(2));
}
ordersFunction("water", 5);
ordersFunction("coffee", 2);
