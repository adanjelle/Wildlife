import React, { useState } from "react";
import "./Carousel.css";

const images = [
  "https://www.sheldrickwildlifetrust.org/assets/representations/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBbFc4IiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--09c45ac526b6874cd85490e4b34e1a3dbc77f8cd/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaDdCem9LYzJGMlpYSjdDam9LYzNSeWFYQlVPaEZ1YjE5emRXSnpZVzF3YkdWVU9nNXBiblJsY214aFkyVlVPaFJ2Y0hScGJXbDZaVjlqYjJScGJtZFVPZ3h4ZFdGc2FYUjVhVVk2RkhKbGMybDZaVjkwYjE5c2FXMXBkRnNIYVFKZUJHa0NqQUk9IiwiZXhwIjpudWxsLCJwdXIiOiJ2YXJpYXRpb24ifX0=--cff14d28a26d4c91daefe4108d0a3f2190ff378c/community-field-trip-mzima",
  "https://www.sheldrickwildlifetrust.org/assets/representations/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBbFM4IiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--017f0564f168b650e9e87655d4bbcd66ed0d5b87/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaDdCem9LYzJGMlpYSjdDam9LYzNSeWFYQlVPaEZ1YjE5emRXSnpZVzF3YkdWVU9nNXBiblJsY214aFkyVlVPaFJ2Y0hScGJXbDZaVjlqYjJScGJtZFVPZ3h4ZFdGc2FYUjVhVVk2RkhKbGMybDZaVjkwYjE5c2FXMXBkRnNIYVFKZUJHa0NqQUk9IiwiZXhwIjpudWxsLCJwdXIiOiJ2YXJpYXRpb24ifX0=--cff14d28a26d4c91daefe4108d0a3f2190ff378c/community-field-trips",
  "https://img.freepik.com/premium-photo/four-african-women-different-ages-together-laugh-make-funny-faces_404612-1226.jpg?ga=GA1.1.639500709.1727981040&semt=ais_hybrid",
  "https://www.sheldrickwildlifetrust.org/assets/representations/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBakxFIiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--90fbd369515711c85a8f68d2a00157beb99a7d19/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaDdCem9LYzJGMlpYSjdDam9LYzNSeWFYQlVPaEZ1YjE5emRXSnpZVzF3YkdWVU9nNXBiblJsY214aFkyVlVPaFJ2Y0hScGJXbDZaVjlqYjJScGJtZFVPZ3h4ZFdGc2FYUjVhVVk2RkhKbGMybDZaVjkwYjE5c2FXMXBkRnNIYVFKZUJHa0NqQUk9IiwiZXhwIjpudWxsLCJwdXIiOiJ2YXJpYXRpb24ifX0=--cff14d28a26d4c91daefe4108d0a3f2190ff378c/community",
  "https://www.sheldrickwildlifetrust.org/assets/representations/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBdndpIiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--d87858321daa8fc0f7b6269d419e4043733f3279/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaDdCem9LYzJGMlpYSjdDam9LYzNSeWFYQlVPaEZ1YjE5emRXSnpZVzF3YkdWVU9nNXBiblJsY214aFkyVlVPaFJ2Y0hScGJXbDZaVjlqYjJScGJtZFVPZ3h4ZFdGc2FYUjVhVVk2RkhKbGMybDZaVjkwYjE5c2FXMXBkRnNIYVFKZUJHa0NqQUk9IiwiZXhwIjpudWxsLCJwdXIiOiJ2YXJpYXRpb24ifX0=--cff14d28a26d4c91daefe4108d0a3f2190ff378c/community.jpg",
  "https://img.freepik.com/free-photo/medium-shot-women-holding-each-other_23-2148959242.jpg?ga=GA1.1.639500709.1727981040&semt=ais_hybrid",
  "https://img.freepik.com/free-photo/portrait-sad-child_23-2150761626.jpg?ga=GA1.1.639500709.1727981040&semt=ais_hybrid",
  "https://img.freepik.com/free-photo/hopeless-refugee-refugee-camp_23-2151446296.jpg?ga=GA1.1.639500709.1727981040&semt=ais_hybrid",
  "https://img.freepik.com/free-photo/indigenous-person-doing-daily-chores-showcasing-lifestyle_23-2149711075.jpg?ga=GA1.1.639500709.1727981040&semt=ais_hybrid"
];

const CardCarousel = () => {
  const [startIndex, setStartIndex] = useState(0);
  const visibleCount = 4; // Number of cards visible at a time.

  const handleNext = () => {
    setStartIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const handlePrevious = () => {
    setStartIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  // Determine visible images
  const visibleImages = images.slice(startIndex, startIndex + visibleCount).concat(
    images.slice(0, Math.max(0, startIndex + visibleCount - images.length))
  );

  return (
    <div className="carousel-container">
      <button className="carousel-icon" onClick={handlePrevious}>
        &#8592; {/* Left Arrow */}
      </button>
      <div className="carousel-cards">
        {visibleImages.map((image, index) => (
          <div key={index} className="carousel-card">
            <img src={image} alt={`Card ${index}`} className="carousel-image" />
          </div>
        ))}
      </div>
      <button className="carousel-icon" onClick={handleNext}>
        &#8594; {/* Right Arrow */}
      </button>
    </div>
  );
};

export default CardCarousel;
