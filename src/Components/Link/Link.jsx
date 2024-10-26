import React from 'react';
import './Link.css';
import { Link } from 'react-router-dom';

function Links() {
  return (
    <nav className="navbar-link">
      <ul className="navbar-links">
        <li>
          <Link to="/login"><i className="fas fa-sign-in-alt"></i> LOGIN</Link>
        </li>
        <li>
          <Link to="/"><i className="fas fa-globe"></i>MY REGION: GLOBAL</Link>
        </li>
        <li>
          <Link to="/"><i className="fas fa-user-lock"></i>MY ACCOUNT</Link>
        </li>
        <li>
          <Link to="/"><i className="fas fa-shopping-basket"></i>MY BASKET <span style={{ color: "orange" }}>(0)</span></Link>
        </li>
      </ul>
    </nav>
  );
}

export default Links;
