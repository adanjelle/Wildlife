import React from 'react';
import './MissionH.css'; // Ensure to create this CSS file
import DateFounded from '../DateFounded/DateFounded';
function MissionH() {

  return (
    <>
    <div className="team-container">
      <img
        className="team-image"
        src='https://as1.ftcdn.net/v2/jpg/07/49/87/10/1000_F_749871017_85s16Q2SGwoLN8xDdoBTvMioBauYYjuC.jpg'
        alt="About Us"
      />
      <div className="centered-text">Mission & History</div>
    </div>
      <DateFounded/>
    </>
  );
}
export default MissionH;
