import { Link } from "react-router-dom";
function Navbar() {
  let profile;
  let profileLink;
  if (localStorage.user) {
    const user = JSON.parse(localStorage.user);
    profile = user.name;
    profileLink = "/dashboard";
  } else {
    profile = "Login";
    profileLink = "/login";
  }
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
