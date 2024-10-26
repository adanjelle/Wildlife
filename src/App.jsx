import Links from './Components/Link/Link'; // 'assests' should be 'assets'
import '@fortawesome/fontawesome-free/css/all.min.css';
import Navbar from './Components/Navbar/Navbar'; // 'Component' should be 'Components'
import Home from './Components/Home/Home'; // 'Component' should be 'Components'
// import Footer from '../../assets/Component/Footer/Footer'; // 'Foooter' should be 'Footer'
// import Login from '../../assets/Component/Login/Login'; // 'Component' should be 'Components'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; 
import Footer from './Components/Footer/Footer';




function App() {
  return (
    <>
      <Router>
        <Links />
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} /> 
   
        </Routes>
      </Router>

      <Footer/> 
    </>
  );
}

export default App;
