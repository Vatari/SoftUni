import { html, nothing } from "../../node_modules/lit-html/lit-html.js";
import * as service from "../api/services.js";

const detailsTemplate = (item, onDelete) => html`
  <div class="container home some">
    <img class="det-img" src=${item.img} />
    <div class="desc">
      <h2 class="display-5">${item.title}</h2>
      <p class="infoType">Description:</p>
      <p class="idea-description">${item.description}</p>
    </div>

    ${!item.isOwner || localStorage.userData == 0
      ? nothing
      : html` <div class="text-center">
          <a @click=${onDelete} class="btn detb" href="javascript:void(0)"
            >Delete</a
          >
        </div>`}
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
    const choice = confirm(`Are you sure to delete ${item.title}?`);

    if (choice) {
      await service.deleteById(itemId);
      ctx.page.redirect("/catalog");
    }
  }
}
