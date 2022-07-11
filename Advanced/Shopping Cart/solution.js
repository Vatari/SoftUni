function solve() {
  Array.from(document.querySelectorAll(".add-product")).forEach((x) =>
    x.addEventListener("click", addProduct)
  );
  document.querySelector(".checkout").addEventListener("click", checkout);
  let products = {
    Bread: 0.8,
    Milk: 1.09,
    Tomatoes: 0.99,
  };
  let added = [];
  let textArea = document.querySelector("textarea");
  let total = 0;
  let finalText = "";

  function addProduct(e) {
    let current =
      e.target.parentNode.parentNode.querySelector(
        ".product-title"
      ).textContent;
    finalText = `Added ${current} for ${products[current].toFixed(
      2
    )} to the cart.\n`;
    total += products[current];
    textArea.value += finalText;
    if (!added.includes(current)) {
      added.push(current);
    }
  }

  function checkout() {
    finalText = `You bought ${added.join(", ")} for ${total.toFixed(2)}.`;
    textArea.value += finalText;
    Array.from(document.querySelectorAll("button")).forEach(
      (x) => (x.disabled = true)
    );
  }
}
