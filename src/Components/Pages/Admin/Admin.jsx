import { useState } from "react";
import Sidebar from "./Sidebar";
import AdminPostsList from "./AdminPostsList";
import AdminComments from "./AdminComments";
import AdminAddPost from "./AdminAddPost";
import AdminPosts from "./AdminPosts";
import { useNavigate } from "react-router-dom";
function Admin() {
  const [showSidebar, setShowSidebar] = useState(true);
  const [selectedTab, setSelectedTab] = useState("comments");
  const [addPostMode, setPostAddMode] = useState(false);
  const [postId, setPostId] = useState(null);
  const navigate = useNavigate();

  if (!localStorage.user) {
    navigate("/", { replace: true });
  }
  const user = JSON.parse(localStorage.user);
  console.log(user);

  let content;
  let title;
  function toggleSidebar() {
    setShowSidebar(!showSidebar);
    console.log(showSidebar);
  }
  switch (selectedTab) {
    case "posts":
      content = (
        <AdminPosts
          addMode={addPostMode}
          user={user}
          setAddMode={setPostAddMode}
          postId={postId}
          setPostId={setPostId}
        ></AdminPosts>
      );
      title = "Posts";
      break;
    case "comments":
      content = <AdminComments user={user} />;
      title = "Comments";
      break;
  }

  return (
    <div className="relative flex">
      {/* Sidebar */}
      <Sidebar
        showSidebar={showSidebar}
        toggleSidebar={toggleSidebar}
        setSelectedTab={setSelectedTab}
        selectedTab={selectedTab}
        user={user}
      />

      {/* Main Content */}
      <div
        className={`flex-1 flex flex-col p-5 min-h-screen transition-all duration-300 mt-4 ${
          showSidebar ? "md:ml-[25vw]" : "md:ml-0"
        }`}
      >
        <header className="flex p-3 gap-2  ">
          <button
            onClick={() => toggleSidebar()}
            className=" text-2xl fa-solid fa-bars"
          ></button>
          <h1 className="text-5xl font-sans">{title}</h1>
          {selectedTab === "posts" && (
            <>
              {addPostMode ? (
                <button
                  className="ml-auto fa fa-arrow-left text-2xl"
                  onClick={() => {
                    setPostAddMode(false);
                    setPostId(null);
                  }}
                ></button>
              ) : (
                <button
                  className="ml-auto fa fa-add text-2xl"
                  onClick={() => setPostAddMode(true)} // Update addMode to true
                ></button>
              )}
            </>
          )}
        </header>
        {content}
        <footer className="w-full mt-auto bg-gray-100 text-center m-0">
          {" "}
          &copy; hafm919 2025
        </footer>
      </div>
    </div>
  );
}
export default Admin;
