import { Route, Routes } from 'react-router-dom';
import './App.css';

import MobileOverlay from './components/MobileOverlay/MobileOverlay';
import Header from './layouts/Header/Header';
import Sidebar from './layouts/Sidebar/Sidebar';
import Home from './pages/Home/Home';
import NotFound from './pages/NotFound/NotFound';
import Footer from './layouts/Footer/Footer';

import { userProfile } from './data/data';
import { ToggleMenuProvider } from './entities/toggleMenuContext';
import TitleUpdater from './components/TitleUpdater/TitleUpdater';

function App() {
  return (
    <div className="App">
      <TitleUpdater />
      <ToggleMenuProvider>
        <MobileOverlay />
        <Header data={userProfile} />
        <Sidebar />
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
