import { useEffect, useState } from "react";
function AdminComments({ user }) {
  const [comments, setComments] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const getComments = async () => {
      try {
        const response = await fetch(
          `http://localhost:3000/author/${user.id}/comments`
        );
        const comments = await response.json();
        setComments(comments);
        console.log(comments);
      } catch (error) {
        console.error("Error fetching comments:", error);
      } finally {
        setLoading(false);
      }
    };
    getComments();
  }, [user.id]);

  async function deleteComment(commentId, postId) {
    await fetch(`http://localhost:3000/posts/${postId}/comments/${commentId}`, {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${localStorage.token}`,
      },
    });
    window.location.reload();
  }

  if (loading) {
    return <p>Loading..</p>;
  }

  return (
    <table className="table-auto w-full m-5 ">
      <thead className="font-bold font-sans border-b ">
        <tr>
          <td>ID</td>
          <td>Content</td>
          <td>Post</td>
          <td>Actions</td>
        </tr>
      </thead>
      <tbody>
        {comments.map((comment) => (
          <tr className="border-b" key={comment.id} id={comment.id}>
            <td className="py-3">{comment.id}</td>
            <td>{comment.content}</td>
            <td>{comment.post.title}</td>
            <td>
              <button
                className="text-red-500 hover:underline"
                onClick={() => deleteComment(comment.id, comment.post.id)}
              >
                Delete
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
export default AdminComments;
