window.addEventListener("DOMContentLoaded", () => {
  const loginForm = document.querySelector("form");
  loginForm.addEventListener("submit", onRegister);

  document.querySelector("#user").style.display = "none";
});
const registerUrl = "http://localhost:3030/users/register";

async function onRegister(ev) {
  ev.preventDefault();
  const formData = new FormData(ev.target);
  const userData = {
    email: formData.get("email"),
    password: formData.get("password"),
  };

  if (formData.get("password") != formData.get("rePass")) {
    alert("Passwords don't match");
    return;
  }

  try {
    const response = await fetch(registerUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userData),
    });
    if (!response.ok) {
      const error = await response.json();
      throw new Error(error.message);
    }

    window.location = "../index.html";
  } catch (err) {
    alert(err.message);
  }
}
