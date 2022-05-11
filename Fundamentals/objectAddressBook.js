function addressbook(arr) {
  let addressbook = {};

  for (el of arr) {
    let [name, address] = el.split(":");
    addressbook[name] = address;
  }
  let sorted = Object.entries(addressbook);
  sorted.sort((a, b) => a[0].localeCompare(b[0]));
  for (let [name, address] of sorted) {
    console.log(name, "->", address);
  }
}
addressbook([
  "Tim:Doe Crossing",
  "Bill:Nelson Place",
  "Peter:Carlyle Ave",
  "Bill:Ornery Rd",
]);
