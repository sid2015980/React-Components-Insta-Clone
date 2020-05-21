// You will add code in this file
import React, {useState} from "react";
import CommentSection from "../CommentSection/CommentSectionContainer";
import LikeSection from "./LikeSection";
import PostHeader from "./PostHeader";

import "./Posts.css";

// pass props in this file to
const Post = ({postItem}) => {
  console.log(postItem)
const [likes, setLikes] = useState(postItem.likes)

const incrementLikes = () => {
  setLikes(likes => likes + 1);
};
  return (
    <div className="post-border">
      <PostHeader
        username={postItem.username}
        thumbnailUrl={
          postItem.thumbnailUrl
        }
      />
      <div className="post-image-wrapper">
        <img
          alt="post thumbnail"
          className="post-image"
          src={postItem.imageUrl}
        />
      </div>
      <LikeSection incrementLikes={incrementLikes} likes={likes}/>
      <CommentSection
        postId={postItem.imageUrl}
        comments={postItem.comments}
      />
    </div>
  );
};

export default Post;
