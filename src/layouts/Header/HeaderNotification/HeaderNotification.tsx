import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { icons } from "../../../data/data";
import './headerNotification.css'

interface HeaderNotificationProp {
   messages_num: number,
   img_url: string,
   img_alt: string,
}

function HeaderNotification({ messages_num, img_url, img_alt }: HeaderNotificationProp) {
   return (
      <div className="notification__container">
         <i className="notification__icon fas fa-bell">
            <FontAwesomeIcon icon={icons.bell} />
         </i>
         {messages_num > 0 && (
            <span className="notification__badge">{messages_num}</span>
         )}
         <div className="userProfile__container">
            <img
               className="userProfile__img"
               src={img_url}
               alt={img_alt}
            />
         </div>
      </div>
   )
}

export default HeaderNotification