import AdminAddPost from "./AdminAddPost";
import AdminPostsList from "./AdminPostsList";
import { useState } from "react";

function AdminPosts({ postId, setPostId, setAddMode, addMode, user }) {
  function editPost(postId) {
    setPostId(postId);
    setAddMode(true);
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
  return <AdminPostsList user={user} editPost={editPost} />;
}
export default AdminPosts;
