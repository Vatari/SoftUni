function toggle() {
  let button = document.querySelector("span.button");
  let hiddenText = document.querySelector("#extra, p");
  if (button.textContent === "More") {
    hiddenText.style = "display: block";
    button.textContent = "Less";
  } else if (button.textContent === "Less") {
    button.textContent = "More";
    hiddenText.style = "display: none";
  }
}
