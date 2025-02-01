import PostsGrid from "../../PostsGrid";
import Featured from "./Featured";
import { useEffect, useState } from "react";

function Homepage() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const getPosts = async () => {
      const response = await fetch(`http://localhost:3000/posts?limit=${10}`);
      const posts = await response.json();
      setPosts(posts);
    };
    getPosts();
    console.log(posts);
  }, []);

  return (
    <>
      <Featured post={posts[0]}></Featured>
      <PostsGrid posts={posts.slice(1)} />
    </>
  );
}
export default Homepage;
