import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import ReactMarkdown from "react-markdown";

import { fetchPost } from "../store/PostPage/action";
import { selectPostPage, selectEffect } from "../store/PostPage/selector";

export default function PostPage() {
  const param = useParams();
  console.log("what's param: ", param);

  const dispatch = useDispatch();

  const data = useSelector(selectPostPage());
  const effect = useSelector(selectEffect());

  //   effect === false ? dispatch(fetchPost(param.id)) : console.log("just once");
  console.log("effect?", effect);
  effect === true
    ? dispatch(fetchPost(param.id))
    : console.log("i didn't fetch again");

  console.log(data.comments.rows);
  return (
    <div>
      {data.loading === true ? (
        <p>loading...</p>
      ) : (
        <>
          <h1>{data.post.title}</h1>

          <p className="meta">
            <ReactMarkdown source={data.post.content} />
          </p>
          <h2>Comments</h2>
          <p>
              {data.comments.count === 0 ? } <p>no comments</p> 
            {data.comments.rows.map((comment) => {
              console.log("developer", comment.developer.name);
              return (
                <li key={comment.id}>
                  {comment.developer.name} {comment.updatedAt.slice(0, 10)}:{" "}
                  {comment.text}
                </li>
              );
            })}
          </p>
        </>
      )}
    </div>
  );
}
