import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Links from './Components/Link/Link';
import '@fortawesome/fontawesome-free/css/all.min.css';
import Navbar from './Components/Navbar/Navbar';
import Home from './Components/Home/Home';
import Footer from './Components/Footer/Footer';
import Team from './Components/Team/Team';
import More from './Components/More/More';
import MissionH from './Components/MissionH/MissionH';
import VisitingG from './Components/VisitingG/VisitingG';
import Contactpage from './Components/Contactpage/Contactpage'; 
import ReportC from './Components/ReportC/ReportC';
import AdminDashboard from './Components/Admin/dashbord';
import Login from './Components/Login/Login';
import Community from './Components/Community/Community';
import WildlifeJournal from './Components/WildlifeJ/WildlifeJournal';
import ResourcesD from './Components/Resources/ResourcesD';
import './App.css'; 


function App() {
  const [theme, setTheme] = useState('default');
  const handleRegionClick = () => {
    setTheme(theme === 'default' ? 'yellow' : 'default');
  };

  return (
    <div className={`app ${theme}`}>
            
      <Router>
        <Links onRegionClick={handleRegionClick} />
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about/team" element={<Team />} />
       
          <Route path="/about/missionh" element={<MissionH />} />
          <Route path="/more" element={<More />} /> {/* Ensure this route is defined */}
          <Route path="/visiting/visitingG" element={<VisitingG />} />
          <Route path="/contactpage" element={<Contactpage />} />
          <Route path="/login"   element= {<Login />}/>
          <Route path="/reports/reportC" element={<ReportC />} />
          <Route path="/projects/community" element={<Community />} />
          <Route path="/resources/resourcesD" element={<ResourcesD/>} />
          <Route path="/admin/dashboard" element={<AdminDashboard />} />
          <Route path="/news/wildlifejournal" element={<WildlifeJournal />} />
           {/* Add Admin Dashboard Route */}
        </Routes>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
