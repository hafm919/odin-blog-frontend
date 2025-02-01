import AdminAddPost from "./AdminAddPost";
import AdminPostsList from "./AdminPostsList";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function AdminPosts({ postId, setPostId, setAddMode, addMode, user }) {
  function editPost(postId) {
    setPostId(postId);
    setAddMode(true);
  }
  async function deletePost(postId) {
    await fetch(`http://localhost:3000/posts/${postId}`, {
      method: "DELETE",
      headers: { Authorization: `Bearer ${localStorage.token}` },
    });
    window.location.reload();
  }

  async function togglePublished(postId) {
    await fetch(`http://localhost:3000/posts/${postId}`, {
      method: "PATCH",
      headers: { Authorization: `Bearer ${localStorage.token}` },
    });
    window.location.reload();
  }

  if (addMode) {
    return (
      <AdminAddPost
        user={user}
        postId={postId}
        setPostId={setPostId}
      ></AdminAddPost>
    );
  }
  return (
    <AdminPostsList
      user={user}
      editPost={editPost}
      deletePost={deletePost}
      togglePublished={togglePublished}
    />
  );
}
export default AdminPosts;
