import React, { useState } from 'react';
import { FaEnvelope, FaUser, FaLock } from 'react-icons/fa';
import image2 from '../../Components/image/image2.png'; // Image for the form

const Login = () => {
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    alert('Login successful (placeholder functionality).');
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100"> {/* Centering the entire page */}
      <div className="bg-white shadow-lg rounded-lg p-6 w-full max-w-sm relative"> {/* Added relative positioning to the container */}
        {/* Close Button */}
        <button
          className="absolute top-4 right-4 text-gray-500 hover:text-red-500"
          onClick={() => alert('Close button clicked!')}
        >
          X
        </button>

        {/* Header */}
        <div className="text-center mb-4">
          <h2 className="text-xl font-semibold text-gray-700">Login</h2>
        </div>

        {/* Top Image */}
        <div className="mb-4">
          <img
            src={image2}
            alt="Safaricom"
            className="h-16 mx-auto rounded-full"
          />
        </div>

        {/* Login Form */}
        <form onSubmit={handleLogin} className="space-y-4">
          {/* Email Field */}
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

          {/* Username Field */}
          <div className="relative">
            <FaUser className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Enter your username"
              className="w-full pl-10 py-2 border rounded-md shadow-sm focus:ring focus:ring-green-400"
            />
          </div>

          {/* Password Field */}
          <div className="relative">
            <FaLock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
              className="w-full pl-10 py-2 border rounded-md shadow-sm focus:ring focus:ring-green-400"
            />
          </div>

          {/* Login Button */}
          <button
            type="submit"
            className="w-full py-2 bg-green-600 text-white rounded-md hover:bg-green-700 transition"
          >
            Login
          </button>

          {/* Forgot Password and Sign-Up Links */}
          <div className="flex justify-between text-sm mt-4">
            <a href="#forgot-password" className="text-green-600 hover:text-green-700">
              Forgot Password?
            </a>
            <a href="#sign-up" className="text-green-600 hover:text-green-700">
              Go to Sign-Up
            </a>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
