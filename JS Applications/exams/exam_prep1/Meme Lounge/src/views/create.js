import { html } from "../../node_modules/lit-html/lit-html.js";
import { createSubmitHandler } from "../util.js";
import * as service from "../api/services.js";
import { notify } from "./notify.js";

const createTemplate = (onCreate) => html`
  <section id="create-meme">
    <form @submit=${onCreate} id="create-form">
      <div class="container">
        <h1>Create Meme</h1>
        <label for="title">Title</label>
        <input id="title" type="text" placeholder="Enter Title" name="title" />
        <label for="description">Description</label>
        <textarea
          id="description"
          placeholder="Enter Description"
          name="description"
        ></textarea>
        <label for="imageUrl">Meme Image</label>
        <input
          id="imageUrl"
          type="text"
          placeholder="Enter meme ImageUrl"
          name="imageUrl"
        />
        <input type="submit" class="registerbtn button" value="Create Meme" />
      </div>
    </form>
  </section>
`;

export function createPage(ctx) {
  ctx.render(createTemplate(createSubmitHandler(ctx, onCreate)));
}

async function onCreate(ctx, item, ev) {
  if (Object.values(item).some((x) => x == "")) {
    return notify("All fields are required!");
  }
  await service.create({
    title: item.title,
    description: item.description,
    imageUrl: item.imageUrl,
  });
  ev.target.reset();

  ctx.page.redirect("/all");
}
