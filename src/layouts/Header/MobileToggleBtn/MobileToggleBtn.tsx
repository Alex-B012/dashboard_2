import './mobileToggleBtn.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { icons } from '../../../data/data'

function MobileToggleBtn() {
   return (
      <button className="mobile__toggle" id="menuToggle">
         <i className="mobile__icon">
            <FontAwesomeIcon icon={icons.bars} />
         </i>
      </button>
   )
}

export default MobileToggleBtn