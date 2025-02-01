import CommentSection from "./CommentSection";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import "./Post.css";

function Post() {
  const { postId } = useParams();
  console.log(postId);
  const [post, setPost] = useState(null);
  useEffect(() => {
    const getPosts = async () => {
      const response = await fetch(`http://localhost:3000/posts/${postId}`);
      const post = await response.json();
      setPost(post);
    };
    getPosts();
  }, [postId]);
  if (!post) {
    return <h1>Loading</h1>;
  }
  console.log(post);

  const date = new Date(post.createdAt);
  const formattedDate = date.toLocaleDateString("en-US", {
    month: "short", // "Aug"
    day: "numeric", // "20"
    year: "numeric", // "2024"
  });

  return (
    <article className="md:px-[25%] py-6 flex flex-col gap-3">
      <header className="flex flex-col gap-2">
        <h1 className="font-sans text-2xl font-semibold">{post.title}</h1>
        <div className="flex gap-2 text-gray-400">
          <h4 className="text-sm font-sans">{post.author.name}</h4>
          <h4 className="text-sm font-sans">{formattedDate}</h4>
        </div>
      </header>
      <img
        className="object-coverw-full rounded-md"
        src={`http://localhost:3000${post.imageUrl}`}
      ></img>
      <div dangerouslySetInnerHTML={{ __html: post.content }} />
      <CommentSection postId={postId}></CommentSection>
    </article>
  );
}
export default Post;
