import { TeamMember } from '../../../types/interfaces';
import './teamItem.css'

interface TeamItemProp {
   member: TeamMember;
}

function TeamItem({ member }: TeamItemProp) {
   return (
      <div className="team__member">
         <img
            src={member.img}
            alt={member.name}
            className="member__avatar"
         />
         <span>{member.name}</span>
      </div>
   )
}

export default TeamItem