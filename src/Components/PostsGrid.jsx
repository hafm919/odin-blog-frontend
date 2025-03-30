import PostCard from "./PostCard";
function PostsGrid({ posts }) {
  return (
    <div className="pt-5">
      {console.log(posts)}
      <h2 className="font-sans font-bold text-2xl">Latest Posts</h2>
      <hr></hr>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-3 w-full py-2">
        {posts.map((post) => (
          <PostCard key={post.id} post={post}></PostCard>
        ))}
      </div>
    </div>
  );
}
export default PostsGrid;
