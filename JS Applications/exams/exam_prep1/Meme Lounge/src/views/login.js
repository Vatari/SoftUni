import { html } from "../../node_modules/lit-html/lit-html.js";
import { createSubmitHandler } from "../util.js";
import * as userService from "../api/user.js";
import { notify } from "./notify.js";

const loginTemplate = (onLogin) => html`
  <section id="login">
    <form @submit=${onLogin} id="login-form">
      <div class="container">
        <h1>Login</h1>
        <label for="email">Email</label>
        <input id="email" placeholder="Enter Email" name="email" type="text" />
        <label for="password">Password</label>
        <input
          id="password"
          type="password"
          placeholder="Enter Password"
          name="password"
        />
        <input type="submit" class="registerbtn button" value="Login" />
        <div class="container signin">
          <p>Dont have an account?<a href="/register">Sign up</a>.</p>
        </div>
      </div>
    </form>
  </section>
`;

export function loginPage(ctx) {
  ctx.render(loginTemplate(createSubmitHandler(ctx, onLogin)));
}

async function onLogin(ctx, data, ev) {
  if (data.email == "" || data.password == "") {
    notify("All fields are required");
    return;
  }
  await userService.login(data.email, data.password);
  ev.target.reset();
  ctx.page.redirect("/all");
}
