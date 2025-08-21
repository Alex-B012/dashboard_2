import { useEffect, useState } from 'react'
import SectionTitle from '../../../components/SectionTitle/SectionTitle'
import { team } from '../../../data/data'
import TasksBar from './TaskBar/TaskBar'
import './timeline.css'
import TimeLineGrid from './TimeLineGrid/TimeLineGrid'
import TimeLineMarkers from './TimeLineMarkers/TimeLineMarkers'
import UsersColumn from './UsersColumn/UsersColumn'

function Timeline() {
   const [width, setWidth] = useState(window.innerWidth)

   useEffect(() => {
      const updateScreenSize = () => {
         setWidth(window.innerWidth);
      };
      const intervalId = setInterval(updateScreenSize, 200);
      return () => {
         clearInterval(intervalId);
      };
   }, []);

   return (
      <section className="card timeline__section">
         <SectionTitle title={"Task Distribution Time"} btn={{ text: "View Full Timeline" }} />
         <div className="timeline__container">
            <UsersColumn users={team} />
            <div className="timeline__area">
               <TimeLineGrid width={width} />
               <TimeLineMarkers width={width} />
               <TasksBar />
            </div>
         </div>
      </section >
   )
}

export default Timeline