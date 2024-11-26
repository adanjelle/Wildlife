
import React from 'react';
import './Youtube.css';

function Youtube() {
  const featuredNews = {
    title: 'Watch Our Latest Video',
    description: "Kenya's wildlife migrations are vital ecological events involving species like wildebeest, zebras, elephants, and migratory birds. The Great Wildebeest Migration, one of the world's largest, sees millions of animals moving between Kenya's Maasai Mara and Tanzania's Serengeti in search of food and water. Elephants also migrate across East Africa, sustaining ecosystems by dispersing seeds and creating water sources. Kenya’s Rift Valley serves as a key stop for migratory birds traveling between Europe, Asia, and Africa, while zebra and antelope follow seasonal patterns to access grazing areas. These migrations maintain biodiversity, support tourism, and balance ecosystems but are increasingly threatened by habitat loss and climate change, necessitating conservation efforts.",
    videoUrl: 'https://www.youtube.com/embed/A45ysOBWvNc?si=6YFM9rnoF58hwvZ6'
  };

  return (
    <div className="featured-section">
      <div className="featured-text">
        <h2 style={{ padding:"20px", paddingTop:"10px",textDecoration:"underline", fontSize:"30px", color:"#c1121f"}}>{featuredNews.title}</h2>
        <p style={{lineHeight:"34px", color:"#747474"}}>{featuredNews.description}</p>
      </div>
      <div className="featured-video">
        <iframe style={{paddingTop:"50px"}}
          width="960px" 
          height="515px" 
          src={featuredNews.videoUrl} 
          title="YouTube video player" 
          frameborder="0" 
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
          referrerpolicy="strict-origin-when-cross-origin" 
          allowfullscreen>
        </iframe>
      </div>
    </div>
  );
}

export default Youtube;
