import { html } from "../../node_modules/lit-html/lit-html.js";
import * as service from "../api/services.js";

const catalogTemplate = (items) => html`
  <div id="dashboard-holder">
    ${items.length > 0
      ? items.map(cardTemplate)
      : html` <h1>No ideas yet! Be the first one :)</h1> `}
  </div>
`;

const cardTemplate = (item) => html`
  <div
    class="card overflow-hidden current-card details"
    style="width: 20rem; height: 18rem;"
  >
    <div class="card-body">
      <p class="card-text">${item.title}</p>
    </div>
    <img class="card-image" src=${item.img} alt="Card image cap" />
    <a class="btn" href="/details/${item._id}">Details</a>
  </div>
`;

export async function catalogPage(ctx) {
  const items = await service.getDashboard();
  ctx.render(catalogTemplate(items));
}
