import React from "react";
import "./Ambush.css"; // Import the CSS file for styling
import { useNavigate } from "react-router-dom";
const Ambush= () => {
  const navigate = useNavigate(); 

  const handleLearnMore = () => {
    navigate('/Ambush/Association');  // Correct the path
  };
  return (
    <div className="info-card">
      <div className="image-info">
        <img
          src="https://www.kws.go.ke/sites/default/files/styles/medium/public/2024-10/Oct%2025%20KWS%20DG%20Dr%20Erustus%20Kanga%20addresses%20conference%20delegates2.jpg?itok=YCw_tXdS"
          alt="Somali Watha"
        />
      </div>
      <div className="info-container">
        <h2> 25, Oct 2024</h2>
        <h3>The Kenya Wildlife Service (KWS) </h3>
        <p>
        The Kenya Wildlife Service (KWS) is enhancing partnerships with the Kenya Association of
         Tour Operators (KATO)
         to advance wildlife conservation and boost Kenya’s tourism industry
        </p>
        <button className="learn-more" onClick={handleLearnMore}>Learn More</button>
      </div>
    </div>
  );
};

export default Ambush;
