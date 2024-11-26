import React from 'react';
import './More.css'; 
import Asection from '../Asection/Asection';

function More() {
  const text = "About Us";
  const coloredText = text.split("").map((char, index) => (
    <span key={index} className={`color-${index}`}>{char}</span>
  ));
  return (
    <>
      <div className="team-container">
        <img
          className="team-image"
          src='https://img.freepik.com/free-photo/indian-gazell-male-beautiful-place-indiawild-animal-nature-habitat_475641-1513.jpg?uid=R154277615&ga=GA1.1.639500709.1727981040&semt=ais_hybrid'
          alt="About Us"
        />
        <div className="centered-text">{coloredText}</div>
      </div>
      <Asection />
    </>
  );
}

export default More;
