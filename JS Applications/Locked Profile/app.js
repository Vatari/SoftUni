function lockedProfile() {
  const baseUrl = "http://localhost:3030/jsonstore/advanced/profiles";
  const main = document.querySelector("#main");
  async function getProfile() {
    const response = await fetch(baseUrl);

    if (response.status != 200) {
      throw new Error(response.statusText);
    }
    try {
      const profiles = await response.json();
      return Object.values(profiles);
    } catch (err) {
      err.message;
    }
  }

  async function createProfiles() {
    const profiles = await getProfile();
    main.innerHTML = "";
    profiles.forEach((x) => {
      let div = createElement("div", "", "profile");
      let button = createElement("button", "Show more");
      button.addEventListener("click", showMore);

      div.innerHTML = `<img src="./iconProfile2.png" class="userIcon" />
      <label>Lock</label>
      <input type="radio" name="user1Locked" value="lock" checked>
      <label>Unlock</label>
      <input type="radio" name="user1Locked" value="unlock"><br>
      <hr>
      <label>Username</label>
      <input type="text" name="user1Username" value=${x.username} disabled readonly />
      <div class="hiddenInfo">
        <hr>
        <label>Email:</label>
        <input type="email" name="user1Email" value=${x.email} disabled readonly />
        <label>Age:</label>
        <input type="text" name="user1Age" value=${x.age} disabled readonly />
      </div>
      `;
      div.appendChild(button);
      main.appendChild(div);
    });
  }

  function createElement(type, content, className) {
    let element = document.createElement(type);
    if (className) {
      element.classList.add(className);
    }
    element.textContent = content;
    return element;
  }

  createProfiles();

  function showMore(ev) {
    let profile = ev.target.parentNode;
    let moreInformation = profile.getElementsByTagName("div")[0];
    let radioStatus = profile.querySelector(
      'input[type="radio"]:checked'
    ).value;

    if (radioStatus === "unlock") {
      if (ev.target.textContent === "Show more") {
        moreInformation.classList.remove("hiddenInfo");
        ev.target.textContent = "Hide it";
       if (radioStatus === 'lock') {
        ev.target.disabled = true
       }
      } else if (ev.target.textContent === "Hide it") {
        moreInformation.classList.add("hiddenInfo");
        ev.target.textContent = "Show more";
      }
    }
  }
}
