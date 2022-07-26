const cacheObj = { posts: null, comments: null };
const baseUrl = "http://localhost:3030/jsonstore/blog/";

const clear = (...arr) => arr.forEach((x) => (x.innerHTML = ""));

async function getPost(url) {
  const data = await fetch(`${baseUrl}${url}`);

  try {
    if (data.status != 200) {
      throw new Error(data.statusText);
    }
    return await data.json();
  } catch (err) {
    alert(err.message);
  }
}

async function getPosts(type) {
  if (cacheObj[type] === null) {
    const data = await getPost(type);
    cacheObj[type] = data;
  }
}

async function displayPosts() {
  await getPosts("posts");
  const selectElement = document.getElementById(`posts`);
  selectElement.innerHTML = "";

  Object.values(cacheObj.posts).forEach((x) => {
    selectElement.appendChild(createElement(x.id, x.title));
  });
}

async function displayPost() {
  await getPosts("comments");
  const htmlElements = {
    title: document.querySelector(`#post-title`),
    body: document.querySelector(`#post-body`),
    comments: document.querySelector(`#post-comments`),
    selectElement: document.querySelector(`#posts`),
  };
  const selected =
    htmlElements.selectElement.options[
      htmlElements.selectElement.selectedIndex
    ];
  const comments = Object.values(cacheObj.comments).filter(
    (x) => x.postId == selected.id
  );

  clear(htmlElements.title, htmlElements.body, htmlElements.comments);

  htmlElements.title.innerHTML = selected.value;
  htmlElements.body.innerHTML = cacheObj.posts[selected.id].body;
  htmlElements.comments.innerHTML = comments
    .map((x) => `<li id=${x.id}>${x.text}</li>`)
    .join("");
}
function createElement(id, text) {
  const element = document.createElement("option");
  element.textContent = text;
  element.id = id;

  return element;
}

function attachEvents() {
  document.addEventListener("click", (ev) => {
    if (ev.target.tagName === "BUTTON") {
      const buttons = {
        btnViewPost: displayPost,
        btnLoadPosts: displayPosts,
      };

      buttons[ev.target.id]();
    }
  });
}

attachEvents();
