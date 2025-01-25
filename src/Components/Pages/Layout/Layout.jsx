import Footer from "./Footer";
import Navbar from "./Navbar";
import { Outlet } from "react-router-dom";
function Layout() {
  return (
    <div className="p-10">
      <Navbar></Navbar>
      <div className="h-screen">
        <Outlet></Outlet>
        <Footer></Footer>
      </div>
    </div>
  );
}
export default Layout;
