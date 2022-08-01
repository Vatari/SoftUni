window.addEventListener("DOMContentLoaded", () => {
  const loginForm = document.querySelector('form');
  loginForm.addEventListener('submit', onLogin)
  let userData = null

  if (userData != null) {
    document.querySelector("#guest").style.display = "none";

    document.querySelector(".email > span").textContent = `${userData.email}`
  } else {
    document.querySelector("#user").style.display = "none";
  }


})
const baseUrl = "http://localhost:3030/users/login";


async function onLogin(ev) {
  ev.preventDefault();

  const loginData = new FormData(ev.target);

  const data = {
    email: loginData.get("email"),
    password: loginData.get("password"),
  };
  if (data.email == "" || data.password == "") {
    alert("All fields are required");
    return;
  }

  try {
    const response = await fetch(baseUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });
    if (!response.ok) {
      const error = await response.json()
      throw new Error(error.message);
    }

    const receivedData = await response.json();
    const userData = {
      email: receivedData.email,
      token: receivedData.accessToken,
      id: receivedData._id,
      
    }
    window.location = "../index.html";
    localStorage.setItem('userData', JSON.stringify(userData))
  } catch (err) {
    alert(err.message);
  }
}
