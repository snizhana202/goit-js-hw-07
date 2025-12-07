const loginForm = document.querySelector(".login-form");

loginForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const formData = new FormData(loginForm);
  const email = formData.get("email").trim();
  const password = formData.get("password").trim();

  if (email === "" || password === "") {
    alert("All fields must be filled!");
    return;
  }

  const data = {
    email: email,
    password: password,
  };

  console.log(data);
  loginForm.reset();
});
