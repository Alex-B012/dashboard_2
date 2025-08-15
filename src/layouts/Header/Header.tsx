import "./header.css";
import HeaderNotification from "./HeaderNotification/HeaderNotification";
import SearchBar from "./SearchBar/searchBar";

import { UserProfileInterface } from "../../types/interfaces";
import MobileToggleBtn from "./MobileToggleBtn/MobileToggleBtn";
import ThemeToggle from "./ThemeToggle/ThemeToggle";

interface HeaderProp {
   data: UserProfileInterface,
}

function Header({ data }: HeaderProp) {
   return (
      <header className="header__section">
         <div className=".header__left">
            <MobileToggleBtn />
            <SearchBar />
         </div>
         <div className="header__right">
            <ThemeToggle />
            <HeaderNotification
               messages_num={data.messages}
               img_url={data.img.url}
               img_alt={data.img.alt} />
         </div>
      </header>
   )
}

export default Header