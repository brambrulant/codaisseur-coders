export const selectPostPage = () => (reduxState) => {
  return reduxState.postPage;
};

export const selectEffect = () => (reduxState) => {
  return reduxState.postPage.effect;
};
