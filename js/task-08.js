document.addEventListener("DOMContentLoaded", function () {
  const loginForm = document.querySelector(".login-form");

  loginForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const formData = new FormData(loginForm);
    const formDataObject = {};

    formData.forEach((value, key) => {
      formDataObject[key] = value;
    });

    if (!formDataObject.email || !formDataObject.password) {
      alert("Всі поля повинні бути заповнені.");
    } else {
      console.log("Дані форми:", formDataObject);
      loginForm.reset();
    }
  });
});
