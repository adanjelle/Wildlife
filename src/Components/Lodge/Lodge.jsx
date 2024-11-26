import React from 'react'
import './Lodge.css'
function Lodge() {
  return (
    <>
    <section className="lodge-section">
      <img 
        className="lodge-image" 
        src="https://img.freepik.com/free-photo/luxury-thai-massage-pavilion_1150-11075.jpg?uid=R154277615&ga=GA1.1.639500709.1727981040&semt=ais_hybrid" 
        alt="Man petting sheep"
      />
      <div className="lodge-card">
        <h2 className='lodgeh2'>Stay in our Hub Lodges</h2>
        <hr />
        <p>
        Nestled in the most stunning corners of Kenya, SWT Eco Lodges support our conservation projects while offering a bespoke safari experience for the discerning traveller.

Thoughtfully designed and sustainably managed, each of the unique properties comes with exclusive access to visit the orphaned elephants at one of our nearby Reintegration Units.
         </p>
      </div>

    </section>
    <div class="adesh1">
  <h2>Discover the <span>Magic of Kenya</span></h2>
  <p>Explore a land of extraordinary beauty and unparalleled hospitality. The magic of Kenya draws you in with every visit. If you are looking for a place to start, we have highlighted a few of the many exceptional National Parks and Reserves across the country.</p>
  <p className='p1'>Click on the map markers below to start your journey</p>
</div>
    </>
  )
}

export default Lodge