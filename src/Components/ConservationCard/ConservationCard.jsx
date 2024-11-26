import React from 'react';
import './ConservationCard.css';

function ConservationCard() {
  const conservationData = [
    {
      title: 'Conservation Successes Amid Economic Challenges',
      description: 'Kenya has been in the news as thousands demonstrate against corruption. The government retaliation has been swift and brutal.',
      image: 'https://wildlifedirect.org/wp-content/uploads/2024/07/Screenshot-2024-07-12-at-10.53.10-300x214.png'
    },
    {
      title: 'Local Conservation Filmmaking in Africa',
      description: 'Local conservation filmmaking in Africa is breaking new ground, offering authentic narratives and reshaping perceptions.',
      image: 'https://wildlifedirect.org/wp-content/uploads/2024/07/Screenshot-2024-07-12-at-13.05.55-300x214.png'
    },
    {
      title: 'Kenya Faces Catastrophic Floods',
      description: 'Kenya is facing catastrophic floods that have resulted in over 200 deaths, leaving families homeless and causing property loss.',
      image: 'https://wildlifedirect.org/wp-content/uploads/2024/07/Screenshot-2024-07-12-at-12.45.34-300x214.png'
    },
    {
      title: 'Protecting Kenya’s Amboseli Tuskers',
      description: 'Kenya\'s unique giant tusked elephants are being killed by licensed hunters in Tanzania for trophies.',
      image: 'https://wildlifedirect.org/wp-content/uploads/2024/04/Screenshot-2024-04-09-at-19.18.29-300x214.png'
    },
  ];

  const featuredNews = {
    title: '-Featured News-'
    
  };

  return (
    <div className="conservation-container">
      <div className="featured-news">
        <h2 className="featured-news-title">{featuredNews.title}</h2>
      </div>
      {conservationData.map((item, index) => (
        <div className="conservation-card" key={index}>
          <img src={item.image} alt={item.title} className="conservation-image" />
          <div className="conservation-content">
            <h3 className="conservation-title">{item.title}</h3>
            <p className="conservation-description">{item.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default ConservationCard;
