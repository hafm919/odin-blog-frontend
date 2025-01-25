import { useState } from "react";
import { useNavigate } from "react-router-dom";
function Signup() {
  const [formData, setFormData] = useState({
    email: "",
    fullName: "",
    password: "",
    repeatPassword: "",
  });

  const [errorData, setErrorData] = useState([]);

  let navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (formData.password !== formData.repeatPassword) {
      alert("Passwords do not match!");
      return;
    }

    try {
      const response = await fetch("http://localhost:3000/auth/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: formData.email,
          fullName: formData.fullName,
          password: formData.password,
        }),
      });

      if (response.ok) {
        navigate("/login", { replace: true });
      } else {
        const errorData = await response.json();
        setErrorData(errorData);
      }
    } catch (error) {
      console.error("Error:", error);
      alert("An error occurred. Please try again.");
    }
  };

  return (
    <div className="flex place-content-center py-5 md:px-40">
      <form
        onSubmit={handleSubmit}
        className=" shadow-md flex flex-col p-10 gap-2"
        type="POST"
        action="localhost:3000/signup"
      >
        <h1 className="text-3xl font-sans font-semi-bold text-center">
          Create a new account
        </h1>
        <div className="flex flex-col">
          <label htmlFor="email">Email</label>
          <input
            id="email"
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="border-b-2 p-2"
            required
          ></input>
        </div>
        <div className="flex flex-col">
          <label htmlFor="email">Full Name</label>
          <input
            id="fullName"
            type="text"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            className="border-b-2 p-2"
            required
          ></input>
        </div>
        <div className="flex flex-col"></div>
        <div className="flex flex-col">
          <label htmlFor="password">Password</label>
          <input
            id="password"
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            className="border-b-2 p-2"
            required
          ></input>
        </div>
        <div className="flex flex-col">
          <label htmlFor="password"> Re-enter Password</label>
          <input
            id="repeatPassword"
            type="password"
            name="repeatPassword"
            value={formData.repeatPassword}
            onChange={handleChange}
            className="border-b-2 p-2"
            required
          ></input>
        </div>
        {errorData.length > 0 && (
          <div style={{ color: "red", marginTop: "10px" }}>
            <ul>
              {errorData.map((error, index) => (
                <li key={index}>{error.msg}</li>
              ))}
            </ul>
          </div>
        )}
        <button className="bg-black text-white font-sans p-2" type="submit">
          Sign Up
        </button>
      </form>
    </div>
  );
}
export default Signup;
