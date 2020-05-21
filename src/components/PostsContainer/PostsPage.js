//Complete the necessary code in this file
// import useState
import React, { useState } from "react";
import Post from "./Post";
import "./Posts.css";
import dummydata from "../../dummy-data" 



const PostsPage = () => {
const [data] = useState(dummydata);
  return (
    <div className="posts-container-wrapper">
      {data.map((p, i) => (
        <Post key={i} postItem={p} />
      ))}
    </div>
  );
};

export default PostsPage;
