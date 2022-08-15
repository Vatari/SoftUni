import { html, render } from "./node_modules/lit-html/lit-html.js";
import { cats } from "./catSeeder.js";
const root = document.querySelector("#allCats");

const catTemplate = (cats) => html`
  <ul>
    <li>
      <img
        src="./images/${cats.imageLocation}.jpg"
        width="250"
        height="250"
        alt="Card image cap"
      />
      <div class="info">
        <button @click=${onClick} class="showBtn">Show status code</button>
        <div class="status" style="display: none" id="100">
          <h4>Status Code: ${cats.statusCode}</h4>
          <p>${cats.statusMessage}</p>
        </div>
      </div>
    </li>
  </ul>
`;
const result = cats.map(catTemplate);

function onClick(ev) {
  ev.preventDefault();
  let cat = ev.target.parentNode;
  let style = cat.querySelector(".status").style.display;

  if (style == "block") {
    cat.querySelector(".status").style.display = "none";
  } else {
    cat.querySelector(".status").style.display = "block";
  }
}

render(result, root);
