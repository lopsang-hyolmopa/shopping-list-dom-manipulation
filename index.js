const itemList = document.querySelector("ul");
const inputElement = document.querySelector("input");
const addButton = document.querySelector("button");

function addItem() {
  const inputValue = inputElement.value.trim();
  inputElement.value = "";

  if (inputValue === "") {
    alert("Please enter item!");
    return;
  }

  const list = document.createElement("li");

  const item = document.createElement("span");
  item.textContent = inputValue;

  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "Delete";
  deleteBtn.addEventListener("click", () => {
    itemList.removeChild(list);
    inputElement.focus();
  });

  list.appendChild(item);
  list.appendChild(deleteBtn);
  itemList.appendChild(list);
  inputElement.focus();
}

addButton.addEventListener("click", addItem);

inputElement.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    addItem();
  }
});
