import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './themeToggle.css'
import { icons } from '../../../data/data'

function ThemeToggle() {
   return (
      <button className="theme__toggle" id="themeToggle">
         <i className="theme__icon">
            <FontAwesomeIcon icon={icons.moon} />
         </i>
      </button>
   )
}

export default ThemeToggle