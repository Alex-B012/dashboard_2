import "./header.css";

function Header() {
   return (
      <header className="header__section">
         <div className=".header__left">
            <button className="mobile__toggle" id="menuToggle">
               <i className="mobile__icon fas fa-bars"></i>
            </button>
            <div className="searchBar__container">
               <i className="searchBar__icon fas fa-search"></i>
               <input className="searchBar__input" type="text" placeholder="Search..." />
            </div>
         </div>
         <div className="header__right">
            <button className="theme__toggle" id="themeToggle">
               <i className="theme__icon fas fa-moon"></i>
            </button>
            <div className="notification__container">
               <i className="notification__icon fas fa-bell"></i>
               <span className="notification__badge">3</span>
               <div className="userProfile__container">
                  <img
                     className="userProfile__img"
                     src="assets/images/person_10.webp"
                     alt="User profile"
                  />
               </div>
            </div>
         </div>
      </header>
   )
}

export default Header