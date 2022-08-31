import * as api from "./requester.js";

const endpoints = {
  recent: "/data/games?sortBy=_createdOn%20desc&distinct=category",
  dashboard: "/data/offers?sortBy=_createdOn%20desc",
  create: "/data/offers",
  byId: "/data/offers/",
  deleteById: "/data/offers/",
  edit: "/data/offers/",
  apply: "/data/applications",
};

export async function getRecent() {
  return api.get(endpoints.recent);
}

export async function getDashboard() {
  return api.get(endpoints.dashboard);
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
export async function applyOffer(id) {
  return api.post(endpoints.apply, {
    offerId: id,
  });
}
export async function getApplications(id) {
  return api.get(
    `/data/applications?where=offerId%3D%22${id}%22&distinct=_ownerId&count`
  );
}

export async function getMyApplies(offerId, userId) {
  return api.get(
    `/data/applications?where=offerId%3D%22${offerId}%22%20and%20_ownerId%3D%22${userId}%22&count`
  );
}
