import React from 'react';

const Sightings = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <div className="max-w-6xl w-full bg-white shadow-lg rounded-lg overflow-hidden flex flex-col md:flex-row">
        <img
          src="https://media.istockphoto.com/id/1072588378/photo/impala-rams-fighting.jpg?s=612x612&w=0&k=20&c=7ucrAFwqQMozxhWBd3ZL7T3QWYTy_ryhGCNW7ye2YDA="
          alt="Wildlife Interaction"
          className="w-full md:w-1/2 h-64 md:h-auto object-cover"
        />
        <div className="p-6 md:p-10">
          <h1 className="text-3xl font-semibold text-green-700 mb-4">
            Understanding and Interacting with Wildlife
          </h1>
          <p className="text-gray-700 mb-4">
            Wild animals often behave differently from domesticated animals, and understanding their behavior is crucial for safe interactions. Villagers should observe animals from a safe distance and avoid making sudden movements or loud noises that might startle them. Many animals, especially during mating or feeding seasons, can be more aggressive or protective. Learning about the habits and natural instincts of local wildlife helps individuals anticipate their needs and reactions, fostering a respectful coexistence.
          </p>
          <p className="text-gray-700 mb-4">
            Encroaching on wildlife habitats can disrupt their routines and lead to conflict. Villagers should avoid cutting down trees, draining water sources, or interfering with nesting areas. Instead, they can create buffer zones by planting native vegetation around settlements, which provides food and shelter for animals without bringing them too close to human homes. This approach reduces the risk of wildlife venturing into villages and helps maintain ecological balance.
          </p>
          <p className="text-gray-700 mb-4">
            If villagers encounter an injured or stranded animal, they should act carefully and compassionately. The first step is to assess the animal from a distance to determine the severity of its condition. If safe, basic first aid like cleaning minor wounds or stabilizing the animal can be provided, but professional help should always be sought. Contacting local wildlife organizations or reporting the case through a designated website ensures that trained personnel can assist the animal appropriately.
          </p>
          <p className="text-gray-700 mb-4">
            Preventing conflicts between humans and wildlife involves a mix of education and practical measures. Villagers can secure their crops and livestock using wildlife-friendly barriers, such as trenches, thorn fences, or reflective materials that deter animals without harming them. Additionally, storing food securely and disposing of waste properly can prevent wildlife from being attracted to human settlements. Organizing community awareness programs can help everyone understand the importance of non-violent conflict resolution.
          </p>
          <p className="text-gray-700 mb-4">
            Villagers play a vital role in wildlife conservation by adopting sustainable practices that protect the environment. Avoiding the use of harmful chemicals, practicing reforestation, and conserving water sources benefit both humans and animals. Supporting community-based eco-tourism projects can also provide financial incentives while preserving wildlife habitats. Villagers who take pride in their role as stewards of the environment inspire others to do the same.
          </p>
          <p className="text-gray-700 mb-4">
            Encouraging villagers to report unusual wildlife sightings is critical for monitoring animal populations and preventing potential threats. Reports can include details about the type of animal, its location, and any concerning behavior. This information helps wildlife organizations track migration patterns, breeding areas, and health concerns, ensuring that the ecosystem remains healthy and balanced.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Sightings;
