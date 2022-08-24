import { html } from "../../node_modules/lit-html/lit-html.js";
import * as service from "../api/services.js";

const catalogTemplate = (ctx, items) => html`
  <section id="user-profile-page" class="user-profile">
    <article class="user-info">
      <img id="user-avatar-url" alt="user-profile" src="/images/${ctx.user.gender}.png" />
      <div class="user-content">
        <p>Username: ${ctx.user.username}</p>
        <p>Email: ${ctx.user.email}</p>
        <p>My memes count: ${items.length}</p>
      </div>
    </article>
    <h1 id="user-listings-title">User Memes</h1>
    <div class="user-meme-listings">
      ${items.length <= 0
        ? html` <p class="no-memes">No memes in database.</p> `
        : items.map(cardTemplate)}
    </div>
  </section>
`;

const cardTemplate = (item) => html`
  <div class="user-meme">
    <p class="user-meme-title">${item.title}</p>
    <img class="userProfileImage" alt="meme-img" src=${item.imageUrl} />
    <a class="button" href="/details/${item._id}">Details</a>
  </div>
`;

export async function catalogPage(ctx) {
  const items = await service.getProfile(ctx.user._id);
  ctx.render(catalogTemplate(ctx, items));
}
