function attachGradientEvents() {
  let gradient = document.getElementById("gradient");
  gradient.addEventListener("mousemove", move);
  let result = document.getElementById("result");
  function move(ev) {
    let offset = Math.floor((ev.offsetX / gradient.clientWidth) * 100);
    result.textContent = offset + "%";
  }
}
