import { homePage } from "./home.js";
import { showView, updatenavCondition } from "./util.js";
const loginSection = document.querySelector("#form-login");
const url = "http://localhost:3030/users/login";
const form = loginSection.querySelector("form");
form.addEventListener("submit", onSubmit);
export function loginPage() {
  showView(loginSection);
}

async function onSubmit(ev) {
  ev.preventDefault();
  const formData = new FormData(form);
  const userData = {
    email: formData.get("email"),
    password: formData.get("password"),
  };

  try {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userData),
    });
    if (!response.ok) {
      const error = await response.json();
      throw new Error(error.message);
    }
    const user = await response.json();
    localStorage.setItem("user", JSON.stringify(user));
    form.reset();
    updatenavCondition()
    homePage();
  } catch (err) {
    alert(err.message);
  }
}
