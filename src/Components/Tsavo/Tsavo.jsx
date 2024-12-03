import React from "react";
import "./Tsavo.css"; // Import the CSS file for styling

const Tsavo = () => {
  const wildlifeData = [
    {
      img: "https://img.freepik.com/free-photo/closeup-shot-two-zebras-cuddling_181624-5940.jpg?ga=GA1.1.639500709.1727981040&semt=ais_hybrid",
      title: "Lake Yahud",
      description: "A serene depiction of Lake Yahud surrounded by nature.",
    },
    {
      img: "https://media.istockphoto.com/id/1758173843/photo/a-fast-running-cheetah-taking-a-turn-to-the-left-from-the-front.jpg?s=612x612&w=0&k=20&c=KZbaAy1djko95TsGqjY2RXf_IbdGSE3Tuv1_NYcM7ws=",
      title: "Melanism in Servals",
      description: "A striking look at melanistic servals, showcasing their unique beauty.",
    },
    {
      img: "https://media.istockphoto.com/id/1726264350/photo/long-eared-owl-wildlife-bird-watching-from-a-pine-tree-branch-in-a-mystery-wood.jpg?s=612x612&w=0&k=20&c=zb5FRIhGdfnTbp_TtcvOCGz2cS2DOf9yqKoB04z9Qzs=",
      title: "A Life Without Water",
      description: "A touching moment between a cheetah and its cub in the wild.",
    },
    {
      img: "https://img.freepik.com/free-photo/closeup-shot-two-zebras-cuddling_181624-5940.jpg?ga=GA1.1.639500709.1727981040&semt=ais_hybrid",
      title: "Lake Yahud",
      description: "A serene depiction of Lake Yahud surrounded by nature.",
    },
    {
      img: "https://media.istockphoto.com/id/1758173843/photo/a-fast-running-cheetah-taking-a-turn-to-the-left-from-the-front.jpg?s=612x612&w=0&k=20&c=KZbaAy1djko95TsGqjY2RXf_IbdGSE3Tuv1_NYcM7ws=",
      title: "Melanism in Servals",
      description: "A striking look at melanistic servals, showcasing their unique beauty.",
    },
    {
      img: "https://media.istockphoto.com/id/1726264350/photo/long-eared-owl-wildlife-bird-watching-from-a-pine-tree-branch-in-a-mystery-wood.jpg?s=612x612&w=0&k=20&c=zb5FRIhGdfnTbp_TtcvOCGz2cS2DOf9yqKoB04z9Qzs=",
      title: "A Life Without Water",
      description: "A touching moment between a cheetah and its cub in the wild.",
    },
    {
      img: "https://img.freepik.com/free-photo/closeup-shot-two-zebras-cuddling_181624-5940.jpg?ga=GA1.1.639500709.1727981040&semt=ais_hybrid",
      title: "Lake Yahud",
      description: "A serene depiction of Lake Yahud surrounded by nature.",
    },
    {
      img: "https://media.istockphoto.com/id/1758173843/photo/a-fast-running-cheetah-taking-a-turn-to-the-left-from-the-front.jpg?s=612x612&w=0&k=20&c=KZbaAy1djko95TsGqjY2RXf_IbdGSE3Tuv1_NYcM7ws=",
      title: "Melanism in Servals",
      description: "A striking look at melanistic servals, showcasing their unique beauty.",
    },
    {
      img: "https://media.istockphoto.com/id/1726264350/photo/long-eared-owl-wildlife-bird-watching-from-a-pine-tree-branch-in-a-mystery-wood.jpg?s=612x612&w=0&k=20&c=zb5FRIhGdfnTbp_TtcvOCGz2cS2DOf9yqKoB04z9Qzs=",
      title: "A Life Without Water",
      description: "A touching moment between a cheetah and its cub in the wild.",
    },
  ];

  return (
    <div className="wildlife-gallery">
      {wildlifeData.map((item, index) => (
        <div key={index} className="wildlife-card">
          <img src={item.img} alt={item.title} />
          <div className="wildlife-content">
            <h3>{item.title}</h3>
            <p>{item.description}</p>
            <button className="read-more">Read More</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Tsavo;
