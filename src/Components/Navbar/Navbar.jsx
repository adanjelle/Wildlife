import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import image2 from '../../Components/image/image2.png';
import SignUpForm from '../Sign-Up/Sign-Up';
import './Navbar.css';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



function Navbar() {
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [showSignUpForm, setShowSignUpForm] = useState(false);
 
  const handleSignInClick = () => {
    setShowSignUpForm(true); // Show the SignUpForm when "Sign-In" is clicked
  };

  const closeSignUpForm = () => {
    setShowSignUpForm(false); // Close the SignUpForm
  };

  const toggleDropdown = (dropdown) => {
    setActiveDropdown(activeDropdown === dropdown ? null : dropdown);
  };

  return (
    <>
      <nav className="navbar">
        <div className="navbar-logo">
          <Link to="/">
            <img
              src={image2}
              style={{ height: '85px', width: '85px', borderRadius: '50%', marginTop: '20px' }}
              alt="Logo"
            />
          </Link>
        </div>
        <ul className="navbar-items">
          <li className="relative" onMouseEnter={() => setActiveDropdown('projects')} 
              onCompositionUpdateCapture={() => setActiveDropdown(null)}>
            <div className="icon-text">
              <Link to="/project" className="font-bold">Projects</Link>
              <i className="fa fa-angle-down cursor-pointer"></i>
            </div>
            {activeDropdown === 'projects' && (
              <ul className="absolute left-0 mt-2 w-45 bg-white shadow-lg">
                <li className="p-2 hover:bg-gray-200 whitespace-nowrap tracking-wider">
                  <Link to="/projects/community">Community Outreach</Link>
                </li>
              </ul>
            )}
          </li>
          
          <li className="relative" onMouseEnter={() => setActiveDropdown('news')} onCompositionUpdateCapture={() => setActiveDropdown(null)}>
            <div className="icon-text">
              <Link to="/new" className="font-bold">News</Link>
              <i className="fa fa-angle-down cursor-pointer"></i>
            </div>
            {activeDropdown === 'news' && (
              <ul className="absolute left-0 mt-2 w-40 bg-white rounded-lg shadow-lg">
                <li className="p-2 hover:bg-gray-200 whitespace-nowrap  ">
                  <Link to="/news/wildlifeJournal">Wilderness Journal</Link>
                </li>
              </ul>
            )}
          </li>
          <li className="relative" onMouseEnter={() => setActiveDropdown('resources')} onCompositionUpdateCapture={() => setActiveDropdown(null)}>
            <div className="icon-text">
              <Link to="/resources" className="font-bold">Resources</Link>
              <i className="fa fa-angle-down cursor-pointer"></i>
            </div>
            {activeDropdown === 'resources' && (
              <ul className="absolute left-0 mt-2 w-40 bg-white rounded-lg shadow-lg">
                <li className="p-2 hover:bg-gray-200">
                  <Link to="/resources/resourcesD">Educational Resources</Link>
                </li>
            
              </ul>
            )}
          </li>
          <li className="relative" onMouseEnter={() => setActiveDropdown('reports')} onCompositionUpdateCapture={() => setActiveDropdown(null)}>
            <div className="icon-text">
              <Link to="/reports" className="font-bold">Reports</Link>
              <i className="fa fa-angle-down cursor-pointer"></i>
            </div>
            {activeDropdown === 'reports' && (
              <ul className="absolute left-0 mt-2 w-40 bg-white rounded-lg shadow-lg">
                <li className="p-2 hover:bg-gray-200">
                  <Link to="/reports/reportC">Report case</Link>
                </li>
              </ul>
            )}
          </li>
          <li className="relative" onMouseEnter={() => setActiveDropdown('visiting')} onCompositionUpdateCapture={() => setActiveDropdown(null)}>
            <div className="icon-text">
              <Link to="/visiting" className="font-bold">Visiting</Link>
              <i className="fa fa-angle-down cursor-pointer"></i>
            </div>
            {activeDropdown === 'visiting' && (
              <ul className="absolute left-0 mt-2 w-40 bg-white rounded-lg shadow-lg">
                <li className="p-2 hover:bg-gray-200  ">
                  <Link to="/visiting/visitingG">Visiting Garissa</Link>
                </li>
              </ul>
            )}
          </li>
          <li className="relative" onMouseEnter={() => setActiveDropdown('about')} onCompositionUpdateCapture={() => setActiveDropdown(null)}>
            <div className="icon-text">
              <Link to="/about" className="font-bold">About</Link>
              <i className="fa fa-angle-down cursor-pointer"></i>
            </div>
            {activeDropdown === 'about' && (
              <ul className="absolute left-0 mt-2 w-40 bg-white rounded-lg shadow-lg">
                <li className="p-2 hover:bg-gray-200  ">
                  <Link to="/about/team">About us</Link>
                </li>
                <li className="p-2 hover:bg-gray-200 ">
                  <Link to="/about/missionh">Our Mission</Link>
                </li>
              </ul>
            )}
          </li>
        </ul>
        <div className="navbar-buttons">
          <button className="btn-donate" onClick={handleSignInClick}>
            Sign-Up
          </button>
          
        </div>
      </nav>
      <ToastContainer />
      {showSignUpForm && <SignUpForm closeForm={closeSignUpForm} />}
      
    </>
  );
}

export default Navbar;
