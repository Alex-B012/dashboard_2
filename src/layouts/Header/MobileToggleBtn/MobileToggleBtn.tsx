import { useContext, useEffect } from 'react';
import './mobileToggleBtn.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { icons } from '../../../data/data'
import { OpenMenuContext } from '../../../entities/toggleMenuContext';

function MobileToggleBtn() {
   const { isOpen, setIsOpen } = useContext(OpenMenuContext);

   useEffect(() => {
      const checkScreenWidth = () => {
         if (window.innerWidth > 768 && isOpen) setIsOpen(false);
      };

      checkScreenWidth();
      const handleResize = () => { checkScreenWidth(); };
      window.addEventListener('resize', handleResize);

      return () => {
         window.removeEventListener('resize', handleResize);
      };
   }, [isOpen, setIsOpen]);

   return (
      <button
         className="mobile__toggle"
         id="menuToggle"
         onClick={() => { setIsOpen(!isOpen); }}
      >
         <i className="mobile__icon">
            {isOpen ? <FontAwesomeIcon icon={icons.close} /> : <FontAwesomeIcon icon={icons.bars} />}
         </i>
      </button>
   )
}

export default MobileToggleBtn