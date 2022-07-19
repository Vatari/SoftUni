function solve() {
  const inputs = {
    author: document.querySelector("#creator"),
    title: document.querySelector("#title"),
    category: document.querySelector("#category"),
    content: document.querySelector("#content"),
  };

  const postSection = document.querySelector(
    "body > div.site > div > main > section"
  );
  const archiveSection = document.querySelector(
    "body > div.site > div > aside > section.archive-section > ol"
  );
  const createBtn = document.querySelector(
    "body > div.site > div > aside > section:nth-child(1) > form > button"
  );
  createBtn.addEventListener("click", create);
  let result = [];

  function create(ev) {
    ev.preventDefault();

    let varAuthor = inputs.author.value;
    let varTitle = inputs.title.value;
    let varCategory = inputs.category.value;
    let varContent = inputs.content.value;

    let article = createElement("article");
    let h1 = createElement("h1", varTitle);
    let pCat = createElement("p", "Category: ");
    pCat.innerHTML += `<strong>${varCategory}</strong`;

    let pCre = createElement("p", "Creator: ");
    pCre.innerHTML += `<strong>${varAuthor}</strong`;

    let pContent = createElement("p", varContent);
    let div = createElement("div", "", "buttons");
    let delBtn = createElement("button", "Delete", "btn");
    delBtn.addEventListener("click", del);
    delBtn.classList.add("delete");
    let archiveBtn = createElement("button", "Archive", "btn");
    archiveBtn.classList.add("archive");
    archiveBtn.addEventListener("click", archive);
    div.appendChild(delBtn);
    div.appendChild(archiveBtn);
    article.appendChild(h1);
    article.appendChild(pCat);
    article.appendChild(pCre);
    article.appendChild(pContent);
    article.appendChild(div);
    postSection.appendChild(article);

    function del() {
      article.remove();
    }

    function archive(ev) {
      let li = createElement("li", h1.textContent);
      result.push(li);

      let sorted = result.sort((a, b) =>
        a.textContent.localeCompare(b.textContent)
      );

      sorted.forEach((x) => archiveSection.appendChild(x));
      article.remove();
    }
  }

  function createElement(type, content, className) {
    let element = document.createElement(type);
    element.textContent = content;
    if (className) {
      element.classList.add(className);
    }
    return element;
  }
}
