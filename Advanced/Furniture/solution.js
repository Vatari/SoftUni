function solve() {
  let [generateBtn, buyBtn] = [...document.querySelectorAll("button")];
  generateBtn.addEventListener("click", generate);
  buyBtn.addEventListener("click", buy);

  function generate(ev) {
    let input = JSON.parse(document.querySelector("textarea").value);
    input.forEach((el) => {
      let tr = document.createElement("tr");
      let td1 = document.createElement("td");
      let img = document.createElement("img");
      img.src = el.img;
      td1.appendChild(img);
      tr.appendChild(td1);
      let td2 = document.createElement("td");
      let p = document.createElement("p");
      p.textContent = el.name;
      td2.appendChild(p);
      tr.appendChild(td2);
      let td3 = document.createElement("td");
      let p2 = document.createElement("p");
      p2.textContent = Number(el.price);
      td3.appendChild(p2);
      tr.appendChild(td3);
      let td4 = document.createElement("td");
      let p3 = document.createElement("p");
      p3.textContent = Number(el.decFactor);
      td4.appendChild(p3);
      tr.appendChild(td4);
      let td5 = document.createElement("td");
      let input = document.createElement("input");
      input.type = "checkbox";
      td5.appendChild(input);
      tr.appendChild(td5);
      document.querySelector("tbody").appendChild(tr);
    });
  }

  function buy(ev) {
    let checkboxes = [...document.querySelectorAll("tbody input")].filter(
      (x) => x.checked
    );
    let bought = [];
    let price = 0;
    let decFactor = 0;
    checkboxes.forEach((x) => {
      let parent = x.parentElement.parentElement;
      let data = [...parent.querySelectorAll("p")];
      bought.push(data[0].textContent);
      price += Number(data[1].textContent);
      decFactor += Number(data[2].textContent);
    });
    let output = document.querySelectorAll("textarea")[1];
    output.textContent += `Bought furniture: ${bought.join(", ")}\r\n`;
    output.textContent += `Total price: ${price.toFixed(2)}\r\n`;
    output.textContent += `Average decoration factor: ${
      decFactor / checkboxes.length
    }`;
  }
}
