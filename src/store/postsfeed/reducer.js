const initialState = {
  loading: true,
  firstTwoPosts: false,
  posts: [],
};

export default function feedSliceReducer(state = initialState, action) {
  switch (action.type) {
    case "feed/startLoading": {
      return {
        ...state,
        loading: true,
      };
    }
    case "feed/postsFetched": {
      return {
        ...state,
        loading: false,
        firstTwoPosts: true,
        posts: [...state.posts, ...action.payload],
      };
    }

    default: {
      return state;
    }
  }
}
