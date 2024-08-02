import React, { useContext, useState } from "react";
import { PostList } from "../store/post-list-store";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/authContext";

const CreatePost = () => {
  const { currentUser } = useContext(AuthContext);
  // console.log(currentUser);

  const { addPost } = useContext(PostList);
  const [formData, setFormData] = useState({
    userId: "",
    postTitle: "",
    reactions: "",
    postBody: "",
    tags: "",
    postImg: null,
  });
  const navigate = useNavigate(); // this is used to navigate to a dynamic url after doing any task

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleFileChange = (e) => {
    const { name, files } = e.target;
    setFormData({
      ...formData,
      [name]: files[0],
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const data = new FormData();
    data.append("owner", formData.userId);
    data.append("title", formData.postTitle);
    data.append("description", formData.postBody);
    data.append("reactions", formData.reactions);
    data.append("tags", formData.tags);
    data.append("postImg", formData.postImg);

    try {
      const response = await axios.post(
        "http://localhost:3000/api/v1/posts",
        data,
        {
          headers: {
            Authorization: `Bearer ${currentUser?.data.accessToken}`, // Use access token
          },
        }
      );
      console.log(response.data);
      alert("Post Created Successfully");

      navigate("/");
    } catch (error) {
      console.error("Error during creating post:", error.response.data);
      alert("Error creating post, please try again.");
    }

    // Call addPost with correct parameters
    addPost(
      formData.userId,
      formData.postTitle,
      formData.reactions,
      formData.postBody,
      formData.tags
    );
  };

  return (
    <div className="create__post">
      <form className="form create_post__form" onSubmit={handleSubmit}>
        <h1 className="text-center bg-transparent">Create Post</h1>
        {/* <div className="mb-3 input__fields">
          <label htmlFor="userId" className="form-label">
            Enter Your User Id here
          </label>
          <input
            type="text"
            className="form-control"
            id="userId"
            name="userId"
            value={formData.userId}
            onChange={handleChange}
            placeholder="Enter your user Id "
          />
        </div> */}
        <div className="mb-3">
          <label htmlFor="title" className="form-label">
            Post Title
          </label>
          <input
            type="text"
            className="form-control"
            id="title"
            name="postTitle"
            value={formData.postTitle}
            onChange={handleChange}
            placeholder="Your title..."
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
            name="reactions"
            value={formData.reactions}
            onChange={handleChange}
            placeholder="How many people reacted to this post"
          />
        </div>

        <div className="mb-3">
          <label htmlFor="body" className="form-label">
            Content
          </label>
          <textarea
            rows="4"
            cols="50"
            className="form-control"
            id="body"
            name="postBody"
            value={formData.postBody}
            onChange={handleChange}
            placeholder="Tell us more about it"
          />
        </div>

        <div className="mb-3">
          <label htmlFor="tags" className="form-label">
            Enter your hashtags here
          </label>
          <input
            type="text"
            className="form-control"
            id="tags"
            name="tags"
            value={formData.tags}
            onChange={handleChange}
            placeholder="Please enter your tags using space"
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
            name="postImg"
            onChange={handleFileChange}
          />
        </div>

        <button type="submit" className="btn btn-secondary">
          Publish Post
        </button>
      </form>
    </div>
  );
};

export default CreatePost;
