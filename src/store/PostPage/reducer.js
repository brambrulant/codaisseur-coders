const initialState = {
  loading: true,
  post: {},
  comments: [],
  effect: true,
};
export default function postPageSliceReducer(state = initialState, action) {
  switch (action.type) {
    case "post/startLoading": {
      return {
        ...state,
        effect: false,
        loading: true,
      };
    }
    case "post/postsFetched": {
      console.log("whats comments?", action.payload.comments);
      return {
        ...state,
        loading: false,
        effect: false,
        post: action.payload.post,
        comments: action.payload.comments,
      };
    }

    default: {
      return state;
    }
  }
}
