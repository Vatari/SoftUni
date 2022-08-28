import { html } from "../../node_modules/lit-html/lit-html.js";
import * as booksService from "../api/service.js";
import { createSubmitHandler } from "../util.js";

const editTemplate = (book, onEdit) => html`
  <section id="edit-page" class="edit">
    <form @submit=${onEdit} id="edit-form" action="#" method="">
      <fieldset>
        <legend>Edit my Book</legend>
        <p class="field">
          <label for="title">Title</label>
          <span class="input">
            <input type="text" name="title" id="title" .value="${book.title}" />
          </span>
        </p>
        <p class="field">
          <label for="description">Description</label>
          <span class="input">
            <textarea
              name="description"
              id="description"
              .value=${book.description}
            ></textarea>
          </span>
        </p>
        <p class="field">
          <label for="image">Image</label>
          <span class="input">
            <input
              type="text"
              name="imageUrl"
              id="image"
              .value=${book.imageUrl}
            />
          </span>
        </p>
        <p class="field">
          <label for="type">Type</label>
          <span class="input">
            <select id="type" name="type" value="Fiction">
              <option value="Fiction" selected>Fiction</option>
              <option value="Romance">Romance</option>
              <option value="Mistery">Mistery</option>
              <option value="Classic">Clasic</option>
              <option value="Other">Other</option>
            </select>
          </span>
        </p>
        <input class="button submit" type="submit" value="Save" />
      </fieldset>
    </form>
  </section>
`;

export async function editPage(ctx) {
  const bookId = ctx.params.id;
  const book = await booksService.getById(bookId);

  ctx.render(editTemplate(book, createSubmitHandler(ctx, onEdit)));
}

async function onEdit(ctx, book, ev) {
  const bookId = ctx.params.id;

  if (Object.values(book).some((x) => x == "")) {
    return alert("All fields are required!");
  }
  await booksService.edit(bookId, {
    title: book.title,
    description: book.description,
    imageUrl: book.imageUrl,
    type: book.type,
  });
  ev.target.reset();

  ctx.page.redirect(`/details/${bookId}`);
}
