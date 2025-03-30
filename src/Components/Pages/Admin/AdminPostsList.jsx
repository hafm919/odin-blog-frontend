import { useState, useEffect } from "react";

function AdminPostsList({ user, editPost, deletePost, togglePublished }) {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const API_URL = import.meta.env.VITE_API_URL;

  useEffect(() => {
    const getPosts = async () => {
      try {
        const response = await fetch(`${API_URL}/author/${user.id}/posts`);
        const data = await response.json();
        setPosts(data);
      } catch (error) {
        console.error("Error fetching posts:", error);
      } finally {
        setLoading(false);
      }
    };

    getPosts();
  }, [user.id]);

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <table className="table-auto w-full m-5">
      <thead className="font-bold font-sans border-b">
        <tr>
          <td>ID</td>
          <td>Title</td>
          <td>Actions</td>
        </tr>
      </thead>
      <tbody>
        {posts.map((post) => (
          <tr className="border-b" key={post.id}>
            <td className="py-3">{post.id}</td>
            <td>{post.title}</td>
            <td>
              <button
                className="text-blue-500 hover:underline"
                onClick={() => {
                  editPost(post.id);
                }}
              >
                Edit
              </button>
              <button
                className="text-red-500 hover:underline ml-2"
                onClick={() => {
                  deletePost(post.id);
                }}
              >
                Delete
              </button>
              <button
                className="text-green-500 hover:underline ml-2 "
                onClick={() => {
                  togglePublished(post.id);
                }}
              >
                {post.published ? "Unpublish" : "Publish"}
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default AdminPostsList;
