import React, { useContext, useEffect, useState } from "react";
import Post from "./Post";
import { PostList as PostListData } from "../store/post-list-store";
import WelcomeMessage from "./WelcomeMessage";
import LoadingSpinner from "./LoadingSpinner";
import axios from "axios";
import { AuthContext } from "../context/authContext";

function PostList() {
  const { postList, addInitialPosts } = useContext(PostListData);
  const [fetching, setFetching] = useState(false);
  const { currentUser } = useContext(AuthContext);

  // console.log(postList);

  useEffect(() => {
    const fetchData = async () => {
      setFetching(true);
      try {
        const response = await axios.get("http://localhost:3000/api/v1/posts", {
          headers: {
            Authorization: `Bearer ${currentUser?.data.accessToken}`, // Use access token
          },
        });

        const jsonData = response.data;

        addInitialPosts(jsonData.data);

        setFetching(false);
      } catch (error) {
        console.error("Fetch error:", error);
      } finally {
        setFetching(false);
      }
    };

    fetchData();
  }, [currentUser]);

  return (
    <div className="post__List ">
      {fetching && <LoadingSpinner />}
      {!fetching && postList.length === 0 && <WelcomeMessage />}
      {!fetching && postList.map((post) => <Post key={post._id} post={post} />)}
    </div>
  );
}

export default PostList;
