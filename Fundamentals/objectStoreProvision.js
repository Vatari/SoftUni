function storeProvision(arr1, arr2) {
  let store = {};

  for (let i = 0; i < arr1.length; i += 2) {
    let currentProduct = arr1[i];
    store[currentProduct] = +arr1[i + 1];
  }

  for (let j = 0; j < arr2.length; j += 2) {
    let orderedProduct = arr2[j];
    let quantity = +arr2[j + 1];

    if (!store.hasOwnProperty(orderedProduct)) {
      store[orderedProduct] = 0;
    }
    store[orderedProduct] += quantity;
  }
  for (let el in store) {
    console.log(`${el} -> ${store[el]}`);
  }
}
storeProvision(
  ["Chips", "5", "CocaCola", "9", "Bananas", "14", "Pasta", "4", "Beer", "2"],
  ["Flour", "44", "Oil", "12", "Pasta", "7", "Tomatoes", "70", "Bananas", "30"]
);
