const axios = require("axios");

const sourceURL = "https://jsonplaceholder.typicode.com/";

const requestType = {
  GET: "GET",
  POST: "POST",
  PATCH: "PATCH",
  DELETE: "DELETE"
};

const elementType = {
  POSTS: "posts",
  COMMENTS: "comments",
  ALBUMS: "albums",
  PHOTOS: "photos",
  TODOS: "todos",
  USERS: "users"
};

const getRequest = path => {
  return axios
    .get(path)
    .catch(error => console.log(error))
    .then(res => res.data);
};

const updateRequest = path => {
  return axios
    .patch(path)
    .catch(error => console.log(error))
    .then(res => res.data);
};

const addRequest = () => {
  return axios
    .post(path)
    .catch(error => console.log(error))
    .then(res => res.data);
};

const deleteRequest = () => {
  return axios
    .delete(path)
    .catch(error => console.log(error))
    .then(res => res.data);
};

const sendRequest = (element, request, id = -1) => {
  const path = buildPath(element, id);
  switch (request) {
    case requestType.GET:
      return getRequest(path);
    case requestType.POST:
      return addRequest(path);
    case requestType.PATCH:
      return updateRequest(path);
    case requestType.DELETE:
      return deleteRequest(path);
  }
};

const buildPath = (element, id = -1) => {
  let path = sourceURL;
  switch (element) {
    case elementType.POSTS:
      path += elementType.POSTS;
      break;
    case elementType.COMMENTS:
      path += elementType.COMMENTS;
      break;
    case elementType.ALBUMS:
      path += elementType.ALBUMS;
      break;
    case elementType.PHOTOS:
      path += elementType.PHOTOS;
      break;
    case elementType.TODOS:
      path += elementType.TODOS;
      break;
    case elementType.USERS:
      path += elementType.USERS;
      break;
  }
  if (id != -1) {
    path += `/${id}`;
  }
  return path;
};

const buildSubRequests = () => {};

module.exports = { sendRequest, requestType, elementType };
