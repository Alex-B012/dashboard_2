import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './layouts/Header/Header';
import Sidebar from './layouts/Sidebar/Sidebar';
import Home from './pages/Home/Home';
import NotFound from './pages/NotFound/NotFound';
import Footer from './layouts/Footer/Footer';

import { userProfile } from './data/data';

function App() {
  return (
    <div className="App">
      <div className='mobile__overlay' id="mobileOverlay"></div>
      <Header data={userProfile} />
      <Sidebar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
