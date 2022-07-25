function template({ _id, title }) {
  const wrapElement = createElement("div", "accordion");
  const divHead = createElement("div", "head");
  const spanElement = createElement("span", "", title);
  const button = createElement("button", "button", "More");
  const divExtra = createElement("div", "extra");
  divExtra.style.display = "none";
  const contentParagraph = createElement("p");
  button.id = _id;

  divHead.append(spanElement, button);
  divExtra.appendChild(contentParagraph);
  wrapElement.append(divHead, divExtra);

  button.addEventListener("click", async () => {
    if (divExtra.style.display === "none") {
      const response = await fetch(
        `http://localhost:3030/jsonstore/advanced/articles/details/${_id}`
      );
      const data = await response.json();
      button.textContent = "Less";
      divExtra.style.display = "block";
      contentParagraph.textContent = data.content;
    } else {
      button.textContent = "More";
      divExtra.style.display = "none";
    }
  });

  return wrapElement;
}
function createElement(tag, className, content) {
  const element = document.createElement(tag);
  if (className) {
    element.classList.add(className);
  }
  element.textContent = content;

  return element;
}

async function solution() {
  const output = document.querySelector("#main");
  const response = await fetch(
    "http://localhost:3030/jsonstore/advanced/articles/list"
  );
  const titles = await response.json();

  titles.map((x) => output.appendChild(template(x)));
}

document.addEventListener("DOMContentLoaded", solution);
