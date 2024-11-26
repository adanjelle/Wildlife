import React from 'react'
import './Partner.css'
function Partner() {
  return (
    
    <section className="partners-section">
      <img 
        className="partners-image" 
        src="https://img.freepik.com/free-photo/full-shot-man-petting-sheep_23-2149744282.jpg?uid=R154277615&ga=GA1.1.639500709.1727981040&semt=ais_siglip" 
        alt="Man petting sheep"
      />
      <div className="partners-card">
        <h2>Our Partners</h2>
        <hr />
        <p>
          Our conservation partners play a vital role in protecting Africa’s threatened wildlife and conserving habitats, while our corporate friends support us in a plethora of ways, from percentage of sales contributions to skills sharing, all with the intention of giving back to wildlife.
        </p>
      </div>
    </section>
  )
}

export default Partner