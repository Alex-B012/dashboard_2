import { team } from '../../../../../data/data';
import { CurrentProjectsInterface } from '../../../../../types/interfaces';
import './projectCard.css'
import ProjectCardHeader from './ProjectCardHeader/ProjectCardHeader';
import ProjectFooter from './ProjectFooter/ProjectFooter';
import ProjectProgress from './ProjectProgress/ProjectProgress';

interface ProjectCardProp {
   project: CurrentProjectsInterface;
}

function ProjectCard({ project }: ProjectCardProp) {
   const teamMemberSet = new Set(project.teamMember);
   const teamMembers = team.filter((person) =>
      teamMemberSet.has(person.id)
   );

   return (
      <div className="card projectCard__section project-1">

         <ProjectCardHeader project={{
            name: project.name,
            category: project.category,
            weeks: project.weeks,
            priority: project.priority,
         }} />

         <ProjectProgress progress={project.completion} category={project.category} />
         <ProjectFooter team={teamMembers} days={project.daysLeft} />
      </div>
   )
}

export default ProjectCard