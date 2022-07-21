function solve(arr) {
  let cars = {};

  arr.forEach((x) => {
    let [carBrand, carModel, producedQty] = x.split(" | ");

    cars[carBrand] = cars[carBrand] || {};
    cars[carBrand][carModel] = cars[carBrand][carModel] || 0;
    cars[carBrand][carModel] += Number(producedQty);
  });

  return Object.entries(cars)
    .map(
      ([brands, models]) => `${brands}
${Object.entries(models)
  .map(([model, qty]) => `###${model} -> ${qty}`)
  .join("\n")}`
    )
    .join("\n");
}
solve([
  "Audi | Q7 | 1000",
  "Audi | Q6 | 100",
  "BMW | X5 | 1000",
  "BMW | X6 | 100",
  "Citroen | C4 | 123",
  "Volga | GAZ-24 | 1000000",
  "Lada | Niva | 1000000",
  "Lada | Jigula | 1000000",
  "Citroen | C4 | 22",
  "Citroen | C5 | 10",
]);

console.log(
  solve([
    "Audi | Q7 | 1000",
    "Audi | Q6 | 100",
    "BMW | X5 | 1000",
    "BMW | X6 | 100",
    "Citroen | C4 | 123",
    "Volga | GAZ-24 | 1000000",
    "Lada | Niva | 1000000",
    "Lada | Jigula | 1000000",
    "Citroen | C4 | 22",
    "Citroen | C5 | 10",
  ])
);
