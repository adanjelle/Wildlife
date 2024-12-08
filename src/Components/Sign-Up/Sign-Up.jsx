import React, { useState } from 'react';

const SignUpForm = ({ closeForm }) => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [country, setCountry] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSignUp = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    const payload = {
      firstName,
      lastName,
      email,
      username,
      country,
      phoneNumber,
      password,
    };

    console.log('Sending payload:', payload);

    try {
      const response = await fetch('http://localhost:5001/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });
      const data = await response.json();
      console.log('Response data:', data);

      if (data.success) {
        // Handle success without toast
        alert('Sign-up successful!');

        // Clear form fields
        setFirstName('');
        setLastName('');
        setEmail('');
        setUsername('');
        setCountry('');
        setPhoneNumber('');
        setPassword('');

        closeForm(); // Close the form after successful sign-up
      } else {
        // Handle failure without toast
        alert(data.message || 'Sign-up failed. Please try again.');
      }
    } catch (error) {
      console.error('Fetch error:', error);
      // Handle error without toast
      alert('An error occurred. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center pt-10 justify-center bg-gray-100 p-4 fixed inset-0 z-50 bg-opacity-75">
      <div className="relative bg-white shadow-lg rounded-lg w-full max-w-lg p-6">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-semibold text-blue-600">Sign-Up</h2>
          <button className="text-gray-400 hover:text-gray-600 text-xl" onClick={closeForm}>
            &times;
          </button>
        </div>

        <form className="space-y-4" onSubmit={handleSignUp}>
          <div className="flex space-x-4">
            <div className="w-1/2">
              <label htmlFor="firstName" className="block text-sm font-medium text-gray-600 mb-1">First Name</label>
              <input
                type="text"
                id="firstName"
                name="firstName"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                placeholder="First Name"
                className="w-full px-4 py-2 border rounded-md shadow-sm focus:ring focus:ring-blue-200 focus:outline-none"
              />
            </div>
            <div className="w-1/2">
              <label htmlFor="lastName" className="block text-sm font-medium text-gray-600 mb-1">Last Name</label>
              <input
                type="text"
                id="lastName"
                name="lastName"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                placeholder="Last Name"
                className="w-full px-4 py-2 border rounded-md shadow-sm focus:ring focus:ring-blue-200 focus:outline-none"
              />
            </div>
          </div>

          <div className="flex space-x-4">
            <div className="w-1/2">
              <label htmlFor="email" className="block text-sm font-medium text-gray-600 mb-1">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email"
                className="w-full px-4 py-2 border rounded-md shadow-sm focus:ring focus:ring-blue-200 focus:outline-none"
              />
            </div>
            <div className="w-1/2">
              <label htmlFor="username" className="block text-sm font-medium text-gray-600 mb-1">Username</label>
              <input
                type="text"
                id="username"
                name="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="Username"
                className="w-full px-4 py-2 border rounded-md shadow-sm focus:ring focus:ring-blue-200 focus:outline-none"
              />
            </div>
          </div>

          <div className="flex space-x-4">
            <div className="w-1/2">
              <label htmlFor="country" className="block text-sm font-medium text-gray-600 mb-1">Country</label>
              <input
                type="text"
                id="country"
                name="country"
                value={country}
                onChange={(e) => setCountry(e.target.value)}
                placeholder="Country"
                className="w-full px-4 py-2 border rounded-md shadow-sm focus:ring focus:ring-blue-200 focus:outline-none"
              />
            </div>
            <div className="w-1/2">
              <label htmlFor="phoneNumber" className="block text-sm font-medium text-gray-600 mb-1">Phone Number</label>
              <input
                type="text"
                id="phoneNumber"
                name="phoneNumber"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
                placeholder="Phone Number"
                className="w-full px-4 py-2 border rounded-md shadow-sm focus:ring focus:ring-blue-200 focus:outline-none"
              />
            </div>
          </div>

          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-600 mb-1">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
              className="w-full px-4 py-2 border rounded-md shadow-sm focus:ring focus:ring-blue-200 focus:outline-none"
              minlength="8" required   />
          </div>

          <button
            type="submit"
            className={`w-full py-2 rounded-md shadow focus:ring focus:ring-blue-200 focus:outline-none ${isLoading ? 'bg-blue-400 cursor-not-allowed' : 'bg-blue-600 hover:bg-blue-700'} text-white`}
            disabled={isLoading}
          >
            {isLoading ? 'Sending...' : 'Sign-Up'}
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignUpForm;
