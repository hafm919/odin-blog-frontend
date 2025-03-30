import { Link } from "react-router-dom";
function PostCard({ post }) {
  const date = new Date(post.createdAt);
  const formattedDate = date.toLocaleDateString("en-US", {
    month: "short", // "Aug"
    day: "numeric", // "20"
    year: "numeric", // "2024"
  });
  const categoryNames = post.Category.map((category) => category.name);
  const API_URL = import.meta.env.VITE_API_URL;
  return (
    <div className="bg-white flex flex-col rounded-md border-gray-200 border p-5 gap-3">
      <img
        className="w-full h-3/4 object-cover rounded-md"
        src={`${API_URL}${post.imageUrl}`}
      ></img>
      <Link to={`/post/${post.id}`}>
        <h1 className="font-sans font-semibold leading-tight"> {post.title}</h1>
      </Link>
      <div className="flex flex-wrap gap-2">
        {categoryNames.map((name, index) => (
          <span
            key={index}
            className="bg-gray-200 text-gray-700 text-xs font-medium px-2 py-1 rounded-full"
          >
            {name}
          </span>
        ))}
      </div>
      <div className="flex gap-2">
        <h3 className="font-sans text-gray-400 text-xs">{post.author.name}</h3>
        <h3 className="font-sans text-gray-400 text-xs">{formattedDate}</h3>
      </div>
    </div>
  );
}
export default PostCard;
