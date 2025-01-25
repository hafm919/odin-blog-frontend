function CommentCard() {
  return (
    <div className=" rounded-md border border-gray-200 p-2">
      <div className="flex place-content-between">
        <h3 className="font-sans font-bold text-sm ">@bigdawg43</h3>
        <h3 className="font-sans text-xs text-gray-400">12th August 2023</h3>
      </div>
      <p className="font-sans text-sm ">
        This is a very poorly written work, did not expect this from someone
        like you. The glaring inaccuracies is infuriating.
      </p>
    </div>
  );
}
export default CommentCard;
