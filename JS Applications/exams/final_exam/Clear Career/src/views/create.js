import { html } from "../../node_modules/lit-html/lit-html.js";
import { createSubmitHandler } from "../util.js";
import * as service from "../api/services.js";

const createTemplate = (onCreate) => html`
  <section id="create">
    <div class="form">
      <h2>Create Offer</h2>
      <form @submit=${onCreate} class="create-form">
        <input type="text" name="title" id="job-title" placeholder="Title" />
        <input
          type="text"
          name="imageUrl"
          id="job-logo"
          placeholder="Company logo url"
        />
        <input
          type="text"
          name="category"
          id="job-category"
          placeholder="Category"
        />
        <textarea
          id="job-description"
          name="description"
          placeholder="Description"
          rows="4"
          cols="50"
        ></textarea>
        <textarea
          id="job-requirements"
          name="requirements"
          placeholder="Requirements"
          rows="4"
          cols="50"
        ></textarea>
        <input type="text" name="salary" id="job-salary" placeholder="Salary" />

        <button type="submit">post</button>
      </form>
    </div>
  </section>
`;

export function createPage(ctx) {
  ctx.render(createTemplate(createSubmitHandler(ctx, onCreate)));
}

async function onCreate(ctx, item, ev) {
  if (Object.values(item).some((x) => x == "")) {
    return alert("All fields are required!");
  }
  await service.create({
    title: item.title,
    imageUrl: item.imageUrl,
    category: item.category,
    description: item.description,
    requirements: item.requirements,
    salary: item.salary,
  });
  ev.target.reset();

  ctx.page.redirect("/dashboard");
}
