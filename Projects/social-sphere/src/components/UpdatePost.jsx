import React from "react";

const UpdatePost = () => {
  return (
    <>
      {selectedPost && (
        <form onSubmit={handleUpdateSubmit} className="update-form">
          <h3>Update Post</h3>
          <div className="form-group">
            <label htmlFor="title">Title</label>
            <input
              type="text"
              id="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="description">Description</label>
            <textarea
              id="description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              required
            ></textarea>
          </div>
          <div className="form-group">
            <label htmlFor="postImg">Image</label>
            <input
              type="file"
              id="postImg"
              onChange={(e) => setPostImg(e.target.files[0])}
            />
          </div>
          <button type="submit">Update</button>
          <button type="button" onClick={() => setSelectedPost(null)}>
            Cancel
          </button>
        </form>
      )}
    </>
  );
};

export default UpdatePost;
