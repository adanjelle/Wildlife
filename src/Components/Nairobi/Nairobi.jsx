import React from 'react';
import { Link } from 'react-router-dom';
import './Nairobi.css';

function Nairobi() {
  return (
    <section className="visiting-section">
      <img 
        className="visiting-image" 
        src="https://img.freepik.com/premium-photo/ubud-indonesia-august-18-2016-tourist-interact-with-macaque-sacred-monkey-sanctuary_850000-46458.jpg?uid=R154277615&ga=GA1.1.639500709.1727981040&semt=ais_siglip" 
        alt="Tourist interacting with macaque"
      />
      <div className="visiting-card">
        <h2>Wajir Orphanage Education Visits</h2>
        <hr />
        <p>
        We host visits for local school children at our Nairobi Elephant Orphanage to meet our elephant carers, who educate the children about the orphans and the threats to Kenya’s wild elephant populations.

On average, over 24,000 Kenyan school children visit our Nairobi Orphanage every year, attending the 11am to 12noon daily mud bath.
        </p>
 
      </div>
    </section>
  );
}

export default Nairobi;
