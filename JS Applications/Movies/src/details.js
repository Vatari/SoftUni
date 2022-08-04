import { showView } from "./util.js";
const detailsSection = document.querySelector("#movie-example");
const url = "http://localhost:3030/data/movies/";

export function detailsPage(id) {
  showView(detailsSection);
  displayMovie(id);
}
async function displayMovie(id) {
  const movie = await getMovie(id);

  detailsSection.replaceChildren(createMovieCard(movie));
}

function createMovieCard(movie) {
  const element = document.createElement("div");
  element.classList.add("container");
  element.innerHTML = `<div class="row bg-light text-dark">
  <h1>Movie title: ${movie.title}</h1>
    <div class="col-md-8">
    <img
      class="img-thumbnail"
      src=${movie.img}
      alt="Movie"
    />
  </div>
  <div class="col-md-4 text-center">
    <h3 class="my-3">Movie Description</h3>
    <p>
    ${movie.description}
    </p>
    <a class="btn btn-danger" href="#">Delete</a>
    <a class="btn btn-warning" href="#">Edit</a>
    <a class="btn btn-primary" href="#">Like</a>
    <span class="enrolled-span">Liked 1</span>
  </div>
  </div>`;
  return element;
}

async function getMovie(id) {
  try {
    const response = await fetch(`${url}${id}`);
    if (!response.ok) {
      const error = await response.json();
      throw new Error(error.message);
    }
    const movie = await response.json();
    return movie;
  } catch (err) {
    alert(err.message);
  }
}
