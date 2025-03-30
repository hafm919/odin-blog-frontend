import { useState, useEffect } from "react";
import CommentCard from "./CommentCard";

function CommentSection({ postId }) {
  const user = JSON.parse(localStorage.getItem("user"));
  const token = localStorage.getItem("token");

  const [comment, setComment] = useState("");
  const [comments, setComments] = useState([]); // State to store comments
  const API_URL = import.meta.env.VITE_API_URL;

  // Fetch comments function
  async function fetchComments() {
    try {
      const response = await fetch(`${API_URL}/posts/${postId}/comments`);
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      const data = await response.json();
      setComments(data); // Update state with fetched comments
    } catch (error) {
      console.error("Error fetching comments:", error);
    }
  }

  // Fetch comments when the component mounts
  useEffect(() => {
    fetchComments();
  }, [postId]); // Re-fetch comments when postId changes

  // Handle new comment submission
  async function handleSubmit(event) {
    event.preventDefault();

    if (!comment.trim()) {
      console.warn("Comment cannot be empty.");
      return;
    }

    try {
      const response = await fetch(`${API_URL}/posts/${postId}/comments`, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ content: comment }),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      setComment(""); // Clear input field
      fetchComments(); // Re-fetch comments to update UI
    } catch (error) {
      console.error("Error submitting comment:", error);
    }
  }

  return (
    <div className="flex flex-col gap-2">
      <h2 className="text-2xl">Comments</h2>
      <hr />

      {/* Comment Input Form */}
      {user ? (
        <form className="flex gap-2" onSubmit={handleSubmit}>
          <textarea
            className="flex-1 border border-gray-400 rounded-sm p-2"
            placeholder="Add your comment..."
            aria-label="Comment input"
            value={comment}
            onChange={(e) => setComment(e.target.value)}
          ></textarea>
          <button
            type="submit"
            className="border border-gray-400 p-2 rounded-sm hover:bg-gray-200"
          >
            Submit
          </button>
        </form>
      ) : (
        <div className="p-3 border border-gray-300 rounded-md bg-gray-100 text-gray-700">
          <p>Please login to comment</p>
        </div>
      )}

      {/* Comments List */}
      <div className="mt-4 flex flex-col gap-2">
        {comments.length > 0 ? (
          comments.map((comment) => (
            <CommentCard key={comment.id} comment={comment} />
          ))
        ) : (
          <p className="text-gray-500">No comments yet.</p>
        )}
      </div>
    </div>
  );
}

export default CommentSection;
