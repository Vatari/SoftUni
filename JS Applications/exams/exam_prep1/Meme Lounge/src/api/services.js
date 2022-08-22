import * as api from "./requester.js";

const endpoints = {
  profile: "/data/",
  allMemes: "/data/memes?sortBy=_createdOn%20desc",
  create: "/data/memes",
  byId: "/data/memes/",
  deleteById: "/data/memes/",
  edit: "/data/memes/",
};

export async function getProfile(userId) {
  const url = `memes?where=_ownerId%3D%22${userId}%22&sortBy=_createdOn%20desc`;
  return api.get(endpoints.profile + url);
}

export async function getAll() {
  return api.get(endpoints.allMemes);
}

export async function create(data) {
  return api.post(endpoints.create, data);
}
export async function getById(id) {
  return api.get(endpoints.byId + id);
}

export async function edit(id, data) {
  return api.put(endpoints.edit + id, data);
}

export async function deleteById(id) {
  return api.del(endpoints.deleteById + id);
}

