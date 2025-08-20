import SectionTitle from '../../../components/SectionTitle/SectionTitle'
import { userStats } from '../../../data/data'
import StatCard from './StatCard/StatCard'
import './stats.css'

function Stats() {
   return (
      <section className="stats__section">
         <SectionTitle title={"Project Statistics"} />
         <div className="stats__grid">
            {Object.entries(userStats).map(([key, value]) => (
               <StatCard data={value} name={key} key={key} />
            ))}
         </div>
      </section>
   )
}

export default Stats