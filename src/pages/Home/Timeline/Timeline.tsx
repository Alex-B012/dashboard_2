import SectionTitle from '../../../components/SectionTitle/SectionTitle'
import { team } from '../../../data/data'
import TasksBar from './TaskBar/TaskBar'
import './timeline.css'
import TimeLineGrid from './TimeLineGrid/TimeLineGrid'
import TimeLineMarkers from './TimeLineMarkers/TimeLineMarkers'
import UsersColumn from './UsersColumn/UsersColumn'

function Timeline() {
   return (
      <section className="card timeline__section">
         <SectionTitle title={"Task Distribution Time"} btn={{ text: "View Full Timeline" }} />
         <div className="timeline__container">
            <UsersColumn users={team} />
            <div className="timeline__area">
               <TimeLineGrid />
               <TimeLineMarkers />
               <TasksBar />
            </div>
         </div>
      </section >
   )
}

export default Timeline