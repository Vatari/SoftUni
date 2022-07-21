function solve() {
  let input = document.querySelector("#email");
  let pattern =
    /^[_a-z0-9-]+(\.[_a-z0-9-]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,6})$/;

  function checkMail(input) {
    if (pattern.test(input)) return true;

    return false;
  }

  function styling(element, email) {
    element.className = checkMail(email) ? "" : "error";
  }
  input.addEventListener("change", (el) => styling(el.target, el.target.value));
}