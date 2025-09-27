// import React from "react";
// import { Outlet } from "react-router-dom";
// import Navbar from "./Components/Navbar/Navbar";
// import Footer from "./Components/Footer/Footer";
// import Links from "./Components/Link/Link";

// const PublicLayout = ({ onRegionClick }) => {
//   return (
//     <div>
//       <Links onRegionClick={onRegionClick} />
//       <Navbar />
//       <Outlet />
//       <Footer />
//     </div>
//   );
// };

// export default PublicLayout;



import { Outlet } from "react-router-dom";
import Links from "../Link/Links";       // 👈 corrected path + filename
import Navbar from "../Navbar/Navbar";  // 👈 corrected path
import Footer from "../Footer/Footer";  // 👈 corrected path

const PublicLayout = ({ onRegionClick }) => {
  return (
    <div>
      <Links onRegionClick={onRegionClick} />
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default PublicLayout;
