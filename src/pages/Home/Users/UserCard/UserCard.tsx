import { TeamMember } from '../../../../types/interfaces'
import './userCard.css'

interface UserCardProp {
   person: TeamMember;
}

function UserCard({ person }: UserCardProp) {
   return (
      <div className="card userCard__container">
         <div className="userCard__avatar">
            <img
               src={person.img}
               alt={person.name}
               className="userCard__img"
            />
         </div>
         <div className="userCard__info">
            <h3 className="userCard__name">{person.name}</h3>
            <p className="userCard__position">{person.position}</p>
         </div>
      </div>
   )
}

export default UserCard