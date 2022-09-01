import { html, nothing } from "../../node_modules/lit-html/lit-html.js";
import * as service from "../api/services.js";

const detailsTemplate = (
  ctx,
  item,
  onDelete,
  applyCount,
  hasApply,
  onApply
) => html`
  <section id="details">
    <div id="details-wrapper">
      <img id="details-img" src=${item.imageUrl} alt="example1" />
      <p id="details-title">${item.title}</p>
      <p id="details-category">
        Category: <span id="categories">${item.category}</span>
      </p>
      <p id="details-salary">
        Salary: <span id="salary-number">${item.salary}</span>
      </p>
      <div id="info-wrapper">
        <div id="details-description">
          <h4>Description</h4>
          <span>${item.description}</span>
          >
        </div>
        <div id="details-requirements">
          <h4>Requirements</h4>
          <span>${item.requirements}</span>
        </div>
      </div>
      <p>Applications: <strong id="applications">${applyCount}</strong></p>
      <div id="action-buttons">
        ${item.isOwner
          ? html`
              <a href="/edit/${item._id}" id="edit-btn">Edit</a>
              <a @click=${onDelete} href="javascript:void(0)" id="delete-btn"
                >Delete</a
              >
            `
          : nothing}
        ${ctx.user ? applyControl(item.isOwner, hasApply, onApply) : nothing}
      </div>
    </div>
  </section>
`;

const applyControl = (isOwner, hasApply, onApply) => {
  if (isOwner || hasApply) {
    return null;
  } else {
    return html`
      <a @click=${onApply} href="javascript:void(0)" id="apply-btn">Apply</a>
    `;
  }
};

export async function detailsPage(ctx) {
  const itemId = ctx.params.id;
  const item = await service.getById(itemId);

  const [applyCount, hasApply] = await Promise.all([
    service.getApplications(itemId),
    ctx.user ? service.getMyApplies(itemId, ctx.user._id) : 0,
  ]);

  if (ctx.user) {
    item.isOwner = ctx.user._id == item._ownerId;
  }

  ctx.render(
    detailsTemplate(ctx, item, onDelete, applyCount, hasApply, onApply)
  );

  async function onDelete() {
    const choice = confirm(`Are you sure to delete ${item.title}?`);

    if (choice) {
      await service.deleteById(itemId);
      ctx.page.redirect("/dashboard");
    }
  }
  async function onApply() {
    await service.applyOffer(itemId);
    ctx.page.redirect(`/details/${itemId}`);
  }
}
