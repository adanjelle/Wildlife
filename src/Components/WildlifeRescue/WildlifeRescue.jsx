import React from 'react';

const WildlifeRescue = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <div className="max-w-6xl w-full bg-white shadow-lg rounded-lg overflow-hidden flex flex-col md:flex-row">
        <img
          src=""
          alt="NAEE Cover"
          className="w-full md:w-1/2 h-64 md:h-auto object-cover"
        />
        <div className="p-6 md:p-10">
          <h1 className="text-3xl font-semibold text-green-700 mb-4">Adan Jelle Loge's Wildlife Rescue Hub: Promoting Coexistence and Awareness</h1>
          <p className="text-gray-700 mb-4">
            As a young software engineer and founder of the new Wildlife Rescue Hub, I, Adan Jelle Loge, am inspired by the principles shared in the Journal of the National Association of Environmental Education. The hub aims to be a beacon of hope and education, guiding individuals on how to live in harmony with wildlife, such as giraffes, elephants, and other magnificent creatures.
          </p>
          <p className="text-gray-700 mb-4">
            By integrating the insights championed by environmental education experts, the Wildlife Rescue Hub will provide accessible resources for communities. These resources will help individuals learn how to coexist with wildlife while ensuring the safety of both humans and animals. Our platform will feature guides, videos, and interactive tools that highlight practical measures for peaceful coexistence, such as:
          </p>
          <ul className="list-disc list-inside text-gray-700 mb-4">
            <li>Securing safe spaces for wildlife to roam without encroaching on human settlements.</li>
            <li>Understanding animal behavior, like the social dynamics of giraffes and their migration patterns.</li>
            <li>Creating awareness campaigns to reduce human-wildlife conflicts and foster compassion for endangered species.</li>
          </ul>
          <p className="text-gray-700 mb-4">
            This hub’s approach aligns with the JNAEE's emphasis on education as a transformative tool. Through collaborative efforts with conservationists, educators, and local communities, the Wildlife Rescue Hub strives to empower people to become proactive stewards of the environment.
          </p>
          <p className="text-gray-700 mb-4">
            In the words of the journal, “education is the cornerstone of a sustainable future.” The Wildlife Rescue Hub embraces this vision, providing a digital space where conservation meets education and technology. With every step, we hope to create a world where wildlife and humanity thrive together.
          </p>
        </div>
      </div>
    </div>
  );
};

export default WildlifeRescue;
