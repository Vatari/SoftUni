window.onload = load;

function load() {
  const baseUrl = `http://localhost:3030/jsonstore/collections/students`;

  const table = document.querySelector("#results").children[1];

  const form = document.querySelector("#form");
  form.addEventListener("submit", createRecord);

  initialLoad();

  async function createRecord(ev) {
    ev.preventDefault();

    const form = new FormData(ev.target);

    const data = {
      firstName: form.get("firstName"),
      lastName: form.get("lastName"),
      facultyNumber: form.get("facultyNumber"),
      grade: form.get("grade"),
    };

    const entries = [...form];
    if (entries.some(([key, val]) => val == "")) {
      return;
    }

    await fetch(baseUrl, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(data),
    });
    form.reset()

   //initialLoad();
  }

  async function initialLoad() {
    const response = await fetch(baseUrl);
    const data = await response.json();

    table.innerHTML = "";

    for (let student in data) {
      const tr = document.createElement("tr");
      table.appendChild(tr);

      const tdFname = document.createElement("td");
      tdFname.innerHTML = data[student].firstName;
      tr.appendChild(tdFname);

      const tdLname = document.createElement("td");
      tdLname.innerHTML = data[student].lastName;
      tr.appendChild(tdLname);

      const tdNumber = document.createElement("td");
      tdNumber.innerHTML = data[student].facultyNumber;
      tr.appendChild(tdNumber);

      const tdGrade = document.createElement("td");
      tdGrade.innerHTML = data[student].grade;
      tr.appendChild(tdGrade);
    }
  }
}
