function sumTable() {
  let table = [...document.querySelectorAll("tr")].slice(1, -1);
  let result = document.querySelector("#sum");
  let sum = 0;

  for (let el of table) {
    let value = Number(el.lastElementChild.textContent);
    sum += value;
  }
  result.textContent = sum;
}
