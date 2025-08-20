import { Link } from 'react-router-dom'
import './viewAllBtn.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { icons } from '../../data/data';


interface ViewAllBtnProp {
   text: string;
   url?: string;
}

function ViewAllBtn({ text, url = "#" }: ViewAllBtnProp) {
   return (
      <Link to={url} className="viewAll__link">
         View All <FontAwesomeIcon icon={icons.arrowRight} className="viewAll__icon" />
      </Link>
   )
}

export default ViewAllBtn