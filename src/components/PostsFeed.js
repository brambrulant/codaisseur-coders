import React from "react";
import moment from "moment";
import { useDispatch, useSelector } from "react-redux";
import {
  selectFeedLoading,
  selectFeedPosts,
  selectFeedFirstTwoPosts,
} from "../store/postsfeed/selector";
import { fetchNext5Posts } from "../store/postsfeed/action";
import { Link } from "react-router-dom";
import { fetchPost } from "../store/PostPage/action";

export default function PostsFeed() {
  const dispatch = useDispatch();

  const loading = useSelector(selectFeedLoading());
  const firstTwoPosts = useSelector(selectFeedFirstTwoPosts());

  const posts = useSelector(selectFeedPosts());

  console.log("what is posts?", posts);

  firstTwoPosts === false
    ? dispatch(fetchNext5Posts)
    : console.log("i didn't fetch double");

  return (
    <div className="PostsFeed">
      <h2>Recent posts</h2>
      {posts.map((post) => {
        return (
          <div key={post.id}>
            <h3>
              <Link to={`/post/${post.id}`}>
                <button onClick={() => dispatch(fetchPost(post.id))}>
                  <h3>{post.title}</h3>{" "}
                  <p className="meta">
                    {moment(post.createdAt).format("DD-MM-YYYY")} &bull;{" "}
                    {/* {post.post_likes.length} likes &bull;{" "} */}
                    <span className="tags">
                      {post.tags.map((tag) => {
                        return (
                          <React.Fragment key={tag.id}>
                            <span className="Tag">{tag.tag}</span>{" "}
                          </React.Fragment>
                        );
                      })}
                    </span>
                  </p>
                </button>
              </Link>
            </h3>
          </div>
        );
      })}
      <p>
        {loading ? (
          <em>Loading...</em>
        ) : (
          <button onClick={() => dispatch(fetchNext5Posts)}>Load more</button>
        )}
      </p>
    </div>
  );
}
