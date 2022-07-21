function addItem() {
  let itemText = document.querySelector("#newItemText");
  let itemValue = document.querySelector("#newItemValue");

  let menu = document.querySelector("#menu");
  let newItem = document.createElement("option");
  newItem.textContent = itemText.value;
  newItem.value = itemValue.value;

  newItem.id = "menu";
  if (itemText.value != "" && itemValue.value != "") {
    menu.appendChild(newItem);
  }
  itemText.value = "";
  itemValue.value = "";
}
