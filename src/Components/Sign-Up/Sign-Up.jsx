import React from "react";
import image2 from '../../Components/image/image2.png';
const SignUpForm = ({ closeForm }) => {
  return (
    <div className="min-h-screen flex items-center pt-10 justify-center bg-gray-100 p-4 fixed inset-0 z-50 bg-opacity-75">
      <div className="relative bg-white shadow-lg rounded-lg w-full max-w-lg p-6">
        {/* Header */}
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-semibold text-blue-600">Sign-Up</h2>
          <button
            className="text-gray-400 hover:text-gray-600 text-xl"
            onClick={closeForm} // Close the Sign-Up form when clicked
          >
            &times;
          </button>
        </div>

        {/* Image */}
        <div className="flex justify-center mb-6">
          <img
            src={image2} // Replace with your logo
            alt="Logo"
            className="w-20 h-20 object-cover rounded-full"
          />
        </div>

        {/* Subtext */}
        <p className="text-center text-sm text-gray-600 mb-6">
          Enter the details to sign in
        </p>

        {/* Form */}
        <form className="space-y-4">
          {/* First Name & Last Name */}
          <div className="flex space-x-4">
            <div className="w-1/2">
              <label className="block text-sm font-medium text-gray-600 mb-1">
                First Name
              </label>
              <div className="relative">
                <input
                  type="text"
                  placeholder="First Name"
                  className="w-full px-4 py-2 border rounded-md shadow-sm focus:ring focus:ring-blue-200 focus:outline-none"
                />
                <i className="absolute right-3 top-2.5 text-gray-400">👤</i>
              </div>
            </div>
            <div className="w-1/2">
              <label className="block text-sm font-medium text-gray-600 mb-1">
                Last Name
              </label>
              <div className="relative">
                <input
                  type="text"
                  placeholder="Last Name"
                  className="w-full px-4 py-2 border rounded-md shadow-sm focus:ring focus:ring-blue-200 focus:outline-none"
                />
                <i className="absolute right-3 top-2.5 text-gray-400">👤</i>
              </div>
            </div>
          </div>

          {/* Email & Surname */}
          <div className="flex space-x-4">
            <div className="w-1/2">
              <label className="block text-sm font-medium text-gray-600 mb-1">
                Email
              </label>
              <div className="relative">
                <input
                  type="email"
                  placeholder="Email"
                  className="w-full px-4 py-2 border rounded-md shadow-sm focus:ring focus:ring-blue-200 focus:outline-none"
                />
                <i className="absolute right-3 top-2.5 text-gray-400">✉️</i>
              </div>
            </div>
            <div className="w-1/2">
              <label className="block text-sm font-medium text-gray-600 mb-1">
                Surname
              </label>
              <div className="relative">
                <input
                  type="text"
                  placeholder="Surname"
                  className="w-full px-4 py-2 border rounded-md shadow-sm focus:ring focus:ring-blue-200 focus:outline-none"
                />
                <i className="absolute right-3 top-2.5 text-gray-400">👤</i>
              </div>
            </div>
          </div>

          {/* Country & Phone Number */}
          <div className="flex space-x-4">
            <div className="w-1/2">
              <label className="block text-sm font-medium text-gray-600 mb-1">
                Country
              </label>
              <div className="relative">
                <input
                  type="text"
                  placeholder="Country"
                  className="w-full px-4 py-2 border rounded-md shadow-sm focus:ring focus:ring-blue-200 focus:outline-none"
                />
                <i className="absolute right-3 top-2.5 text-gray-400">🌍</i>
              </div>
            </div>
            <div className="w-1/2">
              <label className="block text-sm font-medium text-gray-600 mb-1">
                Phone Number
              </label>
              <div className="relative">
                <input
                  type="text"
                  placeholder="Phone Number"
                  className="w-full px-4 py-2 border rounded-md shadow-sm focus:ring focus:ring-blue-200 focus:outline-none"
                />
                <i className="absolute right-3 top-2.5 text-gray-400">📞</i>
              </div>
            </div>
          </div>

          {/* Submit Button */}
          <div className="text-center mt-4">
            <button
              type="submit"
              className="w-full py-2 px-4 bg-blue-600 text-white rounded-md shadow-md hover:bg-blue-700 focus:ring focus:ring-blue-200"
            >
              Sign Up
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUpForm;
