let loadBtn = document.getElementById("loadBooks");
let tableBody = document.querySelector(
  "body > table:nth-child(2) > tbody:nth-child(2)"
);
let mainForm = document.querySelector("form");
let titleInput = document.querySelector(
  "body > form:nth-child(3) > input:nth-child(3)"
);
let authorInput = document.querySelector(
  "body > form:nth-child(3) > input:nth-child(5)"
);

let submitBtn = document.querySelector(
  "body > form:nth-child(3) > button:nth-child(6)"
);

let baseUrl = `http://localhost:3030/jsonstore/collections/books`;

submitBtn.addEventListener("click", add);

async function add(e) {
  e.preventDefault();

  let data = {
    title: titleInput.value,
    author: authorInput.value,
  };

  try {
    if (!data.title || !data.author) {
      return alert("All fields are required");
    }
    const response = await fetch(baseUrl, {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    if (!response.ok) {
      const error = await response.json();
      throw new Error(error.message);
    }
    await load();
    titleInput.value = "";
    authorInput.value = "";
  } catch (err) {
    alert(err.message);
  }
}

loadBtn.addEventListener("click", load);
async function load() {
  tableBody.innerHTML = "";

  const response = await fetch(baseUrl);
  const data = await response.json();

  Object.keys(data).forEach((x) => {
    let tr = document.createElement("tr");
    let tdName = document.createElement("td");
    let tdAuthor = document.createElement("td");
    let tdBtns = document.createElement("td");

    tdName.textContent = data[x].title;
    tdAuthor.textContent = data[x].author;
    let editBtn = document.createElement("button");
    editBtn.textContent = "Edit";
    editBtn.addEventListener("click", async (ev) => {
      await edit(x);

    //  await load();

    });





    let deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";


    deleteBtn.addEventListener("click", async (ev) => {
      await deleteItem(x);
      await load();

      ev.target.parentNode.parentNode.remove();
    });

    tr.appendChild(tdName);
    tr.appendChild(tdAuthor);
    tr.appendChild(tdBtns);
    tdBtns.appendChild(editBtn);
    tdBtns.appendChild(deleteBtn);
    tableBody.appendChild(tr);
    titleInput.value = data[x].title;
    authorInput.value = data[x].author;
  });

  async function edit(x) {
    let title = mainForm.querySelector("h3");
    if (!title.textContent.startsWith("Edit")) {
      title.textContent = `Edit ${title.textContent}`;
    
      mainForm.children[2].value = book.children[0].textContent;
      mainForm.children[4].value = book.children[1].textContent;
      bookId = book.id;
  

    
      try {
        const response = await fetch(`${baseUrl}/${x}`);
        if (!response.ok) {
          const error = await response.json();
          throw new Error(error.message);
        }

        const data = await response.json();


        Object.entries(data).forEach(x => {
          console.log(x);

     titleInput.value = x.title
     authorInput.value = x.author



 

        })




      } catch (err) {
        alert(err.message);
      }
    }
  }

  async function deleteItem(x) {
    let deleteUrl = `${baseUrl}/${x}`;
    try {
      const response = await fetch(deleteUrl, {
        method: "delete",
      });
      if (!response.ok) {
        const error = await response.json();
        throw new Error(error.message);
      }
    } catch (err) {
      alert(err.message);
    }
  }
}
/* try {
  const response = await fetch(`${baseUrl}/${x}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(formData),
  });
  if (!response.ok) {
    const error = await response.json();
    throw new Error(error.message);
  } */



 