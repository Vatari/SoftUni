import { html } from "../../node_modules/lit-html/lit-html.js";
import { createSubmitHandler } from "../util.js";
import * as booksService from "../api/service.js";

const createTemplate = (onCreate) => html` <section
  id="create-page"
  class="create"
>
  <form @submit=${onCreate} id="create-form" action="" method="">
    <fieldset>
      <legend>Add new Book</legend>
      <p class="field">
        <label for="title">Title</label>
        <span class="input">
          <input type="text" name="title" id="title" placeholder="Title" />
        </span>
      </p>
      <p class="field">
        <label for="description">Description</label>
        <span class="input">
          <textarea
            name="description"
            id="description"
            placeholder="Description"
          ></textarea>
        </span>
      </p>
      <p class="field">
        <label for="image">Image</label>
        <span class="input">
          <input type="text" name="imageUrl" id="image" placeholder="Image" />
        </span>
      </p>
      <p class="field">
        <label for="type">Type</label>
        <span class="input">
          <select id="type" name="type">
            <option value="Fiction">Fiction</option>
            <option value="Romance">Romance</option>
            <option value="Mistery">Mistery</option>
            <option value="Classic">Clasic</option>
            <option value="Other">Other</option>
          </select>
        </span>
      </p>
      <input class="button submit" type="submit" value="Add Book" />
    </fieldset>
  </form>
</section>`;

export function createPage(ctx) {
  ctx.render(createTemplate(createSubmitHandler(ctx, onCreate)));
}

async function onCreate(ctx, book, ev) {
  if (Object.values(book).some((x) => x == "")) {
    return alert("All fields are required!");
  }
  await booksService.create({
    title: book.title,
    description: book.description,
    imageUrl: book.imageUrl,
    type: book.type,
  });
  ev.target.reset();

  ctx.page.redirect("/");
}
