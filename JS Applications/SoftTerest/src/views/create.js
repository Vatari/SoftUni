import { html } from "../../node_modules/lit-html/lit-html.js";
import { createSubmitHandler } from "../util.js";
import * as service from "../api/services.js";

const createTemplate = (onCreate) => html` <div
  class="container home wrapper  my-md-5 pl-md-5"
>
  <div class=" d-md-flex flex-mb-equal ">
    <div class="col-md-6">
      <img
        class="responsive-ideas create"
        src="./images/creativity_painted_face.jpg"
        alt=""
      />
    </div>
    <form
      @submit=${onCreate}
      class="form-idea col-md-5"
      action="#/create"
      method="post"
    >
      <div class="text-center mb-4">
        <h1 class="h3 mb-3 font-weight-normal">Share Your Idea</h1>
      </div>
      <div class="form-label-group">
        <label for="ideaTitle">Title</label>
        <input
          type="text"
          id="ideaTitle"
          name="title"
          class="form-control"
          placeholder="What is your idea?"
          required=""
          autofocus=""
        />
      </div>
      <div class="form-label-group">
        <label for="ideaDescription">Description</label>
        <textarea
          type="text"
          name="description"
          class="form-control"
          placeholder="Description"
          required=""
        ></textarea>
      </div>
      <div class="form-label-group">
        <label for="inputURL">Add Image</label>
        <input
          type="text"
          id="inputURL"
          name="imageURL"
          class="form-control"
          placeholder="Image URL"
          required=""
        />
      </div>
      <button class="btn btn-lg btn-dark btn-block" type="submit">
        Create
      </button>

      <p class="mt-5 mb-3 text-muted text-center">© SoftTerest - 2021.</p>
    </form>
  </div>
</div>`;

export function createPage(ctx) {
  ctx.render(createTemplate(createSubmitHandler(ctx, onCreate)));
}

async function onCreate(ctx, item, ev) {
  const formData = new FormData(ev.target);
  let inputImg = formData.get("imageURL");

  if (Object.values(item).some((x) => x == "")) {
    return alert("All fields are required!");
  }
  if (item.title.length < 6) {
    return alert("Title must be at least 6 characters");
  }

  if (item.description.length < 10) {
    return alert("Description must be at least 10 characters");
  }
  if (inputImg.length < 5) {
    return alert("Image must be at least 5 characters");
  }

  await service.create({
    title: item.title,
    description: item.description,
    img: inputImg,
  });
  ev.target.reset();

  ctx.page.redirect("/catalog");
}
