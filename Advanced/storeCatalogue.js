function solve(arr) {
  arr.sort();

  let lastLetter;
  while (arr.length != 0) {
    if (arr[0][0] != lastLetter) {
      lastLetter = arr[0][0];
      console.log(lastLetter);
    }
    let [product, price] = arr.shift().split(" : ");
    console.log(`  ${product}: ${price}`);
  }
}
solve([
  "Appricot : 20.4",
  "Fridge : 1500",
  "TV : 1499",
  "Deodorant : 10",
  "Boiler : 300",
  "Apple : 1.25",
  "Anti-Bug Spray : 15",
  "T-Shirt : 10",
]);
