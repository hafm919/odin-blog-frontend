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

  console.log(date);
  return (
    <div className="h-5/6 w-full relative ">
      <img
        className="h-5/6 object-cover object-top w-full rounded-md relative "
        src={`http://localhost:3000${post.imageUrl}`}
      ></img>
      <div className="bg-white absolute bottom-4 left-4 rounded-md p-8 max-w-full md:w-1/2 shadow-md">
        <Link to={`/post/${post.id}`}>
          <h1 className="text-3xl font-sans font-semibold">{post.title}</h1>
        </Link>
        <div className="flex gap-2">
          <h3 className="font-sans text-gray-400">{post.author.name}</h3>
          <h3 className="font-sans text-gray-400">{formattedDate}</h3>
        </div>
      </div>
    </div>
  );
}

export default Featured;
