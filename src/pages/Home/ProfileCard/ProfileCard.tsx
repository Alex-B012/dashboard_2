import { UserProfileInterface } from '../../../types/interfaces'
import './profileCard.css'
import ProfileInfo from './ProfileInfo/ProfileInfo';
import ProfileStats from './ProfileStats/ProfileStats';

interface ProfileCardProp {
   user: UserProfileInterface;
}

function ProfileCard({ user }: ProfileCardProp) {
   return (
      <div className="profileCard__section card">
         <img
            src={user.img.url}
            className="profileCard__image"
            alt={user.img.alt}
         />
         <ProfileInfo f_name={user.f_name} l_name={user.l_name} position={user.position} progress={user.completion_rate} />
         <ProfileStats projects={user.projects} tasks={user.tasks} success={user.success} />
      </div>
   )
}

export default ProfileCard