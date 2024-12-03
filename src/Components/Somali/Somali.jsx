import React from "react";
import "./Somali.css"; // Import the CSS file for styling

const Somali = () => {
  return (
    <div className="info-card">
      <div className="image-info">
        <img
          src="https://www.sheldrickwildlifetrust.org/assets/representations/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBbERiIiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--50a16ae45a4e341fb9eae9993f55f485bd035a01/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaDdCem9LYzJGMlpYSjdDam9LYzNSeWFYQlVPaEZ1YjE5emRXSnpZVzF3YkdWVU9nNXBiblJsY214aFkyVlVPaFJ2Y0hScGJXbDZaVjlqYjJScGJtZFVPZ3h4ZFdGc2FYUjVhVVk2RTNKbGMybDZaVjkwYjE5bWFXeHNXd2RwQW13SGFRSWdBdz09IiwiZXhwIjpudWxsLCJwdXIiOiJ2YXJpYXRpb24ifX0=--154957a2f0d526d0b6123e1275208f69430628f2/img_8598.jpeg"
          alt="Somali Watha"
        />
      </div>
      <div className="info-container">
        <h2>28 March 2020</h2>
        <h3>The Somali</h3>
        <p>
          These days the Watha are a mysterious people, able to blend almost
          seamlessly with surrounding communities.
        </p>
        <button className="learn-more">Learn More</button>
      </div>
    </div>
  );
};

export default Somali;
