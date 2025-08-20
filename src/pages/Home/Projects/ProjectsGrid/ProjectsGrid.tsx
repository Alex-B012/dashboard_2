import { CurrentProjectsInterface } from '../../../../types/interfaces'
import ProjectCard from './ProjectCard/ProjectCard';
import './projectsGrid.css'

interface ProjectsGridProp {
   projects: CurrentProjectsInterface[];
}

function ProjectsGrid({ projects }: ProjectsGridProp) {
   return (
      <div className="projects__grid">
         {projects.map((item) => <ProjectCard project={item} key={item.id} />)}
      </div>
   )
}

export default ProjectsGrid