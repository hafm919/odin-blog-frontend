import PostsGrid from "../../PostsGrid";
import Featured from "./Featured";
import { useEffect, useState } from "react";

function Homepage() {
  const [posts, setPosts] = useState([]);
  const API_URL = import.meta.env.VITE_API_URL;

  useEffect(() => {
    const getPosts = async () => {
      const response = await fetch(`${API_URL}/posts?limit=${10}`);
      const posts = await response.json();
      setPosts(posts);
    };
    getPosts();
  }, []);

  return (
    <>
      <Featured post={posts[0]}></Featured>
      <PostsGrid posts={posts.slice(1)} />
    </>
  );
}
export default Homepage;
