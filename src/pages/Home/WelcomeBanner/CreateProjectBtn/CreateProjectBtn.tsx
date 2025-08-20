import './createProjectBtn.css';
import { icons } from '../../../../data/data';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function CreateProjectBtn() {
   return (
      <button className="welcomeBanner__btn welcomeBanner__btn-light">
         <FontAwesomeIcon icon={icons.plus} className="welcomeBanner__icon" />
         Create New Project
      </button>
   )
}

export default CreateProjectBtn