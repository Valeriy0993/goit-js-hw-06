const nameInput = document.getElementById("validation-input");

nameInput.addEventListener("blur", function () {
  const inputValue = nameInput.value;
  const minLength = nameInput.getAttribute("data-length");

  if (inputValue.length === Number(minLength)) {
    nameInput.classList.remove("invalid");
    nameInput.classList.add("valid");
  } else {
    nameInput.classList.remove("valid");
    nameInput.classList.add("invalid");
  }
});
