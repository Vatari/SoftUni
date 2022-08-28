import { html, nothing } from "../../node_modules/lit-html/lit-html.js";
import * as booksService from "../api/service.js";

const detailsTemplate = (ctx, book, onDelete, likes, hasLike, onLike) => html`
  <section id="details-page" class="details">
    <div class="book-information">
      <h3>${book.title}</h3>
      <p class="type">Type: ${book.type}</p>
      <p class="img"><img src=${book.imageUrl} /></p>

      <div class="actions">
        ${book.isOwner
          ? html` <a class="button" href="/edit/${book._id}">Edit</a>
              <a @click=${onDelete} class="button" href="javascript:void(0)"
                >Delete</a
              >`
          : nothing}
        ${ctx.user ? likeControl(book.isOwner, hasLike, onLike) : nothing}

        <div class="likes">
          <img class="hearts" src="/images/heart.png" />
          <span id="total-likes">Likes: ${likes}</span>
        </div>
      </div>
    </div>
    <div class="book-description">
      <h3>Description:</h3>
      <p>${book.description}</p>
    </div>
  </section>
`;

const likeControl = (isOwner, hasLike, onLike) => {
  if (isOwner || hasLike) {
    return null;
  } else {
    return html`<a @click=${onLike} class="button" href="javascript:void(0)"
      >Like</a
    >`;
  }
};

export async function detailsPage(ctx) {
  const bookId = ctx.params.id;
  const book = await booksService.getById(bookId);
  const [likes, hasLike] = await Promise.all([
    booksService.getLikes(bookId),
    ctx.user ? booksService.getMyLikes(bookId, ctx.user._id) : 0,
  ]);

  if (ctx.user) {
    book.isOwner = ctx.user._id == book._ownerId;
  }

  ctx.render(detailsTemplate(ctx, book, onDelete, likes, hasLike, onLike));

  async function onDelete() {
    const choice = confirm(`Are you sure to delete ${book.title}?`);

    if (choice) {
      await booksService.deleteById(bookId);
      ctx.page.redirect("/");
    }
  }

  async function onLike() {
    await booksService.likeBook(bookId);
    ctx.page.redirect(`/details/${bookId}`);
  }
}
