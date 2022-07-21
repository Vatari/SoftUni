function focused() {
  [...document.querySelectorAll("input")].forEach((x) => {
    x.addEventListener("focus", onFocus);
    x.addEventListener("blur", onBblur);
  });

  function onFocus(ev) {
    ev.target.parentElement.className = "focused";
  }
  function onBblur(ev) {
    ev.target.parentElement.className = "blurred";
  }
}
