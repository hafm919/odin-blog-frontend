import { useState } from "react";

function AdminProfile({ user }) {
  const API_URL = import.meta.env.VITE_API_URL;
  const [profileImage, setProfileImage] = useState(
    `${API_URL}${user.profileImg}` ||
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQg2UYjIh_mqRAWnKFUUyuHASqEEZzFbR2CMw&s"
  );

  const handleImageChange = async (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setProfileImage(reader.result);
      };
      reader.readAsDataURL(file);
      const formData = new FormData();
      formData.append("profileImg", file);
      const response = await fetch(`${API_URL}/author`, {
        method: "PUT",
        headers: { Authorization: `Bearer ${localStorage.token}` },
        body: formData,
      });
      const data = await response.json();
      const updatedUser = data.user;
      console.log("Updated user");
      localStorage.setItem("user", JSON.stringify(updatedUser));
      console.log(localStorage.getItem("user"));
      window.location.reload();
    }
  };

  return (
    <div className="flex flex-col items-center w-full  p-10 bg-white shadow-lg rounded-lg max-w-md mx-auto">
      {/* Profile Image */}
      <label htmlFor="profile-pic-input" className="cursor-pointer">
        <img
          src={profileImage}
          className="rounded-full object-cover aspect-square h-24 w-24 border-4 border-gray-300 shadow-md transition-transform hover:scale-105"
          alt="Profile"
        />
      </label>
      <input
        type="file"
        id="profile-pic-input"
        className="hidden"
        accept="image/*"
        onChange={handleImageChange}
      />

      {/* User Info */}
      <div className="mt-6 w-full text-left">
        <div className="mb-4">
          <p className="font-bold text-gray-700 text-lg font-sans">Name</p>
          <p className="text-gray-900 font-medium text-xl font-sans">
            {user.name}
          </p>
        </div>

        <div className="mb-4">
          <p className="font-bold text-gray-700 text-lg font-sans">Email</p>
          <p className="text-gray-900 font-medium text-xl font-sans">
            {user.email}
          </p>
        </div>
        <div className="mb-4">
          <p className="font-bold text-gray-700 text-lg font-sans">Role</p>
          <p className="text-gray-900 font-medium text-xl font-sans">
            {user.role}
          </p>
        </div>
      </div>
    </div>
  );
}

export default AdminProfile;
