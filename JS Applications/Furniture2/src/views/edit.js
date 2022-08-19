import { html } from "../../node_modules/lit-html/lit-html.js";
import * as service from "../api/services.js";
import { createSubmitHandler } from "../util.js";

const editTemplate = (item, onEdit) => html`
  <div class="row space-top">
    <div class="col-md-12">
      <h1>Edit Furniture</h1>
      <p>Please fill all fields.</p>
    </div>
  </div>
  <form @submit=${onEdit}>
    <div class="row space-top">
      <div class="col-md-4">
        <div class="form-group">
          <label class="form-control-label" for="new-make">Make</label>
          <input
            class="form-control"
            id="new-make"
            type="text"
            name="make"
            .value=${item.make}
          />
        </div>
        <div class="form-group has-success">
          <label class="form-control-label" for="new-model">Model</label>
          <input
            class="form-control is-valid"
            id="new-model"
            type="text"
            name="model"
            .value=${item.model}
          />
        </div>
        <div class="form-group has-danger">
          <label class="form-control-label" for="new-year">Year</label>
          <input
            class="form-control is-invalid"
            id="new-year"
            type="number"
            name="year"
            .value=${item.year}
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
            .value=${item.description}
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
            .value=${item.price}
          />
        </div>
        <div class="form-group">
          <label class="form-control-label" for="new-image">Image</label>
          <input
            class="form-control"
            id="new-image"
            type="text"
            name="img"
            .value=${item.img}
          />
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
            .value=${item.material}
          />
        </div>
        <input type="submit" class="btn btn-info" value="Edit" />
      </div>
    </div>
  </form>
`;

export async function editPage(ctx) {
  const itemId = ctx.params.id;
  const item = await service.getById(itemId);

  ctx.render(editTemplate(item, createSubmitHandler(ctx, onEdit)));
}

async function onEdit(ctx, item, ev) {
  const itemId = ctx.params.id;

  if (Object.values(item).some((x) => x == "")) {
    return alert("All fields are required!");
  }
  await service.edit(itemId, {
    make: item.make,
    model: item.model,
    year: item.year,
    img: item.img,
    material: item.material,
    description: item.description,
    price: item.price,
  });
  ev.target.reset();

  ctx.page.redirect("/details/" + itemId);
}
