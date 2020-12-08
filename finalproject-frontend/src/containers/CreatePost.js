import React from "react";
import CreatePostComponent from "../components/CreatePostComponent";

function CreatePost({ postInformation }) {
  return (
    <div>
      <CreatePostComponent postInformation={postInformation} />
    </div>
  );
}

export default CreatePost;
