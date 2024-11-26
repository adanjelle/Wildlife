// ContactPage.jsx
import React, { useState, useEffect } from 'react';
import './Contactpage.css'; 
import ContactForm from '../ContactForm/ContactForm';

const images = [
  'https://img.freepik.com/free-photo/beautiful-giraffe-middle-jungle-kenya-nairobi-samburu_181624-7766.jpg?uid=R154277615&ga=GA1.1.639500709.1727981040&semt=ais_hybrid',
  'https://images.pexels.com/photos/797643/pexels-photo-797643.jpeg?auto=compress&cs=tinysrgb&w=800',
  'https://media.istockphoto.com/id/175207814/photo/dikdik.jpg?b=1&s=612x612&w=0&k=20&c=dLIiQHwYOlEAXXhzbTDJ8AqtQYizIBMwV-VRBIiFo2I=',
  'https://images.pexels.com/photos/3250752/pexels-photo-3250752.jpeg?auto=compress&cs=tinysrgb&w=800',
  'https://images.pexels.com/photos/1435496/pexels-photo-1435496.jpeg?auto=compress&cs=tinysrgb&w=800',
];

const ContactPage = () => {
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
      <div className="contact-content">Contact Us</div>
    </div>
    <ContactForm/>
    </>
  );
};

export default ContactPage;
