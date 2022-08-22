import { render, html } from "../../node_modules/lit-html/lit-html.js";
const header = document.querySelector(".nav-header");
const root = document.querySelector("#content");
const navTemplate = (user) => html`
  <nav>
    <a href="/all">All Memes</a>
    ${user
      ? html` <div class="user">
          <a href="/create">Create Meme</a>
          <div class="profile">
            <span>Welcome, ${user.email}</span>
            <a href="/catalog">My Profile</a>
            <a href="/logout">Logout</a>
          </div>
        </div>`
      : html` <div class="guest">
          <div class="profile">
            <a href="/login">Login</a>
            <a href="/register">Register</a>
          </div>
          <a class="active" href="/">Home Page</a>
        </div>`}
  </nav>
`;

function ctxRender(content) {
  render(content, root);
}

export function addRender(ctx, next) {
  render(navTemplate(ctx.user), header);
  ctx.render = ctxRender;

  next();
}