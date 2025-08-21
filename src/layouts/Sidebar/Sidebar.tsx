import './sidebar.css'
import SidebarLogo from './SidebarLogo/SidebarLogo';
import SidebarLinks from './SidebarLinks/SidebarLinks';
import { useContext } from 'react';
import { OpenMenuContext } from '../../entities/toggleMenuContext';

function Sidebar() {
   const { isOpen } = useContext(OpenMenuContext);
   const sidebarActive = isOpen ? 'sidebar__section-active' : '';
   return (
      <aside className={`sidebar__section ${sidebarActive}`} id="sidebar">
         <SidebarLogo />
         <SidebarLinks data={"Main Menu"} />
         <SidebarLinks data={"Team Members"} />
      </aside>
   )
}

export default Sidebar