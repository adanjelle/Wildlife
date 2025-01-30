// ContactPage.jsx
import React, { useState, useEffect } from 'react';
import './Contactpage.css'; 
import ContactForm from '../ContactForm/ContactForm';

const images = [
  'https://media.istockphoto.com/id/681748468/photo/blackbucks-indian-antelopes-lay-down-on-ground.jpg?s=612x612&w=0&k=20&c=voxouGnDOudMark02zNJzgaHnrMqBd1y1-ABvaGbcfw=',
  'https://media.istockphoto.com/id/1180404355/photo/impalas-in-etosha-national-park.jpg?s=612x612&w=0&k=20&c=IFzQukDyQ0YtxHMe1-F2ohTzHXGgsU0kfct5FETKxuA=',
  'https://media.istockphoto.com/id/175207814/photo/dikdik.jpg?b=1&s=612x612&w=0&k=20&c=dLIiQHwYOlEAXXhzbTDJ8AqtQYizIBMwV-VRBIiFo2I=',
  'https://images.pexels.com/photos/3250752/pexels-photo-3250752.jpeg?auto=compress&cs=tinysrgb&w=800',
  'https://media.istockphoto.com/id/1442546832/photo/caracal-on-the-open-plain-passing-by-a-herd-of-springboks-etosha-national-park-namibia.jpg?s=612x612&w=0&k=20&c=squioGMQAy06qEcKEJLgaPA_YK_2VOC9rXotT5U21y0=',
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
      <div style={{fontStyle:"italic"}} className="contact-content">Contact Us</div>
    </div>
    <ContactForm/>
    </>
  );
};

export default ContactPage;
