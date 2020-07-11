import React from "react";
import "./style.css"

const Post = ({ posts, loading }) => {
  if (loading) {
    return <h2>Fetching...</h2>;
  }

  return (
    <ul className="list-group mb-3">
      {posts.map(post => (
        <li key={post.id} className="list-group-item">
          <h4>{post.episode}</h4>
          <h5>{post.name}</h5>
          {post.air_date}
          <p>
            Episode Id : <a href={post.url}>{post.id}</a>{" "}
          </p>
        </li>
      ))}
    </ul>
  );
};

export default Post;
