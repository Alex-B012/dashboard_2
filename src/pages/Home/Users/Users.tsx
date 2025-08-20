import SectionTitle from '../../../components/SectionTitle/SectionTitle'
import { team } from '../../../data/data'
import UserCard from './UserCard/UserCard'
import './users.css'

function Users() {
   return (
      <section className="users__section">
         <SectionTitle title={"Team Members"} btn={{ text: "View All" }} />
         <div className="users__grid">
            {team.map((person) => <UserCard person={person} key={person.id} />)}
         </div>
      </section>
   )
}

export default Users