import { Link } from 'react-router-dom'
import './navItem.css'
import { SidebarNavLinksInterface } from '../../../types/interfaces';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useContext } from 'react';
import { OpenMenuContext } from '../../../entities/toggleMenuContext';

interface NavItemProp {
   data: SidebarNavLinksInterface,
   active: boolean;
}

function NavItem({ data, active }: NavItemProp) {
   const { isOpen, setIsOpen } = useContext(OpenMenuContext);
   let activeClass = "";
   if (active) activeClass = "nav__item-active"

   return (
      <Link to={data.link} className={`nav__item ${activeClass}`} onClick={() => setIsOpen(!isOpen)}>
         <i className="nav__icon">
            <FontAwesomeIcon icon={data.icon} />
         </i>
         <span className='nav__itemName'>{data.name}</span>
      </Link>
   )
}

export default NavItem