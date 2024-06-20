import React, { useContext, useRef } from "react";
import { PostList } from "../store/post-list-store";
import { useNavigate } from "react-router-dom";

const CreatePost = () => {
  const { addPost } = useContext(PostList);
  // const navigate = useNavigate(); // this is used to navigate to a dynamic url after doing any task
  // Todo-- ad this navigate after addPost()  -> navigate("/")

  const userIdElement = useRef();
  const postTitleElement = useRef();
  const reactionsElement = useRef();
  const bodyElement = useRef();
  const tagsElement = useRef();
  const postImgElement = useRef();

  const handleSubmit = async (event) => {
    const token = localStorage.getItem("token"); // Assuming the token is stored in localStorage

    try {
      const response = await fetch("http://localhost:3000/api/posts", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
        },
        body: formData,
      });

      if (response.ok) {
        const newPost = await response.json();
        addPost(newPost);
      } else {
        const errorText = await response.text();
        throw new Error(`Error: ${response.status} ${errorText}`);
      }
    } catch (error) {
      console.error("An error occurred:", error);
    }

    addPost(userId, postTitle, reactions, postBody, tags);
  };

  return (
    <div className="creat__post">
      <form className="form" onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="userId" className="form-label">
            Enter Your User Id here
          </label>
          <input
            type="text"
            className="form-control"
            id="userId"
            ref={userIdElement}
            placeholder="Enter your user Id "
          />
        </div>
        <div className="mb-3">
          <label htmlFor="title" className="form-label">
            Post Title
          </label>
          <input
            type="text"
            className="form-control"
            id="title"
            ref={postTitleElement}
            placeholder="your titile.."
          />
        </div>

        <div className="mb-3">
          <label htmlFor="reactions" className="form-label">
            No. of Reactions
          </label>
          <input
            type="text"
            className="form-control"
            id="reactions"
            ref={reactionsElement}
            placeholder="how many people reacted to this post"
          />
        </div>

        <div className="mb-3">
          <label htmlFor="body" className="form-label">
            Content
          </label>
          <textarea
            rows="4"
            cols="50"
            type="text"
            className="form-control"
            id="body"
            ref={bodyElement}
            placeholder="tell us more about it"
          />
        </div>

        <div className="mb-3">
          <label htmlFor="tegs" className="form-label">
            Enter your hashtags here
          </label>
          <input
            type="text"
            className="form-control"
            id="tags"
            ref={tagsElement}
            placeholder="please enter your tags using space"
          />
        </div>

        <div className="mb-3">
          <label htmlFor="postImg" className="form-label">
            Choose your Post Image
          </label>
          <input
            type="file"
            className="form-control"
            id="postImg"
            ref={postImgElement}
            placeholder="Select your post image"
          />
        </div>

        <button type="submit" className="btn btn-primary">
          Publish Post
        </button>
      </form>
    </div>
  );
};

export default CreatePost;
