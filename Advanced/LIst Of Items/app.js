function addItem() {
  let input = document.getElementById("newItemText").value;

  let list = document.getElementById("items");

  let li = document.createElement("li");
  li.textContent = input;
  list.appendChild(li);
}
