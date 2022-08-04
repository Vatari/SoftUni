import { showView, updatenavCondition } from "./util.js";
import { homePage } from "./home.js";
import { loginPage } from "./login.js";
import { registerPage } from "./register.js";
import { createPage } from "./create.js";
import { detailsPage } from "./details.js";
import { editPage } from "./edit.js";
const routes = {
  "/": homePage,
  "/login": loginPage,
  '/logout': logout,
  "/register": registerPage,
  "/create": createPage,
  "/details": detailsPage,
  "/edit": editPage,
};
document.querySelector("nav").addEventListener("click", navigate);

document.querySelector('#add-movie-button > a').addEventListener('click', navigate)


function navigate(ev) {
  if (ev.target.tagName == "A" && ev.target.href) {
    ev.preventDefault();
    const path = new URL(ev.target.href);
    const view = routes[path.pathname];
    if (typeof view == "function") {
      view();
    }
  }
}






function logout() {
    localStorage.removeItem('user')
    updatenavCondition();
}
updatenavCondition()
homePage()
