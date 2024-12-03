import React from 'react';
import './Link.css';
import { Link } from 'react-router-dom';

function Links({ onRegionClick }) {
  return (
    <nav className="navbar-link">
      <ul className="navbar-links">
        <li>
       
          <Link to="/login" className="font-bold"><i className="fas fa-sign-in-alt"></i> LOGIN</Link>
        </li>
        <li>
          <Link to="#"className="font-bold" onClick={onRegionClick}><i className="fas fa-globe"></i>MY REGION: COLOR</Link>
        </li>
        <li>
          <Link to="/"className="font-bold"><i className="fas fa-user-lock"></i>MY ACCOUNT</Link>
        </li>
        <li>
  <Link to="/contactpage" className="font-bold">
    <i className="fas fa-phone-alt "></i> CONTACT <span style={{ color: "orange" }}>(0)</span>
  </Link>
</li>

      </ul>
    </nav>
  );
}

export default Links;
