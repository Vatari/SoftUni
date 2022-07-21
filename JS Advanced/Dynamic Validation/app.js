function solve() {
  document.getElementById("email").addEventListener("change", solve);

  let pattern =
    /^[_a-z0-9-]+(\.[_a-z0-9-]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,6})$/;

  let input = document.getElementById("email");

  function solve() {
    if (input.value.match(pattern)) {
      input.value = "";
      input.classList.remove("error");
    } else {
      input.classList.add("error");
    }
  }
}
