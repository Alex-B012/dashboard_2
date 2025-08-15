import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './sidebarLogo.css'
import { icons } from '../../../data/data'

function SidebarLogo() {
   return (
      <div className="sidebar__logo">
         <i className="sidebar__logoIcon fas fa-code">
            <FontAwesomeIcon icon={icons.code} />
         </i>
         <h2 className="sidebar__logoTitle">Dashboard</h2>
      </div>
   )
}

export default SidebarLogo