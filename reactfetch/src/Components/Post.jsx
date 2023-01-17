import "./post.css"
import React from "react";
const Post = ({h1,h3}) => {
  return (
    <div className="post">
      <h1>
        {/* Here show the title of the post  */}
        {h1}
      </h1>
      <h3>
        {h3}
        {/* Here show the body of the post  */}
      </h3>
    </div>
  );
};

export default Post;
