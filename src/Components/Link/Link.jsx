import React from 'react';
import './Link.css';
import { Link } from 'react-router-dom';

function Links({ onRegionClick }) {
  return (
    <nav className="navbar-link">
      <ul className="navbar-links">
        <li>
       
          <Link to="/login"><i className="fas fa-sign-in-alt"></i> LOGIN</Link>
        </li>
        <li>
          <Link to="#" onClick={onRegionClick}><i className="fas fa-globe"></i>MY REGION: COLOR</Link>
        </li>
        <li>
          <Link to="/"><i className="fas fa-user-lock"></i>MY ACCOUNT</Link>
        </li>
        <li>
  <Link to="/contactpage">
    <i className="fas fa-phone-alt"></i> CONTACT <span style={{ color: "orange" }}>(0)</span>
  </Link>
</li>

      </ul>
    </nav>
  );
}

export default Links;
