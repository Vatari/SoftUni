function attachEvents() {
  const baseUrl = "http://localhost:3030/jsonstore/phonebook";
  const phoneBookList = document.querySelector("#phonebook");
  const loadBtn = document.querySelector("#btnLoad");
  const personInput = document.querySelector("#person");
  const phoneInput = document.querySelector("#phone");
  const createBtn = document.querySelector("#btnCreate");

  loadBtn.addEventListener("click", async () => displayData(await getData()));
  createBtn.addEventListener("click", async () => {
    await createData();
    displayData(await getData());
  });

  async function getData() {
    phoneBookList.innerHTML = "";
    personInput.value = "";
    phoneInput.value = "";
    try {
      const response = await fetch(baseUrl);
      if (!response.ok) {
        throw new Error(response.status);
      }

      const data = await response.json();
      return Object.values(data);
    } catch (err) {
      alert(err.message);
    }
  }
  async function deleteData(ev) {
    const response = await fetch(`${baseUrl}/${ev.target.parentNode.id}`, {
      method: "DELETE",
    });
    displayData(await getData());
  }

  async function createData() {
    let data = {
      person: personInput.value,
      phone: phoneInput.value,
    };

    const response = await fetch(baseUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });
    return await response.json();
  }

  function displayData(data) {
    Object.values(data).map((x) => {
      let li = document.createElement("li");
      li.id = x._id;
      let deleteBtn = document.createElement("button");
      deleteBtn.textContent = "Delete";
      deleteBtn.addEventListener("click", deleteData);
      li.textContent = `${x.person}: ${x.phone}`;
      li.appendChild(deleteBtn);
      phoneBookList.appendChild(li);
    });
  }
}

attachEvents();
