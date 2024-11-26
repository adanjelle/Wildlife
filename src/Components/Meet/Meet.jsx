import React from 'react';
import './Meet.css';
 // Importing a leaf icon from react-icons

function Meet() {
  return (
    <>
    <div className="section-meet">
    </div>
    <section class="section-meet1">
  <img class="src" src="https://img.freepik.com/free-photo/3d-rendering-business-meeting-working-room-office-building_105762-1972.jpg?uid=R154277615&ga=GA1.1.639500709.1727981040&semt=ais_siglip"/>
  <div class="card1">
    <p>
      <h2 style={{padding:"20px", fontSize:"2rem",color:"#323232" }}>Our Global Offices</h2>
      <hr />
      The Wildlife Rescue Hub is based in Garissa, Kenya, with a field headquarters strategically positioned to support conservation efforts. The Wildlife Rescue Hub is an independently registered charity, directly supported by various international partners dedicated to wildlife conservation and protection.
    </p>
  </div>
</section>
    </>
  );
}

export default Meet;
