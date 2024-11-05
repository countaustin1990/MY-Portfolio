import { Routes, Route, useLocation } from 'react-router-dom';
import ScrollToTopButton from './components/tothetop/ScrollToTopButton';
import CosNavbar from './components/Navbar/CosNavbar';
import Home from './pages/Home';
import About from './pages/About';
import Footer from './components/Footer/Footer.test';
//import ContactUs from './pages/ContactUs.test';
import WebDev from './pages/WebDev';
import MobDev from './pages/MobDev';
import Consultant from './pages/Consultant';
import ContactUs from './pages/ContactUs';

const App = () => {
  const location = useLocation(); // Hook to get the current path

  // Check if the current path is '/consultant'
  const isConsultantPage = location.pathname === '/consultant';

  return (
    <div>
      <ScrollToTopButton />
      
      {/* Conditionally render the Navbar and Footer */}
      {!isConsultantPage && <CosNavbar />}
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
         <Route path="/contactus" element={<ContactUs />} />
        <Route path="/webdev" element={<WebDev />} />
        <Route path="/mobdev" element={<MobDev />} />
        <Route path="/consultant" element={<Consultant />} />
      </Routes>
      
      {!isConsultantPage && <Footer />}
    </div>
  );
};

export default App;
