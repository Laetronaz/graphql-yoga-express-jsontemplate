const { sendRequest, requestType, elementType } = require("./requests");

const resolvers = {
  Query: {
    posts: async () => sendRequest(elementType.POSTS, requestType.GET),
    post: async (parent, args) =>
      sendRequest(elementType.POSTS, requestType.GET, args.id),

    comments: async () => sendRequest(elementType.COMMENTS, requestType.GET),
    comment: async (parent, args) =>
      sendRequest(elementType.COMMENTS, requestType.GET, args.id),

    albums: async () => sendRequest(elementType.ALBUMS, requestType.GET),
    album: async (parent, args) =>
      sendRequest(elementType.ALBUMS, requestType.GET, args.id),

    photos: async () => sendRequest(elementType.PHOTOS, requestType.GET),
    photo: async (parent, args) =>
      sendRequest(elementType.PHOTOS, requestType.GET, args.id),

    todos: async () => sendRequest(elementType.TODOS, requestType.GET),
    todo: async (parent, args) =>
      sendRequest(elementType.TODOS, requestType.GET, args.id),

    users: async () => sendRequest(elementType.USERS, requestType.GET),
    user: async (parent, args) =>
      sendRequest(elementType.USERS, requestType.GET, args.id)
  }
};

module.exports = { resolvers };
