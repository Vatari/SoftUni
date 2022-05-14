function phonebook(arr) {
  let phonebook = {};

  for (let el of arr) {
    let [name, phone] = el.split(" ");
    phonebook[name] = phone;
  }
  for (el in phonebook) {
      console.log(el, '->', phonebook[el]);
  }
}
phonebook([
  "Tim 0834212554",
  "Peter 0877547887",
  "Bill 0896543112",
  "Tim 0876566344",
]);
