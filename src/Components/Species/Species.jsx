import React from 'react';
import { Link } from 'react-router-dom';
import './Species.css';

function Species() {
  return (
    <section className="visiting-section">
      <img 
        className="visiting-image" 
        src="https://img.freepik.com/premium-photo/ubud-indonesia-august-18-2016-tourist-interact-with-macaque-sacred-monkey-sanctuary_850000-46458.jpg?uid=R154277615&ga=GA1.1.639500709.1727981040&semt=ais_siglip" 
        alt="Tourist interacting with macaque"
      />
      <div className="visiting-card">
        <h2>Species we protect</h2>
        <hr />
        <p>
          Welcome to our Wildlife Rescue Hub, a haven dedicated to the rehabilitation and care of orphaned and injured animals. Here, visitors can experience the unique opportunity to connect with these remarkable animals up close, learning about their journeys and the efforts to protect and nurture them back to health.
        </p>
        <Link to="/more" className="view-more-button">View More</Link>
      </div>
    </section>
  );
}

export default Species;
