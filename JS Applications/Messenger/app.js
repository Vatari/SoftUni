function attachEvents() {
  const baseUrl = "http://localhost:3030/jsonstore/messenger";
  const sendBtn = document.querySelector("#submit");
  const refreshBtn = document.querySelector("#refresh");
  const authorField = document.querySelector('[name="author"]');
  const textArea = document.querySelector("#messages");
  const contentField = document.querySelector('[name="content"]');
  sendBtn.addEventListener("click", onSubmit);
  refreshBtn.addEventListener("click", onRefresh);

  async function onSubmit(ev) {
    let data = {
      author: authorField.value,
      content: contentField.value,
    };

    const response = await fetch(baseUrl, {
      method: "POST",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify(data),
    });
  }
  async function onRefresh(ev) {
    textArea.value = "";
    const response = await fetch(baseUrl);
    const data = await response.json();

    textArea.value = Object.values(data)
      .map((x) => `${x.author}: ${x.content}`)
      .join("\n");
  }
}

attachEvents();
