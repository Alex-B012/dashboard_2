import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { TeamMember } from '../../../../../../types/interfaces'
import './projectFooter.css'
import ProjectFooterImg from './ProjectFooterImg/ProjectFooterImg'
import { icons } from '../../../../../../data/data'

interface ProjectFooterProp {
   team: TeamMember[],
   days: number
}

function ProjectFooter({ team, days }: ProjectFooterProp) {
   return (
      <div className="projectFooter__section">
         <div className="projectFooter__teamAvatars">
            {team.map((person) => <ProjectFooterImg person={person} key={person.id} />
            )}
         </div>
         <div className="projectFooter__daysLeft">
            <FontAwesomeIcon icon={icons.calendar} className="projectFooter__icon" />
            {days} days left
         </div>
      </div >
   )
}

export default ProjectFooter