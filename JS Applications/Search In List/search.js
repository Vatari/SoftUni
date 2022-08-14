import { html, render } from "./node_modules/lit-html/lit-html.js";
import { towns } from "./towns.js";

const root = document.querySelector("#towns");

const btn = document.querySelector("button");
btn.addEventListener("click", search);

const cardTowns = (town) => html` <ul>
  <li id=${town}>${town}</li>
</ul>`;

const result = towns.map(cardTowns);

render(result, root);

function search() {
  const search = document.querySelector("#searchText").value;
  const text = document.querySelector("#result");
  let result = towns.filter((x) => {
    let match = document.getElementById(`${x}`);
    if (x.includes(search)) {
      match.setAttribute("class", "active");
      return x;
    } else {
      match.removeAttribute("class", "active");
    }
  });
  text.textContent = `${result.length} matches found`;
}
