import { TeamMember } from '../../../../../../../types/interfaces'
import './projectFooterImg.css'

interface ProjectFooterImgProp {
   person: TeamMember,
}

function ProjectFooterImg({ person }: ProjectFooterImgProp) {
   return (
      <img
         src={person.img}
         alt={person.name}
         className="projectFooter__img"
      />
   )
}

export default ProjectFooterImg