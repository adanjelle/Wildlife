import React from 'react'
import './Challenge.css'
function Challenge() {
  return (
    <section className="challenge-section">
      <img 
        className="challenge-image" 
        src="https://img.freepik.com/free-photo/selective-focus-view-lion-laying-ground-distance_181624-6241.jpg?uid=R154277615&ga=GA1.1.639500709.1727981040&semt=ais_siglip" 
        alt="Man petting sheep"
      />
      <div className="challenge-card">
        <h2>Wildlife Challenges</h2>
        <hr />
        <p>
          Our conservation partners play a vital role in protecting Africa’s threatened wildlife and conserving habitats, while our corporate friends support us in a plethora of ways, from percentage of sales contributions to skills sharing, all with the intention of giving back to wildlife.
        </p>
      </div>
    </section>
  )
}

export default Challenge