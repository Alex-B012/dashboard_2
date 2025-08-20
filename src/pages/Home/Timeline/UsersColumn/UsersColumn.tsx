
import { TeamMember } from '../../../../types/interfaces'
import UserRow from './UserRow/UserRow'
import './usersColumn.css'

interface UsersColumnProp {
   users: TeamMember[],
}

function UsersColumn({ users }: UsersColumnProp) {
   return (
      <div className="usersColumn__container">
         {users.map((person) => <UserRow personName={person.name} key={person.id} />)}
      </div>
   )
}

export default UsersColumn