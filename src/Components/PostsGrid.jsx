import PostCard from "./PostCard";
function PostsGrid() {
  return (
    <div className="pt-5">
      <h2 className="font-sans font-bold text-2xl">Latest Posts</h2>
      <hr></hr>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-3 w-full py-2">
        <PostCard></PostCard>
        <PostCard></PostCard>
        <PostCard></PostCard>
        <PostCard></PostCard>
      </div>
    </div>
  );
}
export default PostsGrid;
