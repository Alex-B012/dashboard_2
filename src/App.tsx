import { Route, Routes } from 'react-router-dom';
import './App.css';
import MobileOverlay from './components/MobileOverlay/MobileOverlay';
import Header from './layouts/Header/Header';
import Sidebar from './layouts/Sidebar/Sidebar';
import Home from './pages/Home/Home';
import NotFound from './pages/NotFound/NotFound';
import Footer from './layouts/Footer/Footer';

import { userProfile } from './data/data';
import { useState } from 'react';
import { ToggleMenuProvider } from './entities/toggleMenuContext';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(isMenuOpen);
  };


  return (
    <div className="App">
      <ToggleMenuProvider>
        <MobileOverlay isOpen={isMenuOpen} />
        <Header data={userProfile} />
        <Sidebar isOpen={isMenuOpen} />
      </ToggleMenuProvider>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
