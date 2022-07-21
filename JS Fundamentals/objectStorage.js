function storage(arr) {
  let storage = {};

  for (let el of arr) {
    let [items, qty] = el.split(" ");
    qty = +qty;

    let oldQty = 0;
    if (storage.hasOwnProperty(items)) {
      oldQty = storage[items];
    }
    storage[items] = qty + oldQty;
  }

  let result = Object.entries(storage);
  for (let [product, qty] of result) {
    console.log(product, "->", qty);
  }
}
storage(["tomatoes 10", "coffee 5", "olives 100", "coffee 40"]);
