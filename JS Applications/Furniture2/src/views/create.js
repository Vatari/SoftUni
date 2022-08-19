import { html } from "../../node_modules/lit-html/lit-html.js";
import { createSubmitHandler } from "../util.js";
import * as service from "../api/services.js";

const createTemplate = (onCreate) => html`
  <div class="row space-top">
    <div class="col-md-12">
      <h1>Create New Furniture</h1>
      <p>Please fill all fields.</p>
    </div>
  </div>
  <form @submit=${onCreate}>
    <div class="row space-top">
      <div class="col-md-4">
        <div class="form-group">
          <label class="form-control-label" for="new-make">Make</label>
          <input
            class="form-control valid"
            id="new-make"
            type="text"
            name="make"
          />
        </div>
        <div class="form-group has-success">
          <label class="form-control-label" for="new-model">Model</label>
          <input
            class="form-control is-valid"
            id="new-model"
            type="text"
            name="model"
          />
        </div>
        <div class="form-group has-danger">
          <label class="form-control-label" for="new-year">Year</label>
          <input
            class="form-control is-invalid"
            id="new-year"
            type="number"
            name="year"
          />
        </div>
        <div class="form-group">
          <label class="form-control-label" for="new-description"
            >Description</label
          >
          <input
            class="form-control"
            id="new-description"
            type="text"
            name="description"
          />
        </div>
      </div>
      <div class="col-md-4">
        <div class="form-group">
          <label class="form-control-label" for="new-price">Price</label>
          <input
            class="form-control"
            id="new-price"
            type="number"
            name="price"
          />
        </div>
        <div class="form-group">
          <label class="form-control-label" for="new-image">Image</label>
          <input class="form-control" id="new-image" type="text" name="img" />
        </div>
        <div class="form-group">
          <label class="form-control-label" for="new-material"
            >Material (optional)</label
          >
          <input
            class="form-control"
            id="new-material"
            type="text"
            name="material"
          />
        </div>
        <input type="submit" class="btn btn-primary" value="Create" />
      </div>
    </div>
  </form>
`;

export function createPage(ctx) {
  ctx.render(createTemplate(createSubmitHandler(ctx, onCreate)));
}

async function onCreate(ctx, item, ev) {
  const make = document.querySelector("#new-make");
  const model = document.querySelector("#new-model");
  const year = document.querySelector("#new-year");
  const desc = document.querySelector("#new-description");
  const price = document.querySelector("#new-price");
  const image = document.querySelector("#new-image");

  if (item.make.length < 4) {
    make.classList.remove("is-valid");
    make.classList.add("is-invalid");

    return;
  } else {
    make.classList.remove("is-invalid");
    make.classList.add("is-valid");
  }
  if (item.model.length < 4) {
    model.classList.add("is-invalid");
    model.classList.remove("is-valid");

    return;
  } else {
    model.classList.remove("is-invalid");
    model.classList.add("is-valid");
  }
  if (Number(item.year) < 1950 || Number(item.year) > 2050) {
    year.classList.add("is-invalid");
    year.classList.remove("is-valid");

    return;
  } else {
    year.classList.remove("is-invalid");
    year.classList.add("is-valid");
  }

  if (item.description.length <= 10) {
    desc.classList.add("is-invalid");
    desc.classList.remove("is-valid");

    return;
  } else {
    desc.classList.remove("is-invalid");
    desc.classList.add("is-valid");
  }
  if (item.img != "") {
    image.classList.remove("is-invalid");
    image.classList.add("is-valid");
  } else {
    image.classList.add("is-invalid");
    image.classList.remove("is-valid");
    return;
  }

  if (item.price <= 0) {
    price.classList.add("is-invalid");
    price.classList.remove("is-valid");

    return;
  } else {
    price.classList.remove("is-invalid");
    price.classList.add("is-valid");
  }

  if (Object.values(item).some((x) => x == "")) {
    return alert("All fields are required!");
  }
  await service.create({
    make: item.make,
    model: item.model,
    year: item.year,
    img: item.img,
    material: item.material,
    description: item.description,
    price: item.price,
  });
  ev.target.reset();

  ctx.page.redirect("/");
}
