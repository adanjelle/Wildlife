import React from "react";
import "./Somali.css"; 
import { useNavigate } from 'react-router-dom';

const Somali = () => {
  const navigate = useNavigate(); 

  const handleLearnMore = () => {
    navigate('/somali/wildlifeRescueH');  // Correct the path
  };

  return (
    <div className="info-card">
      <div className="image-info">
        <img
          src="https://www.kws.go.ke/sites/default/files/2024-10/DSC_0736.jpg"
          alt="Somali Watha"
        />
      </div>
      <div className="info-container">
        <h2>24, Oct 2024</h2>
        <h3>Kenya Wildlife Service</h3>
        <p>
        The Kenya Wildlife Service (KWS) October 24, 2024 held its 14th Carnivore Conference at its headquarters, gathering a diverse assembly of stakeholders committed to the conservation of Kenya’s iconic carnivores. The two-day conference, themed “Carnivore Conservation in Changing Landscapes,” aims to address the pressing challenges faced by these species in the context of rapidly evolving environmental conditions
        </p>
        <button className="learn-more" onClick={handleLearnMore}>
          Learn More
        </button>
      </div>
    </div>
  );
};

export default Somali;
