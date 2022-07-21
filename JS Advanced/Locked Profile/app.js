function lockedProfile() {
  [...document.getElementsByTagName("button")].forEach((btn) =>
    btn.addEventListener("click", onclick)
  );

  function onclick(ev) {
    let profile = ev.target.parentNode;
    let moreInformation = profile.getElementsByTagName("div")[0];
    let radioStatus = profile.querySelector(
      'input[type="radio"]:checked'
    ).value;

    if (radioStatus === "unlock") {
      if (ev.target.textContent === "Show more") {
        moreInformation.style.display = "inline-block";
        ev.target.textContent = "Hide it";
      } else if (ev.target.textContent === "Hide it") {
        moreInformation.style.display = "none";
        ev.target.textContent = "Show more";
      }
    }
  }
}
