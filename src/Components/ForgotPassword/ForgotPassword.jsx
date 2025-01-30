// ForgotPassword.js
import React, { useState } from 'react';
import { FaTimes } from 'react-icons/fa';  // Importing the 'X' icon for close button

const ForgotPassword = ({ setShowModal }) => {
  const [forgotPasswordEmail, setForgotPasswordEmail] = useState('');
  const [message, setMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleForgotPassword = async (e) => {
    e.preventDefault();

    if (!forgotPasswordEmail) {
      setMessage({ text: 'Please enter a valid email.', type: 'error' });
      return;
    }

    // Email format validation
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(forgotPasswordEmail)) {
      setMessage({ text: 'Please enter a valid email address.', type: 'error' });
      return;
    }

    setIsLoading(true);
    try {
      const response = await fetch('http://localhost:5001/forgot-password', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email: forgotPasswordEmail }),
      });

      const data = await response.json();

      if (response.ok) {
        setMessage({ text: 'Password reset email sent. Please check your inbox.', type: 'success' });
      } else {
        setMessage({ text: data.message || 'Error sending reset email.', type: 'error' });
      }
    } catch (error) {
      setMessage({ text: 'An error occurred. Please try again later.', type: 'error' });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="bg-white p-8 rounded-lg shadow-lg max-w-md mx-auto relative">
      <h2 className="text-2xl font-semibold text-center text-gray-800 mb-6">Forgot Your Password?</h2>
      <p className="text-gray-600 text-center mb-4">
        Enter your email address, and we'll send you a link to reset your password.
      </p>

      <form onSubmit={handleForgotPassword} className="space-y-4">
        <div>
          <input
            type="email"
            placeholder="Enter your email"
            value={forgotPasswordEmail}
            onChange={(e) => setForgotPasswordEmail(e.target.value)}
            required
            className="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500 transition duration-300"
          />
        </div>

        <button
          type="submit"
          className="w-full py-3 bg-green-600 text-white font-semibold rounded-lg hover:bg-green-700 transition duration-300"
          disabled={isLoading}
        >
          {isLoading ? 'Sending...' : 'Send Reset Email'}
        </button>
      </form>

      {message && (
        <div
          className={`mt-4 p-3 rounded-lg text-center text-sm ${
            message.type === 'success'
              ? 'bg-green-100 text-green-700'
              : 'bg-red-100 text-red-700'
          }`}
        >
          <p>{message.text}</p>
        </div>
      )}

      {/* Close Button - Smaller and Professional Design */}
      <button
        onClick={() => setShowModal(false)}  // Close the modal
        className="absolute top-2 right-2 text-gray-600 hover:text-gray-800 transition-colors duration-200 ease-in-out"
        aria-label="Close"
      >
        <FaTimes size={15} />  {/* Smaller X icon */}
      </button>
    </div>
  );
};

export default ForgotPassword;
