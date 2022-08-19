import { html, nothing } from "../../node_modules/lit-html/lit-html.js";
import * as service from "../api/services.js";

const detailsTemplate = (
  item,

  onDelete
) => html`
  <div class="row space-top">
    <div class="col-md-12">
      <h1>Furniture Details</h1>
    </div>
  </div>

  <div class="row space-top">
    <div class="col-md-4">
      <div class="card text-white bg-primary">
        <div class="card-body">
          <img src="/images/chair.jpg" />
        </div>
      </div>
    </div>
    <div class="col-md-4">
      <p>Make: <span>${item.make}</span></p>
      <p>Model: <span>${item.model}</span></p>
      <p>Year: <span>${item.year}</span></p>
      <p>Description: <span>${item.description}</span></p>
      <p>Price: <span>${item.price}</span></p>
      <p>Material: <span>${item.material}</span></p>
      ${item.isOwner
        ? html`<div>
            <a href="/edit/${item._id}" class="btn btn-info">Edit</a>
            <a @click=${onDelete} href="javascript:void(0);" class="btn btn-red"
              >Delete</a
            >
          </div>`
        : nothing}
    </div>
  </div>
`;

export async function detailsPage(ctx) {
  const itemId = ctx.params.id;
  const item = await service.getById(itemId);

  if (ctx.user) {
    item.isOwner = ctx.user._id == item._ownerId;
  }

  ctx.render(detailsTemplate(item, onDelete));

  async function onDelete() {
    const choice = confirm(`Are you sure to delete ${item.make}?`);

    if (choice) {
      await service.deleteById(itemId);
      ctx.page.redirect("/");
    }
  }
}
