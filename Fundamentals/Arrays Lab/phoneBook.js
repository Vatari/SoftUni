function solve(arr) {
  let phonebook = {};

  for (el of arr) {
    let [name, phone] = el.split(" ");
    phonebook[name] = phone;
  }

  Object.keys(phonebook).forEach((x) => console.log(`${x} -> ${phonebook[x]}`));
}
solve([
  "Tim 0834212554",
  "Peter 0877547887",
  "Bill 0896543112",
  "Tim 0876566344",
]);
