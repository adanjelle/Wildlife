import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import image2 from '../../Components/image/image2.png';
import './Navbar.css'; 

function Navbar() {
  const [activeDropdown, setActiveDropdown] = useState(null);

  const toggleDropdown = (dropdown) => {
    setActiveDropdown(activeDropdown === dropdown ? null : dropdown);
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <Link to="/">
          <img
            src={image2}
            style={{ height: '85px', width: '85px', borderRadius: '50%',marginTop:'20px' }}
            alt="Logo"
          />
        </Link>
      </div>
      <ul className="navbar-items">
        <li className="relative" onMouseEnter={() => setActiveDropdown('projects')} 
        onCompositionUpdateCapture={() => setActiveDropdown(null)}>
          <div className="icon-text">
            <Link to="/project">Projects</Link>
            <i className="fa fa-angle-down cursor-pointer"></i>
          </div>
          {activeDropdown === 'projects' && (
            <ul className="absolute left-0 mt-2 w-45 bg-white shadow-lg">
              <li className="p-2 hover:bg-gray-200 whitespace-nowrap">
            <Link to="/projects/community">Community Outreage</Link>
              </li>
            </ul>
          )}
        </li>

        
        <li className="relative" onMouseEnter={() => setActiveDropdown('adopt')}  onCompositionUpdateCapture={() => setActiveDropdown(null)}>
          <div className="icon-text">
            <Link to="/adopt">Adopt an Orphan</Link>
            <i className="fa fa-angle-down cursor-pointer"></i>
          </div>
          {activeDropdown === 'adopt' && (
            <ul className="absolute left-0 mt-2 w-40 bg-white rounded-lg shadow-lg">
              <li className="p-2 hover:bg-gray-200">
                <Link to="/adopt/child">Adopt a Child</Link>
              </li>
              <li className="p-2 hover:bg-gray-200">
                <Link to="/adopt/family">Adopt a Family</Link>
              </li>
            </ul>
          )}
        </li>

       
        <li className="relative" onMouseEnter={() => setActiveDropdown('news')} 
        onCompositionUpdateCapture={() => setActiveDropdown(null)}>
          <div className="icon-text">
            <Link to="/new">News</Link>
            <i className="fa fa-angle-down cursor-pointer"></i>
          </div>
          {activeDropdown === 'news' && (
            <ul className="absolute left-0 mt-2 w-40 bg-white rounded-lg shadow-lg">
              <li className="p-2 hover:bg-gray-200 whitespace-nowrap">
                <Link to="/news/wildlifeJournal">Wilderness Journal</Link>
              </li>
            </ul>
          )}
        </li>

        
        <li className="relative" onMouseEnter={() => setActiveDropdown('getInvolved')} 
         onCompositionUpdateCapture={() => setActiveDropdown(null)}>
          <div className="icon-text">
            <Link to="/get-involved">Get Involved</Link>
            <i className="fa fa-angle-down cursor-pointer"></i>
          </div>
          {activeDropdown === 'getInvolved' && (
            <ul className="absolute left-0 mt-2 w-40 bg-white rounded-lg shadow-lg">
              <li className="p-2 hover:bg-gray-200">
                <Link to="/get-involved/volunteer">Volunteer</Link>
              </li>
              <li className="p-2 hover:bg-gray-200">
                <Link to="/get-involved/donate">Donate</Link>
              </li>
            </ul>
          )}
        </li>

      
        <li className="relative" onMouseEnter={() => setActiveDropdown('reports')} 
    onCompositionUpdateCapture={() => setActiveDropdown(null)}>
          <div className="icon-text">
            <Link to="/reports">Reports</Link>
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

        
        <li className="relative" onMouseEnter={() => setActiveDropdown('visiting')} 
         onCompositionUpdateCapture={() => setActiveDropdown(null)}>
          <div className="icon-text">
            <Link to="/visiting">Visiting</Link>
            <i className="fa fa-angle-down cursor-pointer"></i>
          </div>
          {activeDropdown === 'visiting' && (
            <ul className="absolute left-0 mt-2 w-40 bg-white rounded-lg shadow-lg">
              <li className="p-2 hover:bg-gray-200">
                <Link to="/visiting/visitingG">Visiting Garissa</Link>
              </li>
             
            </ul>
          )}
        </li>
        <li className="relative" onMouseEnter={() => setActiveDropdown('about')}
      onCompositionUpdateCapture={() => setActiveDropdown(null)}>
          <div className="icon-text">
            <Link to="/about">About</Link>
            <i className="fa fa-angle-down cursor-pointer"></i>
          </div>
          {activeDropdown === 'about' && (
            <ul className="absolute left-0 mt-2 w-40 bg-white rounded-lg shadow-lg">
              <li className="p-2 hover:bg-gray-200">
                <Link to="/about/team">About us</Link>
              </li>
              <li className="p-2 hover:bg-gray-200">
                <Link to="/about/missionh">Our Mission</Link>
              </li>
            </ul>
          )}
        </li>
      </ul>

      <div className="navbar-buttons">
        <button className="btn-adopt">Adopt</button>
        <button className="btn-donate">Donate</button>
      </div>
    </nav>
  );
}

export default Navbar;
