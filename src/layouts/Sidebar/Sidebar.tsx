import './sidebar.css'

import SidebarLogo from './SidebarLogo/SidebarLogo';
import SidebarLinks from './SidebarLinks/SidebarLinks';

function Sidebar() {
   return (
      <aside className="sidebar__section" id="sidebar">
         <SidebarLogo />
         <SidebarLinks data={"Main Menu"} />
         <SidebarLinks data={"Team Members"} />
      </aside>
   )
}

export default Sidebar