function catalogue(arr) {
  let catalogue = [];
  for (let i = 0; i < arr.length; i++) {
    let elements = arr[i].split(" : ");
    let product = {
      name: elements[0],
      price: parseFloat(elements[1]),
    };
    catalogue.push(product);
  }
  catalogue.sort((a, b) => a.name.localeCompare(b.name));

  let currentLetter = "";
  for (const product of catalogue) {
    if (product.name.charAt(0).toUpperCase() === currentLetter) {
      console.log(`  ${product.name}: ${product.price}`);
    } else {
      currentLetter = product.name.charAt(0).toUpperCase();
      console.log(currentLetter);
      console.log(`  ${product.name}: ${product.price}`);
    }
  }
}
catalogue([
  "Appricot : 20.4",
  "Fridge : 1500",
  "TV : 1499",
  "Deodorant : 10",
  "Boiler : 300",
  "Apple : 1.25",
  "Anti-Bug Spray : 15",
  "T-Shirt : 10",
]);
