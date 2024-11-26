import React from 'react'
  import './VisitingG.css'
import Unit from '../Unit/Unit'
import Lodge from '../Lodge/Lodge'
import Map from '../Map/Map'
function VisitingG() {
  return (
    <>
    <div className="visit-container">
    <div className="visit-overlay">
      <img
        className="visit-image"
        src="https://t3.ftcdn.net/jpg/03/15/38/00/240_F_315380009_t96ITJGHbkIe4A2XV9HCoygjVpvoBjtu.jpg"
        alt="About Us"
      />
      <div className="centered-text1">Visiting Garissa</div>
    </div>
  </div>
  <div className="containerV">
  <p className='DpV'>
Wildlife Rescue Hub, a sanctuary that stands as a testament to the visionary efforts of Engineer Adan Jelle Loge. Nestled in the heart of Garissa, this remarkable haven is dedicated to the protection and rehabilitation of Kenya's vulnerable wildlife.  </p>
</div>
<div class="nairobi-visit-section">
  <img
    class="nairobi-visit-image"
    src="https://t3.ftcdn.net/jpg/02/87/48/40/240_F_287484002_BdWL2YBeFtUO7taPDm0fxtuC46mG3h94.jpg"
    alt="Nairobi Nursery"
  />
  <div class="nairobi-visit-text">
    <h2>Visit our Garissa Nursery</h2>
    <hr/>
    <p>
      Every day, from 11am - 12 noon, we invite visitors to book a space to join the orphaned elephants at their midday mud bath and milk feed at our orphanage in Nairobi National Park. Access for this special visit is by advance booking only.
    </p>
    <p>
      Please visit our dedicated Nairobi Nursery Visiting Page for all the information you need to arrange a visit to the orphanage.
    </p>
  </div>
</div>

<Unit/>
<Lodge/>
<Map/>
  </>
  )
}

export default VisitingG