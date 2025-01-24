import React from "react";

const Association = () => {
  return (
    <div className="bg-gray-100 py-10 px-6">
      <div className="max-w-7xl mx-auto space-y-12">
        {/* Header Section with Image */}
        <div className="relative">
          <img
            src="https://www.kws.go.ke/sites/default/files/2024-10/Oct%2025%20KWS%20DG%20Dr%20Erustus%20Kanga%20addresses%20conference%20delegates2.jpg"
            alt="Dr. Erustus Kanga addressing delegates"
            className="w-full h-96 object-cover  "
          />
          <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center">
            <h1 className="text-4xl font-bold text-white text-center px-4">
              Strengthening Partnerships with Kenya Association of Tour Operators (KATO)
            </h1>
          </div>
        </div>

        {/* Content Section */}
        <article className="space-y-8">
          <header>
            <h2 className="text-3xl font-semibold text-gray-800">
              KWS Hosts KATO at the 46th Annual General Meeting
            </h2>
            <p className="text-sm text-gray-600 mt-2">
              <strong>Latest News:</strong> 25th October 2024
            </p>
          </header>

          <section className="space-y-4">
            <p className="text-gray-700 leading-relaxed">
              <strong>Nakuru, Kenya – 25th October 2024:</strong> The Kenya Wildlife Service (KWS) is working to enhance partnerships with the Kenya Association of Tour Operators (KATO) in an effort to strengthen wildlife conservation and boost tourism in Kenya. This comes as part of a collaborative initiative announced during the 46th KATO Annual General Meeting at Sarova Woodlands Hotel in Nakuru. Dr. Erustus Kanga, the Director General of KWS, emphasized the importance of such partnerships in promoting sustainable tourism while safeguarding Kenya's rich biodiversity.
            </p>
            <p className="text-gray-700 leading-relaxed">
              KATO, comprising over 300 members, plays a significant role in promoting Kenya’s tourism. Dr. Kanga highlighted that KATO contributes 80% of the tourism revenue for KWS, and together, both organizations aim to foster a sustainable tourism ecosystem. He encouraged KATO members to promote lesser-visited parks such as Meru, Mt. Elgon, and Kakamega, alongside popular destinations like Tsavo and Amboseli, to provide travelers with unique and immersive experiences.
            </p>
          </section>

          {/* Subsections */}
          <div className="space-y-6">
            <SubSection
              title="Service Improvements for Enhanced Visitor Experience"
              content="To address concerns raised at the AGM, KWS is introducing a range of service improvements, including Starlink internet access, new eCitizen payment options, and an e-wallet platform for tour operators. There are also plans to improve infrastructure, such as road networks within national parks, the creation of new tourism circuits, and enhanced visitor facilities including Wi-Fi hotspots."
            />
            <SubSection
              title="Adapting to Sustainable Tourism"
              content="Dr. Kanga stressed the importance of adapting to sustainable tourism practices by offering eco-friendly products. This includes night game drives, wildlife translocations, and e-biking, all designed to extend visitor stays and attract a broader market segment interested in environmentally conscious travel."
            />
            <SubSection
              title="Collaborating on Conservation Challenges"
              content="During the meeting, KWS encouraged KATO to join efforts in addressing conservation challenges, including climate change and human-wildlife conflict. The partnership is also focused on raising awareness about the effects of climate change on wildlife and promoting eco-friendly practices such as tree planting and plastic-free environments."
            />
          </div>
        </article>

        {/* Footer Section */}
        <footer className="text-sm text-gray-600">
          <p>
            <strong>Source:</strong> Kenya Wildlife Service (KWS)
          </p>
        </footer>
      </div>
    </div>
  );
};

// Reusable Subsection Component
const SubSection = ({ title, content }) => (
  <section>
    <h3 className="text-2xl font-semibold text-gray-800 mb-2">{title}</h3>
    <p className="text-gray-700 leading-relaxed">{content}</p>
  </section>
);

export default Association;
