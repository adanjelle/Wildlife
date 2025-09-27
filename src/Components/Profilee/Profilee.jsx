import React, { useEffect, useState } from "react";
import axios from "axios";

function Profilee() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("user"));
    if (storedUser?.id) {
      axios
        .get(`http://localhost:5001/users/${storedUser.id}`)
        .then((res) => setUser(res.data))
        .catch((err) => console.error("Error fetching user profile:", err));
    }
  }, []);

  if (!user) return <p className="text-gray-600">Loading profile...</p>;

  return (
    <div className="bg-white p-6 rounded-xl shadow">
      <h2 className="text-2xl font-bold mb-4">My Profile</h2>
      <div className="space-y-3">
        <p><strong>Username:</strong> {user.username}</p>
        <p><strong>Email:</strong> {user.email}</p>
        <p><strong>First Name:</strong> {user.first_name}</p>
        <p><strong>Last Name:</strong> {user.last_name}</p>
        <p><strong>Country:</strong> {user.country}</p>
        <p><strong>Phone:</strong> {user.phone_number}</p>
      </div>
    </div>
  );
}

export default Profilee;
