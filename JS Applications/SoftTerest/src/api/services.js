import * as api from "./requester.js";

const endpoints = {
  dashboard: "/data/ideas?select=_id%2Ctitle%2Cimg&sortBy=_createdOn%20desc",
  create: "/data/ideas",
  byId: "/data/ideas/",
  deleteById: "/data/ideas/",
  edit: "/data/ideas/",
};

export async function getDashboard() {
  return api.get(endpoints.dashboard);
}

export async function getAll() {
  return api.get(endpoints.games);
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
