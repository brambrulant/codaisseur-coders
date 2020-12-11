import Axios from "axios";
import { API_URL } from "../config";

export function startLoading() {
  return {
    type: "feed/startLoading",
  };
}

export function postsFetched(morePosts) {
  return {
    type: "feed/postsFetched",
    payload: morePosts,
  };
}

export async function fetchNext5Posts(dispatch, getState) {
  dispatch(startLoading());
  const offset = getState().feed.posts.length;
  console.log(getState());

  const response = await Axios.get(`${API_URL}/posts?offset=${offset}&limit=2`);
  const morePosts = response.data.rows;
  dispatch(postsFetched(morePosts));
}
