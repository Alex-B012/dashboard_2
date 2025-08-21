import { useContext } from 'react';
import './mobileToggleBtn.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { icons } from '../../../data/data'
import { OpenMenuContext } from '../../../entities/toggleMenuContext';

function MobileToggleBtn() {
   const { isOpen, setIsOpen } = useContext(OpenMenuContext);
   return (
      <button
         className="mobile__toggle"
         id="menuToggle"
         onClick={() => {
            console.log("menuToggle - before click", isOpen);
            setIsOpen(!isOpen);
            console.log("menuToggle - after click", isOpen);
         }}
      >
         <i className="mobile__icon">
            {isOpen ? <FontAwesomeIcon icon={icons.close} /> : <FontAwesomeIcon icon={icons.bars} />}
         </i>
      </button>
   )
}

export default MobileToggleBtn