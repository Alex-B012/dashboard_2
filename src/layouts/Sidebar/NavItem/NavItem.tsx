import { Link } from 'react-router-dom'
import './navItem.css'
import { SidebarNavLinksInterface } from '../../../types/interfaces';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

interface NavItemProp {
   data: SidebarNavLinksInterface,
   active: boolean;
}

function NavItem({ data, active }: NavItemProp) {
   let activeClass = "";
   if (active) activeClass = "active"

   return (
      <Link to={data.link} className={`nav__item ${activeClass}`}>
         <i className="nav__icon">
            <FontAwesomeIcon icon={data.icon} />
         </i>
         <span>{data.name}</span>
      </Link>
   )
}

export default NavItem