import { html } from "../../node_modules/lit-html/lit-html.js";
import * as booksService from "../api/service.js";

const homeTemplate = (books) => html`
  <section id="dashboard-page" class="dashboard">
    <h1>Dashboard</h1>
    ${books.length > 0
      ? books.map(cardTemplate)
      : html` <p class="no-books">No books in database!</p>`}
  </section>
`;

const cardTemplate = (book) => html`
  <ul class="other-books-list">
    <li class="otherBooks">
      <h3>${book.title}</h3>
      <p>Type: ${book.type}</p>
      <p class="img"><img src=${book.imageUrl} /></p>
      <a class="button" href="/details/${book._id}">Details</a>
    </li>
  </ul>
`;

export async function homePage(ctx) {
  const books = await booksService.getAll();
  ctx.render(homeTemplate(books));
}
