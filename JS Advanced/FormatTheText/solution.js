function solve() {
  let text = document.querySelector("#exercise textarea").value;
  let output = document.querySelector("#output");
  let sentences = text.split(".").filter((x) => x.length != 0);
  while (sentences.length > 0) {
    let paragraphText = sentences.splice(0, 3).join(". ") + ".";
    let p = document.createElement("p");
    p.textContent = paragraphText;
    output.appendChild(p);
  }
}
