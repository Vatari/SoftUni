import { detailsPage } from "./details.js";
import { showView } from "./util.js";
const homeSection = document.querySelector("#home-page");
const catalog = homeSection.querySelector("#movies-list");
catalog.addEventListener("click", (ev)=> {
  ev.preventDefault()
   if (ev.target.tagName == 'BUTTON') {
    console.log(ev.target.dataset.id)
    id = ev.target.dataset.id
    detailsPage(id)
   }
})
const url = "http://localhost:3030/data/movies";
export function homePage() {
  showView(homeSection);
  displayMovies()
}

async function loadMovies() {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      const error = await response.json();
      throw new Error(error.message);
    }

    const data = await response.json();
    return data;
  } catch (err) {
    alert(err.message);
  }
}
async function displayMovies() {
  const movies = await loadMovies()
 catalog.replaceChildren(...movies.map(createPreview))

}

function createPreview(movie) {
  const element = document.createElement("li");
  element.innerHTML = `<img class='card-img-top' src = ${movie.img} width ="400">
   <div class = "card-body">
   <h4 class = "card-title">${movie.title}</h4>
   </div>
   <div class = "card-footer">
   <a href="/details/${movie._id}>
   <button data-id = "${movie._id}" type = "button" class = "btn-info">Details</button>
   </a>
   </div>`;
  return element;
}
