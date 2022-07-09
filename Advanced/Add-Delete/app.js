function addItem() {
  let input = document.getElementById("newItemText");

  let items = document.getElementById("items");
  let li = document.createElement("li");
  li.textContent = input.value;
  let a = document.createElement("a");
  a.href = "#";
  a.textContent = "[Delete]";
  items.appendChild(li);
  li.appendChild(a);
  input.value = "";

  a.addEventListener("click", deleteItem);

  function deleteItem(ev) {
    ev.target.parentElement.remove();
  }
}
