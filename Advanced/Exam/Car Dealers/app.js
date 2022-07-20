window.addEventListener("load", solve);

function solve() {
  const inputs = {
    make: document.querySelector("#make"),
    model: document.querySelector("#model"),
    year: document.querySelector("#year"),
    fuelType: document.querySelector("#fuel"),
    originalCost: document.querySelector("#original-cost"),
    sellingPrice: document.querySelector("#selling-price"),
  };
  const tbody = document.querySelector("#table-body");
  const soldCars = document.querySelector("#cars-list");
  const totalProfit = document.querySelector("#profit");
  let profit = 0;

  let publishhBtn = document.querySelector("#publish");
  publishhBtn.addEventListener("click", publish);

  function publish(ev) {
    ev.preventDefault();
    if (!Object.values(inputs).every((x) => x.value != "")) {
      return;
    }
    if (inputs.sellingPrice.value < inputs.originalCost.value) {
      return;
    }
    if (inputs.year.value < 1990 || inputs.year.value > 2022) {
      return;
    }
    let make = inputs.make.value;
    let model = inputs.model.value;
    let year = inputs.year.value;
    let fuelType = inputs.fuelType.value;
    let originalCost = Number(inputs.originalCost.value);
    let sellingPrice = Number(inputs.sellingPrice.value);

    let row = createElement("tr", "", "row");
    let tdMake = createElement("td", make);
    let tdModel = createElement("td", model);
    let tdYear = createElement("td", year);
    let tdFuelType = createElement("td", fuelType);
    let tdOriginalCost = createElement("td", originalCost);
    let tdSellingPrice = createElement("td", sellingPrice);
    let tdBtns = createElement("td");
    let editBtn = createElement("button", "Edit", "action-btn");
    editBtn.classList.add("edit");
    let sellBtn = createElement("button", "Sell", "action-btn");
    sellBtn.classList.add("sell");
    sellBtn.addEventListener("click", sell);

    row.appendChild(tdMake);
    row.appendChild(tdModel);
    row.appendChild(tdYear);
    row.appendChild(tdFuelType);
    row.appendChild(tdOriginalCost);
    row.appendChild(tdSellingPrice);
    tdBtns.appendChild(editBtn);
    tdBtns.appendChild(sellBtn);
    row.appendChild(tdBtns);
    tbody.appendChild(row);

    Object.values(inputs).forEach((x) => (x.value = ""));

    editBtn.addEventListener("click", edit);

    function edit(ev) {
      inputs.make.value = tdMake.innerText;
      inputs.model.value = tdModel.innerText;
      inputs.year.value = tdYear.innerText;
      inputs.fuelType.value = tdFuelType.innerText;
      inputs.originalCost.value = tdOriginalCost.innerText;
      inputs.sellingPrice.value = tdSellingPrice.innerText;

      row.remove();
    }

    function sell(ev) {
      let li = createElement("li", "", "each-list");
      let models = createElement("span", `${make} ${model}`);
      let years = createElement("span", year);
      let priceDifference = createElement(
        "span",
        `${sellingPrice - originalCost}`
      );
      li.appendChild(models);
      li.appendChild(years);
      li.appendChild(priceDifference);
      soldCars.appendChild(li);
      profit += sellingPrice - originalCost;
      totalProfit.textContent = `${profit.toFixed(2)}`;
      totalProfit.style.display = "strong";
      row.remove();
    }
  }

  function createElement(type, content, className) {
    let element = document.createElement(type);
    element.textContent = content;
    if (className) {
      element.classList.add(className);
    }
    return element;
  }
}
