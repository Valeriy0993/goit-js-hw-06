const list = document.getElementById("categories");
const listItem = list.querySelectorAll(".item");
let numberListItem = 0;
listItem.forEach((item) => {
  numberListItem++;
});

console.log(`Number of categories: ${numberListItem}`);

const itemList = document.querySelectorAll(".item");
itemList.forEach((item) => {
  const h2 = item.querySelector("h2");
  const nestedListItem = item.querySelectorAll("li");

  console.log(`Category: ${h2.textContent}`);

  console.log(`Elements: ${nestedListItem.length}`);
});
