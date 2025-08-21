import { useLocation } from 'react-router-dom';
import NavItem from '../NavItem/NavItem';
import './sidebarLinks.css'
import { sidebarNavLinks, team } from '../../../data/data';
import TeamItem from '../TeamItem/TeamItem';

interface SidebarLinksProp {
   data: string;
}

function SidebarLinks({ data }: SidebarLinksProp) {
   const location = useLocation();
   const path = location.pathname;

   return (
      <div className="sidebarMainMenu__container">
         <div className="sidebarLinks__title">{data}</div>
         <div className="sidebarLinks__links">
            {data === "Main Menu" && (
               sidebarNavLinks.map(item => (
                  <NavItem data={item} active={item.link === path ? true : false} key={item.id} />
               ))
            )}

            {data === "Team Members" && (
               team.map(item => (
                  <TeamItem member={item} key={item.id} />
               ))
            )}
         </div>
      </div>
   )
}

export default SidebarLinks