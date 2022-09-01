import { html } from "../../node_modules/lit-html/lit-html.js";
import * as service from "../api/services.js";

const catalogTemplate = (items) => html`
  <section id="dashboard">
    <h2>Job Offers</h2>

    ${items.length > 0
      ? items.map(cardTemplate)
      : html` <h2>No offers yet.</h2> `}
  </section>
`;

const cardTemplate = (item) => html`
  <div class="offer">
    <img src=${item.imageUrl} alt="example1" />
    <p><strong>Title: </strong><span class="title">${item.title}</span></p>
    <p><strong>Salary:</strong><span class="salary">${item.salary}</span></p>
    <a class="details-btn" href="/details/${item._id}">Details</a>
  </div>
`;

export async function dashboardPage(ctx) {
  const items = await service.getDashboard();
  ctx.render(catalogTemplate(items));
}
