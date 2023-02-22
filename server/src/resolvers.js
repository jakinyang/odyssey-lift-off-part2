

export const resolvers = {
  Query: {
    // Returns an array of tracks that will be used to populate the homepage grid
    tracksForHome: (parent, args, { dataSources }, info) => {
      return dataSources.trackAPI.getTracksForHome();
    },
  },
  Track: {
    author: ({ authorId }, args, { dataSources }, info) => {
      return dataSources.trackAPI.getAuthor(authorId);
    },
  },
};


