import { Link } from "react-router-dom";
function Featured({ post }) {
  if (!post) {
    return <div>Loading...</div>;
  }
  console.log(post);
  const date = new Date(post.createdAt);
  const formattedDate = date.toLocaleDateString("en-US", {
    month: "short", // "Aug"
    day: "numeric", // "20"
    year: "numeric", // "2024"
  });
  const categoryNames = post.Category.map((category) => category.name);
  const API_URL = import.meta.env.VITE_API_URL;

  console.log(date);
  return (
    <div className="h-5/6 w-full relative ">
      <img
        className="h-5/6 object-cover object-top w-full rounded-md relative "
        src={`${API_URL}${post.imageUrl}`}
      ></img>
      <div className="bg-white absolute bottom-4 left-4 rounded-md p-8 max-w-full md:w-1/2 shadow-md">
        <Link to={`/post/${post.id}`}>
          <h1 className="text-3xl font-sans font-semibold">{post.title}</h1>
        </Link>
        <div className="mt-2 flex flex-wrap gap-2">
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
          <img
            src={`${API_URL}${post.author.profileImg}`}
            className="w-6 h-6 rounded-full object-cover"
          />
          <h3 className="font-sans text-gray-400">{post.author.name}</h3>
          <h3 className="font-sans text-gray-400">{formattedDate}</h3>
        </div>
      </div>
    </div>
  );
}

export default Featured;
