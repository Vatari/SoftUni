import page from "../node_modules/page/page.mjs";

import { addSession } from "./middlewares/session.js";
import { addRender } from "./middlewares/render.js";

import { catalogPage } from "./views/catalog.js";
import { createPage } from "./views/create.js";
import { detailsPage } from "./views/details.js";
import { homePage } from "./views/home.js";
import { loginPage } from "./views/login.js";
import { registerPage } from "./views/register.js";

import * as api from "./api/user.js";

page(addSession);

page(addRender);

page("/", homePage);
page("/catalog", catalogPage);
page("/login", loginPage);
page("/register", registerPage);
page("/create", createPage);
page("/details/:id", detailsPage);
page("/logout", onLogout);

page.start();

function onLogout(ctx) {
  api.logout();
  ctx.page.redirect("/");
}
