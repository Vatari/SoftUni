function solve() {
  let input = (x) =>
    document.querySelector(`#container > input[type=text]:nth-child(${x})`);
  let inputText = [input(1), input(2), input(3)];
  let htmlElements = {
    movies: document.querySelector("#movies > ul"),
    archives: document.querySelector("#archive > ul"),
  };

  let checkInput = (arr, num) =>
    arr.every((x) => x !== "") && !isNaN(Number(num));
  let clearField = (arr) => arr.map((x) => (x.value = ""));

  function template(n, h, p) {
    let wrapFunc = document.createElement("li");

    wrapFunc.innerHTML = `<span>${n}</span><strong>Hall: ${h}</strong>
<div><strong>${p.toFixed(2)}</strong><input placeholder="Tickets Sold"/>
<button>Archive</button></div>`;

    return wrapFunc;
  }

  function archived(n, x) {
    let wrapFunc = document.createElement("li");

    wrapFunc.innerHTML = `<span>${n}</span>
<strong>Total amount: ${x.toFixed(2)}</strong>
<button>Delete</button>`;

    return wrapFunc;
  }

  document.addEventListener("click", (ev) => {
    ev.preventDefault();

    if (ev.target.tagName === "BUTTON") {
      let [n, x, z] = inputText.map((x) => x.value);

      let buttons = {
        "On Screen": () => {
          if (checkInput([n, x, z], z)) {
            clearField(inputText);
            htmlElements.movies.appendChild(template(n, x, Number(z)));
          }
        },
        Archive: (ev) => {
          let tickets = ev.previousElementSibling.value;

          if (checkInput([tickets], tickets)) {
            let parent = ev.parentNode.parentNode;
            let name = parent.children[0].innerHTML;
            let price =
              ev.previousElementSibling.previousElementSibling.innerHTML;

            htmlElements.archives.appendChild(
              archived(name, tickets * Number(price))
            );
            parent.remove();
          }
        },
        Delete: (e) => e.parentNode.remove(),
        Clear: () => (htmlElements.archives.innerHTML = ""),
      };

      buttons[ev.target.textContent](ev.target);
    }
  });
}
