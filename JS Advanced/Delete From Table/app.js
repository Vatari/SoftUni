function deleteByEmail() {
  let input = document.querySelector('input[name="email"]').value;

  let rows = [...document.querySelectorAll("tbody tr")];
  let result = document.getElementById("result");
  let found = false;
  for (let row of rows) {
    if (row.children[1].textContent === input) {
      row.remove();
      found = true;
    }
  }
  document.querySelector('input[name="email"]').value = "";
  found
    ? (result.textContent = "Deleted")
    : (result.textContent = "Not found.");
}
