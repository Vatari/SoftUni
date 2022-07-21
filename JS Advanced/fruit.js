function solve(fruit, weight, price) {
  let result = (weight / 100) * price;

  console.log(
    `I need $${(result / 10).toFixed(2)} to buy ${(weight / 1000).toFixed(
      2
    )} kilograms ${fruit}.`
  );
}
solve("orange", 2500, 1.8);
