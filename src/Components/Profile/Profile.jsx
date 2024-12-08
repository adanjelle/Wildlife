import React, { useState, useEffect } from 'react';
import { FaUserAlt, FaEnvelope, FaImage } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const Profile = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [profilePicture, setProfilePicture] = useState(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  // Fetch current user details on page load
  useEffect(() => {
    const fetchUserProfile = async () => {
      const token = localStorage.getItem('token');
      if (token) {
        try {
          const response = await fetch('http://localhost:5001/user-profile', {
            method: 'GET',
            headers: {
              'Authorization': `Bearer ${token}`,
            },
          });

          const data = await response.json();
          if (response.ok) {
            setName(data.name);
            setEmail(data.email);
            setProfilePicture(data.profile_picture);  // Assuming you store URL to profile picture
          } else {
            alert(data.message || 'Error fetching user details');
          }
        } catch (error) {
          console.error('Error:', error);
        }
      }
    };

    fetchUserProfile();
  }, []);

  const handleProfileUpdate = async (e) => {
    e.preventDefault();
    setLoading(true);

    const token = localStorage.getItem('token');
    const payload = {
      name,
      email,
      profile_picture: profilePicture,  // You can send the profile picture URL or handle image upload
    };

    try {
      const response = await fetch('http://localhost:5001/update-profile', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`,
        },
        body: JSON.stringify(payload),
      });

      const data = await response.json();
      if (response.ok) {
        alert('Profile updated successfully');
        navigate('/');  // Redirect to home or dashboard after success
      } else {
        alert(data.message || 'Error updating profile');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('An error occurred while updating your profile');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white shadow-lg rounded-lg p-6 w-full max-w-sm">
        <h2 className="text-center text-xl font-semibold text-gray-700">Update Profile</h2>

        <form onSubmit={handleProfileUpdate} className="space-y-4">
          <div className="relative">
            <FaUserAlt className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter your name"
              className="w-full pl-10 py-2 border rounded-md shadow-sm focus:ring focus:ring-green-400"
            />
          </div>

          <div className="relative">
            <FaEnvelope className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="w-full pl-10 py-2 border rounded-md shadow-sm focus:ring focus:ring-green-400"
            />
          </div>

          <div className="relative">
            <FaImage className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <input
              type="file"
              onChange={(e) => setProfilePicture(e.target.files[0])}
              className="w-full pl-10 py-2 border rounded-md shadow-sm focus:ring focus:ring-green-400"
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className={`w-full py-2 ${loading ? 'bg-gray-400' : 'bg-green-600'} text-white rounded-md hover:bg-green-700 transition`}
          >
            {loading ? 'Updating Profile...' : 'Update Profile'}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Profile;
