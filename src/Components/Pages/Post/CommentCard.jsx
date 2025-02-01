function CommentCard({ comment }) {
  const date = new Date(comment.createdAt);
  const formattedDate = date.toLocaleDateString("en-US", {
    month: "short", // "Aug"
    day: "numeric", // "20"
    year: "numeric", // "2024"
  });

  return (
    <div className=" rounded-md border border-gray-200 p-2">
      <div className="flex place-content-between">
        <h3 className="font-sans font-bold text-sm ">{comment.user.name}</h3>
        <h3 className="font-sans text-xs text-gray-400">{formattedDate}</h3>
      </div>
      <p className="font-sans text-sm ">{comment.content}</p>
    </div>
  );
}
export default CommentCard;
