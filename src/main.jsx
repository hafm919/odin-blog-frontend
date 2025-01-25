import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Homepage from "./Components/Pages/Homepage/Homepage.jsx";
import Layout from "./Components/Pages/Layout/Layout.jsx";
import Post from "./Components/Pages/Post/Post.jsx";
import Login from "./Components/Pages/Auth/Login.jsx";
import Signup from "./Components/Pages/Auth/Signup.jsx";
import Admin from "./Components/Pages/Admin/Admin.jsx";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <Homepage /> },
      { path: "/post", element: <Post></Post> },
      { path: "/login", element: <Login></Login> },
      { path: "/signup", element: <Signup></Signup> },
    ],
  },
  {
    path: "/dashboard",
    element: <Admin></Admin>,
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
