import { combineReducers } from "redux";
import feedSliceReducer from "./postsfeed/reducer";
import postPageSliceReducer from "./PostPage/reducer";

const reducer = combineReducers({
  feed: feedSliceReducer,
  postPage: postPageSliceReducer,
});

export default reducer;
