import { homePage } from "./home.js";
import { showView } from "./util.js";

const createSection = document.querySelector("#add-movie");
const form = createSection.querySelector("form");
const url = "http://localhost:3030/data/movies";
form.addEventListener("submit", onCreate);

export function createPage() {
  showView(createSection);
}

async function onCreate(ev) {
  ev.preventDefault();
  const user = JSON.parse(localStorage.getItem("user"));
  const formData = new FormData(form);
  const movieData = {
    title: formData.get("title"),
    description: formData.get("description"),
    img: formData.get("img"),
  };

  try {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-Authorization": user.accessToken,
      },
      body: JSON.stringify(movieData),
    });
    if (!response.ok) {
      const error = await response.json();
      throw new Error(error.message);
    }
    form.reset();
    homePage();
  } catch (err) {
    alert(err.message);
  }
}
