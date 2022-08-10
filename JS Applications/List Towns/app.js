import { html, render } from "./node_modules/lit-html/lit-html.js";

const submitBtn = document.querySelector("#btnLoadTowns");
submitBtn.addEventListener("click", onSubmit);

function onSubmit(ev) {
  ev.preventDefault();
  const towns = document.querySelector("#towns").value;
  const root = document.querySelector("#root");
  const result = towns.split(", ");

  const townCard = html`
    <ul>
      ${result.map((x) => html`<li>${x}</li> `)}
    </ul>
  `;

  render(townCard, root);
}
