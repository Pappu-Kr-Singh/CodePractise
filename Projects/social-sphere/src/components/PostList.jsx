import React, { useContext } from "react";
import Post from "./Post";
import { PostList as PostListData } from "../store/post-list-store";
import WelcomeMessage from "./WelcomeMessage";
// import axios from "axios";

function PostList() {
  const { postList, addInitialPosts } = useContext(PostListData);
  // console.log(postList);

  const handleOnGetPostClick = () => {
    fetch("https://dummyjson.com/posts")
      .then((res) => res.json())
      .then((data) => {
        addInitialPosts(data.posts);
        console.log(data.posts);
      });
  };

  return (
    <div className="post__List">
      {postList.length === 0 && (
        <WelcomeMessage onGetPostClick={handleOnGetPostClick} />
      )}
      {postList.map((post) => (
        <Post key={post.id} post={post} />
      ))}
    </div>
  );
}

export default PostList;
