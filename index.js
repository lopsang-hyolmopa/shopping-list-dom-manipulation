const unorderedList = document.querySelector("ul");
const inputElement = document.querySelector("input");
const btn = document.querySelector("button");

function addItem() {
  const inputValue = inputElement.value;
  inputElement.value = "";

  const list = document.createElement("li");

  const item = document.createElement("span");
  item.textContent = inputValue;

  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "Delete";
  deleteBtn.addEventListener("click", () => {
    unorderedList.removeChild(list);
    inputElement.focus();
  });

  list.appendChild(item);
  list.appendChild(deleteBtn);
  unorderedList.appendChild(list);
  inputElement.focus();
}

btn.addEventListener("click", addItem);
