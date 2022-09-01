import { html } from "../../node_modules/lit-html/lit-html.js";
import * as service from "../api/services.js";
import { createSubmitHandler } from "../util.js";

const editTemplate = (item, onEdit) => html`
  <section id="edit">
    <div class="form">
      <h2>Edit Offer</h2>
      <form @submit=${onEdit} class="edit-form">
        <input
          type="text"
          name="title"
          id="job-title"
          placeholder="Title"
          .value=${item.title}
        />
        <input
          type="text"
          name="imageUrl"
          id="job-logo"
          placeholder="Company logo url"
          .value=${item.imageUrl}
        />
        <input
          type="text"
          name="category"
          id="job-category"
          placeholder="Category"
          .value=${item.category}
        />
        <textarea
          id="job-description"
          name="description"
          placeholder="Description"
          rows="4"
          cols="50"
          .value=${item.description}
        ></textarea>
        <textarea
          id="job-requirements"
          name="requirements"
          placeholder="Requirements"
          rows="4"
          cols="50"
          .value=${item.requirements}
        ></textarea>
        <input
          type="text"
          name="salary"
          id="job-salary"
          placeholder="Salary"
          .value=${item.salary}
        />

        <button type="submit">post</button>
      </form>
    </div>
  </section>
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
    title: item.title,
    imageUrl: item.imageUrl,
    category: item.category,
    description: item.description,
    requirements: item.requirements,
    salary: item.salary,
  });
  ev.target.reset();

  ctx.page.redirect(`/details/${itemId}`);
}
