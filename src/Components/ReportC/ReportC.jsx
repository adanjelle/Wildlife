// ContactPage.jsx
import React, { useState, useEffect } from 'react';
import './Report.css'; 
import ReportForm from '../ReportT/ReportT';

const images = [
  'https://img.freepik.com/premium-photo/common-impala-carcase-lies-dirt-track_1048944-22298838.jpg?uid=R154277615&ga=GA1.1.639500709.1727981040&semt=ais_hybrid',
  'https://img.freepik.com/premium-photo/view-animal-field_1048944-22649459.jpg?uid=R154277615&ga=GA1.1.639500709.1727981040&semt=ais_hybrid',
  'https://img.freepik.com/premium-photo/side-view-turtle-field_1048944-8344470.jpg?uid=R154277615&ga=GA1.1.639500709.1727981040&semt=ais_hybrid',
  
  'https://img.freepik.com/premium-photo/high-angle-view-dead-moose-grassy-field_1048944-22114085.jpg?uid=R154277615&ga=GA1.1.639500709.1727981040&semt=ais_hybrid',
];

const ReportC = () => {
  const [currentImage, setCurrentImage] = useState(images[0]);

  useEffect(() => {
    const changeImage = () => {
      setCurrentImage(prevImage => {
        const currentIndex = images.indexOf(prevImage);
        const nextIndex = (currentIndex + 1) % images.length;
        return images[nextIndex];
      });
    };

    const intervalId = setInterval(changeImage, 3000); // Change image every 5 seconds for testing. Change to desired minutes.

    return () => clearInterval(intervalId); // Cleanup interval on component unmount
  }, []);

  return (
    <>
    <div className="contact-page" style={{ backgroundImage: `url(${currentImage})` }}>
      <div className="contact-content">Report Cases</div>
    </div>
 <ReportForm/>
    </>
  );
};

export default ReportC;
