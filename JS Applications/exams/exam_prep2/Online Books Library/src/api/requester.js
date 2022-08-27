import { clearUserData } from "../util.js";

const host = "http://localhost:3030";

async function request(method, url, data) {
  const options = {
    method,
    headers: {},
  };

  if (data !== undefined) {
    options.headers["Content-Type"] = "application/json";
    options.body = JSON.stringify(data);
  }

  const userData = JSON.parse(localStorage.getItem("userData"));

  if (userData != null) {
    options.headers["X-Authorization"] = userData.accessToken;
  }

  try {
    const res = await fetch(host + url, options);

    if (res.ok == false) {
      if (res.status == 403) {
        clearUserData();
      }
      const error = await res.json();
      throw Error(error.message);
    }

    if (res.status == 204) {
      return res;
    } else {
      return await res.json();
    }
  } catch (err) {
    alert(err.message);
    throw err;
  }
}

/* export async function get(url) {
    return request('get', url);
}

export async function post(url, data) {
    return request('post', url, data);
} */

export const get = request.bind(null, "get");
export const post = request.bind(null, "post");
export const put = request.bind(null, "put");
export const del = request.bind(null, "delete");
