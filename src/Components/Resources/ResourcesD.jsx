import React from 'react'
import './Resources.css'
import WildlifeRescue from '../WildlifeRescue/WildlifeRescue'
function ResourcesD() {
  return (
    <>
    <div className="team-container">
      <img
        className="team-image"
        src='https://media.istockphoto.com/id/639904042/photo/great-wildebeest-migration-in-kenya-with-safari-vehicle.jpg?s=612x612&w=0&k=20&c=JLFraAWxkp1ZTBC5qE3pgkNqIguqfCDsDFeMiAY1FWA='
        alt="About Us"
      />
    
      <div className="centered-text">Educational Resources</div>
    </div>
    <div className='public'>
      Reports & Publications
      </div>
      <WildlifeRescue/>
</>
  )
}

export default ResourcesD