import { render, html } from "../../node_modules/lit-html/lit-html.js";

const navTemplate = (user) => html` <h1><a href="/">Furniture Store</a></h1>
  <nav>
    ${user
      ? html`
          <div id="user">
            <a id="catalogLink" href="/">Dashboard</a>

            <a id="createLink" href="/create" class="active"
              >Create Furniture</a
            >
            <a id="profileLink" href="/catalog">My Publications</a>
            <a id="logoutBtn" href="/logout">Logout</a>
          </div>
        `
      : html`
          <div id="guest">
            <a id="loginLink" href="/login">Login</a>
            <a id="registerLink" href="/register">Register</a>
          </div>
        `}
  </nav>`;
const header = document.querySelector(".nav-header");
const root = document.querySelector(".container");

function ctxRender(content) {
  render(content, root);
}

export function addRender(ctx, next) {
  render(navTemplate(ctx.user), header);
  ctx.render = ctxRender;

  next();
}
