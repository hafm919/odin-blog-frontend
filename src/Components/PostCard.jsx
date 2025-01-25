function PostCard() {
  return (
    <div className="bg-white flex flex-col rounded-md border-gray-200 border p-5 gap-3">
      <img
        className="w-full h-3/4 object-cover rounded-md"
        src="https://static.toiimg.com/img/91227987/Master.jpgs"
      ></img>
      <h1 className="font-sans font-semibold leading-tight">
        {" "}
        The Impact of Technology on the Workplace: How Technology is Changing
      </h1>
      <div className="flex gap-2">
        <h3 className="font-sans text-gray-400 text-xs">Hafeez Mohammed</h3>
        <h3 className="font-sans text-gray-400 text-xs">August 20 2024</h3>
      </div>
    </div>
  );
}
export default PostCard;
