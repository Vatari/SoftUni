import { html, nothing } from "../../node_modules/lit-html/lit-html.js";
import * as service from "../api/services.js";

const detailsTemplate = (item, onDelete) => html`
  <section id="meme-details">
    <h1>Meme Title: ${item.title}</h1>
    <div class="meme-details">
      <div class="meme-img">
        <img alt="meme-alt" src=${item.imageUrl} />
      </div>
      <div class="meme-description">
        <h2>Meme Description</h2>
        <p>${item.description}</p>
        ${item.isOwner
          ? html` <a class="button warning" href="/edit/${item._id}">Edit</a>
              <button
                @click=${onDelete}
                href="javascript:void(0)"
                class="button danger"
              >
                Delete
              </button>`
          : nothing}
      </div>
    </div>
  </section>
`;

export async function detailsPage(ctx) {
  const itemId = ctx.params.id;
  const item = await service.getById(itemId);

  if (ctx.user) {
    item.isOwner = ctx.user._id == item._ownerId;
  }

  ctx.render(
    detailsTemplate(
      item,

      onDelete
    )
  );

  async function onDelete() {
    const choice = confirm(`Are you sure to delete ${item.title}?`);

    if (choice) {
      await service.deleteById(itemId);
      ctx.page.redirect("/all");
    }
  }
}
