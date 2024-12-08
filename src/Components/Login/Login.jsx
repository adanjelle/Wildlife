// Login.js
import React, { useState } from 'react';
import { FaEnvelope, FaLock } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';  // Import useNavigate for redirection
import ForgotPassword from '../ForgotPassword/ForgotPassword'; // Import ForgotPassword component

const Login = ({ setShowSignUp }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);  // Loading state
  const [showModal, setShowModal] = useState(false);  // Modal visibility state
  const navigate = useNavigate();  // Use useNavigate hook for redirection

  const handleLogin = async (e) => {
    e.preventDefault();

    if (!email || !password) {
      alert('Please enter both email and password');
      return;
    }

    setLoading(true);

    const payload = {
      email,
      password,
    };

    try {
      const response = await fetch('http://localhost:5001/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });

      const data = await response.json();

      if (response.ok) {
        localStorage.setItem('token', data.access_token);
        setEmail('');
        setPassword('');
        navigate('/');
      } else {
        alert(data.message || 'Login failed');
      }
    } catch (error) {
      alert('An error occurred. Please try again later.');
      console.error('Error:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleForgotPasswordLink = () => {
    setShowModal(true);  // Show the modal when "Forgot Password" is clicked
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white shadow-lg rounded-lg p-6 w-full max-w-sm relative">
        <div className="text-center mb-4">
          <h2 className="text-xl font-semibold text-gray-700">Login</h2>
        </div>

        {/* Login Form */}
        <form onSubmit={handleLogin} className="space-y-4">
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
            <FaLock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
              className="w-full pl-10 py-2 border rounded-md shadow-sm focus:ring focus:ring-green-400"
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className={`w-full py-2 ${loading ? 'bg-gray-400' : 'bg-green-600'} text-white rounded-md hover:bg-green-700 transition`}
          >
            {loading ? 'Logging in...' : 'Login'}
          </button>

          <div className="flex justify-between text-sm mt-4">
            <a
              href="#forgot-password"
              onClick={handleForgotPasswordLink}  // Handle forgot password click
              className="text-green-600 hover:text-green-700"
            >
              Forgot Password?
            </a>
            {/* <a
              href="#sign-up"
              onClick={() => setShowSignUp(true)}
              className="text-green-600 hover:text-green-700"
            >
              Go to Sign-Up
            </a> */}
          </div>
        </form>
      </div>

      {/* Show the Forgot Password Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <ForgotPassword setShowModal={setShowModal} /> {/* Show ForgotPassword component inside modal */}
        </div>
      )}
    </div>
  );
};

export default Login;
