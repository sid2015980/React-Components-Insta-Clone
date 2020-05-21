// You will add code to this file
import React, { useState } from "react";
import CommentInput from "./CommentInput";
import Comment from "./Comment";
import "./Comment.css";

const CommentSection = ({comments}) => {
  // Add state for the comments

  return (
    <div>
      {comments.map((p, i) => (
        <Comment key={i} comment={p}/>
      ))}
      <CommentInput />
    </div>
  );
};

export default CommentSection;
