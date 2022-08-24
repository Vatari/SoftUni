import { html } from "../../node_modules/lit-html/lit-html.js";
import * as service from "../api/services.js";
import { createSubmitHandler } from "../util.js";
import { notify } from "./notify.js";

const editTemplate = (item, onEdit) => html`
  <section id="edit-meme">
    <form @submit=${onEdit} id="edit-form">
      <h1>Edit Meme</h1>
      <div class="container">
        <label for="title">Title</label>
        <input
          id="title"
          type="text"
          placeholder="Enter Title"
          name="title"
          .value=${item.title}
        />
        <label for="description">Description</label>
        <textarea
          id="description"
          placeholder="Enter Description"
          name="description"
          .value=${item.description}
        >
        </textarea>
        <label for="imageUrl">Image Url</label>
        <input
          id="imageUrl"
          type="text"
          placeholder="Enter Meme ImageUrl"
          name="imageUrl"
          .value=${item.imageUrl}
        />
        <input type="submit" class="registerbtn button" value="Edit Meme" />
      </div>
    </form>
  </section>
`;

export async function editPage(ctx) {
  const itemId = ctx.params.id;
  const item = await service.getById(itemId);

  ctx.render(editTemplate(item, createSubmitHandler(ctx, onEdit)));
}

async function onEdit(ctx, item, ev) {
  const itemId = ctx.params.id;

  if (Object.values(item).some((x) => x == "")) {
    return notify("All fields are required!");
  }
  await service.edit(itemId, {
    title: item.title,
    description: item.description,
    imageUrl: item.imageUrl,
  });
  ev.target.reset();

  ctx.page.redirect("/details/" + itemId);
}
