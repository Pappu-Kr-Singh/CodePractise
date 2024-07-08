// import React, { useContext, useRef, useState } from "react";
// import { PostList } from "../store/post-list-store";
// import axios from "axios";
// import { useNavigate } from "react-router-dom";

// const CreatePost = () => {
//   const { addPost } = useContext(PostList);
//   const [formData, setFormData] = useState({
//     userId: "",
//     postTitle: "",
//     reactions: "",
//     postBody: "",
//     tags: "",
//     postImg: null,
//   });
//   const navigate = useNavigate(); // this is used to navigate to a dynamic url after doing any task
//   // Todo-- ad this navigate after addPost()  -> navigate("/")

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({
//       ...formData,
//       [name]: value,
//     });
//   };

//   const handleFileChange = (e) => {
//     const { name, files } = e.target;
//     setFormData({
//       ...formData,
//       [name]: files[0],
//     });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     const data = new FormData();
//     data.append("userId", formData.userId);
//     data.append("title", formData.postTitle);
//     data.append("description", formData.postBody);
//     data.append("tags", formData.tags);
//     data.append("postImg", formData.postImg);

//     try {
//       const response = await axios.post(
//         "http://localhost:3000/api/v1/posts",
//         data,
//         {
//           headers: {
//             "Content-Type": "multipart/form-data",
//           },
//         }
//       );
//       console.log(response.data);
//       alert("Post Created Successfully");

//       navigate("/login");
//     } catch (error) {
//       console.error("Error during creating post:", error.response.data);
//       // alert();
//     }
//     addPost(userId, postTitle, reactions, postBody, tags);
//   };

//   return (
//     <div className="creat__post">
//       <form className="form" onSubmit={handleSubmit}>
//         <div className="mb-3">
//           <label htmlFor="userId" className="form-label">
//             Enter Your User Id here
//           </label>
//           <input
//             type="text"
//             className="form-control"
//             id="userId"
//             value={formData.userId}
//             onChange={handleChange}
//             placeholder="Enter your user Id "
//           />
//         </div>
//         <div className="mb-3">
//           <label htmlFor="title" className="form-label">
//             Post Title
//           </label>
//           <input
//             type="text"
//             className="form-control"
//             value={formData.postTitle}
//             onChange={handleChange}
//             id="title"
//             placeholder="your titile.."
//           />
//         </div>

//         <div className="mb-3">
//           <label htmlFor="reactions" className="form-label">
//             No. of Reactions
//           </label>
//           <input
//             type="text"
//             className="form-control"
//             id="reactions"
//             onChange={handleChange}
//             value={formData.reactions}
//             placeholder="how many people reacted to this post"
//           />
//         </div>

//         <div className="mb-3">
//           <label htmlFor="body" className="form-label">
//             Content
//           </label>
//           <textarea
//             rows="4"
//             cols="50"
//             type="text"
//             className="form-control"
//             id="body"
//             onChange={handleChange}
//             value={formData.postBody}
//             placeholder="tell us more about it"
//           />
//         </div>

//         <div className="mb-3">
//           <label htmlFor="tegs" className="form-label">
//             Enter your hashtags here
//           </label>
//           <input
//             type="text"
//             className="form-control"
//             id="tags"
//             onChange={handleChange}
//             value={formData.tags}
//             placeholder="please enter your tags using space"
//           />
//         </div>

//         <div className="mb-3">
//           <label htmlFor="postImg" className="form-label">
//             Choose your Post Image
//           </label>
//           <input
//             type="file"
//             className="form-control"
//             id="postImg"
//             onChange={handleFileChange}
//             value={formData.postImg}
//             placeholder="Select your post image"
//           />
//         </div>

//         <button type="submit" className="btn btn-primary">
//           Publish Post
//         </button>
//       </form>
//     </div>
//   );
// };

// export default CreatePost;

import React, { useContext, useState } from "react";
import { PostList } from "../store/post-list-store";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const CreatePost = () => {
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
            "Content-Type": "multipart/form-data",
          },
        }
      );
      console.log(response.data);
      alert("Post Created Successfully");

      navigate("/login");
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
      <form className="form" onSubmit={handleSubmit}>
        <div className="mb-3">
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
        </div>
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

        <button type="submit" className="btn btn-primary">
          Publish Post
        </button>
      </form>
    </div>
  );
};

export default CreatePost;
