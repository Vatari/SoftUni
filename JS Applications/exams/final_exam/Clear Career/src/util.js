export function getuserData() {
  return JSON.parse(localStorage.getItem("userData"));
}

export function getAccessToken() {
  const user = getUserData();
  if (user) {
    return user.accessToken;
  } else {
    return null;
  }
}

export function clearUserData() {
  localStorage.removeItem("userData");
}

export function setUserData(data) {
  localStorage.setItem("userData", JSON.stringify(data));
}
export function createSubmitHandler(ctx, handler) {
  return function (ev) {
    ev.preventDefault();
    const formData = Object.fromEntries(new FormData(ev.target));
    handler(ctx, formData, ev);
  };
}

export function parseQueryString(query = "") {
  return Object.fromEntries(query.split("&").map((kvp) => kvp.split("=")));
}
