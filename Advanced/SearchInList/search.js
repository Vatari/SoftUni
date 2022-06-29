function search() {
  let towns = [...document.querySelectorAll("#towns li")];
  let counter = 0;
  let search = document.querySelector("#searchText").value;
  let matches = document.querySelector("#result");

  for (town of towns) {
    if (town.textContent.includes(search)) {
      town.style.fontWeight = "bold";
      town.style.textDecoration = "underline";
      counter++;
      matches.textContent = `${counter} matches found`;
    } else {
      town.style.fontWeight = "normal";
      town.style.textDecoration = "none";
    }
  }
}
