import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { icons } from "../../../data/data";
import './searchBar.css'

function SearchBar() {
   return (
      <div className="searchBar__container">
         <i className="searchBar__icon">
            <FontAwesomeIcon icon={icons.search} />
         </i>
         <input className="searchBar__input" type="text" placeholder="Search..." />
      </div>
   )
}

export default SearchBar