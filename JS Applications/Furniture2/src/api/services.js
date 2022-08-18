import * as api from "./requester.js";

const endpoints = {
  recent: "/data/",
  all: "/data/catalog",
  create: "/data/catalog",
  byId: "/data/catalog/",
  deleteById: "/data/catalog/",
  edit: "/data/catalog/",
};

export async function getRecent(ctx) {
  const url = `catalog?where=_ownerId%3D%22${ctx.user._id}%22`;
  return api.get(endpoints.recent + url);
}

export async function getAll() {
  return api.get(endpoints.all);
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
