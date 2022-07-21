function solve(arr) {
  let products = {};
  let result = [];

  for (let line of arr) {
    let arr = line.split(" | ");
    let town = arr[0];
    let product = arr[1];
    let price = Number(arr[2]);

    if (product in products) {
      if (price < products[product].price) {
        products[product].price = price;
        products[product].town = town;
      }
    } else {
      let obj = {};
      obj.price = price;
      obj.town = town;
      products[product] = obj;
      result.push(product);
    }
  }

  for (let product of result) {
    console.log(
      product +
        " -> " +
        products[product].price +
        " (" +
        products[product].town +
        ")"
    );
  }
}
solve([
  "Sample Town | Sample Product | 1000",
  "Sample Town | Orange | 2",
  "Sample Town | Peach | 1",
  "Sofia | Orange | 3",
  "Sofia | Peach | 2",
  "New York | Sample Product | 1000.1",
  "New York | Burger | 10",
]);
