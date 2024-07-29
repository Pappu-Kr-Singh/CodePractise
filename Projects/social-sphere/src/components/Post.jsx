import React, { useContext } from "react";
import { MdDelete } from "react-icons/md";
import { FcLike } from "react-icons/fc";
import { PostList as PostListData } from "../store/post-list-store";

const Post = ({ post }) => {
  const { deletePost } = useContext(PostListData);

  console.log(post.postImg);

  return (
    <div>
      <div
        className="card post-card"
        style={{ width: "20rem", margin: "2rem 0rem" }}
      >
        <img src={post.postImg} className="card-img-top" alt="..." />
        <div className="card-body ">
          <h5 className="card-title text-white">
            {post.title}
            {/* <span
              className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger"
              onClick={() => deletePost(post.id)}
            >
              <MdDelete />
              <span className="visually-hidden">unread messages</span>
            </span> */}
          </h5>
          <p className="card-text text-white">{post.description}</p>
          {post.tags?.map((tag) => (
            <span key={tag} className="badge text-bg-primary hashtag">
              {tag}
            </span>
          ))}
          <div className="alert alert-info" role="alert">
            <FcLike className="likeIcon" />
            {`this post has been liked by ${post.reactions} people!`}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Post;
