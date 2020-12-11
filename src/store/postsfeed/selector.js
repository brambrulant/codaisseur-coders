export const selectFeedLoading = () => (reduxState) => {
  return reduxState.feed.loading;
};

export const selectFeedFirstTwoPosts = () => (reduxState) => {
  return reduxState.feed.firstTwoPosts;
};

export const selectFeedPosts = () => (reduxState) => {
  return reduxState.feed.posts;
};
