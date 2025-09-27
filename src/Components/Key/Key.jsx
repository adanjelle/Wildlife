import React from "react";

const cards = [
  {
    img: "https://media.istockphoto.com/id/168252293/photo/safari-car-is-waiting-for-crossing-elephants.jpg?s=612x612&w=0&k=20&c=XgXFWCizGZQ6swKafSqvHf1Mq5NQGYqfQA7kYsYkVgI=",
    text: "Majestic Elephants by the Sunset",
  },
  {
    img: "https://media.istockphoto.com/id/1419410282/photo/silent-forest-in-spring-with-beautiful-bright-sun-rays.jpg?s=612x612&w=0&k=20&c=UHeb1pGOw6ozr6utsenXHhV19vW6oiPIxDqhKCS2Llk=",
    text: "Mystical Forest View",
  },
  {
    img: "https://media.istockphoto.com/id/2210689673/photo/tanzania-ngorongoro-crater-antelope.jpg?s=612x612&w=0&k=20&c=0kIXJXo41H1VK4nzWz6s2gLQwr6qAzlh_K7yyYR95WA=",
    text: "Bongo Antelopes in the Wild",
  },
  {
    img: "https://media.istockphoto.com/id/1471847063/video/giraffes-walking-in-a-row-below-dramatic-sunrise-sky-on-nature-reserve.avif?s=640x640&k=20&c=NhjPlITImjGNuBM3RVPjW2XLeWG-Rk4DnzX-I6bChIM=",
    text: "Graceful Deer in the Field",
  },
  {
    img: "https://media.istockphoto.com/id/2191542907/photo/zebras-at-dusk-in-masai-mara.jpg?s=612x612&w=0&k=20&c=wWS1ZNcVcYLios1Th7BR9s_1l9AkZYj5WyT5ql6CfFE=",
    text: "Zebras Showing Affection",
  },
  {
    img: "https://media.istockphoto.com/id/1532553144/photo/two-male-lions-at-sunset.jpg?s=612x612&w=0&k=20&c=OMpxZttxOUaH8GzutxIJBcA7qjr1PgRZddeipQzY8GQ=",
    text: "The King of the Jungle – Resting Lion",
  },
];


const Key = () => {
  return (
    <div className="min-h-screen bg-gray-100 py-12 px-6">
      <h1 className="text-4xl font-extrabold text-center text-gray-800 mb-12">
        Wildlife Wonders
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {cards.map((card, index) => (
          <div
            key={index}
            className="relative group rounded-2xl overflow-hidden shadow-xl transform transition-all duration-500 hover:scale-105 hover:shadow-2xl"
          >
            <img
              src={card.img}
              alt={card.text}
              className="w-full h-72 object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-70 group-hover:opacity-90 transition-opacity"></div>
            <div className="absolute bottom-6 left-6 right-6 text-white">
              <h2 className="text-2xl font-bold">{card.text}</h2>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Key;
