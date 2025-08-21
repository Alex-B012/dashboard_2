import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './themeToggle.css'
import { icons } from '../../../data/data'
import { useContext, useEffect } from 'react';
import { OpenMenuContext } from '../../../entities/toggleMenuContext';

function ThemeToggle() {
   const { theme, setTheme } = useContext(OpenMenuContext);
   const toggleTheme = () => {
      const newTheme = theme === 'dark' ? 'light' : 'dark';
      setTheme(newTheme);

      document.body.classList.toggle('dark-mode');
      localStorage.setItem('theme', newTheme);
   };

   useEffect(() => {
      const savedTheme = localStorage.getItem("theme");
      if (savedTheme === "dark") {
         document.body.classList.add("dark-mode");
         setTheme(savedTheme);
      }
   }, [setTheme])

   return (
      <button className="theme__toggle"
         id="themeToggle"
         onClick={toggleTheme}
      >
         <i className="theme__icon">
            {theme === 'light' ? <FontAwesomeIcon icon={icons.moon} /> : <FontAwesomeIcon icon={icons.sun} />}
         </i>
      </button>
   )
}

export default ThemeToggle