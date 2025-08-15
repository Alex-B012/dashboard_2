import './sidebar.css'

function Sidebar() {
   return (
      <aside className="sidebar__section" id="sidebar">
         <div className="sidebar__logo">
            <i className="sidebar__icon fas fa-code"></i>
            <h2 className="sidebar__title">Dashboard</h2>
         </div>
         <div className="nav__title">Main Menu</div>
         <div className="nav__links"></div>
      </aside>
   )
}

export default Sidebar