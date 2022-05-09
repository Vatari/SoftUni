function minerTask(arr) {
  let resources = {};
  // extract every odd string as resource, and every even as quantity
  while (arr.length > 0) {
    let resource = arr.shift();
    let qty = +arr.shift();
    if (!resources.hasOwnProperty(resource)) {
      resources[resource] = 0;
    }
    // collect them in object
    resources[resource] += qty;
  }
  // print them on one line
  let result = Object.entries(resources);
  for (let [resource, qty] of result) {
    console.log(resource, "->", qty);
  }
}
minerTask(["gold", "155", "silver", "10", "copper", "17", "gold", "15"]);
