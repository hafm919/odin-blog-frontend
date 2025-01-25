import CommentCard from "./CommentCard";

function CommentSection() {
  return (
    <div className="flex flex-col gap-2">
      <h2 className="text-2xl">Comments</h2>

      <hr></hr>
      <form className="flex gap-2 ">
        <textarea
          className="flex-1 border border-gray-400 rounded-sm p-2"
          placeholder="Add your comment.."
        ></textarea>
        <button
          type="submit"
          className="border  border-gray-400 p-2 rounded-sm"
        >
          Submit
        </button>
      </form>
      <CommentCard></CommentCard>
    </div>
  );
}
export default CommentSection;
