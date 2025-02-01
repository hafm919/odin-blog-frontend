import { useNavigate } from "react-router-dom";
function Sidebar({
  showSidebar,
  toggleSidebar,
  setSelectedTab,
  selectedTab,
  user,
}) {
  function logout() {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    navigate("/");
  }

  const navigate = useNavigate();

  return (
    <div
      className={`fixed top-0 left-0 w-full md:w-[25vw] flex flex-col z-10 bg-white p-5 text-white shadow-xl h-screen ease-in-out duration-300 ${
        showSidebar ? "translate-x-0" : "-translate-x-full"
      }`}
    >
      {/* Close button */}
      <div className="flex justify-end text-black">
        <button className="" onClick={() => toggleSidebar()}>
          x
        </button>
      </div>

      {/* Sidebar title */}
      <div>
        <h3 className="text-4xl font-semibold text-black font-serif text-center">
          Musing
        </h3>
      </div>

      {/* User Details */}
      <div className="flex flex-col  place-items-center w-full h-1/4 pt-4 justify-center">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQg2UYjIh_mqRAWnKFUUyuHASqEEZzFbR2CMw&s"
          className="rounded-full object-cover aspect-square h-1/2"
        ></img>
        <h3 className="font-bold  text-black">{user.name}</h3>
        <h3 className="font-semi-bold  text-black">{user.email}</h3>
      </div>

      {/* Sidebar buttons */}
      <div className="flex flex-col mt-9 gap-2 h-full flex-grow">
        <button
          className={`${
            selectedTab === "profile"
              ? "bg-black text-white"
              : "bg-white text-black"
          } text-left font-sans p-2 border border-black hover:bg-black hover:text-white`}
          onClick={() => setSelectedTab("profile")}
        >
          Profile
        </button>
        {user.role == "editor" && (
          <button
            className={`${
              selectedTab === "posts"
                ? "bg-black text-white"
                : "bg-white text-black"
            } text-left font-sans p-2 border border-black hover:bg-black hover:text-white`}
            onClick={() => setSelectedTab("posts")}
          >
            Posts
          </button>
        )}
        <button
          className={`${
            selectedTab === "comments"
              ? "bg-black text-white"
              : "bg-white text-black"
          } text-left font-sans p-2 border border-black hover:bg-black hover:text-white`}
          onClick={() => setSelectedTab("comments")}
        >
          Comments
        </button>
        <button
          className="bg-white text-left font-sans text-right text-black p-3 border border-black hover:bg-black hover:text-white mt-auto"
          onClick={logout}
        >
          <i className="fa fa-right-from-bracket"></i> Logout
        </button>
      </div>
    </div>
  );
}
export default Sidebar;
