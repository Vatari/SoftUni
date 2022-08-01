let userData = null;

window.addEventListener("DOMContentLoaded", () => {
  userData = JSON.parse(localStorage.getItem("userData"));
  if (userData != null) {
    document.querySelector("#guest").style.display = "none";
    document.querySelector(".email > span").textContent = `${userData.email}`;
    document.querySelector("#addForm .add").disabled = false;
  } else {
    document.querySelector("#user").style.display = "none";
    document.querySelector("#addForm .add").disabled = true;
  }
 // getCatches();

  document
    .querySelector(".load")
    .addEventListener("click", async () => await getCatches());
  document.querySelector("#logout").addEventListener("click", onLogout);
  document.querySelector("#addForm").addEventListener("submit", addCatch);
});

const baseUrl = "http://localhost:3030/data/catches";

const logoutUrl = "http://localhost:3030/users/logout";
const updateBtn = document.querySelector(".update");

async function updateDeleteCatch(ev) {
  if (ev.target.classList.contains("update")) {
    let id = ev.target.getAttribute("data-id");
    const [angler, weight, species, location, bait, captureTime] =
      ev.target.parentNode.querySelectorAll(".catch > input");

    const updatedData = {
      angler: angler.value,
      weight: weight.value,
      species: species.value,
      location: location.value,
      bait: bait.value,
      captureTime: captureTime.value,
    };
    try {
      const response = await fetch(`${baseUrl}/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          "X-Authorization": userData.token,
        },
        body: JSON.stringify(updatedData),
      });
      if (!response.ok) {
        const error = await response.json();
        throw new Error(error.message);
      }
      getCatches();
    } catch (err) {
      alert(err.message);
    }
  } else if (ev.target.classList.contains("delete")) {
    let id = ev.target.getAttribute("data-id");

    try {
      const response = await fetch(`${baseUrl}/${id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          "X-Authorization": userData.token,
        },
      });
      if (!response.ok) {
        const error = await response.json();
        throw new Error(error.message);
      }
      getCatches();
    } catch (err) {
      alert(err.message);
    }
  }
}

async function onLogout(ev) {
  ev.preventDefault();
  try {
    const response = await fetch(logoutUrl, {
      headers: {
        "X-Authorization": userData.token,
      },
    });
    if (!response.ok) {
      const error = await response.json();
      throw new Error(error.message);
    }
    localStorage.clear();
    window.location = "./index.html";
  } catch (err) {
    alert(err.message);
  }
}
async function addCatch(ev) {
  if (!userData) {
    window.location = "./login.html";
    return;
  }
  const formData = new FormData(ev.target);
  const newData = Object.fromEntries(formData);
  try {
    if (Object.values(newData).some((x) => x == "")) {
      throw new Error("All fields are required!");
    }
    const response = await fetch(baseUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-Authorization": userData.token,
      },
      body: JSON.stringify(newData),
      ownerId: userData.ownerId,
    });
    if (!response.ok) {
      const error = await response.json();
      throw new Error(error.message);
    }
    ev.target.reset();
    getCatches();
  } catch (err) {
    alert(err.message);
  }
}
async function getCatches() {
  try {
    const response = await fetch(baseUrl);
    if (!response.ok) {
      const error = await response.json();
      throw new Error(error.message);
    }
    const data = await response.json();

    document.querySelector("#catches").replaceChildren(...data.map(load));
  } catch (err) {
    alert(err.message);
  }
}

function load(el) {
  const isOwner = userData && el._ownerId == userData.id;

  const div = document.createElement("div");
  div.classList.add("catch");
  div.innerHTML = ` <label>Angler</label>
        <input type="text" class="angler" value="${el.angler}" ${
    !isOwner ? "disabled" : ""
  }>
        <label>Weight</label>
        <input type="text" class="weight" value="${el.weight}" ${
    !isOwner ? "disabled" : ""
  }>
        <label>Species</label>
        <input type="text" class="species" value="${el.species}" ${
    !isOwner ? "disabled" : ""
  }>
        <label>Location</label>
        <input type="text" class="location" value="${el.location}" ${
    !isOwner ? "disabled" : ""
  }>
        <label>Bait</label>
        <input type="text" class="bait" value="${el.bait}" ${
    !isOwner ? "disabled" : ""
  }>
        <label>Capture Time</label>
        <input type="number" class="captureTime" value="${el.captureTime}" ${
    !isOwner ? "disabled" : ""
  }>
        <button class="update" data-id="${el._id}" ${
    !isOwner ? "disabled" : addEventListener("click", updateDeleteCatch)
  } >Update</button>
        <button class="delete" data-id="${el._id}" ${
    !isOwner ? "disabled" : addEventListener("click", updateDeleteCatch)
  }  >Delete</button>`;
  return div;
}

//addEventListener("click", () => deleteCatch)
