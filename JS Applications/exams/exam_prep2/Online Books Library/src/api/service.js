import * as api from "./requester.js";

const endpoints = {
  myBooks: `/data/`,
  books: "/data/books?sortBy=_createdOn%20desc",
  create: "/data/books",
  byId: "/data/books/",
  deleteById: "/data/books/",
  edit: "/data/books/",
  like: "/data/likes",
};

export async function getMyBooks(ctx) {
  const url = `books?where=_ownerId%3D%22${ctx.user._id}%22&sortBy=_createdOn%20desc`;
  return api.get(endpoints.myBooks + url);
}

export async function getAll() {
  return api.get(endpoints.books);
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

export async function likeBook(bookId) {
  return api.post(endpoints.like, {
    bookId,
  });
}

export async function getLikes(bookId) {
  return api.get(
    `/data/likes?where=bookId%3D%22${bookId}%22&distinct=_ownerId&count`
  );
}

export async function getMyLikes(bookId, userId) {
  return api.get(`/data/likes?where=bookId%3D%22${bookId}%22%20and%20_ownerId%3D%22${userId}%22&count
  `);
}
