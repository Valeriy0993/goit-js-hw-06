let counterValue = 0;

const decrementButton = document.querySelector(`[data-action="decrement"]`);
const incrementButton = document.querySelector(`[data-action="increment"]`);
const valueElement = document.getElementById("value");

incrementButton.addEventListener("click", () => {
  counterValue++;
  valueElement.textContent = counterValue;
});
decrementButton.addEventListener("click", () => {
  if (counterValue > 0) {
    counterValue--;
    valueElement.textContent = counterValue;
  }
});
