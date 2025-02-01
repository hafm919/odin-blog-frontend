import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
function Navbar() {
  const [profile, setProfile] = useState("Login");
  const [profileLink, setProfileLink] = useState("/login");
  useEffect(() => {
    const handleStorageChange = () => {
      try {
        const storedUser = localStorage.getItem("user");
        if (storedUser) {
          const user = JSON.parse(storedUser);
          setProfile(user.name);
          setProfileLink("/dashboard");
        } else {
          setProfile("Login");
          setProfileLink("/login");
        }
      } catch (error) {
        console.error("Error parsing user data:", error);
      }
    };
    handleStorageChange();
  }, []);

  return (
    <nav className="flex place-content-between md:flex-row items-center p-3 flex-wrap">
      <h1 className="font-serif text-3xl font-semibold">Musing</h1>
      <div id="nav-links" className="gap-3 hidden md:visible md:flex ">
        <li className="font-sans list-none hover:text-blue-600">Home</li>
        <li className="font-sans list-none hover:text-blue-600">
          Web Development
        </li>
        <li className="font-sans list-none hover:text-blue-600">MTTN</li>
      </div>
      <div id="login" className="flex items-center gap-2">
        <i className="fa fa-user"></i>
        <Link to={profileLink}>
          <h3 className="font-sans">{profile}</h3>
        </Link>
      </div>
    </nav>
  );
}
export default Navbar;
