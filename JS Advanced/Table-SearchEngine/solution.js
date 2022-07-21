function solve() {
  document.querySelector("#searchBtn").addEventListener("click", onClick);

  let search = document.querySelector("#searchField");
  let rows = document.querySelectorAll("tbody tr");
  function onClick() {
    for (let row of rows) {
      row.classList.remove("select");
      if (search.value !== "" && row.textContent.includes(search.value)) {
        row.className = "select";
      }
    }
    search.value = "";
  }
}
