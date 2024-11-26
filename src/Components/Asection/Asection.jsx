import React from 'react';
import './section.css';
import { FaLeaf } from 'react-icons/fa';
import { GiLion } from 'react-icons/gi'; // Use the lion icon from 'react-icons/gi'
import Meet from '../Meet/Meet';
import Partner from '../Partner/Partner';
import Visiting from '../Visiting/Visiting';
import  Challenge from '../Challenge/Challenge'
import Species from '../Species/Species';
function Asection() {
  return (
    <>
      <div className="section-container">
        {/* <FaLeaf className="section-icon" /> */}
        <GiLion className="section-icon" style={{ color: 'goldenrod', fontSize: '4rem' }} />
        <p className="secio">
          The Wildlife Rescue Hub is a dedicated sanctuary committed to the conservation and protection of diverse wildlife species. It focuses on rescuing and rehabilitating animals in distress due to threats like habitat loss, climate change, and human-wildlife conflict. At the heart of its mission is a commitment to providing these animals with the care they need to recover and thrive.
        </p>
      </div>
      <section className="section-container1">
        <img className="src" src="https://img.freepik.com/premium-photo/squirrel-is-eating-piece-food-from-someones-hand_1068983-27539.jpg?uid=R154277615&ga=GA1.1.639500709.1727981040&semt=ais_hybrid" alt="Rescuing Squirrel" />
        <div className="card">
          <h2 style={{ padding: "20px" ,fontSize:"2rem" }}>Rescuing lives</h2>
          <hr />
          <p>
            The Wildlife Rescue Hub recently undertook a heartwarming rescue of a squirrel in distress. 
            Found injured and malnourished, the little creature was quickly transported to the hub.
            There, it received immediate medical attention and a nutritious meal.
            The dedicated team monitored its recovery round-the-clock.
            Slowly, the squirrel regained its strength and vitality.
            Its playful nature soon returned, delighting the caregivers.
          </p>
        </div>
      </section>
      <Meet />
      <Partner/>
      <Visiting/>
      <Challenge/>
      <Species/>
    </>
  );
}

export default Asection;
