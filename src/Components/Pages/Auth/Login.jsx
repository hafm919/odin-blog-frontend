import { useState } from "react";
import { useNavigate } from "react-router-dom";
function Login() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState("");
  const API_URL = import.meta.env.VITE_API_URL;

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(formData.email, formData.password);
    try {
      const response = await fetch("http://localhost:3000/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: formData.email,
          password: formData.password,
        }),
      });

      const responseData = await response.json();

      if (response.status === 400 || !response.ok) {
        console.log([responseData.message]);
        setErrors([responseData.message || "An error occurred"]);
        console.log(errors);
      } else if (response.ok) {
        // Save token to localStorage or state
        localStorage.setItem("token", responseData.token);
        localStorage.setItem("user", JSON.stringify(responseData.user));
        window.location.replace("/");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("An error occurred. Please try again.");
    }
  };
  return (
    <div className="flex place-content-center py-5 md:px-40">
      <form
        className=" shadow-md flex flex-col p-10 gap-2"
        onSubmit={handleSubmit}
      >
        <h1 className="text-3xl font-sans font-semi-bold text-center">
          Welcome back!
        </h1>
        <hr></hr>
        <div className="flex flex-col">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            className="border-b p-2 border-black"
            onChange={handleChange}
          ></input>
        </div>
        <div className="flex flex-col">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            onChange={handleChange}
            className="border-b p-2 border-black bord"
          ></input>
        </div>
        {errors.length > 0 && <p className="text-red-400">{errors}</p>}
        <button className="bg-black text-white font-sans p-2 " type="submit">
          Login
        </button>
        <p>
          Don't have an account?{" "}
          <a href="/signup" className="text-blue-800 underline">
            Sign up
          </a>
        </p>
      </form>
    </div>
  );
}
export default Login;
