function CommentCard({ comment }) {
  const date = new Date(comment.createdAt);
  const API_URL = import.meta.env.VITE_API_URL;
  const formattedDate = date.toLocaleDateString("en-US", {
    month: "short", // "Aug"
    day: "numeric", // "20"
    year: "numeric", // "2024"
  });

  return (
    <div className="rounded-md border border-gray-200 p-2">
      {/* Profile Image + Name + Date in a Flexbox */}
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-2">
          {/* Profile Picture */}
          <img
            src={`${API_URL}${comment.user.profileImg}`}
            alt={`${comment.user.name}'s profile`}
            className="w-6 h-6 rounded-full object-cover"
          />
          {/* Commenter's Name */}
          <h3 className="font-sans font-bold text-sm">{comment.user.name}</h3>
        </div>
        {/* Date */}
        <h3 className="font-sans text-xs text-gray-400">{formattedDate}</h3>
      </div>

      {/* Comment Content */}
      <p className="font-sans text-sm mt-1">{comment.content}</p>
    </div>
  );
}

export default CommentCard;
