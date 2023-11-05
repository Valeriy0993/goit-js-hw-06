const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const ingredientsList = document.getElementById("ingredients");
const fragmentList = document.createDocumentFragment();

ingredients.forEach((ingredient) => {
  const listItem = document.createElement("li");

  listItem.textContent = ingredient;

  listItem.classList.add("item");

  fragmentList.appendChild(listItem);
});

ingredientsList.appendChild(fragmentList);
