import React, { useState, useEffect } from 'react';
import './Home.css';
import Hero from '../Hero/Hero';
import Key from '../Key/Key';
import Change from '../Change/Change';
import ConservationCard from '../ConservationCard/ConservationCard';
import Mission from '../Mission/Mission';
import Youtube from '../Youtube/Youtube';
function Home() {
  const images = [
    "https://www.sheldrickwildlifetrust.org/assets/representations/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBK2RYQVE9PSIsImV4cCI6bnVsbCwicHVyIjoiYmxvYl9pZCJ9fQ==--711a4a73f46dbe128923aff4d4f2e0e5845c2919/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaDdCem9LYzJGMlpYSjdDam9LYzNSeWFYQlVPaEZ1YjE5emRXSnpZVzF3YkdWVU9nNXBiblJsY214aFkyVlVPaFJ2Y0hScGJXbDZaVjlqYjJScGJtZFVPZ3h4ZFdGc2FYUjVhVlU2RkhKbGMybDZaVjkwYjE5c2FXMXBkRnNIYVFKc0Iya0NzQVE9IiwiZXhwIjpudWxsLCJwdXIiOiJ2YXJpYXRpb24ifX0=--a3beae31998acce4034ea21699f81133350de539/1-join-our-herd_1.jpg",
    "https://www.sheldrickwildlifetrust.org/assets/representations/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBK2hYQVE9PSIsImV4cCI6bnVsbCwicHVyIjoiYmxvYl9pZCJ9fQ==--e25da6a247e7f2569d24b570676a61f30f83ce28/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaDdCem9LYzJGMlpYSjdDam9LYzNSeWFYQlVPaEZ1YjE5emRXSnpZVzF3YkdWVU9nNXBiblJsY214aFkyVlVPaFJ2Y0hScGJXbDZaVjlqYjJScGJtZFVPZ3h4ZFdGc2FYUjVhVlU2RkhKbGMybDZaVjkwYjE5c2FXMXBkRnNIYVFKc0Iya0NzQVE9IiwiZXhwIjpudWxsLCJwdXIiOiJ2YXJpYXRpb24ifX0=--a3beae31998acce4034ea21699f81133350de539/miacollisjuly18-20.jpg",
    "https://www.sheldrickwildlifetrust.org/assets/representations/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBK2xYQVE9PSIsImV4cCI6bnVsbCwicHVyIjoiYmxvYl9pZCJ9fQ==--554001f864acb5cb0fa73ea448f5ce621d0c3a9d/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaDdCem9LYzJGMlpYSjdDam9LYzNSeWFYQlVPaEZ1YjE5emRXSnpZVzF3YkdWVU9nNXBiblJsY214aFkyVlVPaFJ2Y0hScGJXbDZaVjlqYjJScGJtZFVPZ3h4ZFdGc2FYUjVhVlU2RkhKbGMybDZaVjkwYjE5c2FXMXBkRnNIYVFKc0Iya0NzQVE9IiwiZXhwIjpudWxsLCJwdXIiOiJ2YXJpYXRpb24ifX0=--a3beae31998acce4034ea21699f81133350de539/3-fostering-future-generations_1.jpg",
    "https://www.sheldrickwildlifetrust.org/assets/representations/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBK3BYQVE9PSIsImV4cCI6bnVsbCwicHVyIjoiYmxvYl9pZCJ9fQ==--03ab8a78221b9b2c690b91039d29db99f67f3d12/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaDdCem9LYzJGMlpYSjdDam9LYzNSeWFYQlVPaEZ1YjE5emRXSnpZVzF3YkdWVU9nNXBiblJsY214aFkyVlVPaFJ2Y0hScGJXbDZaVjlqYjJScGJtZFVPZ3h4ZFdGc2FYUjVhVlU2RkhKbGMybDZaVjkwYjE5c2FXMXBkRnNIYVFKc0Iya0NzQVE9IiwiZXhwIjpudWxsLCJwdXIiOiJ2YXJpYXRpb24ifX0=--a3beae31998acce4034ea21699f81133350de539/4-saving-wild-lives.jpg",
    "https://www.sheldrickwildlifetrust.org/assets/representations/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBK3RYQVE9PSIsImV4cCI6bnVsbCwicHVyIjoiYmxvYl9pZCJ9fQ==--2255f9df6db27292bc314f3db70959c1d0a0cf8b/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaDdCem9LYzJGMlpYSjdDam9LYzNSeWFYQlVPaEZ1YjE5emRXSnpZVzF3YkdWVU9nNXBiblJsY214aFkyVlVPaFJ2Y0hScGJXbDZaVjlqYjJScGJtZFVPZ3h4ZFdGc2FYUjVhVlU2RkhKbGMybDZaVjkwYjE5c2FXMXBkRnNIYVFKc0Iya0NzQVE9IiwiZXhwIjpudWxsLCJwdXIiOiJ2YXJpYXRpb24ifX0=--a3beae31998acce4034ea21699f81133350de539/5-protecting-kenyas-wildlife_1.jpg"
  ];

  const quotes = [
    "Join Our Herd",
    "Rescuing orphaned wildlife",
    "Fostering Future Generations",
    "Saving Wild lives",
    "Protecting Kenyan's Habitats",
    "Supporting Co-existing"
  ];

  const excc = [
    "Support an Orphan's Journey back to the wild",
    "We provide Kenyan's orphaned wildlife and other creatures with care",
    "By saving one orphan, we give life to generations of elephants",
    "Field veterinary treatments give ill and injured animals the second chance they deserve",
    "Our anti-poaching, aerial, and habitat preservation projects secure vulnerable ecosystems across Kenya",
    "Successful conservation and community engagement go hand-in-hand"
  ];

  const buttonTexts = [
    "Adopt",
    "Orphan's project",
    "Wild-born babies",
    "Help Protect",
    "Preserve Nature"
  ];

  const buttonText = [
    "News",
    "Adopt",
    "Donate",
    "Help Protect",
    "Preserve Nature"
  ];

  const [currentImage, setCurrentImage] = useState(0);
  const [currentButton, setCurrentButton] = useState(0);
  const [currentButtons, setCurrentButtons] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prevImage) => (prevImage + 1) % images.length);
      setCurrentButton((prevButton) => (prevButton + 1) % buttonTexts.length);
      setCurrentButtons((prevButton) => (prevButton + 1) % buttonText.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [images.length, buttonTexts.length, buttonText.length]);

  return (
    <>
    <div
      className="home-container"
      style={{ backgroundImage: `url(${images[currentImage]}) `}}
    >
      <div className="overlay">
        <h1>{quotes[currentImage]}</h1>
        <p className="excc">{excc[currentImage]}</p>
        <button className="loop-button">{buttonTexts[currentButton]}</button>
        <button className="loop-buttons">{buttonText[currentButtons]}</button>
      </div>
    </div>
    <Key/>
   <Hero/>
   <Change/>
   <ConservationCard/>
   <Mission/>
   <Youtube/>
    </>
     
  );
}

export default Home;