import React from 'react';
import adesh from '../../Components/image/adesh.jpg';
const Critical = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <div className="max-w-6xl w-full bg-white shadow-lg rounded-lg overflow-hidden flex flex-col md:flex-row">
        <img
          src="https://media.istockphoto.com/id/92506928/photo/giraffe.jpg?s=1024x1024&w=is&k=20&c=7XonGhMyHhdkq2IYgDwTBt9dvv5i5c8ugkjMfspvPNM="
          alt="NAEE Cover"
          className="w-full md:w-1/2 h-64 md:h-auto object-cover"
        />
        <div className="p-6 md:p-10">
          <h1 className="text-3xl font-semibold text-green-700 mb-4">"Steps for Responding to Injured or Distressed Wildlife"</h1>
          <div>
  <h2 className="text-lg font-bold text-gray-900 mb-4">Immediate Action: Providing First Aid</h2>
  <p className="text-gray-700 mb-4">
    In cases where a person or village encounters an injured, stranded, or critically ill animal, immediate and coordinated action is essential to ensure the animal’s survival and well-being. The first step is to provide basic first aid to stabilize the animal. This may include cleaning wounds, stopping bleeding, or ensuring the animal is kept warm and safe from further harm. It is important to approach the animal cautiously to avoid causing additional stress or injury.
  </p>

  <h2 className="text-lg font-bold text-gray-900 mb-4">Reporting the Situation</h2>
  <p className="text-gray-700 mb-4">
    Once initial care has been given, the next step is to report the situation promptly through an official website or designated communication platform. The report should include detailed information, such as the animal’s condition, species (if identifiable), location, and any first aid administered. Clear photographs or videos can also help professionals assess the situation.
  </p>

  <h2 className="text-lg font-bold text-gray-900 mb-4">Avoiding Further Harm</h2>
  <p className="text-gray-700 mb-4">
    After submitting the report, responders should refrain from moving the animal unless instructed by experts, as improper handling can worsen its condition. Meanwhile, local authorities or wildlife rescue organizations will review the report and dispatch trained personnel to the site for further medical attention, rehabilitation, or relocation, as required.
  </p>

  <h2 className="text-lg font-bold text-gray-900 mb-4">Community Assistance and Awareness</h2>
  <p className="text-gray-700 mb-4">
    Community members should be encouraged to stay nearby to assist rescuers with locating the animal if necessary. Public awareness and education campaigns about this protocol can empower individuals and villages to act responsibly and compassionately in these situations, ensuring the best possible outcomes for wildlife in distress.
  </p>
</div>

        </div>
      </div>
    </div>
  );
};

export default Critical;
