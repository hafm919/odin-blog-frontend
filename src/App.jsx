import "./App.css";
import LatestPosts from "./Components/PostsGrid";
import Navbar from "./Components/Pages/Layout/Navbar";
import Featured from "./Components/Pages/Homepage/Featured";
import Footer from "./Components/Pages/Layout/Footer";

function App() {
  return (
    <>
      <div className="p-10">
        <Navbar></Navbar>
        <div className="h-screen">
          <Featured></Featured>
          <LatestPosts></LatestPosts>
          <Footer></Footer>
        </div>
      </div>
    </>
  );
}

export default App;
