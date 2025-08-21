import { useContext } from 'react';
import './mobileOverlay.css'
import { OpenMenuContext } from '../../entities/toggleMenuContext';

function MobileOverlay() {
   const { isOpen, setIsOpen } = useContext(OpenMenuContext);
   const mobileOverlay = isOpen ? 'mobile__overlay-active' : '';
   return (
      <div className={`mobile__overlay ${mobileOverlay}`} id="mobileOverlay" onClick={() => setIsOpen(!isOpen)}></div>
   )
}

export default MobileOverlay