import { html } from "../../node_modules/lit-html/lit-html.js";
import * as service from "../api/services.js";

const catalogTemplate = (items) => html`
  <div class="row space-top">
    <div class="col-md-12">
      <h1>My Furniture</h1>
      <p>This is a list of your publications.</p>
    </div>
    ${items.length > 0
      ? items.map(cardTemplate)
      : html`<h3>You have no publications yet</h3>`}
  </div>
`;

const cardTemplate = (item) => html`
  <div class="row space-top">
    <div class="col-md-4">
      <div class="card text-white bg-primary">
        <div class="card-body">
          <img src=${item.img} />
          <p>${item.description}</p>
          <footer>
            <p>Price: <span>${item.price} $</span></p>
          </footer>
          <div>
            <a href="/details/${item._id}" class="btn btn-info">Details</a>
          </div>
        </div>
      </div>
    </div>
  </div>
`;

export async function catalogPage(ctx) {
  const items = await service.getRecent(ctx);
  ctx.render(catalogTemplate(items));
}
