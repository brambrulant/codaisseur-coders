import axios from "axios";
import { API_URL } from "../config";

export function startLoadingPost() {
  return {
    type: "post/startLoading",
  };
}

export function postFullyFetched(post, comments) {
  return {
    type: "post/postsFetched",
    payload: post,
    comments,
  };
}

export function fetchPost(id) {
  return async function thunk(dispatch, getState) {
    dispatch(startLoadingPost());

    const resPost = await axios.get(`${API_URL}/posts/${id}`);
    const resComment = await axios.get(`${API_URL}/posts/${id}/comments`);
    console.log("what's resComment", resComment.data);
    console.log("what's resPost", resPost);
    dispatch(
      postFullyFetched({
        post: resPost.data,
        comments: resComment.data,
      })
    );
  };
}
