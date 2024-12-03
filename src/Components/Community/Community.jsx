import React from 'react';
import './community.css'; // Ensure to create this CSS file
import Carousel from '../Carousel/Carousel';
import Nairobi from '../Nairobi/Nairobi';
function Community() {

  return (
    <>
    <div className="team-container">
      <img
        className="team-image"
        src='https://www.sheldrickwildlifetrust.org/assets/representations/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBbERiIiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--50a16ae45a4e341fb9eae9993f55f485bd035a01/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaDdCem9LYzJGMlpYSjdDam9LYzNSeWFYQlVPaEZ1YjE5emRXSnpZVzF3YkdWVU9nNXBiblJsY214aFkyVlVPaFJ2Y0hScGJXbDZaVjlqYjJScGJtZFVPZ3h4ZFdGc2FYUjVhVVk2RTNKbGMybDZaVjkwYjE5bWFXeHNXd2RwQW13SGFRSWdBdz09IiwiZXhwIjpudWxsLCJwdXIiOiJ2YXJpYXRpb24ifX0=--154957a2f0d526d0b6123e1275208f69430628f2/img_8598.jpeg'
        alt="About Us"
      />
      <div className="centered-text">Community Outreach</div>
    </div>
      <div>
      <p className='Dp'>
      Improving the livelihoods and education standards of Kenyans through local support initiatives and employment opportunities


      </p>
      <img className='imgg' src='https://cdn-icons-gif.flaticon.com/7740/7740491.gif'/>
      <p className='work'>
      We work to change attitudes towards wildlife, one child at a time, through our engaging Community Outreach Programmes.
      We are dedicated to educating and informing the younger generation as to the positive impacts native 
      wildlife can bring to their country. We work tirelessly to improve the livelihoods and educational 
      standards of people living along the borders of Kenya’s National Parks and protected areas, 
      through the introduction of community initiatives and local employment opportunities.
      </p>
      </div>
      <div className='achieve'>
        <p>
        The Community Outreach Wildlife Hub is dedicated to fostering harmony between communities and 
        wildlife through education, empowerment, and sustainable practices. We believe that conservation begins
         with people, which is why we work closely with local communities to provide educational programs, innovative
          solutions to human-wildlife conflict, and opportunities for sustainable livelihoods. By organizing wildlife field trips,
           hosting awareness campaigns, and offering scholarships to underprivileged students,
         we aim to inspire future generations to value and protect their natural heritage.
         
        </p>
      </div>
      <Carousel/>
      <div className='centered'>
      <p className='twinkle-text'>Poverty remains the single greatest reason why Kenya's future generation are not experiencing and
           learning more about wildlife. As of 2024, an estimated 63% of Kenya's 57 million people live below 
           the international poverty line, with poor education, poor health and high unemployment
           all combine to create a cycle of poverty.</p>
      </div>
      <div className='centered'>
      <p className='der'>We believe children have a right to be informed about their country’s diverse wildlife 
        and how valuable it is to the land and to the country itself. In Kenya’s School Curriculum, wildlife and environmental
         topics play only a very minimal role. For those communities bordering a National Park, it is vital that they be better educated as to 
         the nature of wildlife and the value of the countries priceless natural resources, so that all parts can exist in harmony. With continued funding,
          we are inspiring young people to stand up to protect their wildlife and to become ambassadors 
        for some of the world’s most endangered species.</p>
      </div>
      <Nairobi/>
    </>
  );
}
export default Community;
